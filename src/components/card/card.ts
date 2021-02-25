import PREFIX from '../prefix';
import {
    $el,
    createElem,
    getBooleanTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setHtml
} from '../../dom-utils';
import { type, validComps } from '../../utils';

interface PublicMethods {
    config(
        el: string
    ): {
        title: string;
        extra: string;
    };
}

class Card implements PublicMethods {
    readonly VERSION: string;
    private components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = $el('r-card', { all: true });
        this._create(this.components);
    }

    public config(
        el: string
    ): {
        title: string;
        extra: string;
    } {
        const target = $el(el);

        validComps(target, 'card');

        const CardTitle = target.querySelector(`.${PREFIX.card}-head`);
        const CardExtra = target.querySelector(`.${PREFIX.card}-extra`);

        return {
            get title() {
                return setHtml(CardTitle);
            },
            set title(newVal: string) {
                if (type.isStr(newVal)) setHtml(CardTitle, newVal);
            },
            get extra() {
                return setHtml(CardExtra);
            },
            set extra(newVal: string) {
                if (type.isStr(newVal)) setHtml(CardExtra, newVal);
            }
        };
    }

    private _create(components: NodeListOf<Element>): void {
        components.forEach((node) => {
            this._createCardNodes(node);
            removeAttrs(node, ['title', 'extra', 'shadow']);
        });
    }

    private _createCardNodes(node: Element): void {
        const CardHead = createElem('div');
        const CardExtra = createElem('div');
        const CardBody = createElem('div');

        this._setCls(CardHead, CardExtra, CardBody);
        this._setContent(node, CardBody);
        this._setTitle(node, CardHead);
        this._setExtra(node, CardExtra);
        this._setShadow(node);
    }

    private _setCls(node1: HTMLElement, node2: HTMLElement, node3: HTMLElement): void {
        node1.className = `${PREFIX.card}-head`;
        node2.className = `${PREFIX.card}-extra`;
        node3.className = `${PREFIX.card}-body`;
    }

    private _setTitle(parent: Element, children: HTMLElement): void {
        const { title } = this._attrs(parent);

        if (!title) return;

        setHtml(children, title);
        // 这里如果用 appendChild 会把头部节点放到内容节点后面
        parent.prepend(children);
    }

    private _setContent(parent: Element, children: HTMLElement): void {
        const contentNode: Element[] = Array.from(parent.children);

        contentNode.forEach((node) => {
            children.appendChild(node);
        });

        parent.appendChild(children);
    }

    private _setExtra(parent: Element, children: HTMLElement): void {
        const { extra } = this._attrs(parent);

        if (!extra) return;

        setHtml(children, extra);
        parent.appendChild(children);
    }

    private _setShadow(node: Element): void {
        const { shadow } = this._attrs(node);
        if (shadow) {
            node.classList.add(`${PREFIX.card}-shadow`);
        }
    }

    private _attrs(node: Element) {
        return {
            title: getStrTypeAttr(node, 'title', ''),
            extra: getStrTypeAttr(node, 'extra', ''),
            shadow: getBooleanTypeAttr(node, 'shadow')
        };
    }
}

export default Card;
