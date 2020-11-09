//数据类型判断
const _typeof = (data) => {
    const s = Object.prototype.toString.call(data);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

const isStr = (s) => typeof s === "string";

const isUndef = (u) => u === undefined;

const isNum = (n) => typeof n === "number";

const isObj = (o) => o.constructor === Object;

const isArr = (a) => a.constructor === Array;

const isFunc = (f) => typeof f === "function";

// export { _typeof, isStr, isUndef, isNum, isObj, isArr, isFunc };