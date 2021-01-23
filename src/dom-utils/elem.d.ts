export declare function $el(node: string | Element | any, options?: {
    all: boolean;
}): Element | HTMLElement | null | NodeListOf<any> | NodeListOf<Element> | any;
export declare function createElem(tagName: string): HTMLElement;
export declare function setCss(node: Element | HTMLElement | any, styeName: string, value: string): string;
export declare function setHtml(node: Element, value?: string): string;
export declare function setText(node: Element, value?: string): string;
export declare function getStrTypeAttr(node: Element, attrName: string, defaultVal: string): string | any;
export declare function getBooleanTypeAttr(node: Element, attrName: string): boolean;
export declare function getNumTypeAttr(node: Element, attrName: string, defaultVal: number): number | any;
export declare function getArrTypeAttr(node: Element, attrName: string): Array<string | number>;
