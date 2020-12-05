//数据类型判断
function _typeof(data) {
    const s = Object.prototype.toString.call(data);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
}

function isStr(s) {
    return typeof s === 'string';
}

function isUndef(u) {
    return u === undefined;
}

function isNum(n) {
    return typeof n === 'number';
}

function isObj(o) {
    return o.constructor === Object;
}

function isArr(a) {
    return a.constructor === Array;
}

function isFunc(f) {
    return typeof f === 'function';
}

// export { _typeof, isStr, isUndef, isNum, isObj, isArr, isFunc };