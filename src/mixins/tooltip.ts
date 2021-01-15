import { createPopper } from '@popperjs/core';

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
