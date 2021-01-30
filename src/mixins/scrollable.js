import { setCss } from '../dom-utils';
export default function scrollable(_a) {
    var _b = _a.scroll, scroll = _b === void 0 ? false : _b, _c = _a.lock, lock = _c === void 0 ? false : _c, node = _a.node, tagName = _a.tagName;
    // 页面是否可以滚动
    if (!scroll) {
        setCss(document.body, 'paddingRight', '17px');
    }
    else {
        setCss(document.body, 'paddingRight', '');
    }
    // 是否禁止对页面滚动条的修改
    if (!lock) {
        setCss(document.body, 'overflow', 'hidden');
    }
    else {
        setCss(document.body, 'overflow', '');
    }
    var prevNode = node === null || node === void 0 ? void 0 : node.previousElementSibling;
    // 解决抽屉或对话框组件在同时打开多个的情况下，只关闭了一个窗口而页面滚动条恢复出现的bug
    if (prevNode) {
        var prevTagName = prevNode.tagName.toLocaleLowerCase().replace(/r-/, '');
        if (prevTagName === tagName) {
            // @ts-ignore
            if (prevNode.dataset[prevTagName + "Visable"] === 'true') {
                scrollable({ scroll: false, lock: false });
            }
        }
    }
}
//# sourceMappingURL=scrollable.js.map