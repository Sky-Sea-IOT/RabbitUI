import PREFIX from '../prefix';
import {
    getArrTypeAttr,
    getBooleanTypeAttr,
    getStrTypeAttr,
    setCss,
    setHtml
} from '../../dom-utils/elem';
import { $el, bind, removeAttrs, siblings, slider } from '../../dom-utils';

interface CollapseAttrs {
    key: string;
    title: string;
    ghost: boolean;
    simple: boolean;
    accordion: boolean;
    hideArrow: boolean;
    defaultActiveKey: string | string[] | number[];
}

class Collapse {
    readonly VERSION: string;
    private components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = $el('r-collapse', { all: true });
        this._create(this.components);
    }

    private _create(components: NodeListOf<Element>): void {
        components.forEach((node) => {
            const { simple, ghost, defaultActiveKey, accordion } = this._attrs(node);

            this._setGhost(node, ghost);
            this._setSimple(node, simple);
            this._createChildNodes(node);
            this._openByKey(node, defaultActiveKey, accordion);

            removeAttrs(node, ['simple', 'ghost', 'accordion', 'defaultActiveKey']);
        });
    }

    private _setGhost(node: Element, ghost: boolean): void {
        ghost ? node.classList.add(`${PREFIX.collapse}-ghost`) : '';
    }

    private _setSimple(node: Element, simple: boolean): void {
        simple ? node.classList.add(`${PREFIX.collapse}-simple`) : '';
    }

    private _createChildNodes(node: Element): void {
        const collapsePanels = node.querySelectorAll('r-collapse-panel');
        this._setPanel(node, collapsePanels);
    }

    private _setPanel(parent: Element, panels: NodeListOf<Element>): void {
        // 遍历所有面板节点
        panels.forEach((panel, index) => {
            const { key, title, hideArrow } = this._attrs(panel);

            // @ts-ignore
            // 面板的 key 如果没填则默认为索引值
            panel.dataset.panelKey = !key ? index : key;

            // 保存面板原先的第一个节点，也就是要填充的内容
            const content = panel.firstElementChild;

            const arrowIcon = `<i class="${PREFIX.icon} ${PREFIX.icon}-ios-arrow-forward"></i>`;

            const template = `
                 <div class="${PREFIX.collapse}-header">
                    ${!hideArrow ? arrowIcon : ''} ${title}
                 </div>
                 <div class="${PREFIX.collapse}-content">
                    <div class="${PREFIX.collapse}-content-box"></div>
                 </div>`;

            // 清空面板原先的所有内容
            setHtml(panel, '');
            // 追加html模板
            setHtml(panel, template);

            // 将原先的占位内容填充至面板内容盒子
            const panelContentBox = panel.querySelector(`.${PREFIX.collapse}-content-box`);

            content ? panelContentBox?.appendChild(content) : null;

            setCss(panel, 'display', 'block');

            this._handleToggle(parent, panel);

            removeAttrs(panel, ['key', 'title', 'hide-arrow']);
        });
    }

    private _handleToggle(parent: Element, panel: Element): void {
        const { accordion } = this._attrs(parent);

        const collapseHeader = panel.querySelector(`.${PREFIX.collapse}-header`);
        const collapseContent = panel.querySelector(`.${PREFIX.collapse}-content`);

        bind(collapseHeader, 'click', () => this._slide(panel, collapseContent!, accordion));
    }

    private _slide(p: Element, c: Element, accordion: boolean): void {
        const activeCls = `${PREFIX.collapse}-item-active`;

        const slideUp = (arg1: Element, arg2: Element) => {
            slider.slideUp(arg2, 150);
            setTimeout(() => {
                arg1.classList.remove(activeCls);
            }, 150);
        };

        if (p.classList.contains(activeCls)) {
            slideUp(p, c);
        } else {
            slider.slideDown(c, 150);
            p.classList.add(activeCls);
        }

        // 手风琴模式
        if (accordion) {
            // 获取除了已展开的面板外的所有其他面板
            siblings(p).forEach((otherP) => {
                const otherC = otherP.querySelector(`.${PREFIX.collapse}-content`);
                slideUp(otherP, otherC);
            });
        }
    }

    private _openByKey(node: Element, key: string | string[] | number[], accordion: boolean): void {
        // 获取选中的 key 的面板
        let selected: Element | null;

        // 如果 defaultActiveKey 是数组则对其进行遍历，获取所有面板
        // 且如果还是手风琴模式则只选取数组的第一项，只展开一个面板
        if (Array.isArray(key)) {
            if (accordion) {
                selected = node.querySelector(`[data-panel-key="${key[0]}"]`);
                selected?.classList.add(`${PREFIX.collapse}-item-active`);
            } else {
                const { length } = key;
                let i = 0;
                for (; i < length; i++) {
                    selected = node.querySelector(`[data-panel-key="${key[i]}"]`);
                    selected?.classList.add(`${PREFIX.collapse}-item-active`);
                }
            }
        } else {
            selected = node.querySelector(`[data-panel-key="${key}"]`);
            selected?.classList.add(`${PREFIX.collapse}-item-active`);
        }
    }

    private _attrs(node: Element): CollapseAttrs {
        return {
            key: getStrTypeAttr(node, 'key', ''),
            title: getStrTypeAttr(node, 'title', ''),
            ghost: getBooleanTypeAttr(node, 'ghost'),
            simple: getBooleanTypeAttr(node, 'simple'),
            hideArrow: getBooleanTypeAttr(node, 'hide-arrow'),
            accordion: getBooleanTypeAttr(node, 'accordion'),
            defaultActiveKey:
                getStrTypeAttr(node, 'defaultActiveKey', '') &&
                getArrTypeAttr(node, 'defaultActiveKey')
        };
    }
}

export default Collapse;
