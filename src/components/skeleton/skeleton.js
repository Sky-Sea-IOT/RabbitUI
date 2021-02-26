/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { $el, createElem, getArrTypeAttr, getBooleanTypeAttr, getNumTypeAttr, getStrTypeAttr, removeAttrs, setCss, setHtml } from '../../dom-utils';
import PREFIX from '../prefix';
var Skeleton = /** @class */ (function () {
    function Skeleton() {
        this.VERSION = 'v1.0';
        this.components = $el('r-skeleton', { all: true });
        this._create(this.components);
    }
    Skeleton.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            var _a = _this._attrs(node), active = _a.active, title = _a.title, paragraph = _a.paragraph, avatar = _a.avatar, titleWidth = _a.titleWidth, paragraphRows = _a.paragraphRows, paragraphWidth = _a.paragraphWidth, avatarSize = _a.avatarSize, avatarShape = _a.avatarShape;
            _this._setActive(node, active);
            _this._setMainTemplate(node);
            _this._setTitle(node, title, titleWidth);
            _this._showParagraph(node, paragraph, paragraphRows, paragraphWidth);
            _this._showAvatar(node, avatar, avatarSize, avatarShape);
            removeAttrs(node, [
                'active',
                'title',
                'paragraph',
                'avatar',
                'title-width',
                'paragraph-width',
                'paragraph-rows',
                'avatar-shape',
                'avatar-size'
            ]);
        });
    };
    Skeleton.prototype._setActive = function (node, active) {
        if (!active)
            return;
        node.classList.add(PREFIX.skeleton + "-active");
    };
    Skeleton.prototype._setMainTemplate = function (node) {
        var template = "\n        <div class=\"" + PREFIX.skeleton + "-content\">\n            <h3 class=\"" + PREFIX.skeleton + "-title\" style=\"width: 38%\"></h3>\n            <ul class=\"" + PREFIX.skeleton + "-paragraph\">\n                <li></li>\n                <li></li>\n                <li></li>\n            </ul>\n        </div>\n        ";
        setHtml(node, template);
    };
    Skeleton.prototype._setTitle = function (node, isShow, width) {
        var Title = node.querySelector("." + PREFIX.skeleton + "-title");
        this._setTitleWidth(Title, width);
        if (isShow === 'false') {
            node.removeChild(Title);
        }
    };
    Skeleton.prototype._setTitleWidth = function (titleElm, titleWidth) {
        setCss(titleElm, 'width', titleWidth + "%");
    };
    Skeleton.prototype._showParagraph = function (node, isShow, rows, rowsWidth) {
        var Paragraph = node.querySelector("." + PREFIX.skeleton + "-paragraph");
        this._setParagraphRows(Paragraph, rows);
        this._setParagraphRowsWidth(Paragraph, rowsWidth);
        if (isShow === 'false') {
            node.removeChild(Paragraph);
        }
    };
    Skeleton.prototype._setParagraphRows = function (pgELm, rows) {
        if (!rows)
            return;
        var Fragment = document.createDocumentFragment();
        var i = 0;
        for (; i < rows; i++) {
            var Row = createElem('li');
            Fragment.appendChild(Row);
        }
        setHtml(pgELm, '');
        pgELm.appendChild(Fragment);
    };
    Skeleton.prototype._setParagraphRowsWidth = function (pgELm, width) {
        if (typeof width === 'number') {
            setCss(pgELm.querySelector("." + PREFIX.skeleton + "-paragraph > li"), 'width', width + "%");
        }
        if (Array.isArray(width) && width.length) {
            var Rows = pgELm.querySelectorAll("." + PREFIX.skeleton + "-paragraph > li");
            var i = 0;
            for (; i < width.length; i++) {
                var rowWidth = width[i];
                var Row = Rows[i];
                Row ? setCss(Row, 'width', rowWidth + "%") : null;
            }
        }
    };
    Skeleton.prototype._showAvatar = function (node, avatar, size, shape) {
        if (!avatar)
            return;
        var template = "\n        <div class=\"" + PREFIX.skeleton + "-header\">\n        <span class=\"" + PREFIX.skeleton + "-avatar " + PREFIX.skeleton + "-avatar-" + size + " " + PREFIX.skeleton + "-avatar-" + shape + "\"></span>\n        </div>\n        ";
        node.insertAdjacentHTML('afterbegin', template);
        node.classList.add(PREFIX.skeleton + "-with-avatar");
        setCss(node.querySelector("." + PREFIX.skeleton + "-title"), 'width', '50%');
    };
    Skeleton.prototype._attrs = function (node) {
        return {
            active: getBooleanTypeAttr(node, 'active'),
            avatar: getBooleanTypeAttr(node, 'avatar'),
            title: getStrTypeAttr(node, 'title', 'true'),
            paragraph: getStrTypeAttr(node, 'paragraph', 'true'),
            avatarSize: getStrTypeAttr(node, 'avatar-size', 'large'),
            avatarShape: getStrTypeAttr(node, 'avatar-shape', 'circle'),
            titleWidth: getNumTypeAttr(node, 'title-width'),
            paragraphWidth: getNumTypeAttr(node, 'paragraph-width', 0) ||
                getArrTypeAttr(node, 'paragraph-width'),
            paragraphRows: getNumTypeAttr(node, 'paragraph-rows')
        };
    };
    return Skeleton;
}());
export default Skeleton;
