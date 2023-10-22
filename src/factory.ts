/**
 * The JSX factory function.
 * @param tag 
 * @param props 
 * @param children 
 * @returns The HTML element. 
 */
export const f: JSX.Factory = function (tag: JSX.Tag, props: Record<string, unknown>, ...children: JSX.FortisNode[]) {
	if (typeof tag === 'function') {
		if ("elementName" in tag) {
			if (!customElements.get(tag.elementName)) {
				customElements.define(tag.elementName, tag);
			}
			return f(tag.elementName, props, children);
		}
		return tag({...props, children});
	}
	const element = document.createElement(tag);
	for (const key in props) {
		if (key === 'style') {
			Object.assign(element.style, props[key]);
		} else if (key.startsWith("on")) {
			element.addEventListener(key.slice(2), props[key] as EventListener);
		} else if (typeof props[key] === "boolean") {
			element.toggleAttribute(key, props[key] as boolean);
		} else {
			element.setAttribute(key, String(props[key]));
		}
	}
	children.forEach(function fn(child) {
		if (child instanceof Node || typeof child === 'string') {
			element.append(child);
		} else if (child instanceof Array) {
			child.forEach(fn);
		} else if (typeof child === "number") {
			element.append(child.toString());
		}
	});
	return element;
};