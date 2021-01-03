import { warn } from '.';

interface Options {
  key?: string | number;
  prefixKey?: string;
  fadeOut?: boolean;
  clsLeave?: string;
  clsEnter?: string;
  destroy?: true;
  duration?: number;
}

export const destroyElem = (
  elem: any,
  { fadeOut = false, clsLeave, clsEnter, duration = 3, destroy = true }: Options
) => {
  let timer = null;

  // 是否选择淡出效果
  if (fadeOut) {
    elem.classList.add('rab-fade-out');
    elem.classList.remove('rab-fade-in');
  }

  // 自动关闭
  timer = setTimeout(() => {
    // 追加出场动画
    elem.classList.contains(clsEnter!) ? elem.classList.remove(clsEnter!) : '';
    elem.classList.add(clsLeave!);

    // 销毁或仅隐藏元素
    setTimeout(() => {
      if (destroy) {
        elem.remove();
        // @ts-ignore
        elem = null;
      }
    }, 250);
  }, duration * 1000);

  // 自动关闭的延时为 0 则不关闭
  duration <= 0 ? clearTimeout(timer) : timer;
};

export const destroyElemByKey = (options: Options) => {
  let { key, prefixKey } = options;
  // 统一转换为字符串
  typeof key !== 'string' ? (key = key!.toString()) : key;

  const target = document.querySelector(`[${prefixKey}-key="${key}"]`);
  // 传入的key是否选取得到对应的元素
  target ? destroyElem(target, options) : warn(`The key value is invalid --> "${key}"`);
};
