export class NumberNode extends Text {
	constructor(value: number) {
		super(value.toString());
	}

	get value() {
		return Number(this.nodeValue);
	}

	set value(value: number) {
		this.nodeValue = value.toString();
	}

	valueOf() {
		return this.value;
	}
}

export class StringNode extends Text {
	constructor(value: string) {
		super(value);
	}

	get value() {
		return this.nodeValue!;
	}

	set value(value: string) {
		this.nodeValue = value;
	}

	toString() {
		return this.value;
	}
}

export const useNumber = (initialValue: number) => new NumberNode(initialValue);
export const useString = (initialValue: string) => new StringNode(initialValue);