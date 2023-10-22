declare namespace JSX {
    type Attribute<T extends number | boolean | string> = T | `${T}`;
    type BooleanAttribute = true;

    type CSS = {
        [K in keyof CSSStyleDeclaration as CSSStyleDeclaration[K] extends string ? Exclude<K, number> : never]?: string | number;
    };

    type Events<T extends HTMLElement> = {
        [K in keyof HTMLElementEventMap as `on${K}`]?: TargetedListener<HTMLElementEventMap[K], T>;
    };

    interface TargetedListener<E extends Event, T extends HTMLElement> {
        (this: T, ev: Omit<E, "currentTarget"> & Record<"currentTarget", T>): void;
    }

    interface GlobalAttributes {
        "aria-autocomplete": Attribute<string>;
        "aria-checked": Attribute<string>;
        "aria-disabled": Attribute<string>;
        "aria-expanded": Attribute<string>;
        "aria-haspopup": Attribute<string>;
        "aria-hidden": Attribute<string>;
        "aria-invalid": Attribute<string>;
        "aria-label": Attribute<string>;
        "aria-level": Attribute<string>;
        "aria-modal": Attribute<string>;
        "aria-multiline": Attribute<string>;
        "aria-multiselectable": Attribute<string>;
        "aria-orientation": Attribute<string>;
        "aria-placeholder": Attribute<string>;
        "aria-pressed": Attribute<string>;
        "aria-readonly": Attribute<string>;
        "aria-required": Attribute<string>;
        "aria-selected": Attribute<string>;
        "aria-sort": Attribute<string>;
        "aria-valuemax": Attribute<string>;
        "aria-valuemin": Attribute<string>;
        "aria-valuenow": Attribute<string>;
        "aria-valuetext": Attribute<string>;
        "aria-activedescendant": Attribute<string>;
        "aria-colcount": Attribute<string>;
        "aria-colindex": Attribute<string>;
        "aria-colspan": Attribute<string>;
        "aria-controls": Attribute<string>;
        "aria-describedby": Attribute<string>;
        "aria-description": Attribute<string>;
        "aria-details": Attribute<string>;
        "aria-errormessage": Attribute<string>;
        "aria-flowto": Attribute<string>;
        "aria-labelledby": Attribute<string>;
        "aria-owns": Attribute<string>;
        "aria-posinset": Attribute<string>;
        "aria-rowcount": Attribute<string>;
        "aria-rowindex": Attribute<string>;
        "aria-rowspan": Attribute<string>;
        "aria-setsize": Attribute<string>;
        "aria-dropeffect": Attribute<string>;
        "aria-grabbed": Attribute<string>;
        role: Attribute<string>;

        accesskey: Attribute<string>;
        autocapitalize: "off" | "none" | "on" | "sentences" | "words" | "characters";
        autofocus: Attribute<boolean>;
        class: Attribute<string>;
        contenteditable: Attribute<boolean>;
        dir: "ltr" | "rtl" | "auto";
        draggable: Attribute<boolean>;
        enterkeyhint: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
        hidden: BooleanAttribute;
        id: Attribute<string>;
        inert: BooleanAttribute;
        inputmode: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
        is: Attribute<string>;
        itemid: Attribute<string>;
        itemprop: Attribute<string>;
        itemref: Attribute<string>;
        itemscope: BooleanAttribute;
        itemtype: Attribute<string>;
        lang: Attribute<string>;
        nonce: Attribute<string>;
        part: Attribute<string>;
        slot: Attribute<string>;
        spellcheck: Attribute<boolean>;
        style: CSS;
        tabindex: Attribute<number>;
        title: Attribute<string>;
        translate: "yes" | "no";
    }

    type ElementProps<T = {}> = Partial<GlobalAttributes & T>;

    interface Attributes {
        accept: [Attribute<string>, ["form", "input"]];
        acceptcharset: [Attribute<string>, ["form"]];
        action: [Attribute<string>, ["form"]];
        allow: [Attribute<string>, ["iframe"]];
        alt: [Attribute<string>, ["area", "img", "input"]];
        async: [BooleanAttribute, ["script"]];
        autocomplete: ["on" | "off", ["form", "input"]];
        autoplay: [BooleanAttribute, ["audio", "video"]];
        buffered: [Attribute<string>, ["audio", "video"]];
        capture: [BooleanAttribute, ["input"]];
        charset: [Attribute<string>, ["meta", "script"]];
        checked: [BooleanAttribute, ["input"]];
        cite: [Attribute<string>, ["blockquote", "del", "ins", "q"]];
        cols: [Attribute<number>, ["textarea"]];
        colspan: [Attribute<number>, ["td", "th"]];
        content: [Attribute<string>, ["meta"]];
        controls: [BooleanAttribute, ["audio", "video"]];
        coords: [Attribute<string>, ["area"]];
        crossorigin: ["anonymous" | "use-credentials", ["audio", "img", "link", "script", "video"]];
        csp: [Attribute<string>, ["iframe"]];
        datetime: [Attribute<string>, ["del", "ins", "time"]];
        decoding: ["async" | "auto" | "sync", ["img"]];
        default: [BooleanAttribute, ["track"]];
        defer: [BooleanAttribute, ["script"]];
        dirname: [Attribute<string>, ["input", "textarea"]];
        disabled: [BooleanAttribute, ["button", "fieldset", "input", "optgroup", "option", "select", "textarea"]];
        download: [Attribute<string>, ["a", "area"]];
        enctype: [Attribute<string>, ["form"]];
        for: [Attribute<string>, ["label", "output"]];
        form: [Attribute<string>, ["button", "fieldset", "input", "label", "meter", "object", "output", "progress", "select", "textarea"]];
        formaction: [Attribute<string>, ["input", "button"]];
        formenctype: [Attribute<string>, ["button", "input"]];
        formmethod: [Attribute<string>, ["button", "input"]];
        formnovalidate: [BooleanAttribute, ["button", "input"]];
        formtarget: [Attribute<string>, ["button", "input"]];
        headers: [Attribute<string>, ["td", "th"]];
        height: [Attribute<number>, ["canvas", "embed", "iframe", "img", "input", "object", "video"]];
        high: [Attribute<number>, ["meter"]];
        href: [Attribute<string>, ["a", "area", "base", "link"]];
        hreflang: [Attribute<string>, ["a", "area", "link"]];
        "http-equiv": [Attribute<string>, ["meta"]];
        integrity: [Attribute<string>, ["link", "script"]];
        ismap: [BooleanAttribute, ["img"]];
        kind: [Attribute<string>, ["track"]];
        label: [Attribute<string>, ["track"]];
        list: [Attribute<string>, ["input"]];
        loading: ["auto" | "eager" | "lazy", ["img", "iframe"]];
        loop: [BooleanAttribute, ["audio", "bgsound", "marquee", "video"]];
        low: [Attribute<number>, ["meter"]];
        max: [Attribute<number>, ["input", "meter", "progress"]];
        maxlength: [Attribute<number>, ["input", "textarea"]];
        minlength: [Attribute<number>, ["input", "textarea"]];
        media: [Attribute<string>, ["a", "area", "link", "source", "style"]];
        method: [Attribute<string>, ["form"]];
        min: [Attribute<number>, ["input", "meter"]];
        multiple: [BooleanAttribute, ["input", "select"]];
        muted: [BooleanAttribute, ["audio", "video"]];
        name: [Attribute<string>, ["button", "form", "fieldset", "iframe", "input", "map", "meta", "object", "output", "param", "select", "textarea"]];
        novalidate: [BooleanAttribute, ["form"]];
        open: [BooleanAttribute, ["details", "dialog"]];
        optimum: [Attribute<number>, ["meter"]];
        pattern: [Attribute<string>, ["input"]];
        ping: [Attribute<string>, ["a", "area"]];
        placeholder: [Attribute<string>, ["input", "textarea"]];
        poster: [Attribute<string>, ["video"]];
        preload: ["auto" | "metadata" | "none", ["audio", "video"]];
        readonly: [BooleanAttribute, ["input", "textarea"]];
        rel: [Attribute<string>, ["a", "area", "link"]];
        required: [BooleanAttribute, ["input", "select", "textarea"]];
        reversed: [BooleanAttribute, ["ol"]];
        rows: [Attribute<number>, ["textarea"]];
        rowspan: [Attribute<number>, ["td", "th"]];
        sandbox: [Attribute<string>, ["iframe"]];
        scope: [Attribute<string>, ["th"]];
        selected: [BooleanAttribute, ["option"]];
        shape: [Attribute<string>, ["a", "area"]];
        size: [Attribute<number>, ["input", "select"]];
        sizes: [Attribute<string>, ["link", "img", "source"]];
        span: [Attribute<number>, ["col", "colgroup"]];
        src: [Attribute<string>, ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"]];
        srcdoc: [Attribute<string>, ["iframe"]];
        srclang: [Attribute<string>, ["track"]];
        srcset: [Attribute<string>, ["img", "source"]];
        start: [Attribute<number>, ["ol"]];
        step: [Attribute<number>, ["input"]];
        target: [Attribute<string>, ["a", "area", "base", "form"]];
        type: [Attribute<string>, ["button", "input", "command", "embed", "object", "script", "source", "style", "menu"]];
        usemap: [Attribute<string>, ["img", "input", "object"]];
        value: [Attribute<string>, ["button", "option", "input", "li", "meter", "progress", "param"]];
        width: [Attribute<number>, ["canvas", "embed", "iframe", "img", "input", "object", "video"]];
        wrap: ["hard" | "soft", ["textarea"]];
    }

    type AttributeFor<K> = WithChildren<
        ElementProps<{
            [A in keyof Attributes as K extends Attributes[A][1][number] ? A : never]: Attributes[A][0];
        }>
    >;

    type IntrinsicElements = {
        [K in keyof HTMLElementTagNameMap]: AttributeFor<K> & Events<HTMLElementTagNameMap[K]>;
    };

    interface ElementChildrenAttribute {
        children: {};
    }

    type WithChildren<T> = T & {
        children?: FortisNode;
    };

    interface Component extends HTMLElement {
        render(): Node | string;
        rerender(): void;
    }

    interface ComponentClass<P> {
        new(props: P): Component;
        elementName: `fortis-${string}`;
    }

    interface Factory {
        <K extends keyof HTMLElementTagNameMap>(tag: K, props: AttributeFor<K>, ...children: FortisNode[]): HTMLElementTagNameMap[K];
        <R extends Element, P>(tag: (props: P) => R, props: P, ...children: FortisNode[]): R;
        <P>(tag: ComponentClass<P>, props: P, ...children: FortisNode[]): Element;
        (tag: `fortis-${string}`, props: ElementProps, ...children: FortisNode[]): Element;
    }

    type Element = HTMLElement;
    type Tag =
        | string
        | ((props: Record<string, unknown>) => Element)
        | (ComponentClass<any>);
    type FortisNode = Node | string | number | boolean | null | undefined | FortisNode[];
}