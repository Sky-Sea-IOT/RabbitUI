import { type, validComps } from '../../utils';
import { $el, bind, createElem, getBooleanTypeAttr, getStrTypeAttr, removeAttrs, setCss, setHtml, siblings } from '../../dom-utils';
import PREFIX from '../prefix';
var Tabs = /** @class */ (function () {
    function Tabs() {
        this.VERSION = '1.0';
        this.components = $el('r-tabs', { all: true });
        this._create(this.components);
    }
    Tabs.prototype.config = function (el) {
        var target = $el(el);
        validComps(target, 'tabs');
        var TabTabs = target.querySelectorAll("." + PREFIX.tabs + "-tab");
        var TabPanes = target.querySelectorAll('r-tab-pane');
        var _a = Tabs.prototype, _changeTab = _a._changeTab, _changePane = _a._changePane;
        return {
            get activeKey() {
                return '0';
            },
            set activeKey(newVal) {
                if (!type.isStr(newVal))
                    return;
                TabPanes.forEach(function (pane, i) {
                    var p = pane;
                    if (newVal !== p.dataset.paneKey)
                        return;
                    _changeTab(TabTabs[i], true);
                    _changePane([false, p.parentElement, i, 'true', p]);
                });
            },
            events: function (_a) {
                var onClick = _a.onClick, onTabRemove = _a.onTabRemove;
                TabTabs.forEach(function (tab, i) {
                    var tabClose = tab.querySelector("." + PREFIX.tabs + "-close");
                    var clickEv = function () {
                        var TabPane = TabPanes[i];
                        var key = TabPane.dataset.paneKey;
                        onClick && type.isFn(onClick, key);
                        if (!tabClose)
                            return;
                        onTabRemove && type.isFn(onTabRemove, key);
                    };
                    bind(tab, 'click', clickEv);
                    if (!tabClose)
                        return;
                    bind(tabClose, 'click', clickEv);
                });
            }
        };
    };
    Tabs.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            var tabPanes = node.querySelectorAll('r-tab-pane');
            var _a = _this._attrs(node), defaultActivekey = _a.defaultActivekey, size = _a.size, type = _a.type, closable = _a.closable, animated = _a.animated;
            _this._setType(node, type);
            _this._setSize(node, type, size);
            _this._setNoAnimation(node, animated);
            _this._setBodyTemplate(node);
            _this._setTabPane([node, tabPanes, defaultActivekey, type, animated, closable]);
            removeAttrs(node, ['defaultActivekey', 'type', 'size', 'closable', 'animated']);
        });
    };
    Tabs.prototype._setType = function (node, type) {
        if (type !== 'card')
            return;
        node.classList.add(PREFIX.tabs + "-" + type);
    };
    Tabs.prototype._setSize = function (node, type, size) {
        if (type !== 'line' || size !== 'small')
            return;
        node.classList.add(PREFIX.tabs + "-mini");
    };
    Tabs.prototype._setNoAnimation = function (node, animated) {
        if (animated === 'true')
            return;
        node.classList.add(PREFIX.tabs + "-no-animation");
    };
    Tabs.prototype._setBodyTemplate = function (node) {
        var template = "\n          <div class=\"" + PREFIX.tabs + "-bar\">\n              <div tabindex=\"0\" class=\"" + PREFIX.tabs + "-nav-container\">\n                  <div class=\"" + PREFIX.tabs + "-nav-wrap\">\n                     <div class=\"" + PREFIX.tabs + "-nav\"></div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"" + PREFIX.tabs + "-content " + PREFIX.tabs + "-content-animated\"></div>";
        setHtml(node, template);
    };
    Tabs.prototype._setTabPane = function (args) {
        var _this = this;
        var node = args[0], panes = args[1], activekey = args[2], type = args[3], animated = args[4], closable = args[5];
        var TabNav = node.querySelector("." + PREFIX.tabs + "-nav");
        var TabPaneContainer = node.querySelector("." + PREFIX.tabs + "-content");
        var Fragment = document.createDocumentFragment();
        panes.forEach(function (pane, idx) {
            var _a = _this._paneAttrs(pane), key = _a.key, tab = _a.tab, icon = _a.icon, separateClose = _a.closable, disabled = _a.disabled;
            var TabsTab = _this._setTab(TabNav, tab);
            _this._setTabIcon(TabsTab, icon);
            _this._setTabClosable([TabsTab, type, closable, separateClose]);
            _this._setTabDisabled(TabsTab, disabled);
            setCss(pane, 'display', "" + (animated === 'true' ? 'block' : 'none'));
            _this._setPaneKey(pane, key, idx);
            _this._setActive([closable, TabPaneContainer, TabsTab, pane, activekey, idx, animated]);
            _this._handleToggle([closable, TabsTab, pane, idx, disabled, animated]);
            _this._handleRemove(TabsTab, pane);
            Fragment.appendChild(pane);
            removeAttrs(pane, ['key', 'tab', 'icon', 'disabled', 'closable']);
        });
        TabPaneContainer === null || TabPaneContainer === void 0 ? void 0 : TabPaneContainer.appendChild(Fragment);
    };
    Tabs.prototype._setTab = function (tabsNav, content) {
        var TabsTab = createElem('div');
        TabsTab.className = PREFIX.tabs + "-tab";
        setHtml(TabsTab, content);
        tabsNav.appendChild(TabsTab);
        return TabsTab;
    };
    Tabs.prototype._setTabIcon = function (tabElm, icon) {
        if (!icon)
            return;
        var Icon = createElem('icon');
        Icon.className = PREFIX.icon + " " + PREFIX.icon + "-" + icon;
        tabElm.prepend(Icon);
    };
    Tabs.prototype._setTabClosable = function (args) {
        var tabElm = args[0], type = args[1], closable = args[2], separateClose = args[3];
        if (!closable || type !== 'card')
            return;
        var CloseIcon = createElem('icon');
        CloseIcon.className = PREFIX.icon + " " + PREFIX.icon + "-ios-close " + PREFIX.tabs + "-close";
        // 单独设置当前选项是否可以关闭页签
        if (separateClose === 'false')
            return;
        tabElm.appendChild(CloseIcon);
    };
    Tabs.prototype._setTabDisabled = function (tabsTab, disabled) {
        if (!disabled)
            return;
        tabsTab.classList.add(PREFIX.tabs + "-tab-disabled");
    };
    Tabs.prototype._setPaneKey = function (pane, key, idx) {
        // 当前面板的 key 如果不填则默认为其索引值
        // @ts-ignore
        pane.dataset.paneKey = !key ? idx : key;
    };
    Tabs.prototype._setActive = function (args) {
        var closable = args[0], paneContainer = args[1], tabsTab = args[2], pane = args[3], activekey = args[4], idx = args[5], animated = args[6];
        // @ts-ignore
        var isEqual = activekey === pane.dataset.paneKey;
        if (isEqual) {
            this._changeTab(tabsTab);
            this._changePane([closable, paneContainer, idx]);
        }
        setCss(pane, 'visibility', "" + (isEqual ? 'visible' : 'hidden'));
        if (animated === 'false') {
            setCss(pane, 'display', "" + (isEqual ? 'block' : 'none'));
        }
    };
    Tabs.prototype._handleToggle = function (args) {
        var _this = this;
        var closable = args[0], tabsTab = args[1], pane = args[2], idx = args[3], disabled = args[4], animated = args[5];
        bind(tabsTab, 'click', function () {
            if (disabled)
                return false;
            _this._changeTab(tabsTab);
            _this._changePane([closable, pane.parentElement, idx, animated, pane]);
        });
    };
    Tabs.prototype._handleRemove = function (tabsTab, pane) {
        var _this = this;
        var TabClose = tabsTab.querySelector("." + PREFIX.tabs + "-close");
        if (!TabClose)
            return;
        /**
         * @param elm1 tabs的选项
         * @param elm2 tabs的面板
         */
        var changeActive = function (elm1, elm2) {
            if (tabsTab.classList.contains(PREFIX.tabs + "-tab-active")) {
                _this._changeTab(elm1, false);
            }
            setCss(elm2, 'display', 'block');
            setCss(elm2, 'visibility', 'visible');
        };
        var removeEv = function () {
            var prevTab = tabsTab.previousElementSibling;
            var nextTab = tabsTab.nextElementSibling;
            var prevPane = pane.previousElementSibling;
            var nextPane = pane.nextElementSibling;
            if (nextTab && nextPane) {
                changeActive(nextTab, nextPane);
            }
            else if (prevTab && prevPane) {
                changeActive(prevTab, prevPane);
            }
            tabsTab.remove();
            pane.remove();
        };
        bind(TabClose, 'click', function (e) {
            e.stopPropagation();
            removeEv();
        });
    };
    Tabs.prototype._changeTab = function (tabsTab, siblingsChange) {
        if (siblingsChange === void 0) { siblingsChange = true; }
        tabsTab.classList.add(PREFIX.tabs + "-tab-active");
        tabsTab.classList.add(PREFIX.tabs + "-tab-focused");
        if (!siblingsChange)
            return;
        siblings(tabsTab).forEach(function (o) {
            o.classList.remove(PREFIX.tabs + "-tab-active");
            o.classList.remove(PREFIX.tabs + "-tab-focused");
        });
    };
    Tabs.prototype._changePane = function (args) {
        var closable = args[0], paneContainer = args[1], idx = args[2], animated = args[3], pane = args[4];
        // 如果选项卡启用了可关闭功能，则不使用动画切换，这为了减少 tab 删除操作的工作量
        if (!closable) {
            var translateX = idx * 100;
            setCss(paneContainer, 'transform', "translateX(-" + translateX + "%)");
        }
        // 是否要一并更改面板项
        if (!pane)
            return;
        setCss(pane, 'display', 'block');
        setCss(pane, 'visibility', 'visible');
        siblings(pane).forEach(function (o) {
            if (animated === 'false' || closable)
                setCss(o, 'display', 'none');
            setCss(o, 'visibility', 'hidden');
        });
    };
    Tabs.prototype._attrs = function (node) {
        return {
            defaultActivekey: getStrTypeAttr(node, 'defaultActivekey', '0'),
            type: getStrTypeAttr(node, 'type', 'line'),
            size: getStrTypeAttr(node, 'size', 'default'),
            animated: getStrTypeAttr(node, 'animated', 'true'),
            closable: getBooleanTypeAttr(node, 'closable')
        };
    };
    Tabs.prototype._paneAttrs = function (pane) {
        return {
            tab: getStrTypeAttr(pane, 'tab', ''),
            key: getStrTypeAttr(pane, 'key', ''),
            icon: getStrTypeAttr(pane, 'icon', ''),
            closable: getStrTypeAttr(pane, 'closable', 'true'),
            disabled: getBooleanTypeAttr(pane, 'disabled')
        };
    };
    return Tabs;
}());
export default Tabs;
