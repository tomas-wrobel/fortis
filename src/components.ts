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

	type Props = JSX.ElementProps<OptionalProps & ListenerProps> & RequiredProps;

	abstract class Component extends HTMLElement implements JSX.Component {
		public static observedAttributes = Object.keys(init).filter(key => init[key] !== Listener);
		public static elementName = name;
		public static css = "";

		public constructor(_props: JSX.WithChildren<Props>) {
			super();
			this.props = new Proxy<any>({}, { // Set-up proxy for props
				get: (_target, key: string) => {
					if (key === "children") {
						return document.createElement("slot");
					}
					if (key.startsWith("on")) {
						const event = key.slice(2);
						return (detail?: any) => {
							this.dispatchEvent(new CustomEvent(event, {detail}));
						};
					}
					const value = init[key];
					if (value === Listener) {
						throw new TypeError("Cannot get value of listener.");
					}
					const attr = this.getAttribute(key as string);
					if (value === Required.number) {
						return Number(attr);
					}
					if (value === Required.boolean) {
						return !!attr;
					}
					if (value === Required.string) {
						return attr!;
					}
					if ("value" in value && value.optional) {
						if (!attr) {
							return value.value;
						}
						if (typeof value.value === 'number') {
							return Number(attr);
						}
					}

					return attr;
				},
				has: (_target, key: string) => {
					if (key === "children") {
						return true;
					}
                    if (key.startsWith("on")) {
						return key.slice(2) in init;
					}
					return this.hasAttribute(key as string);
				},
				set: (_target, key: string, value: any) => {
					if (key === "children") {
						throw new TypeError("Cannot set children.");
					}
					if (key.startsWith("on")) {
						throw new TypeError("Cannot set event listener.");
					}
					if (typeof value === "boolean") {
						this.toggleAttribute(key, value);
					} else {
						this.setAttribute(key, String(value));
					}
					return true;
				},
			});
			this.attachShadow({mode: 'open'});
			this.rerender();
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

		props: {
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
			children: HTMLSlotElement;
		};
	}

	interface Component {
		constructor: typeof Component;
	}

	return Component;
}

export interface FunctionComponent<P = {}> {
	(props: JSX.WithChildren<P>): JSX.Element;
}