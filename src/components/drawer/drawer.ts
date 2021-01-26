import PREFIX from '../prefix';
import {
    $el,
    bind,
    createElem,
    getBooleanTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setCss,
    setHtml
} from '../../dom-utils';
import { CssTransition, Scrollable } from '../../mixins';
import { type, validComps } from '../../utils';

interface DrawerEvents {
    onClose?: () => void;
    onVisibleChange?: (visible: boolean) => boolean;
}

interface PublicMethods {
    config(
        el: string
    ): {
        title: string;
        visable: boolean;
        events: ({ onClose, onVisibleChange }: DrawerEvents) => void;
    };
}

interface DrawerAttes {
    title: string;
    width: string;
    height: string;
    placement: 'top' | 'left' | 'right' | 'bottom';
    mask: boolean;
    inner: boolean;
    visible: boolean;
    closable: boolean;
    scrollable: boolean;
    lockScroll: boolean;
    maskClosable: boolean;
}

class Drawer implements PublicMethods {
    readonly VERSION: string;
    private components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = $el('r-drawer', { all: true });
        this._create(this.components);
    }

    public config(
        el: string
    ): {
        title: string;
        visable: boolean;
        events: ({ onClose, onVisibleChange }: DrawerEvents) => void;
    } {
        const target = $el(el);

        validComps(target, 'drawer');

        const { _handleVisable } = Drawer.prototype;

        const DrawerMask = target.querySelector(`.${PREFIX.drawer}-mask`);
        const DrawerWrap = target.querySelector(`.${PREFIX.drawer}-wrap`);
        const _Drawer = target.querySelector(`.${PREFIX.drawer}`);
        const DrawerTitle = target.querySelector(`.${PREFIX.drawer}-header-inner`);
        const DrawerClose = target.querySelector(`.${PREFIX.drawer}-close`);

        return {
            get title() {
                return setHtml(DrawerTitle);
            },
            set title(newVal: string) {
                if (!type.isStr(newVal)) return;
                setHtml(DrawerTitle, newVal);
            },
            get visable() {
                return target.dataset['drawerVisable'];
            },
            set visable(newVal: boolean) {
                if (!type.isBol(newVal)) return;
                _handleVisable(newVal, target, [DrawerMask, DrawerWrap, _Drawer]);
            },
            events({ onClose, onVisibleChange }) {
                if (DrawerClose) {
                    bind(DrawerClose, 'click', () => onClose && type.isFn(onClose));
                }

                bind(DrawerWrap, 'click', () => onClose && type.isFn(onClose));
            }
        };
    }

    private _handleVisable(visable: boolean, parent: Element, showElm: Element[]): void {
        const { _show, _hidden } = Drawer.prototype;

        if (visable) {
            _show(parent, showElm);
        } else {
            _hidden(parent, showElm);
        }
    }

    private _handleClickHide(parent: Element, hiddenElm: Element[], triggerElm: HTMLElement): void {
        const { _hidden } = Drawer.prototype;

        // triggerElm 表示右上角关闭按钮
        bind(triggerElm, 'click', () => _hidden(parent, hiddenElm));
        bind(hiddenElm[1], 'click', () => _hidden(parent, hiddenElm));
        bind(hiddenElm[2], 'click', (e: any) => e.stopPropagation());
    }

    private _create(nodes: NodeListOf<Element>): void {
        nodes.forEach((node) => {
            this._createDrawerNodes(node);

            setCss(node, 'display', 'block');

            removeAttrs(node, [
                'title',
                'width',
                'height',
                'placement',
                'mask',
                'inner',
                'visible',
                'closable',
                'scrollable',
                'lock-scroll',
                'mask-closable'
            ]);
        });
    }

    private _createDrawerNodes(node: Element): void {
        const DrawerMask = createElem('div');
        const DrawerWrap = createElem('div');
        const Drawer = createElem('div');
        const DrawerContent = createElem('div');
        const DrawerClose = createElem('a');
        const DrawerHeader = createElem('div');
        const DrawerHeaderInner = createElem('div');
        const DrawerBody = createElem('div');

        this._setCls([
            DrawerMask,
            DrawerWrap,
            Drawer,
            DrawerContent,
            DrawerClose,
            DrawerHeader,
            DrawerHeaderInner,
            DrawerBody
        ]);

        this._setSize(node, Drawer);
        this._setPlacement(node, Drawer);

        this._initVisible(node, DrawerMask, DrawerWrap, Drawer);
        this._handleClickHide(node, [DrawerMask, DrawerWrap, Drawer], DrawerClose);

        DrawerWrap.appendChild(Drawer);
        Drawer.appendChild(DrawerContent);

        this._setClosable(node, DrawerContent, DrawerClose);
        this._addHeader(node, DrawerContent, DrawerHeader, DrawerHeaderInner);

        DrawerContent.appendChild(DrawerBody);

        this._addBodyContent(node, DrawerBody);
        this._addMask(node, DrawerMask, DrawerWrap, DrawerContent);

        node.appendChild(DrawerWrap);
    }

    private _setCls(elms: HTMLElement[]): void {
        const elmsCls = [
            `${PREFIX.drawer}-mask`,
            `${PREFIX.drawer}-wrap`,
            `${PREFIX.drawer}`,
            `${PREFIX.drawer}-content`,
            `${PREFIX.drawer}-close`,
            `${PREFIX.drawer}-header`,
            `${PREFIX.drawer}-header-inner`,
            `${PREFIX.drawer}-body`
        ];

        let i = 0;
        const { length } = elms;
        for (; i < length; i++) {
            const elm = elms[i];
            elm.className = elmsCls[i];
        }
    }

    private _setSize(parent: Element, children: HTMLElement): void {
        const { width, height, placement } = this._attrs(parent);

        if (placement === 'top' || placement === 'bottom') {
            setCss(children, 'height', height);
        } else if (placement === 'left' || placement === 'right') {
            children.style.width = width;
            setCss(children, 'width', width);
        }
    }

    private _setPlacement(parent: Element, children: HTMLElement): void {
        const { placement } = this._attrs(parent);
        children.classList.add(`${PREFIX.drawer}-${placement}`);
    }

    private _addMask(
        parent: Element,
        drawerMask: HTMLElement,
        drawerWrap: HTMLElement,
        drawerContent: HTMLElement
    ): void {
        let { mask } = this._attrs(parent);

        if (parent.getAttribute('mask') == null) mask = true;

        if (!mask) {
            drawerWrap.classList.add(`${PREFIX.drawer}-no-mask`);
            drawerContent.classList.add(`${PREFIX.drawer}-content-no-mask`);
            return;
        }

        parent.appendChild(drawerMask);
    }

    private _setClosable(parent: Element, children: HTMLElement, drawerClose: HTMLElement): void {
        const { closable } = this._attrs(parent);

        if (!closable) return;

        setHtml(drawerClose, `<i class="${PREFIX.icon} ${PREFIX.icon}-ios-close"></i>`);

        children.appendChild(drawerClose);
    }

    private _addHeader(
        parent: Element,
        drawerContent: HTMLElement,
        drawerHeader: HTMLElement,
        drawerTitle: HTMLElement
    ): void {
        const { title } = this._attrs(parent);

        if (!title) return;

        setHtml(drawerTitle, title);

        drawerHeader.appendChild(drawerTitle);
        drawerContent.appendChild(drawerHeader);
    }

    private _addBodyContent(parent: Element, children: HTMLElement): void {
        const drawerBodycontent = parent.firstElementChild;
        if (drawerBodycontent) children.appendChild(drawerBodycontent);
    }

    private _initVisible(
        parent: Element,
        drawerMask: HTMLElement,
        drawerWrap: HTMLElement,
        drawer: HTMLElement
    ): void {
        const { visible } = this._attrs(parent);

        // @ts-ignore
        parent.dataset['drawerVisable'] = `${visible}`;

        if (visible) return;

        drawerWrap.classList.add(`${PREFIX.drawer}-hidden`);

        setCss(drawerMask, 'display', 'none');
        setCss(drawer, 'display', 'none');
    }

    private _show(parent: Element, showElm: Element[]): void {
        const { placement, scrollable, lockScroll } = Drawer.prototype._attrs(parent);

        // showElm[0] 表示遮盖层
        // showElm[1] 表示抽屉的父容器wrap
        // showElm[2] 表示抽屉主体
        CssTransition(showElm[0], {
            inOrOut: 'in',
            enterCls: 'rab-fade-in',
            rmCls: true,
            timeout: 250
        });

        CssTransition(showElm[2], {
            inOrOut: 'in',
            enterCls: `${PREFIX.drawer}-${placement}-move-enter`,
            rmCls: true,
            timeout: 550
        });

        Scrollable({ scroll: scrollable, lock: lockScroll });

        // @ts-ignore
        parent.dataset['drawerVisable'] = 'true';

        showElm[1].classList.contains(`${PREFIX.drawer}-hidden`) &&
            showElm[1].classList.remove(`${PREFIX.drawer}-hidden`);
    }

    private _hidden(parent: Element, hiddenElm: Element[]): void {
        const { placement } = Drawer.prototype._attrs(parent);

        // hiddenElm[0] 表示遮盖层
        // hiddenElm[1] 表示抽屉的父容器wrap
        // hiddenElm[2] 表示抽屉主体
        CssTransition(hiddenElm[0], {
            inOrOut: 'out',
            leaveCls: 'rab-fade-out',
            rmCls: true,
            timeout: 250
        });

        CssTransition(hiddenElm[2], {
            inOrOut: 'out',
            leaveCls: `${PREFIX.drawer}-${placement}-move-leave`,
            rmCls: true,
            timeout: 780
        });

        setTimeout(() => {
            // @ts-ignore
            parent.dataset['drawerVisable'] = 'false';
            Scrollable({ scroll: true, lock: true, node: parent, tagName: 'drawer' });
            setCss(hiddenElm[2], 'display', 'none');
            hiddenElm[1].classList.add(`${PREFIX.drawer}-hidden`);
        }, 780);
    }

    private _attrs(node: Element): DrawerAttes {
        return {
            title: getStrTypeAttr(node, 'title', ''),
            width: getStrTypeAttr(node, 'width', '256px'),
            height: getStrTypeAttr(node, 'height', '256px'),
            placement: getStrTypeAttr(node, 'placement', 'right'),
            mask: getBooleanTypeAttr(node, 'mask'),
            inner: getBooleanTypeAttr(node, 'inner'),
            visible: getBooleanTypeAttr(node, 'visible'),
            closable: getBooleanTypeAttr(node, 'closable'),
            scrollable: getBooleanTypeAttr(node, 'scrollable'),
            lockScroll: getBooleanTypeAttr(node, 'lock-scroll'),
            maskClosable: getBooleanTypeAttr(node, 'mask-closable')
        };
    }
}

export default Drawer;
