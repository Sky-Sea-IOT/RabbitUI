import PREFIX from '../prefix';
import { $el, setHtml } from '../../dom-utils';
import { CssTransition, Scrollable } from '../../mixins';
import { destroyElem } from '../../utils';
var spinZIndex = 2010;
var Spin = /** @class */ (function () {
    function Spin() {
        this.VERSION = 'v1.0';
        this.components = $el('r-spin', { all: true });
        this._create(this.components);
    }
    Spin.prototype.show = function (_a) {
        var _b = (_a === void 0 ? {} : _a).content, content = _b === void 0 ? '' : _b;
        Scrollable({ scroll: false, lock: false });
        var template = "\n        <div class=\"" + PREFIX.spin + "-fullscreen " + PREFIX.spin + "-fullscreen-wrapper\"\n         style=\"z-index: " + spinZIndex++ + "\">\n          <r-spin fix class=\"" + PREFIX.spin + "-fullscreen \n           " + (content ? PREFIX.spin + "-show-text" : '') + "\" size=\"large\">\n            " + this._createChildTemplate(content) + "\n          </r-spin>\n         </div>\n         ";
        var fragment = document.createRange().createContextualFragment(template);
        document.body.appendChild(fragment);
        CssTransition($el("." + PREFIX.spin + "-fullscreen"), {
            inOrOut: 'in',
            enterCls: 'rab-fade-in'
        });
    };
    Spin.prototype.hide = function () {
        Scrollable({ scroll: true, lock: true });
        var spinElem = $el("." + PREFIX.spin + "-fullscreen");
        if (spinElem)
            destroyElem(spinElem, { fadeOut: true });
    };
    Spin.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            var customContent = setHtml(node);
            customContent ? node.classList.add(PREFIX.spin + "-show-text") : '';
            setHtml(node, _this._createChildTemplate(customContent));
        });
    };
    Spin.prototype._createChildTemplate = function (content) {
        var template = "\n          <div class=\"" + PREFIX.spin + "-main\">\n            <span class=\"" + PREFIX.spin + "-dot\"></span>\n            <div class=\"" + PREFIX.spin + "-text\">" + content + "</div>\n          </div>\n        ";
        return template;
    };
    return Spin;
}());
export default Spin;
//# sourceMappingURL=spin.js.map