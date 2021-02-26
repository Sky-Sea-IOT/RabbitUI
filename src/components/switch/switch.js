import { $el, bind, setCss, setHtml } from '../../dom-utils';
import { type, validComps } from '../../utils';
import PREFIX from '../prefix';
var Switch = /** @class */ (function () {
    function Switch() {
        this.VERSION = '1.0';
        this.components = $el('r-switch', { all: true });
        this._create(this.components);
    }
    Switch.prototype.onChange = function (elem, cb) {
        var _this = this;
        var target = $el(elem);
        validComps(target, 'switch');
        // 将当前选中的组件作为参数返回出去
        var $this = target;
        bind(target, 'click', function () {
            var status = _this._getStatus(target);
            type.isFn(cb, [status, $this]);
        });
    };
    Switch.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._init(node);
            _this._handleChange(node, _this._getStatus(node));
        });
    };
    Switch.prototype._init = function (node) {
        // 初始化按键切换索引
        node.setAttribute('tabindex', '0');
        // 初始化未选中状态的开关
        if (node.getAttribute('checked') !== 'true') {
            node.setAttribute('checked', 'false');
        }
        this._setStatusText(node, this._getStatus(node));
        this._setStatusColor(node, this._getStatus(node));
    };
    // 设置自定义的状态文本
    Switch.prototype._setStatusText = function (node, status) {
        var _a = this._getStatusText(node), openText = _a.openText, closeText = _a.closeText;
        if (!openText || !closeText)
            return;
        // 创建文本容器
        var TextBox = document.createElement('span');
        TextBox.className = PREFIX.switch + "-inner";
        node.appendChild(TextBox);
        status ? setHtml(TextBox, openText) : setHtml(TextBox, closeText);
    };
    // 设置自定义的状态颜色
    Switch.prototype._setStatusColor = function (node, status) {
        var _a = this._getColor(node), trueColor = _a.trueColor, falseColor = _a.falseColor;
        if (!trueColor || !falseColor)
            return;
        if (status) {
            setCss(node, 'borderColor', trueColor);
            setCss(node, 'backgroundColor', trueColor);
        }
        else {
            setCss(node, 'borderColor', falseColor);
            setCss(node, 'backgroundColor', falseColor);
        }
    };
    Switch.prototype._handleChange = function (node, status) {
        var _this = this;
        var ev_change = function () {
            if (_this._isDisabled(node))
                return false;
            if (_this._isLoading(node))
                return false;
            status ? (status = false) : (status = true);
            node.setAttribute('checked', "" + status);
            var _a = _this._getStatusText(node), openText = _a.openText, closeText = _a.closeText;
            _this._changeStatusText(node, status, openText, closeText);
            _this._setStatusColor(node, status);
        };
        node.addEventListener('click', ev_change);
    };
    Switch.prototype._changeStatusText = function (node, status, openText, closeText) {
        // 获取当前开关下的文本容器
        var TextBox = node.querySelector("." + PREFIX.switch + "-inner");
        if (TextBox) {
            status ? setHtml(TextBox, openText) : setHtml(TextBox, closeText);
        }
    };
    Switch.prototype._getStatus = function (node) {
        // 转换为真实布尔类型
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return JSON.parse(node.getAttribute('checked'));
    };
    Switch.prototype._isDisabled = function (node) {
        return (node.getAttribute('disabled') === 'disabled' ||
            node.getAttribute('disabled') === 'true' ||
            node.getAttribute('disabled') === '');
    };
    Switch.prototype._isLoading = function (node) {
        return node.getAttribute('rb-loading') === 'true';
    };
    Switch.prototype._getStatusText = function (node) {
        return {
            openText: node.getAttribute('rb-open'),
            closeText: node.getAttribute('rb-close')
        };
    };
    Switch.prototype._getColor = function (node) {
        return {
            trueColor: node.getAttribute('rb-true-color'),
            falseColor: node.getAttribute('rb-false-color')
        };
    };
    return Switch;
}());
export default Switch;
