/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function prevAll(el: Element): Element[] {
    const Parent = el.parentElement;
    const Child = Parent!.children;
    const prevChildren = [];
    for (let i = 0; i < Child.length; i++) {
        const _childI = Child[i];
        if (_childI == el) {
            break;
        }
        prevChildren.push(_childI);
    }
    return prevChildren;
}

export function nextAll(el: Element): Element[] {
    const Parent = el.parentElement;
    const Child = Parent!.children;
    const nextChildren = [];
    for (let i = Child.length - 1; i >= 0; i--) {
        const _childI = Child[i];
        if (_childI == el) {
            break;
        }
        nextChildren.unshift(_childI);
    }
    return nextChildren;
}
