import PREFIX from '../prefix';
import { $el, bind, createElem, getBooleanTypeAttr, getStrTypeAttr, removeAttrs, setCss, setHtml } from '../../dom-utils';
import { CssTransition, Scrollable } from '../../mixins';
import { type, validComps } from '../../utils';
var Drawer = /** @class */ (function () {
    function Drawer() {
        this.VERSION = 'v1.0.1';
        this.components = $el('r-drawer', { all: true });
        this._create(this.components);
    }
    Drawer.prototype.config = function (el) {
        var target = $el(el);
        validComps(target, 'drawer');
        var _a = Drawer.prototype, _handleVisable = _a._handleVisable, _attrs = _a._attrs;
        var DrawerMask = target.querySelector("." + PREFIX.drawer + "-mask");
        var DrawerWrap = target.querySelector("." + PREFIX.drawer + "-wrap");
        var _Drawer = target.querySelector("." + PREFIX.drawer);
        var DrawerTitle = target.querySelector("." + PREFIX.drawer + "-header-inner");
        var DrawerClose = target.querySelector("." + PREFIX.drawer + "-close");
        return {
            get title() {
                return setHtml(DrawerTitle);
            },
            set title(newVal) {
                if (!type.isStr(newVal))
                    return;
                setHtml(DrawerTitle, newVal);
            },
            get visable() {
                return false;
            },
            set visable(newVal) {
                if (!type.isBol(newVal))
                    return;
                _handleVisable(newVal, target, [DrawerMask, DrawerWrap, _Drawer]);
            },
            events: function (_a) {
                var onClose = _a.onClose;
                // v1.0.1 改用on事件绑定，防止触发回调事件的次数随着每次点击而不断的重复叠加
                if (DrawerClose)
                    DrawerClose.onclick = function () { return onClose && type.isFn(onClose); };
                if (_attrs(target).maskClosable === 'true')
                    DrawerWrap.onclick = function () { return onClose && type.isFn(onClose); };
            }
        };
    };
    Drawer.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._createDrawerNodes(node);
            setCss(node, 'display', 'block');
            removeAttrs(node, [
                'title',
                'width',
                'height',
                'mask',
                'visible',
                'closable',
                'scrollable',
                'lock-scroll'
            ]);
        });
    };
    Drawer.prototype._createDrawerNodes = function (node) {
        var DrawerMask = createElem('div');
        var DrawerWrap = createElem('div');
        var Drawer = createElem('div');
        var DrawerContent = createElem('div');
        var DrawerClose = createElem('a');
        var DrawerHeader = createElem('div');
        var DrawerHeaderInner = createElem('div');
        var DrawerBody = createElem('div');
        this._setCls([
            DrawerMask,
            DrawerWrap,
            Drawer,
            DrawerContent,
            DrawerClose,
            DrawerHeader,
            DrawerHeaderInner,
            DrawerBody
        ]);
        this._setSize(node, Drawer);
        this._setPlacement(node, Drawer);
        this._setOpenInContainer(node, DrawerMask, DrawerWrap, Drawer);
        this._initVisible(node, DrawerMask, DrawerWrap, Drawer);
        this._handleClose(node, [DrawerMask, DrawerWrap, Drawer], DrawerClose);
        DrawerWrap.appendChild(Drawer);
        Drawer.appendChild(DrawerContent);
        this._setClosable(node, DrawerContent, DrawerClose);
        this._setHeader(node, DrawerContent, DrawerHeader, DrawerHeaderInner);
        DrawerContent.appendChild(DrawerBody);
        this._setBodyContent(node, DrawerBody);
        this._setMask(node, DrawerMask, DrawerWrap, DrawerContent);
        node.appendChild(DrawerWrap);
    };
    Drawer.prototype._setCls = function (elms) {
        var elmsCls = [
            PREFIX.drawer + "-mask",
            PREFIX.drawer + "-wrap",
            "" + PREFIX.drawer,
            PREFIX.drawer + "-content",
            PREFIX.drawer + "-close",
            PREFIX.drawer + "-header",
            PREFIX.drawer + "-header-inner",
            PREFIX.drawer + "-body"
        ];
        var i = 0;
        var length = elms.length;
        for (; i < length; i++) {
            var elm = elms[i];
            elm.className = elmsCls[i];
        }
    };
    Drawer.prototype._setSize = function (parent, children) {
        var _a = this._attrs(parent), width = _a.width, height = _a.height, placement = _a.placement;
        if (placement === 'top' || placement === 'bottom') {
            setCss(children, 'height', height);
        }
        else if (placement === 'left' || placement === 'right') {
            children.style.width = width;
            setCss(children, 'width', width);
        }
    };
    Drawer.prototype._setPlacement = function (parent, children) {
        var placement = this._attrs(parent).placement;
        children.classList.add(PREFIX.drawer + "-" + placement);
    };
    Drawer.prototype._setOpenInContainer = function (parent, drawerMask, drawerWrap, drawer) {
        var inner = this._attrs(parent).inner;
        if (!inner)
            return;
        drawerMask.classList.add(PREFIX.drawer + "-mask-inner");
        drawerWrap.classList.add(PREFIX.drawer + "-wrap-inner");
        drawer.classList.add(PREFIX.drawer + "-inner");
    };
    Drawer.prototype._setMask = function (parent, drawerMask, drawerWrap, drawerContent) {
        var mask = this._attrs(parent).mask;
        if (parent.getAttribute('mask') == null)
            mask = true;
        if (!mask) {
            drawerWrap.classList.add(PREFIX.drawer + "-no-mask");
            drawerContent.classList.add(PREFIX.drawer + "-content-no-mask");
            return;
        }
        parent.appendChild(drawerMask);
    };
    Drawer.prototype._setClosable = function (parent, children, drawerClose) {
        var closable = this._attrs(parent).closable;
        if (!closable)
            return;
        setHtml(drawerClose, "<i class=\"" + PREFIX.icon + " " + PREFIX.icon + "-ios-close\"></i>");
        children.appendChild(drawerClose);
    };
    Drawer.prototype._setHeader = function (parent, drawerContent, drawerHeader, drawerTitle) {
        var _a;
        var title = this._attrs(parent).title;
        if (!title) {
            (_a = drawerContent.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add(PREFIX.drawer + "-no-header");
            return;
        }
        setHtml(drawerTitle, title);
        drawerHeader.appendChild(drawerTitle);
        drawerContent.appendChild(drawerHeader);
    };
    Drawer.prototype._setBodyContent = function (parent, children) {
        var drawerBodycontent = parent.firstElementChild;
        if (drawerBodycontent)
            children.appendChild(drawerBodycontent);
    };
    Drawer.prototype._initVisible = function (parent, drawerMask, drawerWrap, drawer) {
        var visible = this._attrs(parent).visible;
        // @ts-ignore
        parent.dataset.drawerVisable = "" + visible;
        if (visible)
            return;
        drawerWrap.classList.add(PREFIX.drawer + "-hidden");
        setCss(drawerMask, 'display', 'none');
        setCss(drawer, 'display', 'none');
    };
    Drawer.prototype._handleVisable = function (visable, target, children) {
        var _a = Drawer.prototype, _show = _a._show, _hide = _a._hide;
        visable ? _show(target, children) : _hide(target, children);
    };
    Drawer.prototype._handleClose = function (parent, hiddenElm, triggerElm) {
        var _hide = Drawer.prototype._hide;
        // triggerElm 表示右上角关闭按钮
        bind(triggerElm, 'click', function () { return _hide(parent, hiddenElm); });
        bind(hiddenElm[1], 'click', function () { return _hide(parent, hiddenElm); });
        bind(hiddenElm[2], 'click', function (e) { return e.stopPropagation(); });
    };
    Drawer.prototype._show = function (parent, showElm) {
        var _attrs = Drawer.prototype._attrs;
        var _a = _attrs(parent), inner = _a.inner, placement = _a.placement, scrollable = _a.scrollable;
        var lockScroll = _attrs(parent).lockScroll;
        !parent.getAttribute('lock-scroll') ? (lockScroll = true) : lockScroll;
        // 设置为在当前 dom 里打开则不隐藏 body 滚动条
        if (!inner)
            Scrollable({ scroll: scrollable, lock: lockScroll });
        // @ts-ignore
        // 设置当前为显示状态
        parent.dataset.drawerVisable = 'true';
        // showElm[0] 表示遮盖层
        // showElm[1] 表示抽屉的父容器wrap
        // showElm[2] 表示抽屉主体
        showElm[1].classList.contains(PREFIX.drawer + "-hidden") &&
            showElm[1].classList.remove(PREFIX.drawer + "-hidden");
        CssTransition(showElm[0], {
            inOrOut: 'in',
            enterCls: 'rab-fade-in',
            rmCls: true,
            timeout: 250
        });
        CssTransition(showElm[2], {
            inOrOut: 'in',
            enterCls: PREFIX.drawer + "-" + placement + "-move-enter",
            rmCls: true,
            timeout: 550
        });
    };
    Drawer.prototype._hide = function (parent, hiddenElm) {
        var placement = Drawer.prototype._attrs(parent).placement;
        // @ts-ignore
        // 设置为隐藏状态
        parent.dataset.drawerVisable = 'false';
        // hiddenElm[0] 表示遮盖层
        // hiddenElm[1] 表示抽屉的父容器wrap
        // hiddenElm[2] 表示抽屉主体
        CssTransition(hiddenElm[0], {
            inOrOut: 'out',
            leaveCls: 'rab-fade-out',
            rmCls: true,
            timeout: 250
        });
        CssTransition(hiddenElm[2], {
            inOrOut: 'out',
            leaveCls: PREFIX.drawer + "-" + placement + "-move-leave",
            rmCls: true,
            timeout: 490
        });
        setTimeout(function () {
            hiddenElm[1].classList.add(PREFIX.drawer + "-hidden");
            setCss(hiddenElm[2], 'display', 'none');
            Scrollable({ scroll: true, lock: true, node: parent, tagName: 'drawer' });
        }, 490);
    };
    Drawer.prototype._attrs = function (node) {
        return {
            title: getStrTypeAttr(node, 'title', ''),
            width: getStrTypeAttr(node, 'width', '256px'),
            height: getStrTypeAttr(node, 'height', '256px'),
            placement: getStrTypeAttr(node, 'placement', 'right'),
            mask: getBooleanTypeAttr(node, 'mask'),
            inner: getBooleanTypeAttr(node, 'inner'),
            visible: getBooleanTypeAttr(node, 'visible'),
            closable: getBooleanTypeAttr(node, 'closable'),
            scrollable: getBooleanTypeAttr(node, 'scrollable'),
            lockScroll: getBooleanTypeAttr(node, 'lock-scroll'),
            maskClosable: getStrTypeAttr(node, 'mask-closable', 'true')
        };
    };
    return Drawer;
}());
export default Drawer;
