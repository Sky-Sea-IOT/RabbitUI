/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export function getElem(
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

export function removeElem(node: Element): void {
    return node.remove();
}

export function appendElem(
    parent: Element,
    children: Element | Array<Element>
): Element | undefined {
    if (Array.isArray(children)) {
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            appendElem(parent, child);
        }
    } else {
        return parent.appendChild(children);
    }
}

export function getAttr(node: Element, value: string): string {
    return node.getAttribute(value) || '';
}

export function setAttr(node: Element, attrName: string, value: string): void {
    return node.setAttribute(attrName, value);
}

export function setCss(node: Element | HTMLElement | any, styeName: string, value: string): string {
    return (node.style[styeName] = value);
}

export function dataset(node: HTMLElement | any, key: string, value?: any): any {
    if (value) {
        return (node.dataset[key] = value);
    } else {
        return node.dataset[key];
    }
}

export function html(node: Element, value?: string): string {
    if (value) {
        return (node.innerHTML = value);
    } else {
        return node.innerHTML;
    }
}

export function text(node: Element, value?: string): string {
    if (value) {
        return (node.textContent = value);
    } else {
        return node.textContent || '';
    }
}
