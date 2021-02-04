import PREFIX from '../prefix';
import {
    $el,
    bind,
    createElem,
    getStrTypeAttr,
    removeAttrs,
    setCss,
    setHtml
} from '../../dom-utils';
import { CssTransition, warn, _Popper } from '../../mixins';

interface DropdownAttrs {
    trigger: 'hover' | 'click' | 'contextMenu';
    placement: string;
}

const defalutDpdDelay = 100;

let dpdShowTimer: any;
let dpdEvTimer: any;

class Dropdown {
    readonly VERSION: string;
    private components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = $el('r-dropdown', { all: true });
        this._create(this.components);
    }

    private _create(components: NodeListOf<Element>): void {
        components.forEach((node) => {
            // 判断是否由两个子节点组成
            if (node.childElementCount > 2) {
                warn(
                    'The content of a component dropdown can only be composed of two element nodes, the first being the reference element and the second being the drop-down item'
                );
            }

            // 将第一个子元素作为宿主元素
            const refElm: Element | null = node.firstElementChild;
            // 最后一个子元素即菜单项
            const menuItem: Element | null = node.lastElementChild;

            // 清空旧内容，防止获取的元素不正确
            setHtml(node, '');

            const DropdownRef = this._setReferenceElm(node, refElm);
            const DropdownMenu = this._setMenuItem(node, menuItem);

            this._handleTrigger(node, DropdownRef, DropdownMenu);

            this._setTransformOrigin(node, DropdownMenu);

            removeAttrs(node, ['trigger', 'placement']);
        });
    }

    private _setReferenceElm(node: Element, refElm: Element | null): HTMLElement {
        const DropdownRel = createElem('div');

        DropdownRel.className = `${PREFIX.dropdown}-rel`;

        refElm ? DropdownRel.appendChild(refElm) : '';
        node.appendChild(DropdownRel);

        return DropdownRel;
    }

    private _setMenuItem(node: Element, menuItem: Element | null): HTMLElement {
        const DropdownMenu = createElem('div');

        DropdownMenu.className = 'rab-select-dropdown';

        this._initVisable(DropdownMenu);

        menuItem ? DropdownMenu.appendChild(menuItem) : '';
        node.appendChild(DropdownMenu);

        setCss(menuItem, 'display', 'block');

        return DropdownMenu;
    }

    private _initVisable(dpdMenu: HTMLElement): void {
        setCss(dpdMenu, 'display', 'none');
        dpdMenu.dataset.dropdownVisable = 'false';
    }

    private _setTransformOrigin(parent: Element, dpdMenu: HTMLElement): void {
        const { placement } = this._attrs(parent);
        // 根据 placement 设置源方向。
        // top 开头、right-end、left-end 的位置设置源方向为 center-bottom，反之。
        // left 和 right 开头的则无需设置。
        if (/^top|right-end|left-end/.test(placement)) {
            setCss(dpdMenu, 'transformOrigin', 'center bottom');
        } else if (/^bottom|right-start|left-start/.test(placement)) {
            setCss(dpdMenu, 'transformOrigin', 'center top');
        }

        // TODO: 根据 popper 的方向动态改变源方向
        // dpdMenu.dataset.popperPlacement;
    }

    private _handleTrigger(parent: Element, dpdRef: HTMLElement, dpdMenu: HTMLElement): void {
        const { trigger, placement } = this._attrs(parent);

        const setPopper = () => _Popper._newCreatePopper(dpdRef, dpdMenu, placement, 0);

        const show = () => {
            setPopper();

            dpdMenu.dataset.dropdownVisable = 'true';

            CssTransition(dpdMenu, {
                inOrOut: 'in',
                enterCls: 'transition-drop-enter',
                rmCls: true,
                timeout: 300
            });
        };

        const hidden = () => {
            if (dpdMenu.dataset.dropdownVisable === 'true') {
                dpdMenu.dataset.dropdownVisable = 'false';
                CssTransition(dpdMenu, {
                    inOrOut: 'out',
                    leaveCls: 'transition-drop-leave',
                    rmCls: true,
                    timeout: 280
                });
            }
        };

        if (trigger === 'hover') {
            bind(parent, 'mouseenter', () => {
                dpdShowTimer = setTimeout(() => {
                    show();
                }, defalutDpdDelay);
            });
            bind(parent, 'mouseleave', () => {
                clearTimeout(dpdShowTimer);
                hidden();
            });
        } else if (trigger === 'click') {
            bind(dpdRef, 'click', show);
        } else if (trigger === 'contextMenu') {
            bind(dpdRef, 'contextmenu', (e: any) => {
                e.preventDefault();
                show();
            });
        }
    }

    private _attrs(node: Element): DropdownAttrs {
        return {
            trigger: getStrTypeAttr(node, 'trigger', 'hover'),
            placement: getStrTypeAttr(node, 'placement', 'bottom')
        };
    }
}

// 处理下拉项点击隐藏菜单
function handleDropdownItemClickHidden(): void {
    bind(document, 'click', (e: any) => {
        const { target } = e;
        // 获取点击的目标元素名
        const tagName = target.tagName.toLocaleLowerCase();

        if (tagName === 'r-dropdown-item') {
            // 是否为禁用项
            if (target.getAttribute('disabled') === '') return;

            // 获取菜单项的最外层容器 div.rab-select-dropdown
            const dropdownMenu = target.parentElement.parentElement;

            // 设置为隐藏状态
            dropdownMenu.dataset.dropdownVisable = 'false';

            CssTransition(dropdownMenu, {
                inOrOut: 'out',
                leaveCls: 'transition-drop-leave',
                rmCls: true,
                timeout: 280
            });
        }
    });
}

handleDropdownItemClickHidden();

export default Dropdown;
