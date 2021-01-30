import PREFIX from '../prefix';
import { type, validComps } from '../../utils';
import { $el, createElem, setCss, setHtml, setText, removeAttrs } from '../../dom-utils';
import { _Popper, CssTransition, _arrow } from '../../mixins';
var tooltipShowTimer;
var tooltipEvTimer;
var Tooltip = /** @class */ (function () {
    function Tooltip() {
        this.VERSION = 'v1.0';
        this.components = $el('r-tooltip', { all: true });
        this._create(this.components);
        _arrow.scrollUpdate();
    }
    Tooltip.prototype.config = function (el) {
        var target = $el(el);
        validComps(target, 'tooltip');
        var _a = Tooltip.prototype, _getDelay = _a._getDelay, _getIsAlways = _a._getIsAlways, _getIsDisabled = _a._getIsDisabled;
        var popper = target.querySelector("." + PREFIX.tooltip + "-popper");
        var popperText = target.querySelector("." + PREFIX.tooltip + "-inner");
        return {
            get content() {
                return setText(popperText);
            },
            set content(newVal) {
                if (type.isStr(newVal) || type.isNum(newVal))
                    setHtml(popperText, "" + newVal);
            },
            events: function (_a) {
                var onShow = _a.onShow, onHide = _a.onHide;
                if (_getIsAlways(target) || _getIsDisabled(target))
                    return;
                var delay = _getDelay(target);
                _Popper.handleHoverShowAndHideEvents({
                    reference: target,
                    popper: popper,
                    datasetVal: 'tooltipShow',
                    showCb: onShow,
                    hideCb: onHide,
                    delay: delay,
                    timer: tooltipEvTimer
                });
            }
        };
    };
    Tooltip.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._createTooltipNodes(node);
            removeAttrs(node, ['content', 'theme', 'delay', 'max-width', 'disabled', 'always']);
        });
    };
    Tooltip.prototype._createTooltipNodes = function (reference) {
        var TooltipRef = createElem('div');
        var TooltipPopper = createElem('div');
        var TooltipContent = createElem('div');
        var TooltipArrow = createElem('div');
        var TooltipInner = createElem('div');
        this._setCls(reference, [
            TooltipRef,
            TooltipPopper,
            TooltipContent,
            TooltipArrow,
            TooltipInner
        ]);
        this._setTip(reference, TooltipInner);
        this._setMaxWidth(reference, TooltipInner);
        var disabledShow = this._getIsDisabled(reference);
        var alwaysShow = this._setIsAlwaysShow(reference, TooltipPopper);
        // 如果 tooltip 没有设置为总是可见或者禁用显示，则正常鼠标移入移出事件
        if (!alwaysShow && !disabledShow) {
            this._triggerDisplay('enter', reference, TooltipPopper);
            this._triggerDisplay('leave', reference, TooltipPopper);
        }
        var firstElementChild = reference.firstElementChild;
        // 只选取第一个子元素作为宿主元素
        if (firstElementChild)
            TooltipRef.appendChild(firstElementChild);
        TooltipPopper.appendChild(TooltipContent);
        TooltipPopper.append(TooltipArrow, TooltipInner);
        reference.append(TooltipRef, TooltipPopper);
    };
    Tooltip.prototype._setCls = function (reference, nodes) {
        // 获取主题颜色
        var theme = this._getTheme(reference);
        var nodesCls = [
            PREFIX.tooltip + "-rel",
            PREFIX.tooltip + "-popper " + PREFIX.tooltip + "-" + theme,
            PREFIX.tooltip + "-content",
            PREFIX.tooltip + "-arrow",
            PREFIX.tooltip + "-inner"
        ];
        // 批量添加样式类名
        var i = 0;
        var length = nodes.length;
        for (; i < length; i++) {
            var node = nodes[i];
            node.className = "" + nodesCls[i];
        }
    };
    Tooltip.prototype._triggerDisplay = function (trigger, reference, popper) {
        var _this = this;
        var ev = function () {
            if (trigger === 'enter')
                _this._initSetPopper(reference, popper);
            CssTransition(popper, {
                inOrOut: trigger === 'enter' ? 'in' : 'out',
                rmCls: true,
                enterCls: 'zoom-big-fast-enter',
                leaveCls: 'zoom-big-fast-leave',
                timeout: 85
            });
        };
        var delay = this._getDelay(reference);
        if (trigger === 'enter') {
            reference.addEventListener('mouseenter', function () {
                tooltipShowTimer = setTimeout(function () {
                    ev();
                }, delay);
            });
            _arrow.toggleUpdate(popper, 'hover', reference, delay);
        }
        else {
            reference.addEventListener('mouseleave', function () {
                clearTimeout(tooltipShowTimer);
                ev();
            });
        }
    };
    Tooltip.prototype._setTip = function (reference, popper) {
        return (popper.textContent = this._getTip(reference));
    };
    Tooltip.prototype._setMaxWidth = function (reference, popper) {
        var maxWidth = this._getMaxWidth(reference);
        if (maxWidth <= 0)
            return;
        setCss(popper, 'maxWidth', maxWidth + "px");
        popper.classList.add(PREFIX.tooltip + "-inner-with-width");
    };
    Tooltip.prototype._initSetPopper = function (reference, popper) {
        var offset = this._getOffset(reference);
        var placement = this._getPlacement(reference);
        popper.setAttribute('x-placement', placement);
        return _Popper._newCreatePopper(reference, popper, placement, offset);
    };
    Tooltip.prototype._setIsAlwaysShow = function (reference, popper) {
        var isAlways = this._getIsAlways(reference);
        if (isAlways) {
            setCss(popper, 'display', '');
            this._initSetPopper(reference, popper);
            return true;
        }
        setCss(popper, 'display', 'none');
    };
    Tooltip.prototype._getTip = function (node) {
        return node.getAttribute('content') || '';
    };
    Tooltip.prototype._getPlacement = function (node) {
        return node.getAttribute('placement') || 'bottom';
    };
    Tooltip.prototype._getDelay = function (node) {
        // 默认 100毫秒的延迟，防止鼠标快速经过时也会显示tooltip
        return Number(node.getAttribute('delay')) || 100;
    };
    Tooltip.prototype._getIsAlways = function (node) {
        return node.getAttribute('always') === 'true';
    };
    Tooltip.prototype._getIsDisabled = function (node) {
        return node.getAttribute('disabled') === 'true';
    };
    Tooltip.prototype._getTheme = function (node) {
        return node.getAttribute('theme') || 'dark';
    };
    Tooltip.prototype._getMaxWidth = function (node) {
        return Number(node.getAttribute('max-width')) || 0;
    };
    Tooltip.prototype._getOffset = function (node) {
        return Number(node.getAttribute('offset')) || 0;
    };
    return Tooltip;
}());
export default Tooltip;
//# sourceMappingURL=tooltip.js.map