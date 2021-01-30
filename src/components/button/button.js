import { $el, createElem, removeAttrs, setHtml } from '../../dom-utils';
import { validComps } from '../../utils';
import PREFIX from '../prefix';
var Button = /** @class */ (function () {
    function Button() {
        this.VERSION = '1.0';
        this.components = $el("." + PREFIX.button, { all: true });
        this._getAllBtns(this.components);
    }
    Button.prototype.config = function (elem) {
        var target = $el(elem);
        validComps(target, 'button');
        return {
            get loading() {
                return false;
            },
            set loading(newVal) {
                if (newVal === true) {
                    target.classList.add('rab-btn-loading');
                    target.prepend(Button.prototype._loadIcon());
                }
                else {
                    target.classList.remove('rab-btn-loading');
                    target.querySelector('.rab-icon-loading-solid').remove();
                }
            }
        };
    };
    Button.prototype._getAllBtns = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._setLoading(node);
            _this._setIcon(node);
            removeAttrs(node, ['icon']);
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
            var btnIcon = "<i class=\"rab-icon rab-icon-" + this._getIcon(node) + "\"></i>";
            node.classList.add(PREFIX.button + "-icon-only");
            setHtml(node, btnIcon);
        }
        else {
            var Icon = createElem('i');
            Icon.className = "rab-icon rab-icon-" + this._getIcon(node);
            node.prepend(Icon);
        }
    };
    Button.prototype._isLoading = function (node) {
        return node.getAttribute('loading') === 'true';
    };
    Button.prototype._loadIcon = function () {
        var LoadIcon = createElem('i');
        LoadIcon.className = 'rab-load-loop rab-icon rab-icon-loading-solid';
        return LoadIcon;
    };
    Button.prototype._getIcon = function (node) {
        return node.getAttribute('icon') || '';
    };
    return Button;
}());
export default Button;
//# sourceMappingURL=button.js.map