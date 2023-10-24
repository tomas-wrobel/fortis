# Fortis

![npm package minimized gzipped size (select exports)](https://img.shields.io/bundlejs/size/fortis)

Fortis is another JSX library. It's a bit different from the others though:

* All JSX Elements are native DOM elements
* Class components are [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
* Function components do not create Shadow DOM, but can be used to create reusable components

## Why Fortis?

* **Native** - No Virtual DOM, no custom event system, no custom lifecycle methods, no custom anything. Fortis is just native DOM and native JavaScript.
* **Fast** - Fortis is fast because it's native. It's also fast because it's small. The entire library is less than 1.5 kB gzipped.
* **Simple** - Fortis is easy to learn. If you know JSX, you know Fortis.
* **Well-Typed** - Fortis is written in TypeScript and comes with its own type definitions. This means that you get full type safety out of the box.

## Installation

```bash
npm install fortis
```

## Usage

```tsx filename="demo.tsx"
import {f, Component, Required} from 'fortis';

class WebComponent extends Component({
    message: Required.string
}) {
    static css = `
        :host {
            display: block;
            padding: 1rem;
            border: 1px solid black;
        }
    `;

    render() {
        return (
            <div title={this.props.message}>
                {this.props.children}
            </div>
        );
    }
}

const App = () => (
    <WebComponent message="Hello World">
        <h1>Hello World</h1>
    </WebComponent>
);

document.body.appendChild(<App />);
```

## Inspiration

Fortis is inspired by [Lit](https://lit.dev) and [Preact](https://preactjs.com/). It's also heavily influenced by [React](https://react.dev) and [JSX](https://facebook.github.io/jsx/).

However, Fortis is not a clone of any of these libraries. It's a unique library with its own set of features and goals. Fortis is not meant to be a replacement for any of these libraries, but rather an alternative for those who want something different.