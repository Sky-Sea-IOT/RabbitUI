import { type } from '.';

interface Options {
  key?: string | number;
  fadeOut?: boolean;
  clsLeave?: string;
  clsEnter?: string;
  cb?: Function;
  destroy?: true;
}

export const destroyElem = (
  elem: any,
  {
    fadeOut = false,
    clsLeave,
    clsEnter,
    cb = () => {},
    destroy = true,
  }: Options
) => {
  if (fadeOut) {
    elem.classList.add('rab-fade-out');
    elem.classList.remove('rab-fade-in');
  } else {
    elem.classList.add(clsLeave);
    if (elem.classList.contains(clsEnter)) {
      elem.classList.remove(clsEnter);
    }
  }
  setTimeout(() => {
    if (destroy) {
      elem.remove();
      // 释放内存
      elem = null;
    }
    type.isFn(cb);
  }, 300);
};

export const destroyElemByKey = (config: Options, options: {}) => {
  const target = document.querySelector('[data-el-key]');
  //@ts-ignore
  const targetKey = target.dataset.elKey;

  config.key = config.key?.toString();
  if (config.key === targetKey) {
    destroyElem(target, options);
  }
};
