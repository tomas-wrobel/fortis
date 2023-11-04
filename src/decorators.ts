export function name(name: string) {
	return function (jsx: Record<"elementName", `fortis-${string}`>, _context: DecoratorContext) {
		jsx.elementName = `fortis-${name}`;
	};
}