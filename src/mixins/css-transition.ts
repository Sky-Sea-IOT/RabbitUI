interface Config {
    enterCls?: string; // 进场动画
    leaveCls?: string; // 出场动画
    inOrOut?: string; // 进场或者出场
    rmCls?: boolean; // 动画结束后是否移除动画类名
    timeout?: number; // 过渡效果的持续时间
    hiddenParent?: any; // 是否将父元素一起隐藏
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function CssTransition(elem: any, options: Config): void {
    if (options.inOrOut === 'in') {
        // 显示元素
        if (options.hiddenParent) {
            options.hiddenParent.style.display = '';
            options.hiddenParent.style.opacity = '1';
        }

        if (elem.style.display === 'none') elem.style.display = '';
        if (elem.style.opacity === '0') elem.style.opacity = '1';

        setTimeout(() => {
            elem.classList.add(options.enterCls);
        }, 0);
    } else if (options.inOrOut === 'out') {
        elem.classList.contains(options.enterCls)
            ? elem.classList.replace(options.enterCls, options.leaveCls)
            : elem.classList.add(options.leaveCls);

        if (options.rmCls) {
            setTimeout(() => {
                elem.classList.remove(options.leaveCls);
            }, options.timeout);
        }

        // 过渡效果持续时间后隐藏元素
        setTimeout(() => {
            if (options.hiddenParent) options.hiddenParent.style.display = 'none';
            elem.style.opacity = '0';
        }, options.timeout);
    }
}
