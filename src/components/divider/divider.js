import PREFIX from '../prefix';
import { $el, createElem, getBooleanTypeAttr, getStrTypeAttr, removeAttrs } from '../../dom-utils';
var Divider = /** @class */ (function () {
    function Divider() {
        this.VERSION = 'v1.0';
        this.components = $el('r-divider', { all: true });
        this._create(this.components);
    }
    Divider.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._setType(node);
            _this._setDashed(node);
            _this._setPlain(node);
            _this._setTitle(node);
            removeAttrs(node, ['dashed', 'plain', 'orientation']);
        });
    };
    Divider.prototype._setType = function (node) {
        var type = this._attrs(node).type;
        node.setAttribute('type', "" + type);
    };
    Divider.prototype._setDashed = function (node) {
        var dashed = this._attrs(node).dashed;
        if (dashed) {
            node.classList.add(PREFIX.divider + "-dashed");
        }
    };
    Divider.prototype._setPlain = function (node) {
        var plain = this._attrs(node).plain;
        if (plain) {
            node.classList.add(PREFIX.divider + "-plain");
        }
    };
    Divider.prototype._setOrientation = function (node) {
        var orientation = this._attrs(node).orientation;
        node.classList.add(PREFIX.divider + "-with-text-" + orientation);
    };
    Divider.prototype._setTitle = function (node) {
        if (node.innerHTML == '' || node.innerHTML == ' ')
            return;
        this._setOrientation(node);
        var DividerText = createElem('span');
        DividerText.className = PREFIX.divider + "-inner-text";
        DividerText.innerHTML = node.innerHTML;
        node.classList.add(PREFIX.divider + "-with-text");
        node.innerHTML = '';
        node.appendChild(DividerText);
    };
    Divider.prototype._attrs = function (node) {
        return {
            type: getStrTypeAttr(node, 'type', 'horizontal'),
            orientation: getStrTypeAttr(node, 'orientation', 'center'),
            dashed: getBooleanTypeAttr(node, 'dashed'),
            plain: getBooleanTypeAttr(node, 'plain')
        };
    };
    return Divider;
}());
export default Divider;
