/**
 * Enum of required attribute types.
 */
export enum Required {
	number = "number",
	string = "string",
	boolean = "boolean",
}

/**
 * Class for optional attribute types.
 */
export function Optional<T extends string | number>(value: T): Optional<T> {
    return {
        value, 
        optional: true
    };
}

export interface Optional<T extends string | number> {
    value: T;
    optional: true;
}

/**
 * Symbol for listener attribute type.
 */
export const Listener = Symbol("Listener");

/**
 * The function to create a component.
 * @param init Initializer object. It takes the prop name as key and the prop type as value. Prop type can be {@link Required}, {@link Optional} or {@link Listener}.
 * @returns The component class you can extend.
 */
export function Component<P extends Record<string, Required | Optional<any> | typeof Listener>>(init: P) {
	const name = `fortis-${Date.now().toString(36)}` as const;

	/** Props marked as required */
	type RequiredProps = {
		[K in Exclude<keyof P, symbol> as P[K] extends Required ? K : never]:
		P[K] extends Required.boolean
		? boolean
		: P[K] extends Required.number
		? number
		: string;
	};

	/** Props marked as optional */
	type OptionalProps = {
		[K in Exclude<keyof P, symbol> as P[K] extends Optional<any> ? K : never]: P[K] extends Optional<infer T> ? T : never;
	};

	/** Props marked as listeners */
	type ListenerProps = {
		[K in Exclude<keyof P, symbol> as P[K] extends typeof Listener ? `on${K}` : never]: (event: CustomEvent) => void;
	};

	type Props = JSX.HTMLElementProps<OptionalProps & ListenerProps> & RequiredProps;
	type PropGetters = {
		[K in Exclude<keyof P, symbol> as P[K] extends typeof Listener ? `on${K}` : K]: P[K] extends Required
		? P[K] extends Required.boolean
		? boolean
		: P[K] extends Required.number
		? number
		: string
		: P[K] extends Optional<infer T>
		? T
		: P[K] extends typeof Listener
		? (detail?: any) => void
		: never;
	} & {
		readonly children: HTMLSlotElement;
	};

	abstract class Component extends HTMLElement {
		public static observedAttributes = Object.keys(init).filter(key => init[key] !== Listener);
		public static elementName = name;
		public static css = "";

		public constructor(_props: JSX.WithChildren<Props>) {
			super();
			for (const key in init) {
				const value = init[key];

				if (value === Listener) {
					Object.defineProperty(this.props, `on${key}`, {
						get: () => {
							return (detail?: any) => {
								this.dispatchEvent(new CustomEvent(key, {detail}));
							};
						},
					});
				} else if (value === Required.boolean) {
					Object.defineProperty(this.props, key, {
						get: () => {
							return this.hasAttribute(key);
						},
						set: (value: boolean) => {
							this.toggleAttribute(key, value);
						},
					});
				} else if (value === Required.string) {
					Object.defineProperty(this.props, key, {
						get: () => {
							return this.getAttribute(key);
						},
						set: (value: string) => {
							this.setAttribute(key, value);
						},
					});
				} else if (value === Required.number) {
					Object.defineProperty(this.props, key, {
						get: () => {
							return Number(this.getAttribute(key));
						},
						set: (value: number) => {
							this.setAttribute(key, String(value));
						},
					});
				} else if (typeof value === "object" && value.optional) {
					Object.defineProperty(this.props, key, {
						get: () => {
							const attr = this.getAttribute(key);
							if (attr === null) {
								return value.value;
							}
							if (typeof value.value === 'number') {
								return Number(attr);
							}
							return attr;
						},
						set: (value: string | number) => {
							if (typeof value === "number") {
								this.setAttribute(key, String(value));
							} else {
								this.setAttribute(key, value);
							}
						},
					});
				}
			}
			this.attachShadow({mode: 'open'});
		}

		public rerender() {
			this.shadowRoot!.innerHTML = '';

			if (this.constructor.css) {
				const style = document.createElement("style");
				style.textContent = this.constructor.css;
				this.shadowRoot!.appendChild(style);
			}

			this.shadowRoot!.append(this.render());
		}

		public abstract render(): Node | string;

		public attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
			if (oldValue !== newValue) {
				this.rerender();
			}
		}

		public connectedCallback() {
			this.rerender();
		}

		public readonly props = <PropGetters>{
			get children() {
				return document.createElement("slot");
			}
		};
	}

	interface Component {
		constructor: typeof Component;
		__props__: JSX.PropertiesFor<Omit<this, "__props__" | "props">> & JSX.WithChildren<Props>;
	}

	return Component;
}

export interface FunctionComponent<P = {}> {
	(props: JSX.WithChildren<P>): JSX.Element;
}

export const Fragment = "fortis-fragment";