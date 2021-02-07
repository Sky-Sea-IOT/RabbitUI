import PREFIX from '../prefix';
import {
    getArrTypeAttr,
    getBooleanTypeAttr,
    getStrTypeAttr,
    setCss,
    setHtml
} from '../../dom-utils/elem';
import { $el, removeAttrs } from '../../dom-utils';

interface CollapseAttrs {
    key: string;
    title: string;
    simple: boolean;
    accordion: boolean;
    activeKey: string | [];
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
            this._setSimple(node);
            this._createChildNodes(node);

            removeAttrs(node, ['simple', 'accordion', 'activeKey']);
        });
    }

    private _setSimple(node: Element): void {
        const { simple } = this._attrs(node);
        simple ? node.classList.add(`${PREFIX.collapse}-simple`) : '';
    }

    private _createChildNodes(node: Element): void {
        const collapsePanels = node.querySelectorAll('r-collapse-panel');
        this._setPanel(collapsePanels);
    }

    private _setPanel(panels: NodeListOf<Element>): void {
        // 遍历所有面板节点
        panels.forEach((panel, index) => {
            const { key, title } = this._attrs(panel);

            // @ts-ignore
            // 面板的 key 如果没填则默认为索引值
            panel.dataset.panelKey = !key ? index : key;

            // 保存面板原先的第一个节点，也就是要填充的内容
            const content = panel.firstElementChild;

            const template = `
                 <div class="${PREFIX.collapse}-header">
                    <i class="${PREFIX.icon} ${PREFIX.icon}-ios-arrow-forward"></i> ${title}
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

            removeAttrs(panel, ['key', 'title']);
        });
    }

    private _attrs(node: Element): CollapseAttrs {
        return {
            key: getStrTypeAttr(node, 'key', ''),
            title: getStrTypeAttr(node, 'title', ''),
            simple: getBooleanTypeAttr(node, 'simple'),
            accordion: getBooleanTypeAttr(node, 'accordion'),
            activeKey: getStrTypeAttr(node, 'activeKey', '') || getArrTypeAttr(node, 'activeKey')
        };
    }
}

export default Collapse;
