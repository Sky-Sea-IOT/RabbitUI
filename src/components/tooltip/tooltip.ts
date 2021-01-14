import { createPopper } from '@popperjs/core';
import PREFIX from '../prefix';
import { type, validComps } from '../../utils';
import { r, removeAttrs } from '../../dom-utils';
import { CssTransition } from '../../mixins';

interface TooltipEvents {
    onShow?: () => void;
    onHide?: () => void;
}

interface PublicMethods {
    config(
        el: string
    ): {
        content: string; // 显示的内容
        events: (options: TooltipEvents) => void; // Tooltip 事件
    };
}

let tooltipHoverShowTimer: any;
let tooltipEvTimer: any;

class Tooltip implements PublicMethods {
    readonly VERSION: string;
    readonly components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = r.getElem('r-tooltip', { all: true });
        this._create(this.components);
    }

    public config(
        el: string
    ): {
        content: string;
        events: (options: TooltipEvents) => void;
    } {
        const target: any = r.getElem(el);

        validComps(target, 'tooltip');

        const { _getDelay, _getIsAlways, _getIsDisabled } = Tooltip.prototype;

        const popper = target.querySelector(`.${PREFIX.tooltip}-popper`);
        const popperText = target.querySelector(`.${PREFIX.tooltip}-inner`);

        return {
            get content() {
                return r.text(popperText);
            },
            set content(newVal: string) {
                if (!type.isStr(newVal)) return;

                r.html(popperText, newVal);
            },
            events(options): void {
                if (_getIsAlways(target) || _getIsDisabled(target)) return;

                // 通过设置 popper.dataset.tooltipShow 的方式可以判断提示框是否显示，
                // 并根据设置的值 "true" 和 "false" 来判断是否执行对应回调事件，
                // 避免出现鼠标快速经过但没有显示提示框，却依然执行了提示框消失时触发的回调

                const showEvent = () => {
                    tooltipEvTimer = setTimeout(() => {
                        r.dataset(popper, 'tooltipShow', 'true');

                        options.onShow && type.isFn(options.onShow);
                    }, _getDelay(target));
                };

                const hideEvent = () => {
                    clearTimeout(tooltipEvTimer);

                    if (r.dataset(popper, 'tooltipShow') === 'true') {
                        options.onHide && type.isFn(options.onHide);

                        r.dataset(popper, 'tooltipShow', 'false');
                    }
                };

                target.addEventListener('mouseenter', showEvent);
                target.addEventListener('mouseleave', hideEvent);
            }
        };
    }

    private _create(nodes: NodeListOf<Element>): void {
        nodes.forEach((node) => {
            this._createTooltipNodes(node);
            removeAttrs(node, ['content', 'theme', 'delay', 'max-width', 'disabled', 'always']);
        });
    }

    private _createTooltipNodes(reference: Element): void {
        const TooltipRef = r.createElem('div');
        const TooltipPopper = r.createElem('div');
        const TooltipContent = r.createElem('div');
        const TooltipArrow = r.createElem('div');
        const TooltipInner = r.createElem('div');

        this._setCls(reference, [
            TooltipRef,
            TooltipPopper,
            TooltipContent,
            TooltipArrow,
            TooltipInner
        ]);

        this._setTip(reference, TooltipInner);
        this._setMaxWidth(reference, TooltipInner);

        const disabledShow = this._getIsDisabled(reference);
        const alwaysShow = this._setIsAlwaysShow(reference, TooltipPopper);

        // 如果 tooltip 没有设置为总是可见或者禁用显示，则正常鼠标移入移出事件
        if (!alwaysShow && !disabledShow) {
            this._handleMouse('enter', reference, TooltipPopper);
            this._handleMouse('leave', reference, TooltipPopper);
        }

        // 只选取第一个子元素作为宿主元素
        if (reference.firstElementChild) {
            r.appendElem(TooltipPopper, reference.firstElementChild);
        }

        r.appendElem(TooltipPopper, TooltipContent);
        r.appendElem(TooltipPopper, [TooltipArrow, TooltipInner]);
        r.appendElem(reference, [TooltipRef, TooltipPopper]);
    }

    private __createPopper(reference: Element, popper: HTMLElement): any {
        const offset = this._getOffset(reference);
        const placement = this._getPlacement(reference);

        r.setAttr(popper, 'x-placement', placement);

        return createPopper(reference, popper, {
            placement: placement, // 设置位置
            modifiers: [
                {
                    name: 'computeStyles',
                    options: {
                        gpuAcceleration: false // 不使用GPU加速，使用top/left属性。
                    }
                },
                {
                    name: 'offset',
                    options: {
                        offset: [offset] // 自定义设置出现位置的偏移量
                    }
                }
            ]
        });
    }

    private _handleMouse(event: string, reference: Element, popper: HTMLElement): void {
        const eventListener = () => {
            if (event === 'enter') this.__createPopper(reference, popper);

            CssTransition(popper, {
                inOrOut: event === 'enter' ? 'in' : 'out',
                rmCls: true,
                enterCls: 'zoom-big-fast-enter',
                leaveCls: 'zoom-big-fast-leave',
                timeout: 120
            });
        };

        const delay = this._getDelay(reference);

        if (event === 'enter') {
            reference.addEventListener('mouseenter', () => {
                tooltipHoverShowTimer = setTimeout(() => {
                    eventListener();
                }, delay);
            });
        } else {
            reference.addEventListener('mouseleave', () => {
                clearTimeout(tooltipHoverShowTimer);
                eventListener();
            });
        }
    }

    private _setCls(reference: Element, nodes: HTMLElement[]): void {
        // 获取主题颜色
        const theme = this._getTheme(reference);

        const nodesCls = [
            `${PREFIX.tooltip}-rel`,
            `${PREFIX.tooltip}-popper ${PREFIX.tooltip}-${theme}`,
            `${PREFIX.tooltip}-content`,
            `${PREFIX.tooltip}-arrow`,
            `${PREFIX.tooltip}-inner`
        ];

        // 批量添加样式类名
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            node.className = `${nodesCls[i]}`;
        }
    }

    private _setTip(reference: Element, popper: Element): string {
        return (popper.textContent = this._getTip(reference));
    }

    private _setIsAlwaysShow(reference: Element, popper: HTMLElement): boolean | void {
        const isAlways = this._getIsAlways(reference);

        if (isAlways) {
            r.setCss(popper, 'display', '');

            this.__createPopper(reference, popper);

            return true;
        }

        r.setCss(popper, 'display', 'none');
    }

    private _setMaxWidth(reference: Element, popper: HTMLElement): void {
        const maxWidth = this._getMaxWidth(reference);

        if (maxWidth <= 0) return;

        r.setCss(popper, 'maxWidth', `${maxWidth}px`);

        popper.classList.add(`${PREFIX.tooltip}-inner-width-width`);
    }

    private _getTip(node: Element): string {
        return r.getAttr(node, 'content');
    }

    private _getPlacement(node: Element): any {
        return r.getAttr(node, 'placement') || 'bottom';
    }

    private _getDelay(node: Element): number {
        // 默认 150毫秒的延迟，防止鼠标快速经过时也会显示tooltip
        return Number(r.getAttr(node, 'delay')) || 150;
    }

    private _getIsAlways(node: Element): boolean {
        return r.getAttr(node, 'always') === 'true';
    }

    private _getIsDisabled(node: Element): boolean {
        return r.getAttr(node, 'disabled') === 'true';
    }

    private _getTheme(node: Element): string {
        return r.getAttr(node, 'theme') || 'dark';
    }

    private _getMaxWidth(node: Element): number {
        return Number(r.getAttr(node, 'max-width')) || 0;
    }

    private _getOffset(node: Element): number {
        return Number(r.getAttr(node, 'offset')) || 0;
    }
}

export default Tooltip;
