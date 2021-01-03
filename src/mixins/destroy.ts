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

export function destroyElem(
  elem: any,
  { fadeOut = false, clsLeave, clsEnter, duration = 3, destroy = true }: Options
): void {
  let timer = null;

  // 方式一：是否只用淡出效果
  if (fadeOut) {
    elem.classList.add('rab-fade-out');
    elem.classList.remove('rab-fade-in');
    setTimeout(() => (elem.style.display = 'none'), 250);
    ismiss();
    return;
  }

  // 方式二：手动
  timer = setTimeout(() => {
    // 追加出场动画
    elem.classList.add(clsLeave!);
    elem.classList.contains(clsEnter!) ? elem.classList.remove(clsEnter!) : '';
    ismiss();
  }, duration * 1000);

  function ismiss() {
    // 销毁或仅隐藏元素
    setTimeout(() => {
      if (destroy) {
        elem.remove();
        // @ts-ignore
        elem = null; // 释放内存
      }
    }, 250);
  }

  // 自动关闭的延时为 0 则不关闭
  duration <= 0 ? clearTimeout(timer) : timer;
}

export function destroyElemByKey(options: Options): void {
  let { key, prefixKey } = options;
  // 统一转换为字符串
  typeof key !== 'string' ? (key = key!.toString()) : key;
  // 传入的key是否选取得到对应的元素
  const target = document.querySelector(`[${prefixKey}-key="${key}"]`);
  target ? destroyElem(target, options) : warn(`The key value is invalid --> "${key}"`);
}
