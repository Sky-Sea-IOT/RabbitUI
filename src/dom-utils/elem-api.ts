/**
 * 获取元素
 * @param node
 * @param options 选项 all 表示是否获取所有节点
 */
export function $el(
    node: string | Element | any,
    options?: { all: boolean }
): Element | HTMLElement | null | NodeListOf<any> | NodeListOf<Element> {
    if (options?.all) {
        return document.querySelectorAll(node);
    } else {
        return document.querySelector(node);
    }
}

export function createElem(tagName: string): HTMLElement {
    return document.createElement(tagName);
}

export function setCss(node: Element | HTMLElement | any, styeName: string, value: string): string {
    return (node.style[styeName] = value);
}

export function setHtml(node: Element, value?: string): string {
    if (value) {
        return (node.innerHTML = value);
    } else {
        return node.innerHTML;
    }
}

export function setText(node: Element, value?: string): string {
    if (value) {
        return (node.textContent = value);
    } else {
        return node.textContent || '';
    }
}
