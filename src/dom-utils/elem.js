/**
 * 获取元素
 * @param node
 * @param options 选项 all 表示是否获取所有节点
 */
export function $el(node, options) {
    if (options === null || options === void 0 ? void 0 : options.all) {
        return document.querySelectorAll(node);
    }
    else {
        return document.querySelector(node);
    }
}
export function createElem(tagName) {
    return document.createElement(tagName);
}
export function setCss(node, styeName, value) {
    return (node.style[styeName] = value);
}
export function setHtml(node, value) {
    if (value || value === '') {
        return (node.innerHTML = value);
    }
    else {
        return node.innerHTML;
    }
}
export function setText(node, value) {
    if (value || value === '') {
        return (node.textContent = value);
    }
    else {
        return node.textContent || '';
    }
}
// 2021-01-17 新增，在此后的开发才使用，此前的暂不修改
// 通用的标签属性获取方法
// 获取后的值由原先的字符串类型转换成对应类型
// Return String type
export function getStrTypeAttr(node, attrName, defaultVal) {
    return node.getAttribute(attrName) || defaultVal;
}
// Return Boolean type
export function getBooleanTypeAttr(node, attrName) {
    return node.getAttribute(attrName) === 'true';
}
// Return Number type
export function getNumTypeAttr(node, attrName, defaultVal) {
    return Number(node.getAttribute(attrName)) || defaultVal;
}
// Return Array type
export function getArrTypeAttr(node, attrName) {
    var _a;
    var attr = ((_a = node.getAttribute(attrName)) === null || _a === void 0 ? void 0 : _a.replace(/'/g, '"')) || '[]';
    var array = JSON.parse(attr);
    return array;
}
//# sourceMappingURL=elem.js.map