export function createContext<T>(defaultValue: T) {
    class Provider extends HTMLElement {
        static elementName = `fortis-context-${Date.now().toString(36)}` as const;
        #value = defaultValue;

        set value(value: T) {
            if (this.#value === value) {
                return;
            }

            this.#value = value;
            this.dispatchEvent(new CustomEvent("contextchange", {detail: value}));
        }

        get value() {
            return this.#value;
        }
    }

    interface Provider {
        __props__: JSX.WithChildren<{
            $value?: T;
        }>;
    }

    class Consumer {
        constructor(readonly element: HTMLElement) {}

        get value() {
            const context = this.element.closest<Provider>(Provider.elementName);
            if (!context) {
                return defaultValue;
            }
            return context.value;
        }

        addChangeListener(listener: (value: T) => void, options?: AddEventListenerOptions) {
            const context = this.element.closest<Provider>(Provider.elementName);
            if (!context) {
                return;
            }
            context.addEventListener(
                "contextchange", 
                function handler(event) {
                    listener(event.detail);
                }, 
                options
            );
        }
    }

    return {
        Provider,
        Consumer
    };
}

declare global {
    interface ElementEventMap {
        "contextchange": CustomEvent;
    }
}