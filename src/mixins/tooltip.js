import { createPopper } from '@popperjs/core';
import { bind, unbind } from '../dom-utils';
import { type } from '../utils';
export function _newCreatePopper(reference, popper, placement, offset) {
    return createPopper(reference, popper, {
        placement: placement,
        modifiers: [
            {
                name: 'computeStyles',
                options: {
                    gpuAcceleration: false // 使用top/left属性。否则会和弹出器动画冲突
                }
            },
            {
                name: 'computeStyles',
                options: {
                    adaptive: false // 避免重新计算弹出器位置从而造成位置牛头不对马嘴
                }
            },
            {
                name: 'offset',
                options: {
                    offset: [offset] // 自定义弹出器出现位置的偏移量
                }
            }
        ]
    });
}
export function handleHoverShowAndHideEvents(_a) {
    var reference = _a.reference, popper = _a.popper, datasetVal = _a.datasetVal, showCb = _a.showCb, hideCb = _a.hideCb, delay = _a.delay, timer = _a.timer;
    bind(reference, 'mouseenter', function () {
        timer = setTimeout(function () {
            showEv();
        }, delay);
    });
    bind(reference, 'mouseleave', hideEv);
    // 通过设置 popper.dataset.tooltipShow 的方式可以判断提示框是否显示，
    // 并根据设置的值 "true" 和 "false" 来判断是否执行对应回调事件，
    // 避免出现鼠标快速经过但没有显示提示框，却依然执行了提示框消失时触发的回调
    function showEv() {
        popper.dataset[datasetVal] = 'show';
        showCb && type.isFn(showCb);
    }
    function hideEv() {
        clearTimeout(timer);
        if (popper.dataset[datasetVal] === 'show') {
            popper.dataset[datasetVal] = 'hide';
            hideCb && type.isFn(hideCb);
        }
        unbind(reference, 'mouseenter', showEv);
    }
}
//# sourceMappingURL=tooltip.js.map