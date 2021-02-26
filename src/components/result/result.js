/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { $el, getStrTypeAttr, removeAttrs, setHtml } from '../../dom-utils';
import PREFIX from '../prefix';
import Image403 from '../../../assets/result-403.svg';
import Image404 from '../../../assets/result-404.svg';
import Image500 from '../../../assets/result-500.svg';
var Result = /** @class */ (function () {
    function Result() {
        this.VERSION = 'v1.0';
        this.components = $el('r-result', { all: true });
        this._create(this.components);
    }
    Result.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            var _a = _this._attrs(node), status = _a.status, title = _a.title, subTitle = _a.subTitle, icon = _a.icon, extra = _a.extra;
            var oldChild = node.firstElementChild;
            _this._setMainTemplate(node);
            _this._setStatus(node, status);
            _this._setTitle(node, title, subTitle);
            _this._setExtraContent(node, extra);
            _this._setComplexDesc(node, oldChild);
            _this._setCustomIcon(node, icon);
            removeAttrs(node, ['title', 'subtitle', 'status', 'icon', 'extra']);
        });
    };
    Result.prototype._setMainTemplate = function (node) {
        var template = "\n          <div class=\"" + PREFIX.result + "-icon\">\n             <i class=\"" + PREFIX.icon + "\"></i>\n          </div>\n          <div class=\"" + PREFIX.result + "-title\"></div>\n          <div class=\"" + PREFIX.result + "-subtitle\"></div> \n          <div class=\"" + PREFIX.result + "-content\"></div>\n          <div class=\"" + PREFIX.result + "-extra\"></div>\n        ";
        setHtml(node, template);
    };
    Result.prototype._setStatus = function (node, status) {
        node.classList.add(PREFIX.result + "-" + status);
        var ResultIcon = node.querySelector("." + PREFIX.result + "-icon");
        var I = ResultIcon.querySelector('i');
        var iconType = this._getStatusIcon(status);
        var otherStatus = ['403', '404', '500'];
        if (otherStatus.includes(status)) {
            ResultIcon.classList.add(PREFIX.result + "-image");
            ResultIcon.removeChild(I);
            setHtml(ResultIcon, "<img src=\"" + iconType + "\" alt=\"result\" />");
        }
        else {
            I.classList.add(PREFIX.icon + "-" + iconType);
        }
    };
    Result.prototype._setTitle = function (node, title, subTitle) {
        var ResultTitle = node.querySelector("." + PREFIX.result + "-title");
        var ResultSubTitle = node.querySelector("." + PREFIX.result + "-subtitle");
        setHtml(ResultTitle, title);
        setHtml(ResultSubTitle, subTitle);
    };
    Result.prototype._setExtraContent = function (node, content) {
        var ResultExtra = node.querySelector("." + PREFIX.result + "-extra");
        setHtml(ResultExtra, content);
    };
    Result.prototype._setCustomIcon = function (node, icon) {
        if (!icon)
            return;
        var ResultIcon = node.querySelector("." + PREFIX.result + "-icon > i");
        ResultIcon.className = PREFIX.icon + " " + PREFIX.icon + "-" + icon;
    };
    Result.prototype._setComplexDesc = function (node, child) {
        var ResultContent = node.querySelector("." + PREFIX.result + "-content");
        if (!child) {
            node.removeChild(ResultContent);
            return;
        }
        ResultContent === null || ResultContent === void 0 ? void 0 : ResultContent.appendChild(child);
    };
    Result.prototype._getStatusIcon = function (status) {
        var icons = {
            info: 'ios-alert',
            success: 'ios-checkmark-circle',
            warning: 'ios-warning',
            error: 'ios-close-circle',
            '403': Image403,
            '404': Image404,
            '500': Image500
        };
        // @ts-ignore
        return icons[status] || icons.info;
    };
    Result.prototype._attrs = function (node) {
        return {
            status: getStrTypeAttr(node, 'status', 'info'),
            icon: getStrTypeAttr(node, 'icon', ''),
            title: getStrTypeAttr(node, 'title', ''),
            extra: getStrTypeAttr(node, 'extra', ''),
            subTitle: getStrTypeAttr(node, 'subtitle', '')
        };
    };
    return Result;
}());
export default Result;
