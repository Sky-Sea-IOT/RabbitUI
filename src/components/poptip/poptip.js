import { __assign } from "tslib";
import PREFIX from '../prefix';
import { $el, bind, createElem, getBooleanTypeAttr, getNumTypeAttr, getStrTypeAttr, removeAttrs, setCss, setHtml } from '../../dom-utils';
import { _newCreatePopper } from '../../mixins/tooltip';
import { CssTransition, clickOutside, _arrow, warn, _Popper } from '../../mixins';
import { type, validComps } from '../../utils';
var defalutPoptipDelay = 100;
var poptipShowTimer;
var poptipEvTimer;
var Poptip = /** @class */ (function () {
    function Poptip() {
        this.VERSION = 'v1.0';
        this.components = $el('r-poptip', { all: true });
        this._create(this.components);
        this.children = $el('.rab-poptip-popper', { all: true });
        clickOutside(this.children, 'poptipShow', 'zoom-big-fast-leave');
        _arrow.scrollUpdate();
    }
    Poptip.prototype.config = function (el) {
        var target = $el(el);
        validComps(target, 'poptip');
        var attrs = Poptip.prototype.attrs;
        var PoptipRef = target.querySelector("." + PREFIX.poptip + "-rel");
        var PoptipPopper = target.querySelector("." + PREFIX.poptip + "-popper");
        var PoptipContent = target.querySelector("." + PREFIX.poptip + "-body-content-inner");
        var PoptipTitle;
        var OkBtn;
        var CancelBtn;
        // 判断要设置的提示框标题是否是确认对话框的标题
        // 判断是否要获取确认对话框的确定和取消按钮
        if (attrs(target).isConfirm) {
            PoptipTitle = target.querySelector("." + PREFIX.poptip + "-body-message");
            OkBtn = target.querySelector("." + PREFIX.button + "-primary." + PREFIX.button + "-sm");
            CancelBtn = target.querySelector("." + PREFIX.button + "-text." + PREFIX.button + "-sm");
        }
        else {
            PoptipTitle = target.querySelector("." + PREFIX.poptip + "-title-inner");
        }
        return {
            get title() {
                return setHtml(PoptipTitle);
            },
            set title(newVal) {
                if (type.isStr(newVal) || type.isNum(newVal))
                    setHtml(PoptipTitle, newVal);
            },
            get content() {
                return setHtml(PoptipContent);
            },
            set content(newVal) {
                if (type.isStr(newVal) || type.isNum(newVal))
                    setHtml(PoptipContent, newVal);
            },
            events: function (_a) {
                var onShow = _a.onShow, onHide = _a.onHide, onOk = _a.onOk, onCancel = _a.onCancel;
                var triggerMode = attrs(target).trigger;
                var showEv = function () {
                    if (PoptipPopper.dataset.poptipShow === 'true')
                        onShow && type.isFn(onShow);
                };
                var hideEv = function () {
                    if (PoptipPopper.dataset.poptipShow === 'false')
                        onHide && type.isFn(onHide);
                };
                var clickEv = function () {
                    showEv();
                    hideEv();
                };
                if (triggerMode === 'click') {
                    bind(PoptipRef, 'click', clickEv);
                }
                else if (triggerMode === 'focus') {
                    bind(target, 'mousedown', showEv);
                    bind(target, 'mouseup', hideEv);
                }
                else if (triggerMode === 'hover') {
                    _Popper.handleHoverShowAndHideEvents({
                        reference: target,
                        popper: PoptipPopper,
                        datasetVal: 'poptipStatus',
                        showCb: onShow,
                        hideCb: onHide,
                        delay: defalutPoptipDelay,
                        timer: poptipEvTimer
                    });
                }
                // 确认对话框的确定和取消按钮都要触发提示框隐藏
                if (OkBtn) {
                    bind(OkBtn, 'click', function () {
                        hideEv();
                        onOk && type.isFn(onOk);
                    });
                }
                if (CancelBtn) {
                    bind(OkBtn, 'click', function () {
                        hideEv();
                        onCancel && type.isFn(onCancel);
                    });
                }
            }
        };
    };
    Poptip.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node, i) {
            _this._createPoptipNodes(node, i);
            removeAttrs(node, [
                'width',
                'title',
                'content',
                'ok-text',
                'padding',
                'disabled',
                'placement',
                'word-wrap',
                'cancel-text'
            ]);
        });
    };
    Poptip.prototype._createPoptipNodes = function (node, i) {
        var attrs = this.attrs(node);
        if (attrs.isConfirm)
            node.className = PREFIX.poptip + "-confirm";
        var uid = "poptip" + i;
        var referenceElem = node.firstElementChild;
        var PoptipRel = createElem('div');
        PoptipRel.className = PREFIX.poptip + "-rel";
        PoptipRel.appendChild(referenceElem);
        var whatModel = attrs.isConfirm ? this._confirmTpl(attrs) : this._normalTpl(attrs);
        var template = "\n            <div class=\"" + PREFIX.poptip + "-popper\" x-placement=" + attrs.placement + " data-poptip-uid=" + uid + ">\n                <div class=\"" + PREFIX.poptip + "-content\">\n                    <div class=\"" + PREFIX.poptip + "-arrow\" data-popper-arrow></div>\n                    <div class=\"" + PREFIX.poptip + "-inner\">" + whatModel + "</div>\n                </div>\n            </div>\n        ";
        setHtml(node, template);
        this._setWidth(attrs, uid);
        var Popper = $el("[data-poptip-uid=" + uid + "]");
        Popper === null || Popper === void 0 ? void 0 : Popper.before(PoptipRel);
        // 初始化 display
        setCss(Popper, 'display', 'none');
        if (!attrs.isDisabled) {
            // @ts-ignore
            this._triggerDisplay(attrs.trigger, node, PoptipRel, Popper, attrs);
        }
    };
    Poptip.prototype._normalTpl = function (attrs) {
        var setPadding = attrs.padding ? "padding:" + attrs.padding : '';
        var isShowTitle = !attrs.isWordWrap && attrs.title
            ? "<div class=\"" + PREFIX.poptip + "-title\" style=\"" + setPadding + "\">\n                      <div class=\"" + PREFIX.poptip + "-title-inner\">" + attrs.title + "</div>\n                   </div>"
            : '';
        var template = "\n            " + isShowTitle + "\n            <div class=\"" + PREFIX.poptip + "-body\" style=\"" + setPadding + "\">\n                <div class=\"" + PREFIX.poptip + "-body-content\">\n                <div class=\"" + PREFIX.poptip + "-body-content-inner\">" + attrs.content + "</div>\n                </div>\n            </div>\n            ";
        return template;
    };
    Poptip.prototype._confirmTpl = function (attrs) {
        var template = "\n          <div class=\"" + PREFIX.poptip + "-body\">\n              <i class=\"" + PREFIX.icon + " " + PREFIX.icon + "-ios-help-circle\"></i>\n              <div class=\"" + PREFIX.poptip + "-body-message\">" + attrs.title + "</div>\n          </div>\n          <div class=\"" + PREFIX.poptip + "-footer\">\n              <button class=\"" + PREFIX.button + " " + PREFIX.button + "-text " + PREFIX.button + "-sm\">" + attrs.cancelText + "</button>\n              <button class=\"" + PREFIX.button + " " + PREFIX.button + "-primary " + PREFIX.button + "-sm\">" + attrs.okText + "</button>\n          </div>\n      ";
        return template;
    };
    Poptip.prototype._setWidth = function (attrs, uid) {
        var popper = document.querySelector("[data-poptip-uid=" + uid + "]");
        if (attrs.width) {
            setCss(popper, 'width', attrs.width + "px");
        }
        if (attrs.isWordWrap) {
            var popperContent = popper === null || popper === void 0 ? void 0 : popper.querySelector("." + PREFIX.poptip + "-body-content");
            popperContent === null || popperContent === void 0 ? void 0 : popperContent.classList.add(PREFIX.poptip + "-body-content-word-wrap");
        }
    };
    Poptip.prototype._triggerDisplay = function (trigger, parent, referenceChild, popper, poptipAttrs) {
        if (trigger !== 'click' && trigger !== 'hover' && trigger !== 'focus') {
            warn("The Poptip attribute trigger got an invalid trigger mode --> '" + trigger + "'");
            return;
        }
        var _initPoptip = this._initPoptip;
        var common = {
            rmCls: true,
            enterCls: 'zoom-big-fast-enter',
            leaveCls: 'zoom-big-fast-leave',
            timeout: 200
        };
        // 通过设置 popper.dataset.poptipShow 来判断是否隐藏或显示
        var show = function () {
            popper.dataset.poptipShow = 'true';
            CssTransition(popper, __assign({ inOrOut: 'in' }, common));
            _initPoptip(parent, popper, poptipAttrs);
        };
        var hide = function () {
            popper.dataset.poptipShow = 'false';
            CssTransition(popper, __assign({ inOrOut: 'out' }, common));
        };
        var judgmentIsVisible = function () { return (popper.dataset.poptipShow === 'true' ? hide() : show()); };
        if (trigger === 'click' || trigger === 'focus') {
            _initPoptip(parent, popper, poptipAttrs);
            _arrow.toggleUpdate(popper, trigger, parent);
        }
        if (trigger === 'click') {
            bind(referenceChild, 'click', judgmentIsVisible);
        }
        else if (trigger === 'focus' && !poptipAttrs.isConfirm) {
            bind(referenceChild, 'mousedown', judgmentIsVisible);
            bind(referenceChild, 'mouseup', hide);
        }
        else if (trigger === 'hover' && !poptipAttrs.isConfirm) {
            bind(parent, 'mouseenter', function () {
                poptipShowTimer = setTimeout(function () {
                    show();
                }, defalutPoptipDelay);
            });
            bind(parent, 'mouseleave', function () {
                clearTimeout(poptipShowTimer);
                hide();
            });
            _arrow.toggleUpdate(popper, 'hover', parent, defalutPoptipDelay);
        }
        // 确认对话框的确定和取消按钮触发隐藏
        if (poptipAttrs.isConfirm) {
            var confirmOkBtn = popper.querySelector("." + PREFIX.button + "-primary." + PREFIX.button + "-sm");
            var confirmCancelBtn = popper.querySelector("." + PREFIX.button + "-text." + PREFIX.button + "-sm");
            confirmOkBtn.addEventListener('click', judgmentIsVisible);
            confirmCancelBtn.addEventListener('click', judgmentIsVisible);
        }
    };
    Poptip.prototype._initPoptip = function (reference, popper, poptipAttrs) {
        var NCP = _newCreatePopper(reference, popper, poptipAttrs.placement, poptipAttrs.offset);
        return NCP;
    };
    Poptip.prototype.attrs = function (node) {
        return {
            // number type
            width: getNumTypeAttr(node, 'width', 0),
            offset: getNumTypeAttr(node, 'offset', 0),
            // string type
            title: getStrTypeAttr(node, 'title', ''),
            okText: getStrTypeAttr(node, 'ok-text', '确定'),
            content: getStrTypeAttr(node, 'content', ''),
            trigger: getStrTypeAttr(node, 'trigger', 'click'),
            padding: getStrTypeAttr(node, 'padding', ''),
            placement: getStrTypeAttr(node, 'placement', 'top'),
            cancelText: getStrTypeAttr(node, 'cancel-text', '取消'),
            // boolean type
            isConfirm: getBooleanTypeAttr(node, 'confirm'),
            isDisabled: getBooleanTypeAttr(node, 'disabled'),
            isWordWrap: getBooleanTypeAttr(node, 'word-wrap')
        };
    };
    return Poptip;
}());
export default Poptip;
//# sourceMappingURL=poptip.js.map