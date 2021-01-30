/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import warn from '../mixins/warn';
var typeOf = function (r) {
    var s = Object.prototype.toString.call(r);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};
var errMsg = function (right, wrong) {
    warn("The expected type accepted is " + right + ", but the error type currently in use is --> " + wrong);
    return false;
};
export var isUndef = function (r) { return typeof r === 'undefined'; };
export var isStr = function (r) {
    return typeof r === 'string' ? true : errMsg('string', typeOf(r));
};
export var isNum = function (r) {
    return typeof r === 'number' ? true : errMsg('number', typeOf(r));
};
export var isBol = function (r) {
    return typeof r === 'boolean' ? true : errMsg('boolean', typeOf(r));
};
/**
 *
 * @param r  函数名
 * @param param 回调附带的参数。有多个参数时使用数组传递
 */
export var isFn = function (r, param) {
    return typeof r === 'function' ? r(param) : errMsg('function', typeOf(r));
};
export var isObj = function (r) {
    return r.constructor === Object ? true : errMsg('object', typeOf(r));
};
export var isArr = function (r) {
    return r.constructor === Array ? true : errMsg('array', typeOf(r));
};
//# sourceMappingURL=check-type.js.map