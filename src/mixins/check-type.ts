import warn from './warn';

const typeOf = (value: any): string => {
  const s = Object.prototype.toString.call(value);
  // @ts-ignore
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

const errMsg = (right: string, wrong: string): boolean => {
  warn(`The expected type accepted is a ${right}, but the current error type is a ${wrong}`);
  return false;
};

export const isUndef = (value: any): boolean => typeof value === 'undefined';

export const isStr = (str: any): boolean => {
  return typeof str === 'string' ? true : errMsg('string', typeOf(str));
};

export const isNum = (num: any): boolean => {
  return typeof num === 'number' ? true : errMsg('number', typeOf(num));
};

export const isBol = (bol: any): boolean => {
  return typeof bol === 'boolean' ? true : errMsg('boolean', typeOf(bol));
};

/**
 *
 * @param fn  函数名
 * @param param 回调附带的参数。有多个参数时使用数组传递
 */
export const isFn = (fn: any, param?: [...any] | any): any => {
  return typeof fn === 'function' ? fn(param) : errMsg('function', typeOf(fn));
};

export const isObj = (obj: any): boolean => {
  return typeof obj === 'object' ? true : errMsg('object', typeOf(obj));
};

export const isArr = (arr: any): boolean => {
  return arr.constructor === Array ? true : errMsg('array', typeOf(arr));
};
