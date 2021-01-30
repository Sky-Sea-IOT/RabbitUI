import { warn } from '../../mixins';
import { $el, createElem, removeAttrs, setCss, setHtml, setText } from '../../dom-utils';
import { type, validComps } from '../../utils';
import PREFIX from '../prefix';
var Badge = /** @class */ (function () {
    function Badge() {
        this.VERSION = 'v1.0';
        this.components = $el('r-badge', { all: true });
        this._create(this.components);
    }
    Badge.prototype.config = function (el) {
        var target = $el(el);
        validComps(target, 'badge');
        var countContainer = target.querySelector("." + PREFIX.badge + "-count");
        var dotContainer = target.querySelector("." + PREFIX.badge + "-dot");
        var _a = Badge.prototype, _getMaxCount = _a._getMaxCount, _showZero = _a._showZero, _setMaxCount = _a._setMaxCount;
        var maxCount = _getMaxCount(target);
        var showZero = _showZero(target);
        return {
            get count() {
                return countContainer === null || countContainer === void 0 ? void 0 : countContainer.textContent;
            },
            set count(newVal) {
                if (countContainer && type.isNum(newVal)) {
                    if (newVal > maxCount) {
                        _setMaxCount(countContainer, maxCount);
                    }
                    else {
                        setText(countContainer, "" + newVal);
                        if (newVal <= 0 && !showZero) {
                            setCss(countContainer, 'display', 'none');
                        }
                        else {
                            setCss(countContainer, 'display', '');
                        }
                    }
                }
                else {
                    warn("The count value of this badge cannot be set --> \"" + el + "\"");
                }
            },
            get text() {
                return countContainer === null || countContainer === void 0 ? void 0 : countContainer.textContent;
            },
            set text(newVal) {
                if (!type.isStr(newVal)) {
                    warn("The text value of this badge cannot be set --> \"" + el + "\"");
                    return;
                }
                setText(countContainer, newVal);
            },
            get dot() {
                return dotContainer;
            },
            set dot(newVal) {
                if (!dotContainer) {
                    warn("Unable to set this badge to dot --> \"" + el + "\"");
                    return;
                }
                if (type.isBol(newVal) && newVal) {
                    setCss(dotContainer, 'display', '');
                }
                else {
                    setCss(dotContainer, 'display', 'none');
                }
            }
        };
    };
    Badge.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._setCount(node);
            _this._setStatusWithColor(node);
            removeAttrs(node, [
                'count',
                'text',
                'status',
                'color',
                'show-zero',
                'max-count',
                'dot'
            ]);
        });
    };
    Badge.prototype._setCount = function (node) {
        var count = this._getCount(node);
        var maxCount = this._getMaxCount(node);
        var BadgeCount = createElem('sup');
        BadgeCount.className = PREFIX.badge + "-count";
        if (count || count === 0) {
            // 显示的数字大于maxCount时，显示${maxCount}+
            if (count > maxCount) {
                this._setMaxCount(BadgeCount, maxCount);
            }
            else {
                // 数字为 0 时隐藏或者展示 Badge
                if (count <= 0 && !this._showZero(node)) {
                    setCss(BadgeCount, 'display', 'none');
                }
                else {
                    setText(BadgeCount, "" + count);
                }
            }
            this._setDot(node, BadgeCount);
        }
        if (!this._getStatus(node) && !this._getColor(node)) {
            node.appendChild(BadgeCount);
            // 状态点外观不需要设置为独立展示
            this._setAlone(BadgeCount);
        }
        this._setText(node, BadgeCount);
        this._setOffset(node, BadgeCount);
    };
    Badge.prototype._setMaxCount = function (node, maxCount) {
        setText(node, maxCount + "+");
    };
    Badge.prototype._setDot = function (node, children) {
        if (!this._showDot(node))
            return;
        // 设置为小红点则不显示任何计数内容
        setHtml(children, '');
        setCss(children, 'display', '');
        children.className = PREFIX.badge + "-dot";
    };
    Badge.prototype._setText = function (parent, children) {
        // 区分与标签属性 status 或 color 配合的 text 属性
        if (!this._getStatus(parent) && !this._getColor(parent)) {
            var text = this._getText(parent);
            if (text) {
                setCss(children, 'display', '');
                setText(children, text);
            }
        }
    };
    Badge.prototype._setAlone = function (children) {
        if (!children.previousElementSibling) {
            children.classList.add(PREFIX.badge + "-count-alone");
        }
    };
    Badge.prototype._setOffset = function (parent, children) {
        var offset = this._getOffset(parent);
        setCss(children, 'marginTop', (offset === null || offset === void 0 ? void 0 : offset.x) + "px");
        setCss(children, 'marginRight', (offset === null || offset === void 0 ? void 0 : offset.y) + "px");
    };
    Badge.prototype._setStatusWithColor = function (node) {
        var status = this._getStatus(node);
        var color = this._getColor(node);
        var text = this._getText(node);
        if (!status && !color)
            return;
        var BadgeStatusDot = createElem('span');
        var BadgeStatusText = createElem('span');
        if ((text && status) || (text && color))
            setText(BadgeStatusText, text);
        var statusCls;
        var colorCls = '';
        status ? (statusCls = PREFIX.badge + "-status-" + status) : (statusCls = '');
        // 设置更多预设的状态点颜色，或者自定义颜色
        if (color === 'blue' ||
            color === 'green' ||
            color === 'red' ||
            color === 'yellow' ||
            color === 'magenta' ||
            color === 'volcano' ||
            color === 'orange' ||
            color === 'gold' ||
            color === 'lime' ||
            color === 'cyan' ||
            color === 'geekblue' ||
            color === 'purple') {
            colorCls = PREFIX.badge + "-status-" + color;
        }
        else {
            setCss(BadgeStatusDot, 'backgroundColor', color);
        }
        BadgeStatusDot.className = PREFIX.badge + "-status-dot " + statusCls + " " + colorCls;
        BadgeStatusText.className = PREFIX.badge + "-status-text";
        node.append(BadgeStatusDot, BadgeStatusText);
    };
    Badge.prototype._getCount = function (node) {
        return Number(node.getAttribute('count'));
    };
    Badge.prototype._getMaxCount = function (node) {
        return Number(node.getAttribute('max-count')) || 99;
    };
    Badge.prototype._getOffset = function (node) {
        // 转为真实数组，如果赋值是 offset = ['0','1'] 这样的则会报错
        var offset = JSON.parse(node.getAttribute('offset') || '[]');
        // 如果是数组，那么不论写了多少个值都只返回前两个
        if (type.isArr(offset) && offset.length > 0) {
            return {
                x: offset[0],
                y: offset[1]
            };
        }
    };
    Badge.prototype._getStatus = function (node) {
        return node.getAttribute('status') || '';
    };
    Badge.prototype._getColor = function (node) {
        return node.getAttribute('color') || '';
    };
    Badge.prototype._getText = function (node) {
        return node.getAttribute('text') || '';
    };
    Badge.prototype._showZero = function (node) {
        return node.getAttribute('show-zero') === 'true';
    };
    Badge.prototype._showDot = function (node) {
        return node.getAttribute('dot') === 'true';
    };
    return Badge;
}());
export default Badge;
//# sourceMappingURL=badge.js.map