import PREFIX from '../prefix';
import {
    $el,
    getBooleanTypeAttr,
    getNumTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setCss
} from '../../dom-utils';

interface PoptipAPI {
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

class Poptip implements PublicMethods {
    readonly VERSION: string;
    readonly components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = $el('r-poptip', { all: true });
        this._create(this.components);
    }

    public config(el: string) {}

    private _api(node: Element): PoptipAPI {
        return {
            // number type
            width: getNumTypeAttr(node, 'width', 0),
            offset: getNumTypeAttr(node, 'offset', 0),
            // string type
            title: getStrTypeAttr(node, 'title', 'click'),
            okText: getStrTypeAttr(node, 'ok-text', '确定'),
            content: getStrTypeAttr(node, 'content', ''),
            trigger: getStrTypeAttr(node, 'trigger', ''),
            padding: getStrTypeAttr(node, 'padding', '8px 16px'),
            placement: getStrTypeAttr(node, 'placement', 'top'),
            cancelText: getStrTypeAttr(node, 'cancel-text', '取消'),
            // boolean type
            isDisabled: getBooleanTypeAttr(node, 'disabled'),
            isWordWrap: getBooleanTypeAttr(node, 'word-wrap'),
            isConfirm: getBooleanTypeAttr(node, 'confirm')
        };
    }

    private _create(nodes: NodeListOf<Element>): void {
        nodes.forEach((node, i) => {
            this._createChildren(node, i);
            removeAttrs(node, [
                'title',
                'content',
                'trigger',
                'ok-text',
                'cancel-text',
                'padding',
                'placement',
                'disabled',
                'word-wrap',
                'confirm'
            ]);
        });
    }

    private _createChildren(node: Element, i: number): void {
        const uid = `poptip${i}`;

        const referenceElem = node.firstElementChild!;
        const PoptipRel = document.createElement('div');

        PoptipRel.className = `${PREFIX.poptip}-rel`;
        PoptipRel.appendChild(referenceElem);

        const api = this._api(node);

        const confirmType = api.isConfirm ? `${PREFIX.poptip}-confirm` : '';
        node.className = confirmType;

        const whatAppearance = api.isConfirm ? this.confirmType(api) : this.normalType(api);

        const template = `
            <div class="${PREFIX.poptip}-popper" data-poptip-uid=${uid}>
                <div class="${PREFIX.poptip}-content">
                    <div class="${PREFIX.poptip}-arrow"></div>
                    <div class="${PREFIX.poptip}-inner">${whatAppearance}</div>
                </div>
            </div>
        `;

        node.innerHTML = template;

        const popper = document.querySelector(`[data-poptip-uid=${uid}]`);

        popper?.before(PoptipRel);

        this._setWidth(api, uid);
    }

    private normalType(api: PoptipAPI): string {
        const template = `
         <div class="${PREFIX.poptip}-title">
             <div class="${PREFIX.poptip}-title-inner">${api.title}</div>
         </div>
         <div class="${PREFIX.poptip}-body">
             <div class="${PREFIX.poptip}-body-content">
               <div class="${PREFIX.poptip}-body-content-inner">${api.content}</div>
             </div>
         </div>
         `;

        return template;
    }

    private confirmType(api: PoptipAPI): string {
        const template = `
        <div class="${PREFIX.poptip}-body">
            <i class="${PREFIX.icon} ${PREFIX.icon}-ios-help-circle"></i>
                <div class="${PREFIX.poptip}-body-message">${api.title}</div>
            </div>
            <div class="${PREFIX.poptip}-footer">
                <button class="${PREFIX.button} ${PREFIX.button}-text ${PREFIX.button}-sm">${api.okText}</button>
                <button class="${PREFIX.button} ${PREFIX.button}-primary ${PREFIX.button}-sm">${api.cancelText}</button>
            </div>
         </div>
      `;

        return template;
    }

    private _setWidth(api: PoptipAPI, uid: string): void {
        const popper = document.querySelector(`[data-poptip-uid=${uid}]`);
        if (api.width) {
            setCss(popper, 'width', `${api.width}px`);
        }

        if (api.isWordWrap) {
            const popperTitle = popper?.querySelector(`.${PREFIX.poptip}-title`);
            const popperContent = popper?.querySelector(`.${PREFIX.poptip}-body-content`);

            popperTitle?.remove();
            popperContent?.classList.add(`${PREFIX.poptip}-body-content-word-wrap`);
        }
    }
}

export default Poptip;
