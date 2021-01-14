/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
interface Config {
    enterCls?: string; // 进场动画
    leaveCls?: string; // 出场动画
    inOrOut?: string; // 进场或者出场
    rmCls?: boolean; // 动画结束后是否移除动画类名
    timeout?: number; // 过渡效果的持续时间
    hiddenParent?: any; // 是否将父元素一起隐藏
}

export default function CssTransition(elem: any, options: Config): void {
    const removeClassAfterTransition = (aniClassName: string): void => {
        if (options.rmCls) {
            setTimeout(() => {
                aniClassName ? elem.classList.remove(aniClassName) : '';
            }, options.timeout);
        }
    };

    if (options.inOrOut === 'in') {
        // 如果父元素被隐藏则变为显示
        if (options.hiddenParent) {
            options.hiddenParent.style.display = '';
            options.hiddenParent.style.opacity = '1';
        }

        if (elem.style.display === 'none') elem.style.display = '';
        if (elem.style.opacity === '0') elem.style.opacity = '1';

        elem.classList.add(options.enterCls);

        removeClassAfterTransition(options.enterCls!);
    } else if (options.inOrOut === 'out') {
        if (elem.classList.contains(options.enterCls)) {
            elem.classList.replace(options.enterCls, options.leaveCls);
        } else {
            elem.classList.add(options.leaveCls);
        }

        removeClassAfterTransition(options.leaveCls!);

        // 过渡效果持续时间后隐藏元素
        setTimeout(() => {
            if (options.hiddenParent) options.hiddenParent.style.display = 'none';
            elem.style.display = 'none';
            elem.style.opacity = '0';
        }, options.timeout);
    }
}
