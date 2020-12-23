import { warn } from './warn';

const typeOf = (value: any) => {
  const s = Object.prototype.toString.call(value);
  // @ts-ignore
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

const errMsg = (right: string, wrong: string) => {
  warn(
    `The expected type accepted is a ${right}, but the current error type is a ${wrong}`
  );
  return;
};

export const isUndef = (value: any) => typeof value === 'undefined';

export const isDef = (value: any) => typeof value !== 'undefined';

export const isStr = (str: any) => {
  return typeof str === 'string' ? true : errMsg('string', typeOf(str));
};

export const isBol = (bol: any) => {
  return typeof bol === 'boolean' ? true : errMsg('boolean', typeOf(bol));
};

export const isFn = (fn: any) => {
  return typeof fn === 'function' ? fn() : errMsg('function', typeOf(fn));
};

export const isObj = (obj: any) => {
  return typeof obj === 'object' ? true : errMsg('object', typeOf(obj));
};

export const isArr = (arr: any) => {
  return arr.constructor === Array ? true : errMsg('array', typeOf(arr));
};
