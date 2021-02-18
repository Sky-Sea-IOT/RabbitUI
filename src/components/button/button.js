import { $el, createElem, removeAttrs, setHtml } from '../../dom-utils';
import { type, validComps } from '../../utils';
import PREFIX from '../prefix';
var Button = /** @class */ (function () {
    function Button() {
        this.VERSION = '1.0.2';
        this.components = $el("." + PREFIX.button, { all: true });
        this._getAllBtns(this.components);
    }
    Button.prototype.config = function (el) {
        var target = typeof el === 'string' ? $el(el) : el;
        validComps(target, 'button');
        return {
            get loading() {
                return false;
            },
            set loading(newVal) {
                if (!type.isBol(newVal))
                    return;
                var loadingIcon = target.querySelector("." + PREFIX.icon + "-loading-solid");
                // v1.0.1 修复加载中图标重复追加
                if (newVal) {
                    if (!loadingIcon) {
                        target.classList.add(PREFIX.button + "-loading");
                        target.prepend(Button.prototype._loadIcon());
                    }
                }
                else {
                    target.classList.remove(PREFIX.button + "-loading");
                    loadingIcon ? loadingIcon.remove() : '';
                }
            }
        };
    };
    Button.prototype._getAllBtns = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._setLoading(node);
            _this._setIcon(node);
            removeAttrs(node, ['icon', 'loading']);
        });
    };
    Button.prototype._setLoading = function (node) {
        if (this._isLoading(node)) {
            if (node.innerHTML === '')
                node.classList.add(PREFIX.button + "-icon-only");
            node.classList.add(PREFIX.button + "-loading");
            node.prepend(this._loadIcon());
        }
    };
    Button.prototype._setIcon = function (node) {
        if (!this._getIcon(node))
            return;
        if (node.innerHTML === '') {
            var btnIcon = "<i class=\"" + PREFIX.icon + " " + PREFIX.icon + "-" + this._getIcon(node) + "\"></i>";
            node.classList.add(PREFIX.button + "-icon-only");
            setHtml(node, btnIcon);
        }
        else {
            var Icon = createElem('i');
            Icon.className = PREFIX.icon + " " + PREFIX.icon + "-" + this._getIcon(node);
            node.prepend(Icon);
        }
    };
    Button.prototype._isLoading = function (node) {
        return node.getAttribute('loading') === 'true';
    };
    Button.prototype._loadIcon = function () {
        var LoadIcon = createElem('i');
        LoadIcon.className = "rab-load-loop " + PREFIX.icon + " " + PREFIX.icon + "-loading-solid";
        // v1.0.2 取消样式高度，否则加载中图标会和文字不在同一水平线上
        // setCss(LoadIcon, 'height', '25px');
        return LoadIcon;
    };
    Button.prototype._getIcon = function (node) {
        return node.getAttribute('icon') || '';
    };
    return Button;
}());
export default Button;
//# sourceMappingURL=button.js.map