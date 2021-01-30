import PREFIX from '../prefix';
import { $el, createElem, getBooleanTypeAttr, getStrTypeAttr, removeAttrs, setHtml } from '../../dom-utils';
import { type, validComps } from '../../utils';
var Card = /** @class */ (function () {
    function Card() {
        this.VERSION = 'v1.0';
        this.components = $el('r-card', { all: true });
        this._create(this.components);
    }
    Card.prototype.config = function (el) {
        var target = $el(el);
        validComps(target, 'card');
        var CardTitle = target.querySelector("." + PREFIX.card + "-head");
        var CardExtra = target.querySelector("." + PREFIX.card + "-extra");
        return {
            get title() {
                return setHtml(CardTitle);
            },
            set title(newVal) {
                if (type.isStr(newVal))
                    setHtml(CardTitle, newVal);
            },
            get extra() {
                return setHtml(CardExtra);
            },
            set extra(newVal) {
                if (type.isStr(newVal))
                    setHtml(CardExtra, newVal);
            }
        };
    };
    Card.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._createCardNodes(node);
            removeAttrs(node, ['title', 'extra', 'shadow']);
        });
    };
    Card.prototype._createCardNodes = function (node) {
        var CardHead = createElem('div');
        var CardExtra = createElem('div');
        var CardBody = createElem('div');
        this._setCls(CardHead, CardExtra, CardBody);
        this._setContent(node, CardBody);
        this._setTitle(node, CardHead);
        this._setExtra(node, CardExtra);
        this._setShadow(node);
    };
    Card.prototype._setCls = function (node1, node2, node3) {
        node1.className = PREFIX.card + "-head";
        node2.className = PREFIX.card + "-extra";
        node3.className = PREFIX.card + "-body";
    };
    Card.prototype._setTitle = function (parent, children) {
        var title = this._attrs(parent).title;
        if (!title)
            return;
        setHtml(children, title);
        // 这里如果用 appendChild 会把头部节点放到内容节点后面
        parent.prepend(children);
    };
    Card.prototype._setContent = function (parent, children) {
        var contentNode = Array.from(parent.children);
        contentNode.forEach(function (node) {
            children.appendChild(node);
        });
        parent.appendChild(children);
    };
    Card.prototype._setExtra = function (parent, children) {
        var extra = this._attrs(parent).extra;
        if (!extra)
            return;
        setHtml(children, extra);
        parent.appendChild(children);
    };
    Card.prototype._setShadow = function (node) {
        var shadow = this._attrs(node).shadow;
        if (shadow) {
            node.classList.add(PREFIX.card + "-shadow");
        }
    };
    Card.prototype._attrs = function (node) {
        return {
            title: getStrTypeAttr(node, 'title', ''),
            extra: getStrTypeAttr(node, 'extra', ''),
            shadow: getBooleanTypeAttr(node, 'shadow')
        };
    };
    return Card;
}());
export default Card;
//# sourceMappingURL=card.js.map