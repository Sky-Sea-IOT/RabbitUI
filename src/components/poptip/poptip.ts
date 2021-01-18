import PREFIX from '../prefix';
import {
    $el,
    createElem,
    getBooleanTypeAttr,
    getNumTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setCss,
    setHtml
} from '../../dom-utils';
import { updateArrow, _newCreatePopper } from '../../mixins/tooltip';
import { CssTransition, Popper, warn } from '../../mixins';
import { type, validComps } from '../../utils';

interface PoptipAttrs {
    width: number;
    offset: number;
    title: string;
    okText: string;
    content: string;
    trigger: string;
    padding: string;
    placement: string;
    cancelText: string;
    isDisabled: boolean;
    isWordWrap: boolean;
    isConfirm: boolean;
}

interface PoptipEvents {
    onShow: () => void; // 提示框显示时触发
    onHide: () => void; // 提示框消失时触发
    onOk: () => void; // 点击确定的回调
    onCancel: () => void; // 点击取消的回调
}

interface PublicMethods {
    config(
        el: string
    ): {
        title: string | number; // 显示的标题
        content: string | number; // 显示的正文内容，只在非 confirm 模式下有效
        events: (options: PoptipEvents) => void;
    };
}

let poptipShowTimer: any;
let poptipEvTimer: any;

class Poptip {
    readonly VERSION: string;
    readonly components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = $el('r-poptip', { all: true });
        this._create(this.components);
    }

    public config(
        el: string
    ): {
        title: string | number;
        content: string | number;
        events: (options: PoptipEvents) => void;
    } {
        const target = $el(el);

        validComps(target, 'poptip');

        let PoptipTitle: any;

        const PoptipNMTitle = target.querySelector(`.${PREFIX.poptip}-title-inner`);
        const PoptipConfirmTitle = target.querySelector(`.${PREFIX.poptip}-body-message`);

        if (PoptipNMTitle) {
            PoptipTitle = PoptipNMTitle;
        } else {
            PoptipTitle = PoptipConfirmTitle;
        }

        const PoptipContent = target.querySelector(`.${PREFIX.poptip}-body-content-inner`);

        return {
            get title() {
                return setHtml(PoptipTitle);
            },
            set title(newVal) {
                if (type.isStr(newVal) || type.isNum(newVal)) setHtml(PoptipTitle, newVal);
            },
            get content() {
                return setHtml(PoptipContent);
            },
            set content(newVal) {
                if (type.isStr(newVal) || type.isNum(newVal)) setHtml(PoptipContent, newVal);
            },
            events({ onShow, onHide, onOk, onCancel }) {
                //
            }
        };
    }

    private _create(nodes: NodeListOf<Element>): void {
        nodes.forEach((node, i) => {
            this._createPoptipNodes(node, i);
            removeAttrs(node, [
                'width',
                'title',
                'content',
                'ok-text',
                'trigger',
                'confirm',
                'padding',
                'disabled',
                'placement',
                'word-wrap',
                'cancel-text'
            ]);
        });
    }

    private _createPoptipNodes(node: Element, i: number): void {
        const uid = `poptip${i}`;

        const referenceElem = node.firstElementChild!;
        const PoptipRel = createElem('div');

        PoptipRel.className = `${PREFIX.poptip}-rel`;
        PoptipRel.appendChild(referenceElem);

        const attrs = this.attrs(node);

        const confirmType = attrs.isConfirm ? `${PREFIX.poptip}-confirm` : '';
        node.className = confirmType;

        const whatAppearance = attrs.isConfirm ? this._confirmTpl(attrs) : this._normalTpl(attrs);

        const template = `
            <div class="${PREFIX.poptip}-popper" x-placement=${attrs.placement} data-poptip-uid=${uid}>
                <div class="${PREFIX.poptip}-content">
                    <div class="${PREFIX.poptip}-arrow"></div>
                    <div class="${PREFIX.poptip}-inner">${whatAppearance}</div>
                </div>
            </div>
        `;

        setHtml(node, template);

        this._setWidth(attrs, uid);

        const Popper = document.querySelector(`[data-poptip-uid=${uid}]`)!;

        Popper?.before(PoptipRel);

        // 初始化 display
        setCss(Popper, 'display', 'none');

        // @ts-ignore
        updateArrow(Popper, 'scroll');

        if (!attrs.isDisabled) {
            // @ts-ignore
            this._triggerDisplay(attrs.trigger, node, PoptipRel, Popper, attrs);
        }
    }

    private _normalTpl(attrs: PoptipAttrs): string {
        const isShowTitle =
            !attrs.isWordWrap && attrs.title
                ? `<div class="${PREFIX.poptip}-title">
                      <div class="${PREFIX.poptip}-title-inner">${attrs.title}</div>
                   </div>`
                : '';

        const template = `
            ${isShowTitle}
            <div class="${PREFIX.poptip}-body">
                <div class="${PREFIX.poptip}-body-content">
                <div class="${PREFIX.poptip}-body-content-inner">${attrs.content}</div>
                </div>
            </div>
            `;

        return template;
    }

    private _confirmTpl(attrs: PoptipAttrs): string {
        const template = `
          <div class="${PREFIX.poptip}-body">
              <i class="${PREFIX.icon} ${PREFIX.icon}-ios-help-circle"></i>
              <div class="${PREFIX.poptip}-body-message">${attrs.title}</div>
          </div>
          <div class="${PREFIX.poptip}-footer">
              <button class="${PREFIX.button} ${PREFIX.button}-text ${PREFIX.button}-sm">${attrs.cancelText}</button>
              <button class="${PREFIX.button} ${PREFIX.button}-primary ${PREFIX.button}-sm">${attrs.okText}</button>
          </div>
      `;

        return template;
    }

    private _setWidth(attrs: PoptipAttrs, uid: string): void {
        const popper = document.querySelector(`[data-poptip-uid=${uid}]`);
        if (attrs.width) {
            setCss(popper, 'width', `${attrs.width}px`);
        }

        if (attrs.isWordWrap) {
            const popperContent = popper?.querySelector(`.${PREFIX.poptip}-body-content`);
            popperContent?.classList.add(`${PREFIX.poptip}-body-content-word-wrap`);
        }
    }

    private _triggerDisplay(
        trigger: string,
        parent: HTMLElement,
        referenceChild: HTMLElement,
        popper: Element | any,
        poptipAttrs: PoptipAttrs
    ): void {
        if (trigger !== 'click' && trigger !== 'hover' && trigger !== 'focus') {
            warn(`The Poptip attribute trigger got an invalid trigger mode --> '${trigger}'`);
            return;
        }

        const { _initPoptip } = this;

        const common = {
            rmCls: true,
            enterCls: 'zoom-big-fast-enter',
            leaveCls: 'zoom-big-fast-leave',
            timeout: 200
        };

        const showEv = () => {
            popper.dataset.poptipShow = 'true';

            CssTransition(popper, {
                inOrOut: 'in',
                ...common
            });

            _initPoptip(parent, popper, poptipAttrs);
        };

        const hideEv = () => {
            popper.dataset.poptipShow = 'false';

            CssTransition(popper, {
                inOrOut: 'out',
                ...common
            });
        };

        const judgmentIsVisible = () =>
            popper.dataset.poptipShow === 'true' ? hideEv() : showEv();

        if (trigger === 'click' || trigger === 'focus') {
            Popper.updateArrow(popper, trigger, parent);
        }

        if (trigger === 'click') {
            referenceChild.addEventListener('click', judgmentIsVisible);
        } else if (trigger === 'hover') {
            const defalutDelay = 100;

            parent.addEventListener('mouseenter', () => {
                poptipShowTimer = setTimeout(() => {
                    showEv();
                }, defalutDelay);
            });

            Popper.updateArrow(popper, 'mouseenter', parent, defalutDelay);

            parent.addEventListener('mouseleave', () => {
                clearTimeout(poptipShowTimer);
                hideEv();
            });
        } else if (trigger === 'focus') {
            referenceChild.addEventListener('mousedown', judgmentIsVisible);
            referenceChild.addEventListener('mouseup', hideEv);
        }
    }

    private _initPoptip(reference: Element, popper: Element | any, poptipAttrs: PoptipAttrs): any {
        const NCP = _newCreatePopper(reference, popper, poptipAttrs.placement, poptipAttrs.offset);
        return NCP;
    }

    private attrs(node: Element): PoptipAttrs {
        return {
            // number type
            width: getNumTypeAttr(node, 'width', 0),
            offset: getNumTypeAttr(node, 'offset', 0),
            // string type
            title: getStrTypeAttr(node, 'title', ''),
            okText: getStrTypeAttr(node, 'ok-text', '确定'),
            content: getStrTypeAttr(node, 'content', ''),
            trigger: getStrTypeAttr(node, 'trigger', 'click'),
            padding: getStrTypeAttr(node, 'padding', '8px 16px'),
            placement: getStrTypeAttr(node, 'placement', 'top'),
            cancelText: getStrTypeAttr(node, 'cancel-text', '取消'),
            // boolean type
            isConfirm: getBooleanTypeAttr(node, 'confirm'),
            isDisabled: getBooleanTypeAttr(node, 'disabled'),
            isWordWrap: getBooleanTypeAttr(node, 'word-wrap')
        };
    }
}

export default Poptip;
