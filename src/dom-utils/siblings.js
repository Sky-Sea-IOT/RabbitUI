// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function siblings(elem) {
    var r = [];
    var n = elem.parentNode.firstChild;
    for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem) {
            r.push(n);
        }
    }
    return r;
}
//# sourceMappingURL=siblings.js.map