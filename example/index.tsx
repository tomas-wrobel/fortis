import {f, name, Component, FunctionComponent} from "../src/main";

const Item: FunctionComponent<{name: string}> = ({name}) => {
    const span = <span>{name}</span>;

    return (
        <li>
            {span}
            <input type="checkbox" value={name} onchange={() => span.classList.toggle("done")} />
        </li>
    );
};

@name("list")
class List extends Component({}) {
    static css = `
        .done {
            text-decoration: line-through;
        }
    `;

    ul = document.createElement("ul");

    render() {
        return (
            <div>
                {this.ul}
                <form onsubmit={e => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    const name = data.get("name") as string;

                    if (name) {
                        this.ul.append(<Item name={name} />);
                    }

                    e.currentTarget.reset();
                }}>
                    <input type="text" name="name" />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

document.body.append(<List />);