import {
    $el,
    createElem,
    getBooleanTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setHtml
} from '../../dom-utils';
import PREFIX from '../prefix';

interface TabsAttrs {
    defaultActivekey: string;
    type: string;
    size: string;
    closable: boolean;
    animated: boolean;
}

interface TabsPaneAttrs {
    tab: string;
    key: string;
    icon: string;
    disabled: boolean;
    closable: boolean;
}

class Tabs {
    readonly VERSION: string;
    private components: any;

    constructor() {
        this.VERSION = '1.0';
        this.components = $el('r-tabs', { all: true });
        this._create(this.components);
    }

    private _create(components: NodeListOf<Element>): void {
        components.forEach((node) => {
            const tabPanes = node.querySelectorAll('r-tab-pane');
            const { defaultActivekey } = this._attrs(node);

            this._setBodyTemplate(node);
            this._setTabPane(node, tabPanes, defaultActivekey);

            removeAttrs(node, ['defaultActivekey', 'type', 'size', 'closable', 'animated']);
        });
    }

    private _setBodyTemplate(node: Element): void {
        const template = `
          <div class="${PREFIX.tabs}-bar">
              <div tabindex="0" class="${PREFIX.tabs}-nav-container">
                  <div class="${PREFIX.tabs}-nav-wrap">
                      <span class="${PREFIX.tabs}-nav-prev ${PREFIX.tabs}-nav-scroll-disabled">
                          <i class="${PREFIX.icon} ${PREFIX.icon}-ios-arrow-back"></i>
                      </span>
                      <span class="${PREFIX.tabs}-nav-next ${PREFIX.tabs}-nav-scroll-disabled">
                          <i class="${PREFIX.icon} ${PREFIX.icon}-ios-arrow-forward"></i>
                      </span>
                      <div class="${PREFIX.tabs}-nav-scroll">
                          <div class="${PREFIX.tabs}-nav">
                              <div class="${PREFIX.tabs}-ink-bar"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="${PREFIX.tabs}-content ${PREFIX.tabs}-content-animated"></div>`;

        setHtml(node, template);
    }

    private _setTabPane(node: Element, panes: NodeListOf<Element>, activekey: string): void {
        const TabNav = node.querySelector(`.${PREFIX.tabs}-nav`);
        const TabPaneContainer = node.querySelector(`.${PREFIX.tabs}-content`);
        const Fragment = document.createDocumentFragment();

        panes.forEach((pane, idx) => {
            const { key, tab } = this._paneAttrs(pane);

            this._setLabel(TabNav!, tab, activekey, key);
            this._setPaneKey(pane, key, idx);
            this._setActivePane(TabPaneContainer!, pane, activekey, key, idx);

            Fragment.appendChild(pane);

            // @ts-ignore
            pane.style.display = 'block';

            removeAttrs(pane, ['key', 'tab', 'icon', 'disabled', 'closable']);
        });

        TabPaneContainer?.appendChild(Fragment);
    }

    private _setLabel(tabsNav: Element, content: string, activekey: string, key: string): void {
        const TabsTab = createElem('div');

        TabsTab.className = `${PREFIX.tabs}-tab ${
            activekey === key ? `${PREFIX.tabs}-tab-active ${PREFIX.tabs}-tab-focused` : ''
        }`;

        setHtml(TabsTab, content);
        tabsNav.appendChild(TabsTab);
    }

    private _setPaneKey(pane: Element, key: string, idx: number): void {
        // 当前面板的 key 如果不填则默认为其索引值
        // @ts-ignore
        pane.dataset.paneKey = !key ? idx : key;
    }

    private _setActivePane(
        parent: Element,
        pane: Element,
        activekey: string,
        key: string,
        idx: number
    ): void {
        // @ts-ignore
        pane.style.visibility = activekey === key ? 'visible' : 'hidden';

        if (activekey !== key) return;

        const x = idx * 100;
        // @ts-ignore
        parent.style.transform = `translateX(-${x}%)`;
    }

    private _setInkBar(tabsNav: Element, tabElm: Element): void {
        const TabsInkBar = tabsNav.querySelector(`.${PREFIX.tabs}-ink-bar`);
    }

    private _attrs(node: Element): TabsAttrs {
        return {
            defaultActivekey: getStrTypeAttr(node, 'defaultActivekey', '0'),
            type: getStrTypeAttr(node, 'type', 'line'),
            size: getStrTypeAttr(node, 'size', ''),
            closable: getBooleanTypeAttr(node, 'closable'),
            animated: getBooleanTypeAttr(node, 'animated')
        };
    }

    private _paneAttrs(pane: Element): TabsPaneAttrs {
        return {
            tab: getStrTypeAttr(pane, 'tab', ''),
            key: getStrTypeAttr(pane, 'key', '0'),
            icon: getStrTypeAttr(pane, 'icon', ''),
            disabled: getBooleanTypeAttr(pane, 'disabled'),
            closable: getBooleanTypeAttr(pane, 'closable')
        };
    }
}

export default Tabs;

/*
 * 选项跟随条移动距离算法
 * n1 = 0
 * n2 = n1.width + ( marginRight + 4 )
 * n2+ = n2+的移动距离 + (n2+)-1.width + ( marginRight + 4 )
 */

/*
 * 面板移动距离算法
 * (面板索引值 * 100%) * -1
 */
