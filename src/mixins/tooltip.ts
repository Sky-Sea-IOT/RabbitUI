import { createPopper } from '@popperjs/core';
import { type } from '../utils';

export function _newCreatePopper(
    reference: Element,
    popper: HTMLElement,
    placement: string | any,
    offset: number
): any {
    return createPopper(reference, popper, {
        placement: placement, // 设置位置
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

export function updateArrow(
    popper: HTMLElement,
    event: string,
    reference?: Element,
    delay?: number
): void {
    const setArrow = () => {
        const xPlacement = popper.getAttribute('x-placement');
        const { popperPlacement } = popper.dataset;

        if (popperPlacement) {
            if (xPlacement === popperPlacement) return;
            popper.setAttribute('x-placement', popperPlacement);
        }
    };

    const eventUpdates = () => {
        if (event === 'scroll') {
            window.addEventListener(event, setArrow);
        } else if (event === 'mouseenter') {
            if (reference) {
                reference.addEventListener(event, () => {
                    setTimeout(() => {
                        setArrow();
                    }, delay);
                });
            }
        }
    };

    setArrow();
    eventUpdates();
}

export function handleShowAndHideEvents({
    reference,
    popper,
    datasetVal,
    showCb,
    hideCb,
    delay,
    timer
}: {
    reference: Element;
    popper: Element | any;
    datasetVal: string;
    showCb: any;
    hideCb: any;
    delay: number;
    timer: any;
}): void {
    reference.addEventListener('mouseenter', () => {
        timer = setTimeout(() => {
            listener1();
        }, delay);
    });

    reference.addEventListener('mouseleave', listener2);

    // 通过设置 popper.dataset.tooltipShow 的方式可以判断提示框是否显示，
    // 并根据设置的值 "true" 和 "false" 来判断是否执行对应回调事件，
    // 避免出现鼠标快速经过但没有显示提示框，却依然执行了提示框消失时触发的回调

    function listener1(): void {
        popper.dataset[datasetVal] = 'true';
        showCb && type.isFn(showCb);
    }

    function listener2(): void {
        clearTimeout(timer);

        if (popper.dataset[datasetVal] === 'true') {
            popper.dataset[datasetVal] = 'false';
            hideCb && type.isFn(hideCb);
        }

        reference.removeEventListener('mouseenter', listener1);
    }
}
