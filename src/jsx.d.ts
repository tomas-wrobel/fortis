declare namespace JSX {
    type AttributeValue<T extends number | boolean | string> = T | `${T}`;
    type Attribute<T extends number | boolean | string, Elements extends string[]> = [AttributeValue<T>, Elements[number]];

    type CSS = {
        [K in keyof CSSStyleDeclaration as CSSStyleDeclaration[K] extends string ? Exclude<K, number> : never]?: string | number;
    };

    type HTMLEvents<T extends HTMLElement> = {
        [K in keyof HTMLElementEventMap as `on${K}`]?: TargetedListener<HTMLElementEventMap[K], T>;
    };

    type SVGEvents<T extends SVGElement> = {
        [K in keyof SVGElementEventMap as `on${K}`]?: TargetedListener<SVGElementEventMap[K], T>;
    };

    interface TargetedListener<E extends Event, T extends HTMLOrSVGElement> {
        (this: T, ev: Omit<E, "currentTarget"> & Record<"currentTarget", T>): void;
    }

    interface GlobalAttributes {
        "aria-autocomplete": AttributeValue<string>;
        "aria-checked": AttributeValue<string>;
        "aria-disabled": AttributeValue<string>;
        "aria-expanded": AttributeValue<string>;
        "aria-haspopup": AttributeValue<string>;
        "aria-hidden": AttributeValue<string>;
        "aria-invalid": AttributeValue<string>;
        "aria-label": AttributeValue<string>;
        "aria-level": AttributeValue<string>;
        "aria-modal": AttributeValue<string>;
        "aria-multiline": AttributeValue<string>;
        "aria-multiselectable": AttributeValue<string>;
        "aria-orientation": AttributeValue<string>;
        "aria-placeholder": AttributeValue<string>;
        "aria-pressed": AttributeValue<string>;
        "aria-readonly": AttributeValue<string>;
        "aria-required": AttributeValue<string>;
        "aria-selected": AttributeValue<string>;
        "aria-sort": AttributeValue<string>;
        "aria-valuemax": AttributeValue<string>;
        "aria-valuemin": AttributeValue<string>;
        "aria-valuenow": AttributeValue<string>;
        "aria-valuetext": AttributeValue<string>;
        "aria-activedescendant": AttributeValue<string>;
        "aria-colcount": AttributeValue<string>;
        "aria-colindex": AttributeValue<string>;
        "aria-colspan": AttributeValue<string>;
        "aria-controls": AttributeValue<string>;
        "aria-describedby": AttributeValue<string>;
        "aria-description": AttributeValue<string>;
        "aria-details": AttributeValue<string>;
        "aria-errormessage": AttributeValue<string>;
        "aria-flowto": AttributeValue<string>;
        "aria-labelledby": AttributeValue<string>;
        "aria-owns": AttributeValue<string>;
        "aria-posinset": AttributeValue<string>;
        "aria-rowcount": AttributeValue<string>;
        "aria-rowindex": AttributeValue<string>;
        "aria-rowspan": AttributeValue<string>;
        "aria-setsize": AttributeValue<string>;
        "aria-dropeffect": AttributeValue<string>;
        "aria-grabbed": AttributeValue<string>;
        role: AttributeValue<string>;

        accesskey: AttributeValue<string>;
        autocapitalize: "off" | "none" | "on" | "sentences" | "words" | "characters";
        autofocus: AttributeValue<boolean>;
        class: AttributeValue<string>;
        contenteditable: AttributeValue<boolean>;
        dir: "ltr" | "rtl" | "auto";
        draggable: AttributeValue<boolean>;
        enterkeyhint: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
        hidden: boolean;
        id: AttributeValue<string>;
        inert: boolean;
        inputmode: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
        is: AttributeValue<string>;
        itemid: AttributeValue<string>;
        itemprop: AttributeValue<string>;
        itemref: AttributeValue<string>;
        itemscope: boolean;
        itemtype: AttributeValue<string>;
        lang: AttributeValue<string>;
        nonce: AttributeValue<string>;
        part: AttributeValue<string>;
        slot: AttributeValue<string>;
        spellcheck: AttributeValue<boolean>;
        style: string | CSS;
        tabindex: AttributeValue<number>;
        title: AttributeValue<string>;
        translate: "yes" | "no";
    }

    type HTMLElementProps<T = {}> = Partial<GlobalAttributes & T>;

    interface HTMLAttributes {
        accept: Attribute<string, ["form", "input"]>;
        acceptcharset: Attribute<string, ["form"]>;
        action: Attribute<string, ["form"]>;
        allow: Attribute<string, ["iframe"]>;
        alt: Attribute<string, ["area", "img", "input"]>;
        async: Attribute<boolean, ["script"]>;
        autocomplete: Attribute<"on" | "off", ["form", "input"]>;
        autoplay: Attribute<boolean, ["audio", "video"]>;
        buffered: Attribute<string, ["audio", "video"]>;
        capture: Attribute<boolean, ["input"]>;
        charset: Attribute<string, ["meta", "script"]>;
        checked: Attribute<boolean, ["input"]>;
        cite: Attribute<string, ["blockquote", "del", "ins", "q"]>;
        cols: Attribute<number, ["textarea"]>;
        colspan: Attribute<number, ["td", "th"]>;
        content: Attribute<string, ["meta"]>;
        controls: Attribute<boolean, ["audio", "video"]>;
        coords: Attribute<string, ["area"]>;
        crossorigin: Attribute<"anonymous" | "use-credentials", ["audio", "img", "link", "script", "video"]>;
        csp: Attribute<string, ["iframe"]>;
        datetime: Attribute<string, ["del", "ins", "time"]>;
        decoding: Attribute<"async" | "auto" | "sync", ["img"]>;
        default: Attribute<boolean, ["track"]>;
        defer: Attribute<boolean, ["script"]>;
        dirname: Attribute<string, ["input", "textarea"]>;
        disabled: Attribute<boolean, ["button", "fieldset", "input", "optgroup", "option", "select", "textarea"]>;
        download: Attribute<string, ["a", "area"]>;
        enctype: Attribute<string, ["form"]>;
        for: Attribute<string, ["label", "output"]>;
        form: Attribute<string, ["button", "fieldset", "input", "label", "meter", "object", "output", "progress", "select", "textarea"]>;
        formaction: Attribute<string, ["input", "button"]>;
        formenctype: Attribute<string, ["button", "input"]>;
        formmethod: Attribute<string, ["button", "input"]>;
        formnovalidate: Attribute<boolean, ["button", "input"]>;
        formtarget: Attribute<string, ["button", "input"]>;
        headers: Attribute<string, ["td", "th"]>;
        height: Attribute<number, ["canvas", "embed", "iframe", "img", "input", "object", "video"]>;
        high: Attribute<number, ["meter"]>;
        href: Attribute<string, ["a", "area", "base", "link"]>;
        hreflang: Attribute<string, ["a", "area", "link"]>;
        "http-equiv": Attribute<string, ["meta"]>;
        integrity: Attribute<string, ["link", "script"]>;
        ismap: Attribute<boolean, ["img"]>;
        kind: Attribute<string, ["track"]>;
        label: Attribute<string, ["track"]>;
        list: Attribute<string, ["input"]>;
        loading: Attribute<"auto" | "eager" | "lazy", ["img", "iframe"]>;
        loop: Attribute<boolean, ["audio", "bgsound", "marquee", "video"]>;
        low: Attribute<number, ["meter"]>;
        max: Attribute<number, ["input", "meter", "progress"]>;
        maxlength: Attribute<number, ["input", "textarea"]>;
        minlength: Attribute<number, ["input", "textarea"]>;
        media: Attribute<string, ["a", "area", "link", "source", "style"]>;
        method: Attribute<string, ["form"]>;
        min: Attribute<number, ["input", "meter"]>;
        multiple: Attribute<boolean, ["input", "select"]>;
        muted: Attribute<boolean, ["audio", "video"]>;
        name: Attribute<string, ["button", "form", "fieldset", "iframe", "input", "map", "meta", "object", "output", "param", "select", "textarea", "slot"]>;
        novalidate: Attribute<boolean, ["form"]>;
        open: Attribute<boolean, ["details", "dialog"]>;
        optimum: Attribute<number, ["meter"]>;
        pattern: Attribute<string, ["input"]>;
        ping: Attribute<string, ["a", "area"]>;
        placeholder: Attribute<string, ["input", "textarea"]>;
        poster: Attribute<string, ["video"]>;
        preload: Attribute<"auto" | "metadata" | "none", ["audio", "video"]>;
        readonly: Attribute<boolean, ["input", "textarea"]>;
        rel: Attribute<string, ["a", "area", "link"]>;
        required: Attribute<boolean, ["input", "select", "textarea"]>;
        reversed: Attribute<boolean, ["ol"]>;
        rows: Attribute<number, ["textarea"]>;
        rowspan: Attribute<number, ["td", "th"]>;
        sandbox: Attribute<string, ["iframe"]>;
        scope: Attribute<string, ["th"]>;
        selected: Attribute<boolean, ["option"]>;
        shape: Attribute<string, ["a", "area"]>;
        size: Attribute<number, ["input", "select"]>;
        sizes: Attribute<string, ["link", "img", "source"]>;
        span: Attribute<number, ["col", "colgroup"]>;
        src: Attribute<string, ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"]>;
        srcdoc: Attribute<string, ["iframe"]>;
        srclang: Attribute<string, ["track"]>;
        srcset: Attribute<string, ["img", "source"]>;
        start: Attribute<number, ["ol"]>;
        step: Attribute<number, ["input"]>;
        target: Attribute<string, ["a", "area", "base", "form"]>;
        type: Attribute<string, ["button", "input", "command", "embed", "object", "script", "source", "style", "menu"]>;
        usemap: Attribute<string, ["img", "input", "object"]>;
        value: Attribute<string, ["button", "option", "input", "li", "meter", "progress", "param"]>;
        width: Attribute<number, ["canvas", "embed", "iframe", "img", "input", "object", "video"]>;
        wrap: Attribute<"hard" | "soft", ["textarea"]>;
    }

    type HTMLAttributeFor<K> = WithChildren<
        HTMLElementProps<{
            [A in keyof HTMLAttributes as K extends HTMLAttributes[A][1] ? A : never]: HTMLAttributes[A][0];
        }>
    >;

    type HTMLElements = {
        [K in keyof HTMLElementTagNameMap]: HTMLAttributeFor<K> & HTMLEvents<HTMLElementTagNameMap[K]>;
    };

    interface PresentationAttributes {
        "alignment-baseline": number | string;
        "baseline-shift": number | string;
        "clip": number | string;
        "clip-path": number | string;
        "clip-rule": number | string;
        "color": number | string;
        "color-interpolation": number | string;
        "color-interpolation-filters": number | string;
        "color-profile": number | string;
        "color-rendering": number | string;
        "cursor": number | string;
        "d": number | string;
        "direction": number | string;
        "display": number | string;
        "dominant-baseline": number | string;
        "enable-background": number | string;
        "fill": number | string;
        "fill-opacity": number | string;
        "fill-rule": number | string;
        "filter": number | string;
        "flood-color": number | string;
        "flood-opacity": number | string;
        "font-family": number | string;
        "font-size": number | string;
        "font-size-adjust": number | string;
        "font-stretch": number | string;
        "font-style": number | string;
        "font-variant": number | string;
        "font-weight": number | string;
        "glyph-orientation-horizontal": number | string;
        "glyph-orientation-vertical": number | string;
        "image-rendering": number | string;
        "kerning": number | string;
        "letter-spacing": number | string;
        "lighting-color": number | string;
        "marker-end": number | string;
        "marker-mid": number | string;
        "marker-start": number | string;
        "mask": number | string;
        "opacity": number | string;
        "overflow": number | string;
        "pointer-events": number | string;
        "shape-rendering": number | string;
        "solid-color": number | string;
        "solid-opacity": number | string;
        "stop-color": number | string;
        "stop-opacity": number | string;
        "stroke": number | string;
        "stroke-dasharray": number | string;
        "stroke-dashoffset": number | string;
        "stroke-linecap": number | string;
        "stroke-linejoin": number | string;
        "stroke-miterlimit": number | string;
        "stroke-opacity": number | string;
        "stroke-width": number | string;
        "text-anchor": number | string;
        "text-decoration": number | string;
        "text-rendering": number | string;
        "transform": number | string;
        "unicode-bidi": number | string;
        "vector-effect": number | string;
        "visibility": number | string;
        "word-spacing": number | string;
        "writing-mode": number | string;
    }

    interface SVGAttributes {
        "accumulate": Attribute<string | number, ["animate", "animateMotion", "animateTransform"]>;
        "additive": Attribute<string | number, ["animate", "animateMotion", "animateTransform"]>;
        "amplitude": Attribute<string | number, ["feFuncA", "feFuncB", "feFuncG", "feFuncR"]>;
        "aria-activedescendant": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-atomic": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-autocomplete": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-busy": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-checked": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-colcount": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-colindex": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-colspan": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-controls": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-current": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-describedby": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-details": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-disabled": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-dropeffect": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-errormessage": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-expanded": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-flowto": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-grabbed": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-haspopup": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-hidden": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-invalid": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-keyshortcuts": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-label": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-labelledby": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-level": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-live": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-modal": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-multiline": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-multiselectable": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-orientation": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-owns": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-placeholder": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-posinset": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-pressed": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-readonly": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-relevant": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-required": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-roledescription": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-rowcount": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-rowindex": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-rowspan": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-selected": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-setsize": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-sort": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-valuemax": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-valuemin": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-valuenow": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "aria-valuetext": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "attributeName": Attribute<string | number, ["animate", "animateTransform", "set"]>;
        "azimuth": Attribute<string | number, ["feDistantLight"]>;
        "baseFrequency": Attribute<string | number, ["feTurbulence"]>;
        "begin": Attribute<string | number, ["animate", "animateMotion", "animateTransform", "set", "discard"]>;
        "bias": Attribute<string | number, ["feConvolveMatrix"]>;
        "by": Attribute<string | number, ["animate", "animateMotion", "animateTransform"]>;
        "calcMode": Attribute<string | number, ["animate", "animateMotion", "animateTransform"]>;
        "class": Attribute<string | number, ["a", "animate", "animateMotion", "animateTransform", "audio", "canvas", "circle", "clipPath", "defs", "desc", "discard", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "iframe", "image", "line", "linearGradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tspan", "unknown", "use", "video", "view"]>;
        "clipPathUnits": Attribute<string | number, ["clipPath"]>;
        "crossorigin": Attribute<string | number, ["feImage", "image", "script"]>;
        "cx": Attribute<string | number, ["radialGradient", "circle", "ellipse"]>;
        "cy": Attribute<string | number, ["radialGradient", "circle", "ellipse"]>;
        "diffuseConstant": Attribute<string | number, ["feDiffuseLighting"]>;
        "divisor": Attribute<string | number, ["feConvolveMatrix"]>;
        "download": Attribute<string | number, ["a"]>;
        "dur": Attribute<string | number, ["animate", "animateMotion", "animateTransform", "set"]>;
        "dx": Attribute<string | number, ["feDropShadow", "feOffset", "text", "tspan"]>;
        "dy": Attribute<string | number, ["feDropShadow", "feOffset", "text", "tspan"]>;
        "edgeMode": Attribute<string | number, ["feConvolveMatrix", "feGaussianBlur"]>;
        "elevation": Attribute<string | number, ["feDistantLight"]>;
        "end": Attribute<string | number, ["animate", "animateMotion", "animateTransform", "set"]>;
        "exponent": Attribute<string | number, ["feFuncA", "feFuncB", "feFuncG", "feFuncR"]>;
        "fill": Attribute<string | number, ["animate", "animateMotion", "animateTransform", "set"]>;
        "filterUnits": Attribute<string | number, ["filter"]>;
        "fr": Attribute<string | number, ["radialGradient"]>;
        "from": Attribute<string | number, ["animate", "animateMotion", "animateTransform"]>;
        "fx": Attribute<string | number, ["radialGradient"]>;
        "fy": Attribute<string | number, ["radialGradient"]>;
        "gradientTransform": Attribute<string | number, [`${"radial" | "linear"}Gradient`]>;
        "gradientUnits": Attribute<string | number, [`${"radial" | "linear"}Gradient`]>;
        "height": Attribute<string | number, ["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feFlood", "feGaussianBlur", "feImage", "feMerge", "feMorphology", "feOffset", "feSpecularLighting", "feTile", "feTurbulence", "filter", "mask", "pattern", "a", "animate", "animateMotion", "animateTransform", "set", "discard", "feImage", "image", "linearGradient", "mpath", "pattern", "radialGradient", "script", "textPath", "use"]>;
        "hreflang": Attribute<string | number, ["a"]>;
        "id": Attribute<string | number, ["a", "animate", "animateMotion", "animateTransform", "audio", "canvas", "circle", "clipPath", "defs", "desc", "discard", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "iframe", "image", "line", "linearGradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tspan", "unknown", "use", "video", "view"]>;
        "in": Attribute<string | number, ["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feGaussianBlur", "feMergeNode", "feMorphology", "feOffset", "feSpecularLighting", "feTile"]>;
        "in2": Attribute<string | number, ["feBlend", "feComposite", "feDisplacementMap"]>;
        "intercept": Attribute<string | number, ["feFuncA", "feFuncB", "feFuncG", "feFuncR"]>;
        "k1": Attribute<string | number, ["feComposite"]>;
        "k2": Attribute<string | number, ["feComposite"]>;
        "k3": Attribute<string | number, ["feComposite"]>;
        "k4": Attribute<string | number, ["feComposite"]>;
        "kernelMatrix": Attribute<string | number, ["feConvolveMatrix"]>;
        "kernelUnitLength": Attribute<string | number, ["feConvolveMatrix", "feDiffuseLighting", "feSpecularLighting"]>;
        "keyPoints": Attribute<string | number, ["animateMotion"]>;
        "keySplines": Attribute<string | number, ["animate", "animateMotion", "animateTransform"]>;
        "keyTimes": Attribute<string | number, ["animate", "animateMotion", "animateTransform"]>;
        "lang": Attribute<string | number, ["a", "animate", "animateMotion", "animateTransform", "audio", "canvas", "circle", "clipPath", "defs", "desc", "discard", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "iframe", "image", "line", "linearGradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tspan", "unknown", "use", "video", "view"]>;
        "lengthAdjust": Attribute<string | number, ["text", "textPath", "tspan"]>;
        "limitingConeAngle": Attribute<string | number, ["feSpotLight"]>;
        "markerHeight": Attribute<string | number, ["marker"]>;
        "markerUnits": Attribute<string | number, ["marker"]>;
        "markerWidth": Attribute<string | number, ["marker"]>;
        "maskContentUnits": Attribute<string | number, ["mask"]>;
        "maskUnits": Attribute<string | number, ["mask"]>;
        "max": Attribute<string | number, ["animate", "animateMotion", "animateTransform", "set"]>;
        "media": Attribute<string | number, ["style"]>;
        "method": Attribute<string | number, ["textPath"]>;
        "min": Attribute<string | number, ["animate", "animateMotion", "animateTransform", "set"]>;
        "mode": Attribute<string | number, ["feBlend"]>;
        "numOctaves": Attribute<string | number, ["feTurbulence"]>;
        "offset": Attribute<string | number, ["feFuncA", "feFuncB", "feFuncG", "feFuncR"]>;
        "offset	stopoperator": Attribute<string | number, ["feComposite"]>;
        "operator": Attribute<string | number, ["feMorphology"]>;
        "order": Attribute<string | number, ["feConvolveMatrix"]>;
        "orient": Attribute<string | number, ["marker"]>;
        "origin": Attribute<string | number, ["animateMotion"]>;
        "path": Attribute<string | number, ["animateMotion", "textPath"]>;
        "pathLength": Attribute<string | number, ["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"]>;
        "patternContentUnits": Attribute<string | number, ["pattern"]>;
        "patternTransform": Attribute<string | number, ["pattern"]>;
        "patternUnits": Attribute<string | number, ["pattern"]>;
        "ping": Attribute<string | number, ["a"]>;
        "playbackorder": Attribute<string | number, ["svg"]>;
        "points": Attribute<string | number, [`poly${"gon" | "line"}`]>;
        "pointsAtX": Attribute<string | number, ["feSpotLight"]>;
        "pointsAtY": Attribute<string | number, ["feSpotLight"]>;
        "pointsAtZ": Attribute<string | number, ["feSpotLight"]>;
        "preserveAlpha": Attribute<string | number, ["feConvolveMatrix"]>;
        "preserveAspectRatio": Attribute<string | number, ["canvas", "feImage", "image", "marker", "pattern", "svg", "symbol", "view"]>;
        "primitiveUnits": Attribute<string | number, ["filter"]>;
        "r": Attribute<string | number, ["radialGradient", "circle", "ellipse"]>;
        "radius": Attribute<string | number, ["feMorphology"]>;
        "refX": Attribute<string | number, ["marker", "symbol"]>;
        "refY": Attribute<string | number, ["marker", "symbol"]>;
        "referrerpolicy": Attribute<string | number, ["a"]>;
        "rel": Attribute<string | number, ["a"]>;
        "repeatCount": Attribute<string | number, ["animate", "animateMotion", "animateTransform", "set"]>;
        "repeatDur": Attribute<string | number, ["animate", "animateMotion", "animateTransform", "set"]>;
        "requiredExtensions": Attribute<string | number, ["a", "animate", "animateMotion", "animateTransform", "audio", "canvas", "circle", "clipPath", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "mask", "path", "polygon", "polyline", "rect", "set", "svg", "switch", "text", "textPath", "tspan", "unknown", "use", "video"]>;
        "restart": Attribute<string | number, ["animate", "animateMotion", "animateTransform", "set"]>;
        "result": Attribute<string | number, ["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feFlood", "feGaussianBlur", "feImage", "feMerge", "feMorphology", "feOffset", "feSpecularLighting", "feTile", "feTurbulence"]>;
        "role": Attribute<string | number, ["a", "audio", "canvas", "circle", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "path", "polygon", "polyline", "rect", "svg", "switch", "symbol", "text", "textPath", "tspan", "unknown", "use", "video", "view"]>;
        "rotate": Attribute<string | number, ["animateMotion", "text", "tspan"]>;
        "scale": Attribute<string | number, ["feDisplacementMap"]>;
        "seed": Attribute<string | number, ["feTurbulence"]>;
        "side": Attribute<string | number, ["textPath"]>;
        "slope": Attribute<string | number, ["feFuncA", "feFuncB", "feFuncG", "feFuncR"]>;
        "spacing": Attribute<string | number, ["textPath"]>;
        "specularConstant": Attribute<string | number, ["feSpecularLighting"]>;
        "specularExponent": Attribute<string | number, ["feSpecularLighting", "feSpotLight"]>;
        "spreadMethod": Attribute<string | number, ["linearGradient", "radialGradient"]>;
        "startOffset": Attribute<string | number, ["textPath"]>;
        "stdDeviation": Attribute<string | number, ["feDropShadow", "feGaussianBlur"]>;
        "stitchTiles": Attribute<string | number, ["feTurbulence"]>;
        "style": Attribute<string | number, ["a", "animate", "animateMotion", "animateTransform", "audio", "canvas", "circle", "clipPath", "defs", "desc", "discard", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "iframe", "image", "line", "linearGradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tspan", "unknown", "use", "video", "view"]>;
        "surfaceScale": Attribute<string | number, ["feDiffuseLighting", "feSpecularLighting"]>;
        "systemLanguage": Attribute<string | number, ["a", "animate", "animateMotion", "animateTransform", "audio", "canvas", "circle", "clipPath", "discard", "ellipse", "foreignObject", "g", "iframe", "image", "line", "mask", "path", "polygon", "polyline", "rect", "set", "svg", "switch", "text", "textPath", "tspan", "unknown", "use", "video"]>;
        "tabindex": Attribute<string | number, ["a", "animate", "animateMotion", "animateTransform", "audio", "canvas", "circle", "clipPath", "defs", "desc", "discard", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "iframe", "image", "line", "linearGradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tspan", "unknown", "use", "video", "view"]>;
        "tableValues": Attribute<string | number, ["feFuncA", "feFuncB", "feFuncG", "feFuncR"]>;
        "target": Attribute<string | number, ["a"]>;
        "targetX": Attribute<string | number, ["feConvolveMatrix", "feConvolveMatrix"]>;
        "textLength": Attribute<string | number, ["text", "textPath", "tspan"]>;
        "timelinebegin": Attribute<string | number, ["svg"]>;
        "title": Attribute<string | number, ["style"]>;
        "to": Attribute<string | number, ["animate", "animateMotion", "animateTransform", "set"]>;
        "transform": Attribute<string | number, ["svg"]>;
        "type": Attribute<string | number, ["a", "animateTransform", "feColorMatrix", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feTurbulence", "script", "style"]>;
        "values": Attribute<string | number, ["animate", "animateMotion", "animateTransform", "feColorMatrix"]>;
        "viewBox": Attribute<string | number, ["marker", "pattern", "svg", "symbol", "view"]>;
        "width": Attribute<string | number, ["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feFlood", "feGaussianBlur", "feImage", "feMerge", "feMorphology", "feOffset", "feSpecularLighting", "feTile", "feTurbulence", "filter", "mask", "pattern"]>;
        "x": Attribute<string | number, ["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feFlood", "feGaussianBlur", "feImage", "feMerge", "feMorphology", "feOffset", "feSpecularLighting", "feTile", "feTurbulence", "fePointLight", "feSpotLight", "filter", "mask", "pattern", "text", "tspan"]>;
        "x1": Attribute<string | number, ["line", "linearGradient"]>;
        "x2": Attribute<string | number, ["line", "linearGradient"]>;
        "xChannelSelector": Attribute<string | number, ["feDisplacementMap"]>;
        "href": Attribute<string | number, ["a", "image", "linearGradient", "pattern", "radialGradient", "script", "textPath", "use", "feImage"]>;
        "y": Attribute<string | number, ["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feFlood", "feGaussianBlur", "feImage", "feMerge", "feMorphology", "feOffset", "feSpecularLighting", "feTile", "feTurbulence", "fePointLight", "feSpotLight", "filter", "mask", "pattern", "text", "tspan"]>;
        "y1": Attribute<string | number, ["line", "linearGradient"]>;
        "y2": Attribute<string | number, ["line", "linearGradient"]>;
        "yChannelSelector": Attribute<string | number, ["feDisplacementMap"]>;
        "z": Attribute<string | number, ["fePointLight", "feSpotLight"]>;
        "zoomAndPan": Attribute<string | number, ["svg", "view"]>;
    }

    type SVGElementProps<T = {}> = Partial<PresentationAttributes & T>;

    type SVGAttributeFor<K> = WithChildren<
        SVGElementProps<{
            [A in keyof SVGAttributes as K extends SVGAttributes[A][1] ? A : never]: SVGAttributes[A][0];
        }>
    >;

    type SVGElements = {
        [K in keyof SVGElementTagNameMap as `svg:${K}`]: SVGAttributeFor<K> & SVGEvents<SVGElementTagNameMap[K]>;
    };

    interface IntrinsicElements extends HTMLElements, SVGElements {
        "fortis-fragment": WithChildren<{}>;
    }

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
        <K extends keyof HTMLElementTagNameMap>(tag: K, props: HTMLAttributeFor<K>, ...children: FortisNode[]): HTMLElementTagNameMap[K];
        <K extends keyof SVGElementTagNameMap>(tag: `svg:${K}`, props: SVGAttributeFor<K>, ...children: FortisNode[]): SVGElementTagNameMap[K];
        <R extends Element, P>(tag: (props: P) => R, props: P, ...children: FortisNode[]): R;
        <P>(tag: ComponentClass<P>, props: P, ...children: FortisNode[]): Element;
        (tag: `fortis-${string}`, props: HTMLElementProps, ...children: FortisNode[]): Element;
    }

    interface Element extends globalThis.Element, ElementCSSInlineStyle, HTMLOrSVGElement {}

    type Tag =
        | string
        | ((props: Record<string, unknown>) => Element)
        | (ComponentClass<any>);
    type FortisNode = Node | string | number | boolean | null | undefined | FortisNode[];
}