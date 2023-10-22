export function name(name: string) {
	return function (jsx: JSX.ComponentClass<any>, _context: DecoratorContext) {
		jsx.elementName = `fortis-${name}`;
	};
}