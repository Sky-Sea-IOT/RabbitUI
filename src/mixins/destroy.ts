import { type, warn } from '.';

interface Options {
  key?: string | number;
  prefixKey?: string;
  fadeOut?: boolean;
  clsLeave?: string;
  clsEnter?: string;
  cb?: Function;
  destroy?: true;
  duration?: number;
}

export const destroyElem = (
  elem: any,
  { fadeOut = false, clsLeave, clsEnter, cb = () => {}, duration = 3, destroy = true }: Options
) => {
  let timer = null;
  // 是否选择淡出效果
  if (fadeOut) {
    elem.classList.add('rab-fade-out');
    elem.classList.remove('rab-fade-in');
  }
  // 销毁或仅隐藏元素
  timer = setTimeout(() => {
    if (elem.classList.contains(clsEnter)) elem.classList.remove(clsEnter);
    elem.classList.add(clsLeave);
    setTimeout(() => {
      if (destroy) {
        elem.remove();
        // 释放内存
        elem = null;
      }
    }, 250);
    type.isFn(cb);
  }, duration * 1000);
  // 自动关闭的延时为 0 则不关闭
  duration <= 0 ? clearTimeout(timer) : timer;
};

export const destroyElemByKey = (options: Options) => {
  let { key, prefixKey } = options;

  // 统一转换为字符串
  typeof key !== 'string' ? (key = key!.toString()) : key;

  // 传入的key是否选取得到对应的元素
  const target = document.querySelector(`[${prefixKey}-key="${key}"]`);

  if (target) {
    destroyElem(target, options);
  } else {
    warn(`The key value is invalid --> "${key}"`);
  }
};
