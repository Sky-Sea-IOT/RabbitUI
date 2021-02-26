export default function siblings(elem) {
    var _a;
    var r = [];
    var n = (_a = elem.parentNode) === null || _a === void 0 ? void 0 : _a.firstChild;
    for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem) {
            r.push(n);
        }
    }
    return r;
}
