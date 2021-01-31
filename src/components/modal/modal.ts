import PREFIX from '../prefix';
import {
    $el,
    bind,
    getBooleanTypeAttr,
    getNumTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setCss,
    setHtml
} from '../../dom-utils';
import { CssTransition, Scrollable } from '../../mixins';

interface ModalAttrs {
    mask: 'true' | 'false';
    width: string;
    title: string;
    okText: string;
    closable: 'true' | 'false';
    className: string;
    cancelText: string;
    maskClosable: 'true' | 'false';
    zIndex: number;
    visable: boolean;
    loading: boolean;
    scrollable: boolean;
    lockScroll: boolean;
    fullscreen: boolean;
    footerHide: boolean;
}

class Modal {
    readonly VERSION: string;
    private components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = $el('r-modal', { all: true });
        this._create(this.components);
    }

    private _create(components: NodeListOf<Element>): void {
        components.forEach((node) => {
            this._createTemplate(node);

            setCss(node, 'display', 'block');

            removeAttrs(node, [
                'width',
                'title',
                'ok-text',
                'cancel-text',
                'mask',
                'visible',
                'loading',
                'closable',
                'scrollable',
                'fullscreen',
                'lock-scroll',
                'footer-hide',
                'mask-closable'
            ]);
        });
    }

    private _createTemplate(node: Element): void {
        // 获取最初 modal容器下的占位内容
        const placeholderContent = node.firstElementChild;

        const { width, title, zIndex, okText, cancelText, className } = this._attrs(node);

        const template = `
          <div class="${PREFIX.modal}-mask" style="z-index:${zIndex}"></div>
          <div class="${PREFIX.modal}-wrap ${className}" style="z-index:${zIndex}">
              <div class="${PREFIX.modal}" style="width: ${width}">
                  <div class="${PREFIX.modal}-content">
                      <a class="${PREFIX.modal}-close">
                        <i class="${PREFIX.icon} ${PREFIX.icon}-ios-close"></i>
                      </a>
                      <div class="${PREFIX.modal}-header">
                          <div class="${PREFIX.modal}-header-inner">${title}</div>
                      </div>
                      <div class="${PREFIX.modal}-body"></div>
                      <div class="${PREFIX.modal}-footer">
                          <button type="button" class="rab-btn rab-btn-text">${cancelText}</button>
                          <button type="button" class="rab-btn rab-btn-primary">${okText}</button>
                      </div>
                  </div>
              </div>
          </div>
      `;

        setHtml(node, template);

        this._initVisable(node);
        this._setHeader(node);
        // @ts-ignore
        this._setContent(node, placeholderContent);
        this._setMask(node);
        this._setFullScreen(node);
        this._setClosable(node);
        this._setFooterHide(node);
    }

    private _initVisable(node: Element): void {
        const { visable, scrollable } = this._attrs(node);
        const modalMask = node.querySelector(`.${PREFIX.modal}-mask`);
        const modalWrap = node.querySelector(`.${PREFIX.modal}-wrap`);
        const modal = node.querySelector(`.${PREFIX.modal}`);

        let { lockScroll } = this._attrs(node);
        !node.getAttribute('lock-scroll') ? (lockScroll = true) : lockScroll;

        if (visable) {
            setCss(modalMask, 'display', '');
            modalWrap?.classList.remove(`${PREFIX.modal}-hidden`);
            setCss(modal, 'display', '');
            Scrollable({ scroll: scrollable, lock: lockScroll });
        } else {
            setCss(modalMask, 'display', 'none');
            modalWrap?.classList.add(`${PREFIX.modal}-hidden`);
            setCss(modal, 'display', 'none');
        }
    }

    private _setHeader(node: Element): void {
        const { title } = this._attrs(node);

        if (!title) {
            const modalHeader = node.querySelector(`.${PREFIX.modal}-header`);
            modalHeader?.remove();
        }
    }

    private _setContent(node: Element, content: Element): void {
        const modalBody = node.querySelector(`.${PREFIX.modal}-body`);
        if (content) modalBody?.appendChild(content);
    }

    private _setMask(node: Element): void {
        const { mask } = this._attrs(node);
        if (mask === 'false') {
            const modalMask = node.querySelector(`.${PREFIX.modal}-mask`);
            const modalWrap = node.querySelector(`.${PREFIX.modal}-wrap`);
            const modal = node.querySelector(`.${PREFIX.modal}`);

            modalMask?.remove();
            modalWrap?.classList.add(`${PREFIX.modal}-no-mask`);
            modal?.classList.add(`${PREFIX.modal}-content-no-mask`);
        }
    }

    private _setFullScreen(node: Element): void {
        const { fullscreen } = this._attrs(node);

        if (fullscreen) {
            const modal = node.querySelector(`.${PREFIX.modal}`);
            modal?.classList.add(`${PREFIX.modal}-fullscreen`);
        }
    }

    private _setClosable(node: Element): void {
        const { closable } = this._attrs(node);

        if (closable === 'false') {
            const modalClose = node.querySelector(`.${PREFIX.modal}-close`);
            modalClose?.remove();
        }
    }

    private _setFooterHide(node: Element): void {
        const { footerHide } = this._attrs(node);

        if (footerHide) {
            const modalFooter = node.querySelector(`.${PREFIX.modal}-footer`);
            modalFooter?.remove();
        }
    }

    private _attrs(node: Element): ModalAttrs {
        return {
            mask: getStrTypeAttr(node, 'mask', 'true'),
            width: getStrTypeAttr(node, 'width', '520px'),
            title: getStrTypeAttr(node, 'title', ''),
            okText: getStrTypeAttr(node, 'ok-text', '确定'),
            closable: getStrTypeAttr(node, 'closable', 'true'),
            className: getStrTypeAttr(node, 'class-name', ''),
            cancelText: getStrTypeAttr(node, 'cancel-text', '取消'),
            maskClosable: getStrTypeAttr(node, 'mask-closable', 'true'),
            zIndex: getNumTypeAttr(node, 'z-index', 1000),
            visable: getBooleanTypeAttr(node, 'visable'),
            loading: getBooleanTypeAttr(node, 'loading'),
            scrollable: getBooleanTypeAttr(node, 'scrollable'),
            lockScroll: getBooleanTypeAttr(node, 'lock-scroll'),
            fullscreen: getBooleanTypeAttr(node, 'fullscreen'),
            footerHide: getBooleanTypeAttr(node, 'footer-hide')
        };
    }
}

export default Modal;
