import { type, validComps } from '../../utils';
import { $el, createElem, removeAttrs, setCss, setHtml, setText } from '../../dom-utils';
import PREFIX from '../prefix';
var PrgesIconType = {
    success: '<i class="rab-icon rab-icon-ios-checkmark-circle"></i>',
    warning: '<i class="rab-icon rab-icon-ios-alert"></i>',
    wrong: '<i class="rab-icon rab-icon-ios-close-circle"></i>'
};
var Progress = /** @class */ (function () {
    function Progress() {
        this.VERSION = 'v1.0';
        this.components = $el('r-progress', { all: true });
        this._create(this.components);
    }
    Progress.prototype.config = function (el) {
        var target = $el(el);
        validComps(target, 'progress');
        var progress = target.querySelector("." + PREFIX.progress + "-bg");
        var progressSucs = target.querySelector("." + PREFIX.progress + "-success-bg");
        var progressText = target.querySelector("." + PREFIX.progress + "-inner-text");
        return {
            get percent() {
                return progress;
            },
            set percent(newVal) {
                if (!type.isNum(newVal) || newVal == progress.style.width)
                    return;
                if (progressText)
                    setHtml(progressText, newVal + "%");
                setCss(progress, 'width', newVal + "%");
            },
            get successPercent() {
                return progressSucs;
            },
            set successPercent(newVal) {
                if (!type.isNum(newVal) || newVal == progressSucs.style.width)
                    return;
                setCss(progressSucs, 'width', newVal + "%");
            }
        };
    };
    Progress.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._createChildNodes(node);
            removeAttrs(node, [
                'rb-percent',
                'rb-show-text',
                'rb-text-inside',
                'rb-stroke-width',
                'rb-stroke-color',
                'rb-success-percent'
            ]);
        });
    };
    Progress.prototype._createChildNodes = function (wrapper) {
        var PgrsOuter = createElem('div');
        var PgrsInner = createElem('div');
        var PgrsBar = createElem('div');
        var PgrsBarSucess = createElem('div');
        PgrsOuter.className = PREFIX.progress + "-outer";
        PgrsInner.className = PREFIX.progress + "-inner";
        PgrsBar.className = PREFIX.progress + "-bg";
        PgrsBarSucess.className = PREFIX.progress + "-success-bg";
        this._setPercent(wrapper, PgrsBar, PgrsBarSucess);
        this._setStrokeWidth(wrapper, PgrsBar, PgrsBarSucess);
        this._setStrokeColor(wrapper, PgrsBar);
        PgrsInner.append(PgrsBar, PgrsBarSucess);
        PgrsOuter.appendChild(PgrsInner);
        wrapper.appendChild(PgrsOuter);
        this._showText(wrapper, PgrsBar);
    };
    Progress.prototype._setPercent = function (wrapper, bar, successBar) {
        var percent = this._getPercent(wrapper) + "%";
        var successPercent = this._getSuccessPercent(wrapper) + "%";
        setCss(bar, 'width', percent);
        setCss(successBar, 'width', successPercent);
    };
    Progress.prototype._setStrokeWidth = function (wrapper, bar, successBar) {
        var strokeWidth = this._getStrokeWidth(wrapper) + "px";
        setCss(bar, 'height', strokeWidth);
        setCss(successBar, 'height', strokeWidth);
    };
    Progress.prototype._showText = function (wrapper, PgrsBar) {
        if (!this._isShowText(wrapper))
            return;
        var PgrsTextWrapper = createElem('div');
        var PgresText = createElem('span');
        PgrsTextWrapper.className = PREFIX.progress + "-text";
        PgresText.className = PREFIX.progress + "-inner-text";
        var percentText = this._getPercent(wrapper) + "%";
        setText(PgresText, percentText);
        if (!this._isTextInside(wrapper)) {
            wrapper.className = PREFIX.progress + "-show-info";
            if (this._getStatus(wrapper) === 'success') {
                setHtml(PgresText, PrgesIconType.success);
            }
            else if (this._getStatus(wrapper) === 'warning') {
                setHtml(PgresText, PrgesIconType.warning);
            }
            else if (this._getStatus(wrapper) === 'wrong') {
                setHtml(PgresText, PrgesIconType.wrong);
            }
            PgrsTextWrapper.appendChild(PgresText);
            wrapper.appendChild(PgrsTextWrapper);
        }
        else {
            PgrsBar.appendChild(PgresText);
        }
    };
    Progress.prototype._setStrokeColor = function (wrapper, PgrsBar) {
        var _a = this._getStrokeColor(wrapper), from = _a.from, to = _a.to;
        if (from.length || to.length) {
            var strokeColor = "linear-gradient(to right, " + from + " 0%, " + to + " 100%)";
            setCss(PgrsBar, 'backgroundImage', strokeColor);
        }
    };
    Progress.prototype._getStatus = function (node) {
        return node.getAttribute('status');
    };
    Progress.prototype._getPercent = function (node) {
        return node.getAttribute('percent') || '0';
    };
    Progress.prototype._getSuccessPercent = function (node) {
        return node.getAttribute('success-percent') || '0';
    };
    Progress.prototype._getStrokeWidth = function (node) {
        return node.getAttribute('stroke-width') || '10';
    };
    Progress.prototype._getStrokeColor = function (node) {
        var _a;
        if (!node.getAttribute('stroke-color')) {
            return {
                from: [],
                to: []
            };
        }
        else {
            /**
             * 转为真实数组
             * "['','']" -> ['','']
             */
            var strArr = ((_a = node.getAttribute('stroke-color')) === null || _a === void 0 ? void 0 : _a.replace(/'/g, '"')) || '';
            var colorArr = JSON.parse(strArr);
            return {
                from: colorArr[0],
                to: colorArr[1]
            };
        }
    };
    Progress.prototype._isTextInside = function (node) {
        return node.getAttribute('text-inside') === 'true';
    };
    Progress.prototype._isShowText = function (node) {
        if (node.getAttribute('show-text') === 'false')
            return false;
        else
            return true;
    };
    return Progress;
}());
export default Progress;
