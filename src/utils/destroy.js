import { warn, CssTransition } from '../mixins';
export function destroyElem(elem, _a) {
    var _b = _a.fadeOut, fadeOut = _b === void 0 ? false : _b, clsLeave = _a.clsLeave, clsEnter = _a.clsEnter, _c = _a.duration, duration = _c === void 0 ? 3 : _c, _d = _a.transitionTime, transitionTime = _d === void 0 ? 250 : _d, _e = _a.destroy, destroy = _e === void 0 ? true : _e;
    var timer = null;
    // 方式一：是否只用淡出效果
    if (fadeOut) {
        isDismiss();
        CssTransition(elem, {
            inOrOut: 'out',
            enterCls: 'rab-fade-in',
            leaveCls: 'rab-fade-out',
            timeout: 250
        });
        return;
    }
    // 方式二：手动配置过渡效果和过渡时间
    timer = setTimeout(function () {
        isDismiss();
        CssTransition(elem, {
            inOrOut: 'out',
            enterCls: clsEnter,
            leaveCls: clsLeave,
            timeout: transitionTime
        });
    }, duration * 1000);
    // 自动关闭的延时为 0 则不关闭
    duration <= 0 ? clearTimeout(timer) : timer;
    // 判断需要销毁或者是仅隐藏元素
    function isDismiss() {
        setTimeout(function () {
            if (destroy) {
                elem.remove();
                elem = null; // 释放内存
            }
        }, transitionTime);
    }
}
export function destroyElemByKey(options) {
    var prefixKey = options.prefixKey;
    var key = options.key;
    // 统一转换为字符串
    typeof key !== 'string' ? (key = key === null || key === void 0 ? void 0 : key.toString()) : key;
    // 传入的key是否选取得到对应的元素
    var target = document.querySelector("[" + prefixKey + "-key=\"" + key + "\"]");
    target ? destroyElem(target, options) : warn("The key value is invalid --> \"" + key + "\"");
}
