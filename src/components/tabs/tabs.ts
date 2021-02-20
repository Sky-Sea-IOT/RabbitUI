import {
    $el,
    bind,
    createElem,
    getBooleanTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setCss,
    setHtml,
    siblings
} from '../../dom-utils';
import PREFIX from '../prefix';

interface TabsAttrs {
    defaultActivekey: string;
    type: 'line' | 'card';
    size: string;
    animated: string;
    closable: boolean;
}

interface TabsPaneAttrs {
    tab: string;
    key: string;
    icon: string;
    closable: string;
    disabled: boolean;
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
            const { defaultActivekey, size, type, closable, animated } = this._attrs(node);

            this._setType(node, type);
            this._setSize(node, type, size);
            this._setNoAnimation(node, animated);
            this._setBodyTemplate(node);
            this._setTabPane([node, tabPanes, defaultActivekey, type, animated, closable]);

            removeAttrs(node, ['defaultActivekey', 'type', 'size', 'closable', 'animated']);
        });
    }

    private _setType(node: Element, type: string): void {
        if (type !== 'card') return;
        node.classList.add(`${PREFIX.tabs}-${type}`);
    }

    private _setSize(node: Element, type: string, size: string): void {
        if (type !== 'line') return;
        node.classList.add(`${PREFIX.tabs}-${size}`);
    }

    private _setNoAnimation(node: Element, animated: string): void {
        if (animated === 'true') return;
        node.classList.add(`${PREFIX.tabs}-no-animation`);
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
                          <div class="${PREFIX.tabs}-nav"></div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="${PREFIX.tabs}-content ${PREFIX.tabs}-content-animated"></div>`;

        setHtml(node, template);
    }

    private _setTabPane(
        args: [Element, NodeListOf<Element>, string, string, string, boolean]
    ): void {
        const [node, panes, activekey, type, animated, closable] = args;

        const TabNav = node.querySelector(`.${PREFIX.tabs}-nav`);
        const TabPaneContainer = node.querySelector(`.${PREFIX.tabs}-content`);
        const Fragment = document.createDocumentFragment();

        panes.forEach((pane, idx) => {
            const { key, tab, icon, closable: separateClose, disabled } = this._paneAttrs(pane);

            const TabsTab: HTMLElement = this._setTab([TabNav!, tab, activekey, key]);

            this._setTabIcon(TabsTab, icon);
            this._setTabClosable([TabsTab, type, closable, separateClose]);
            this._setTabDisabled(TabsTab, disabled);

            setCss(pane, 'display', `${animated === 'true' ? 'block' : 'none'}`);

            this._setPaneKey(pane, key, idx);
            this._setActivePane([TabPaneContainer!, pane, activekey, key, idx, animated]);

            this._handleToggle([TabsTab, pane, idx, disabled, animated]);

            Fragment.appendChild(pane);

            removeAttrs(pane, ['key', 'tab', 'icon', 'disabled', 'closable']);
        });

        TabPaneContainer?.appendChild(Fragment);
    }

    private _setTab(args: [Element, string, string, string]): HTMLElement {
        const [tabsNav, content, activekey, key] = args;

        const TabsTab = createElem('div');

        TabsTab.className = `${PREFIX.tabs}-tab ${
            activekey === key ? `${PREFIX.tabs}-tab-active ${PREFIX.tabs}-tab-focused` : ''
        }`;

        setHtml(TabsTab, content);

        tabsNav.appendChild(TabsTab);

        return TabsTab;
    }

    private _setTabIcon(tabElm: Element, icon: string): void {
        if (!icon) return;

        const Icon = createElem('icon');

        Icon.className = `${PREFIX.icon} ${PREFIX.icon}-${icon}`;
        tabElm.prepend(Icon);
    }

    private _setTabClosable(args: [Element, string, boolean, string]): void {
        const [tabElm, type, closable, separateClose] = args;

        if (!closable || type !== 'card') return;

        const CloseIcon = createElem('icon');

        CloseIcon.className = `${PREFIX.icon} ${PREFIX.icon}-ios-close ${PREFIX.tabs}-close`;

        // 单独设置当前选项是否可以关闭页签
        if (separateClose === 'false') return;

        tabElm.appendChild(CloseIcon);
    }

    private _setTabDisabled(tabELm: Element, disabled: boolean): void {
        if (!disabled) return;
        tabELm.classList.add(`${PREFIX.tabs}-tab-disabled`);
    }

    private _setPaneKey(pane: Element, key: string, idx: number): void {
        // 当前面板的 key 如果不填则默认为其索引值
        // @ts-ignore
        pane.dataset.paneKey = !key ? idx : key;
    }

    private _setActivePane(args: [Element, Element, string, string, number, string]): void {
        const [paneContainer, pane, activekey, key, idx, animated] = args;

        if (animated === 'false') {
            setCss(pane, 'display', `${activekey === key ? 'block' : 'none'}`);
        }

        setCss(pane, 'visibility', `${activekey === key ? 'visible' : 'hidden'}`);

        if (activekey === key) this._changePane([paneContainer, idx]);
    }

    private _handleToggle(args: [Element, Element, number, boolean, string]): void {
        const [tabELm, pane, idx, disabled, animated] = args;

        bind(tabELm, 'click', () => {
            if (disabled) return false;

            this._changeTab(tabELm);
            this._changePane([pane.parentElement!, idx, animated, pane]);
        });
    }

    private _changeTab(tabELm: Element): void {
        tabELm.classList.add(`${PREFIX.tabs}-tab-active`);
        tabELm.classList.add(`${PREFIX.tabs}-tab-focusd`);

        siblings(tabELm).forEach((o) => {
            o.classList.remove(`${PREFIX.tabs}-tab-active`);
            o.classList.remove(`${PREFIX.tabs}-tab-focusd`);
        });
    }

    private _changePane(args: [Element, number, string?, Element?]): void {
        const [paneContainer, idx, animated, pane] = args;

        const translateX = idx * 100;
        setCss(paneContainer, 'transform', `translateX(-${translateX}%)`);

        if (pane) {
            if (animated === 'false') setCss(pane, 'display', 'block');

            setCss(pane, 'visibility', 'visible');

            siblings(pane).forEach((o) => {
                if (animated === 'false') setCss(o, 'display', 'none');

                setCss(o, 'visibility', 'hidden');
            });
        }
    }

    private _attrs(node: Element): TabsAttrs {
        return {
            defaultActivekey: getStrTypeAttr(node, 'defaultActivekey', '0'),
            type: getStrTypeAttr(node, 'type', 'line'),
            size: getStrTypeAttr(node, 'size', 'default'),
            animated: getStrTypeAttr(node, 'animated', 'true'),
            closable: getBooleanTypeAttr(node, 'closable')
        };
    }

    private _paneAttrs(pane: Element): TabsPaneAttrs {
        return {
            tab: getStrTypeAttr(pane, 'tab', ''),
            key: getStrTypeAttr(pane, 'key', '0'),
            icon: getStrTypeAttr(pane, 'icon', ''),
            closable: getStrTypeAttr(pane, 'closable', 'true'),
            disabled: getBooleanTypeAttr(pane, 'disabled')
        };
    }
}

export default Tabs;
