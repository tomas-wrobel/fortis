import {f, name, Component, Optional, FunctionComponent, useNumber} from "../src/main";

@name("counter")
class CounterComponent extends Component({count: Optional(0)}) {
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

document.body.appendChild(<CounterComponent />);

const Counter: FunctionComponent<{count: number}> = ({count}) => {
    const node = useNumber(count);

    return (
        <div>
            <button onclick={() => node.value++}>+</button>
            {node}
            <button onclick={() => node.value--}>-</button>
        </div>
    );
};

document.body.appendChild(<Counter count={0} />);