import PREFIX from '../prefix';
import { getArrTypeAttr, getBooleanTypeAttr, getStrTypeAttr, setCss, setHtml } from '../../dom-utils/elem';
import { $el, bind, removeAttrs, siblings, slider } from '../../dom-utils';
import { type, validComps } from '../../utils';
var Collapse = /** @class */ (function () {
    function Collapse() {
        this.VERSION = 'v1.0';
        this.components = $el('r-collapse', { all: true });
        this._create(this.components);
    }
    Collapse.prototype.config = function (el) {
        var target = $el(el);
        validComps(target, 'collapse');
        var _a = Collapse.prototype, _attrs = _a._attrs, _dataSetActiveKey = _a._dataSetActiveKey, _openByKey = _a._openByKey;
        var activeKey = JSON.parse(target.dataset.activeKey);
        return {
            get activeKey() {
                return activeKey;
            },
            set activeKey(newVal) {
                if (newVal == activeKey)
                    return;
                _dataSetActiveKey(target, newVal);
                _openByKey(target, newVal, target.getAttribute('accordion'));
            },
            events: function (_a) {
                var onChange = _a.onChange;
                var panels = target.querySelectorAll('r-collapse-panel');
                // 储存已展开面板的 key
                var key = [];
                var pushKey = function (el, toggle) {
                    var accordion = _attrs(target).accordion;
                    // @ts-ignore
                    var panelKey = el.dataset.panelKey;
                    if (el.classList.contains(PREFIX.collapse + "-item-active")) {
                        key.push(panelKey);
                    }
                    else if (toggle) {
                        var idx = key.indexOf(panelKey);
                        idx > -1 ? key.splice(idx, 1) : '';
                    }
                    // 手风琴模式下每展开一个面板就删除其他的 key
                    if (accordion) {
                        siblings(el).forEach(function (o) {
                            var otherIdx = key.indexOf(o.dataset.panelKey);
                            otherIdx > -1 ? key.splice(otherIdx, 1) : '';
                        });
                    }
                };
                panels.forEach(function (panel) {
                    var header = panel.querySelector("." + PREFIX.collapse + "-header");
                    // 存放初始化面板时默认已展开的 key
                    pushKey(panel, false);
                    bind(header, 'click', function () {
                        // 这里用定时器是为了跟移除显示面板样式类名的时机同步
                        setTimeout(function () {
                            pushKey(panel, true);
                            onChange && type.isFn(onChange, key);
                        }, 150);
                    });
                });
            }
        };
    };
    Collapse.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            var _a = _this._attrs(node), simple = _a.simple, ghost = _a.ghost, defaultactivekey = _a.defaultactivekey, accordion = _a.accordion;
            _this._dataSetActiveKey(node, defaultactivekey);
            _this._setGhost(node, ghost);
            _this._setSimple(node, simple);
            _this._createChildNodes(node);
            _this._openByKey(node, defaultactivekey, accordion);
            removeAttrs(node, ['simple', 'ghost', 'defaultactivekey']);
        });
    };
    Collapse.prototype._dataSetActiveKey = function (node, activeKey) {
        if (activeKey) {
            // @ts-ignore
            node.dataset['activeKey'] = Array.isArray(activeKey) ? "[" + activeKey + "]" : activeKey;
        }
    };
    Collapse.prototype._setGhost = function (node, ghost) {
        ghost ? node.classList.add(PREFIX.collapse + "-ghost") : '';
    };
    Collapse.prototype._setSimple = function (node, simple) {
        simple ? node.classList.add(PREFIX.collapse + "-simple") : '';
    };
    Collapse.prototype._createChildNodes = function (node) {
        var collapsePanels = node.querySelectorAll('r-collapse-panel');
        this._setPanel(node, collapsePanels);
    };
    Collapse.prototype._setPanel = function (parent, panels) {
        var _this = this;
        // 遍历所有面板节点
        panels.forEach(function (panel, index) {
            var _a = _this._attrs(panel), key = _a.key, title = _a.title, hideArrow = _a.hideArrow;
            // @ts-ignore
            // 面板的 key 如果没填则默认为索引值
            panel.dataset.panelKey = !key ? index : key;
            // 保存面板原先的第一个节点，也就是要填充的内容
            var content = panel.firstElementChild;
            var arrowIcon = "<i class=\"" + PREFIX.icon + " " + PREFIX.icon + "-ios-arrow-forward\"></i>";
            var template = "\n                 <div class=\"" + PREFIX.collapse + "-header\">\n                    " + (!hideArrow ? arrowIcon : '') + " " + title + "\n                 </div>\n                 <div class=\"" + PREFIX.collapse + "-content\">\n                    <div class=\"" + PREFIX.collapse + "-content-box\"></div>\n                 </div>";
            // 清空面板原先的所有内容
            setHtml(panel, '');
            // 追加html模板
            setHtml(panel, template);
            // 将原先的占位内容填充至面板内容盒子
            var panelContentBox = panel.querySelector("." + PREFIX.collapse + "-content-box");
            content ? panelContentBox === null || panelContentBox === void 0 ? void 0 : panelContentBox.appendChild(content) : null;
            setCss(panel, 'display', 'block');
            _this._handleToggle(parent, panel);
            removeAttrs(panel, ['key', 'title', 'hide-arrow']);
        });
    };
    Collapse.prototype._handleToggle = function (parent, panel) {
        var _this = this;
        var accordion = this._attrs(parent).accordion;
        var collapseHeader = panel.querySelector("." + PREFIX.collapse + "-header");
        var collapseContent = panel.querySelector("." + PREFIX.collapse + "-content");
        bind(collapseHeader, 'click', function () { return _this._slide(panel, collapseContent, accordion); });
    };
    Collapse.prototype._slide = function (p, c, accordion) {
        var activeCls = PREFIX.collapse + "-item-active";
        var slideUp = function (arg1, arg2) {
            slider.slideUp(arg2, 150);
            setTimeout(function () {
                arg1.classList.remove(activeCls);
            }, 150);
        };
        if (p.classList.contains(activeCls)) {
            slideUp(p, c);
        }
        else {
            slider.slideDown(c, 150);
            p.classList.add(activeCls);
        }
        // 手风琴模式
        if (accordion) {
            // 获取除了已展开的面板外的所有其他面板
            siblings(p).forEach(function (otherP) {
                var otherC = otherP.querySelector("." + PREFIX.collapse + "-content");
                slideUp(otherP, otherC);
            });
        }
    };
    Collapse.prototype._openByKey = function (node, key, accordion) {
        // 获取选中的 key 的面板
        var selected;
        var open = function () {
            if (selected) {
                selected.classList.add(PREFIX.collapse + "-item-active");
                if (accordion) {
                    siblings(selected).forEach(function (o) {
                        o.classList.remove(PREFIX.collapse + "-item-active");
                    });
                }
            }
        };
        // 如果 activeKey 是数组则对其进行遍历获取所有面板
        // 且如果是手风琴模式则只选取数组的第一项，只展开一个面板
        if (Array.isArray(key)) {
            var length_1 = key.length;
            // length == 1 说明数组只有一项所以不必对其进行遍历
            if (accordion || length_1 == 1) {
                selected = node.querySelector("[data-panel-key=\"" + key[0] + "\"]");
                open();
            }
            else {
                var i = 0;
                for (; i < length_1; i++) {
                    selected = node.querySelector("[data-panel-key=\"" + key[i] + "\"]");
                    open();
                }
            }
        }
        else {
            selected = node.querySelector("[data-panel-key=\"" + key + "\"]");
            open();
        }
    };
    Collapse.prototype._attrs = function (node) {
        return {
            key: getStrTypeAttr(node, 'key', ''),
            title: getStrTypeAttr(node, 'title', ''),
            ghost: getBooleanTypeAttr(node, 'ghost'),
            simple: getBooleanTypeAttr(node, 'simple'),
            hideArrow: getBooleanTypeAttr(node, 'hide-arrow'),
            accordion: getBooleanTypeAttr(node, 'accordion'),
            defaultactivekey: getStrTypeAttr(node, 'defaultactivekey', '') &&
                getArrTypeAttr(node, 'defaultactivekey')
        };
    };
    return Collapse;
}());
export default Collapse;
