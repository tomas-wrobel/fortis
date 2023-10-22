# Fortis

## Web Components via JSX

### What is it?

Fortis is a library that allows you to write web components using JSX. It is a thin wrapper around the [Web Components API](https://developer.mozilla.org/en-US/docs/Web/Web_Components) that allows you to write components in a more declarative way.

### Why?

The Web Components API is great, but it can be a bit verbose. This library allows you to write components in a more declarative way, using JSX.

## Perfectly typed

Fortis is written in TypeScript, and it is perfectly typed. It also provides a set of types that you can use to write your own components.

## How to use it

### Installation

```bash
npm install fortis
```

### Configuration

You need to use `f` as the JSX factory. You can do this by adding the following line to your `tsconfig.json`:

```json
{
    "compilerOptions": {
        "jsxFactory": "f"
    }
}
```

Similarly, you can configure Babel to use `f` as the JSX factory:

```json
{
    "plugins": [
        ["@babel/plugin-transform-react-jsx", {"pragma": "f"}]
    ]
}
```

Don't forget to import `f` in your components:

```tsx
import {f} from 'fortis';
```

Fragments and SVG elements are not supported.

### Usage

```tsx
import {f, Component, FunctionComponent, Required} from 'fortis';

// Function components do not create shadow roots
const Price: FunctionComponent<{amount: number}> = ({amount}) => {
    return <span>{amount} €</span>;
};

// Class components create shadow roots,
// so you can use CSS encapsulation
class Counter extends Component({count: Optional(0)}) {
    static css = `
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            font-size: 20px;
            font-family: sans-serif;
        }

        button {
            appearance: none;
            background: blue;
            color: white;
            padding: 5px 15px;
            border: none;
            border-radius: 5px;
        }
    `;

    render() {
        return (
            <div>
                <button onclick={() => this.props.count++}>+</button>
                {this.props.count}
                <button onclick={() => this.props.count--}>-</button>
            </div>
        );
    }
}

// JSX elements are native DOM elements
document.body.append(
    <div>
        <Price amount={10} />
        <Counter />
    </div>
);
```

## License

The project is licensed under the MIT license.
