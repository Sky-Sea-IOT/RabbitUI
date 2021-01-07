import { warn } from '.';
import CssTransition from './css-transition';

interface Options {
    key?: string | number;
    prefixKey?: string;
    fadeOut?: boolean;
    clsLeave?: string;
    clsEnter?: string;
    destroy?: boolean;
    duration?: number;
    transitionTime?: number;
}

export function destroyElem(
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    elem: any,
    {
        fadeOut = false,
        clsLeave,
        clsEnter,
        duration = 3,
        transitionTime = 0.25,
        destroy = true
    }: Options
): void {
    let timer = null;

    function dismiss() {
        // 销毁或仅隐藏元素
        setTimeout(() => {
            if (destroy) {
                elem.remove();
                // @ts-ignore
                elem = null; // 释放内存
            }
        }, transitionTime * 900);
    }

    // 方式一：是否只用淡出效果
    if (fadeOut) {
        dismiss();

        CssTransition(elem, {
            inOrOut: 'out',
            enterCls: 'rab-fade-in',
            leaveCls: 'rab-fade-out',
            timeout: 250
        });
        return;
    }

    // 方式二：手动
    timer = setTimeout(() => {
        dismiss();

        CssTransition(elem, {
            inOrOut: 'out',
            enterCls: clsEnter,
            leaveCls: clsLeave,
            timeout: 0
        });
    }, duration * 1000);

    // 自动关闭的延时为 0 则不关闭
    duration <= 0 ? clearTimeout(timer) : timer;
}

export function destroyElemByKey(options: Options): void {
    const { prefixKey } = options;
    let { key } = options;
    // 统一转换为字符串
    typeof key !== 'string' ? (key = key?.toString()) : key;
    // 传入的key是否选取得到对应的元素
    const target = document.querySelector(`[${prefixKey}-key="${key}"]`);
    target ? destroyElem(target, options) : warn(`The key value is invalid --> "${key}"`);
}
