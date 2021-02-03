import PREFIX from '../prefix';
import { $el, createElem, getStrTypeAttr, removeAttrs, setHtml } from '../../dom-utils';
import { warn } from '../../mixins';

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

            this._setReferenceElm(node, refElm);
            this._setMenuItem(node, menuItem);
            this._setPlacement(node);

            removeAttrs(node, ['trigger', 'placement']);
        });
    }

    private _setReferenceElm(node: Element, refElm: Element | null): void {
        const DropdownRel = createElem('div');

        DropdownRel.className = `${PREFIX.dropdown}-rel`;

        refElm ? DropdownRel.appendChild(refElm) : '';
        node.appendChild(DropdownRel);
    }

    private _setMenuItem(node: Element, menuItem: Element | null): void {
        const DropdownMenu = createElem('div');

        DropdownMenu.className = 'rab-select-dropdown';

        menuItem ? DropdownMenu.appendChild(menuItem) : '';
        node.appendChild(DropdownMenu);
    }

    private _setPlacement(node: Element): void {
        const { placement } = this._attrs(node);
        node.setAttribute('x-placement', placement);
    }

    private _attrs(node: Element) {
        return {
            trigger: getStrTypeAttr(node, 'trigger', 'hover'),
            placement: getStrTypeAttr(node, 'placement', 'bottom')
        };
    }
}

export default Dropdown;
