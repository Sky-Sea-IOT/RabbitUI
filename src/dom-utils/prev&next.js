/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function prevAll(el) {
    var Parent = el.parentElement;
    var Child = Parent.children;
    var prevChildren = [];
    var i = 0;
    var length = Child.length;
    for (; i < length; i++) {
        var _child = Child[i];
        if (_child == el) {
            break;
        }
        prevChildren.push(_child);
    }
    return prevChildren;
}
export function nextAll(el) {
    var Parent = el.parentElement;
    var Child = Parent.children;
    var nextChildren = [];
    var length = Child.length;
    var start = 0;
    var i = length - 1;
    for (; i >= start; i--) {
        var _child = Child[i];
        if (_child == el) {
            break;
        }
        nextChildren.unshift(_child);
    }
    return nextChildren;
}
