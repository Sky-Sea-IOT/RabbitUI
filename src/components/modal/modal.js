/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Button from '../button';
import PREFIX from '../prefix';
import { $el, bind, getBooleanTypeAttr, getNumTypeAttr, getStrTypeAttr, removeAttrs, setCss, setHtml } from '../../dom-utils';
import { CssTransition, Scrollable } from '../../mixins';
import { type, validComps } from '../../utils';
var RABBIT_BTN = new Button();
var Modal = /** @class */ (function () {
    function Modal() {
        this.VERSION = 'v1.0';
        this.components = $el('r-modal', { all: true });
        this._create(this.components);
    }
    Modal.prototype.config = function (el) {
        var target = $el(el);
        validComps(target, 'modal');
        var _a = Modal.prototype, _attrs = _a._attrs, _getModalNode = _a._getModalNode, _handleVisable = _a._handleVisable;
        var loading = _attrs(target).loading;
        var M_Child = _getModalNode(target);
        return {
            get title() {
                return setHtml(M_Child.modalTitle);
            },
            set title(newVal) {
                if (type.isStr(newVal))
                    setHtml(M_Child.modalTitle, newVal);
            },
            get visable() {
                return false;
            },
            set visable(newVal) {
                if (type.isBol(newVal)) {
                    // 当设置modal为隐藏状态并且确定按钮是加载中的状态则初始化它
                    if (!newVal) {
                        if (loading)
                            RABBIT_BTN.config(M_Child.modalOkBtn).loading = newVal;
                    }
                    _handleVisable(newVal, target, [
                        M_Child.modalMask,
                        M_Child.modalWrap,
                        M_Child.modal
                    ]);
                }
            },
            events: function (_a) {
                var onOk = _a.onOk, onCancel = _a.onCancel;
                var _b = _attrs(target), closable = _b.closable, maskClosable = _b.maskClosable;
                var okEv = function () {
                    // 是否设置按钮为加载中状态
                    if (loading)
                        RABBIT_BTN.config(M_Child.modalOkBtn).loading = loading;
                    onOk && type.isFn(onOk);
                };
                var cancelEv = function () {
                    // 如果按钮为加载中状态则初始化其状态
                    if (loading)
                        RABBIT_BTN.config(M_Child.modalOkBtn).loading = !loading;
                    // 防止关闭modal后按键esc依然可以触发事件
                    window.onkeydown = function (e) { return (e.key === 'Escape' ? false : ''); };
                    onCancel && type.isFn(onCancel);
                };
                // 由于内部的_handleClose方法使用addEventListener为触发关闭模态框的元素绑定点击事件，
                // 从而与这里绑定的事件造成冲突，一个回调事件同时多次触发的问题
                // 因此使用on事件绑定，防止触发回调事件的次数随着每次点击而不断的重复叠加
                if (maskClosable === 'true') {
                    // @ts-ignore
                    M_Child.modalWrap.onclick = function () { return cancelEv(); };
                    // @ts-ignore
                    M_Child.modal.onclick = function (e) { return e.stopPropagation(); };
                }
                if (closable === 'true') {
                    // @ts-ignore
                    M_Child.modalClose.onclick = function () { return cancelEv(); };
                    window.onkeydown = function (e) { return (e.key === 'Escape' ? cancelEv() : ''); };
                }
                // @ts-ignore
                M_Child.modalOkBtn.onclick = function () { return okEv(); };
                // @ts-ignore
                M_Child.modalCancelBtn.onclick = function () { return cancelEv(); };
            }
        };
    };
    Modal.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._createTemplate(node);
            setCss(node, 'display', 'block');
            removeAttrs(node, [
                'width',
                'title',
                'ok-text',
                'class-name',
                'cancel-text',
                'mask',
                'visable',
                'scrollable',
                'fullscreen',
                'lock-scroll',
                'footer-hide'
            ]);
        });
    };
    Modal.prototype._createTemplate = function (node) {
        // 获取最初 modal容器下的占位内容
        var placeholderContent = node.firstElementChild;
        var _a = this._attrs(node), width = _a.width, title = _a.title, zIndex = _a.zIndex, okText = _a.okText, cancelText = _a.cancelText, className = _a.className;
        var template = "\n          <div class=\"" + PREFIX.modal + "-mask\" style=\"z-index:" + zIndex + "\"></div>\n          <div class=\"" + PREFIX.modal + "-wrap " + className + "\" style=\"z-index:" + zIndex + "\">\n              <div class=\"" + PREFIX.modal + "\" style=\"width: " + width + "\">\n                  <div class=\"" + PREFIX.modal + "-content\">\n                      <a class=\"" + PREFIX.modal + "-close\">\n                        <i class=\"" + PREFIX.icon + " " + PREFIX.icon + "-ios-close\"></i>\n                      </a>\n                      <div class=\"" + PREFIX.modal + "-header\">\n                          <div class=\"" + PREFIX.modal + "-header-inner\">" + title + "</div>\n                      </div>\n                      <div class=\"" + PREFIX.modal + "-body\"></div>\n                      <div class=\"" + PREFIX.modal + "-footer\">\n                          <button type=\"button\" class=\"rab-btn rab-btn-text\" id=\"modalBtn1\">" + cancelText + "</button>\n                          <button type=\"button\" class=\"rab-btn rab-btn-primary\" id=\"modalBtn2\">" + okText + "</button>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      ";
        setHtml(node, template);
        this._initVisable(node);
        this._setHeader(node);
        // @ts-ignore
        this._setContent(node, placeholderContent);
        this._setMask(node);
        this._setFullScreen(node);
        this._setClosable(node);
        this._setFooterHide(node);
        this._handleClose(node);
    };
    Modal.prototype._initVisable = function (node) {
        var _a = this._attrs(node), visable = _a.visable, scrollable = _a.scrollable;
        var _b = this._getModalNode(node), modalMask = _b.modalMask, modalWrap = _b.modalWrap, modal = _b.modal;
        var lockScroll = this._attrs(node).lockScroll;
        !node.getAttribute('lock-scroll') ? (lockScroll = true) : lockScroll;
        if (visable) {
            setCss(modalMask, 'display', '');
            modalWrap.classList.remove(PREFIX.modal + "-hidden");
            setCss(modal, 'display', '');
            Scrollable({ scroll: scrollable, lock: lockScroll });
        }
        else {
            setCss(modalMask, 'display', 'none');
            modalWrap.classList.add(PREFIX.modal + "-hidden");
            setCss(modal, 'display', 'none');
        }
        // @ts-ignore
        // 设置初始显示状态
        node.dataset.modalVisable = visable;
    };
    Modal.prototype._setHeader = function (node) {
        var title = this._attrs(node).title;
        if (!title) {
            var modalHeader = node.querySelector("." + PREFIX.modal + "-header");
            modalHeader === null || modalHeader === void 0 ? void 0 : modalHeader.remove();
        }
    };
    Modal.prototype._setContent = function (node, content) {
        var modalBody = node.querySelector("." + PREFIX.modal + "-body");
        if (content)
            modalBody === null || modalBody === void 0 ? void 0 : modalBody.appendChild(content);
    };
    Modal.prototype._setMask = function (node) {
        var _a = this, _attrs = _a._attrs, _getModalNode = _a._getModalNode;
        var mask = _attrs(node).mask;
        if (mask === 'false') {
            var _b = _getModalNode(node), modalMask = _b.modalMask, modalWrap = _b.modalWrap, modal = _b.modal;
            modalMask.remove();
            modalWrap.classList.add(PREFIX.modal + "-no-mask");
            modal.classList.add(PREFIX.modal + "-content-no-mask");
        }
    };
    Modal.prototype._setFullScreen = function (node) {
        var fullscreen = this._attrs(node).fullscreen;
        if (fullscreen) {
            var modal = this._getModalNode(node).modal;
            modal.classList.add(PREFIX.modal + "-fullscreen");
        }
    };
    Modal.prototype._setClosable = function (node) {
        var closable = this._attrs(node).closable;
        if (closable === 'false') {
            var modalClose = this._getModalNode(node).modalClose;
            modalClose.remove();
        }
    };
    Modal.prototype._setFooterHide = function (node) {
        var footerHide = this._attrs(node).footerHide;
        if (footerHide) {
            var modalFooter = node.querySelector("." + PREFIX.modal + "-footer");
            modalFooter === null || modalFooter === void 0 ? void 0 : modalFooter.remove();
        }
    };
    Modal.prototype._handleVisable = function (visable, target, children) {
        var _a = Modal.prototype, _show = _a._show, _hide = _a._hide;
        visable ? _show(target, children) : _hide(target, children);
    };
    Modal.prototype._handleClose = function (parent) {
        var _a = this, _attrs = _a._attrs, _hide = _a._hide, _getModalNode = _a._getModalNode;
        var _b = _attrs(parent), closable = _b.closable, maskClosable = _b.maskClosable, loading = _b.loading;
        var _c = _getModalNode(parent), modalMask = _c.modalMask, modalWrap = _c.modalWrap, modal = _c.modal, modalClose = _c.modalClose, modalOkBtn = _c.modalOkBtn, modalCancelBtn = _c.modalCancelBtn;
        var hidden = function () { return _hide(parent, [modalMask, modalWrap, modal]); };
        // 右上角关闭按钮
        // ESC 键关闭
        if (closable === 'true') {
            bind(modalClose, 'click', function () { return hidden(); });
            bind(window, 'keydown', function (e) { return (e.key === 'Escape' ? hidden() : ''); });
        }
        // 遮盖层关闭
        if (maskClosable === 'true') {
            bind(modalWrap, 'click', function () { return hidden(); });
            bind(modal, 'click', function (e) { return e.stopPropagation(); });
        }
        // 确定和取消按钮关闭
        //非加载中状态可以点击关闭模态框
        if (!loading)
            bind(modalOkBtn, 'click', function () { return hidden(); });
        bind(modalCancelBtn, 'click', function () { return hidden(); });
    };
    Modal.prototype._show = function (parent, showElm) {
        var _attrs = Modal.prototype._attrs;
        var scrollable = _attrs(parent).scrollable;
        var lockScroll = _attrs(parent).lockScroll;
        !parent.getAttribute('lock-scroll') ? (lockScroll = true) : lockScroll;
        // @ts-ignore
        // 设置当前为显示状态
        parent.dataset.modalVisable = 'true';
        // showElm[0] 表示遮盖层
        // showElm[1] 表示模态框的父容器wrap
        // showElm[2] 表示模态框主体
        showElm[1].classList.contains(PREFIX.modal + "-hidden") &&
            showElm[1].classList.remove(PREFIX.modal + "-hidden");
        CssTransition(showElm[0], {
            inOrOut: 'in',
            enterCls: 'rab-fade-in',
            timeout: 250,
            rmCls: true
        });
        CssTransition(showElm[2], {
            inOrOut: 'in',
            enterCls: 'zoom-big-enter',
            timeout: 250,
            rmCls: true
        });
        Scrollable({ scroll: scrollable, lock: lockScroll });
    };
    Modal.prototype._hide = function (parent, hiddenElm) {
        // @ts-ignore
        // 设置当前为隐藏状态
        parent.dataset.modalVisable = 'false';
        // hiddenElm[0] 表示遮盖层
        // hiddenElm[1] 表示模态框的父容器wrap
        // hiddenElm[2] 表示模态框主体
        CssTransition(hiddenElm[0], {
            inOrOut: 'out',
            leaveCls: 'rab-fade-out',
            rmCls: true,
            timeout: 250
        });
        CssTransition(hiddenElm[2], {
            inOrOut: 'out',
            leaveCls: 'zoom-big-leave',
            rmCls: true,
            timeout: 250
        });
        setTimeout(function () {
            hiddenElm[1].classList.add(PREFIX.modal + "-hidden");
            setCss(hiddenElm[2], 'display', 'none');
            Scrollable({ scroll: true, lock: true, node: parent, tagName: 'modal' });
        }, 240);
    };
    Modal.prototype._getModalNode = function (node) {
        var modalMask = node.querySelector("." + PREFIX.modal + "-mask");
        var modalWrap = node.querySelector("." + PREFIX.modal + "-wrap");
        var modal = modalWrap.querySelector("." + PREFIX.modal);
        var modalClose = modalWrap.querySelector("." + PREFIX.modal + "-close");
        var modalTitle = modal.querySelector("." + PREFIX.modal + "-header-inner");
        var modalOkBtn = modal.querySelector('#modalBtn2');
        var modalCancelBtn = modal.querySelector('#modalBtn1');
        return {
            modalMask: modalMask,
            modalWrap: modalWrap,
            modal: modal,
            modalClose: modalClose,
            modalTitle: modalTitle,
            modalOkBtn: modalOkBtn,
            modalCancelBtn: modalCancelBtn
        };
    };
    Modal.prototype._attrs = function (node) {
        return {
            mask: getStrTypeAttr(node, 'mask', 'true'),
            width: getStrTypeAttr(node, 'width', '520px'),
            title: getStrTypeAttr(node, 'title', ''),
            okText: getStrTypeAttr(node, 'ok-text', '确定'),
            closable: getStrTypeAttr(node, 'closable', 'true'),
            className: getStrTypeAttr(node, 'class-name', ''),
            cancelText: getStrTypeAttr(node, 'cancel-text', '取消'),
            maskClosable: getStrTypeAttr(node, 'mask-closable', 'true'),
            zIndex: getNumTypeAttr(node, 'z-index', 1000),
            visable: getBooleanTypeAttr(node, 'visable'),
            loading: getBooleanTypeAttr(node, 'loading'),
            scrollable: getBooleanTypeAttr(node, 'scrollable'),
            lockScroll: getBooleanTypeAttr(node, 'lock-scroll'),
            fullscreen: getBooleanTypeAttr(node, 'fullscreen'),
            footerHide: getBooleanTypeAttr(node, 'footer-hide')
        };
    };
    return Modal;
}());
export default Modal;
//# sourceMappingURL=modal.js.map