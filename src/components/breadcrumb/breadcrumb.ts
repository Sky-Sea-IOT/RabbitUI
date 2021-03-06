import { $el, createElem, getStrTypeAttr, removeAttrs, setCss, setHtml } from '../../dom-utils';
import PREFIX from '../prefix';

class Breadcrumb {
    readonly VERSION: string;
    private components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = $el('r-breadcrumb', { all: true });
        this._create(this.components);
    }

    private _create(components: NodeListOf<Element>) {
        components.forEach((node) => {
            const { separator } = this._attrs(node);

            this._createItem(node, separator);

            removeAttrs(node, ['separator']);
        });
    }

    private _createItem(node: Element, separator: string): void {
        const { children } = node;
        const Fragment = document.createDocumentFragment();

        Array.from(children).forEach((child) => {
            const Wrapper = createElem('span');
            const Separator = createElem('span');

            Separator.className = `${PREFIX.breadcrumb}-item-separator`;
            // 设置分隔符
            setHtml(Separator, `${separator}`);

            child.classList.add(`${PREFIX.breadcrumb}-item-link`);
            // 初始化为行内块样式
            setCss(child, 'display', 'inline-block');

            Wrapper.append(child, Separator);
            Fragment.appendChild(Wrapper);
        });

        node.appendChild(Fragment);
    }

    private _attrs(node: Element) {
        return {
            separator: getStrTypeAttr(node, 'separator', '/')
        };
    }
}

export default Breadcrumb;
