import { type, warn } from '.';

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
  { fadeOut = false, clsLeave, clsEnter, cb = () => {}, destroy = true }: Options
) => {
  // 是否选择淡出效果
  if (fadeOut) {
    elem.classList.add('rab-fade-out');
    elem.classList.remove('rab-fade-in');
  } else {
    elem.classList.add(clsLeave);
    if (elem.classList.contains(clsEnter)) {
      elem.classList.remove(clsEnter);
    }
  }
  // 销毁或仅隐藏元素
  setTimeout(() => {
    if (destroy) {
      elem.remove();
      // 释放内存
      elem = null;
    }
    type.isFn(cb);
  }, 300);
};

export const destroyElemByKey = (options: Options) => {
  // 统一转换为字符串
  options.key = options.key!.toString();
  // 传入的key是否选取得到对应的元素
  const target = document.querySelector(`[data-comp-key="${options.key}"]`);
  if (target) {
    destroyElem(target, options);
  } else {
    warn(`The key value is invalid --${options.key}`);
  }
};
