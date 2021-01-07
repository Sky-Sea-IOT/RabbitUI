/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import warn from './warn';

const typeOf = (v: any): string => {
    const s = Object.prototype.toString.call(v);
    // @ts-ignore
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

const errMsg = (right: string, wrong: string): boolean => {
    warn(`The expected type accepted is a ${right}, but the current error type is a ${wrong}`);
    return false;
};

export const isUndef = (v: any): boolean => typeof v === 'undefined';

export const isStr = (str: any): boolean =>
    typeof str === 'string' ? true : errMsg('string', typeOf(str));

export const isNum = (num: any): boolean =>
    typeof num === 'number' ? true : errMsg('number', typeOf(num));

export const isBol = (bol: any): boolean =>
    typeof bol === 'boolean' ? true : errMsg('boolean', typeOf(bol));

/**
 *
 * @param fn  函数名
 * @param param 回调附带的参数。有多个参数时使用数组传递
 */
export const isFn = (fn: any, param?: [...any] | any): any =>
    typeof fn === 'function' ? fn(param) : errMsg('function', typeOf(fn));

export const isObj = (obj: any): boolean =>
    typeof obj === 'object' ? true : errMsg('object', typeOf(obj));

export const isArr = (arr: any): boolean =>
    arr.constructor === Array ? true : errMsg('array', typeOf(arr));
