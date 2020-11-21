/**
 * Drawer抽屉
 * 屏幕边缘滑出的浮层面板
 */

let drawerZIndex = 1000;

Rabbit.prototype.Drawer = {
    _createInstance(el, config, slot) {
        const prefixCls = "rbt-drawer";
        const {
            mask = true,
                title = "默认标题",
                width = "256px",
                styles,
                zIndex = 1000,
                onClose,
                visible = false,
                closable = true,
                keyboard = true,
                placement = "right",
                className = "",
                scrollable = false,
                maskClosable = true,
        } = config;
        const { header, content, footer } = slot;

        drawerZIndex = zIndex;

        const Drawer = document.createElement("div");
        const DrawerMask = document.createElement("div");
        const DrawerWrap = document.createElement("div");
        const DrawerContentBox = document.createElement("div");
        const DrawerContentWrap = document.createElement("div");
        const DrawerClose = document.createElement("a");
        const DrawerCloseIco = document.createElement("i");
        const DrawerHeader = document.createElement("div");
        const DrawerTitle = document.createElement("div");
        const DrawerBody = document.createElement("div");
        const DrawerFooter = document.createElement("div");

        Drawer.className = `${prefixCls} ${prefixCls}-${placement}`;
        DrawerMask.className = `${prefixCls}-mask`;
        DrawerWrap.className = `${prefixCls}-wrap ${className}`;
        DrawerContentBox.className = `${prefixCls}-content`;
        DrawerContentWrap.className = `${prefixCls}-wrap-content`;
        DrawerClose.className = `${prefixCls}-close`;
        DrawerCloseIco.className = `rbt-icon rbt-icon-md-close`;
        DrawerHeader.className = `${prefixCls}-header`;
        DrawerTitle.className = `${prefixCls}-title`;
        DrawerBody.className = `${prefixCls}-body`;
        DrawerFooter.className = `${prefixCls}-footer`;

        bindClickEv(el, null, onClose);

        this._initDirection(DrawerWrap, placement);
        this._showMask(mask, Drawer, DrawerMask);
        this._setDrawerSize(DrawerWrap, width, placement);
        this._setDrawerStyles(styles, DrawerBody);
        this._setDrawerZIndex(DrawerMask, DrawerWrap, drawerZIndex);
        this._onCloseEv(DrawerClose, Drawer, DrawerWrap, onClose, placement);
        this._maskClose(
            maskClosable,
            DrawerMask,
            Drawer,
            DrawerWrap,
            onClose,
            placement
        );
        this._keyboardClose(keyboard, Drawer, DrawerWrap, onClose, placement);
        this._showClose(closable, DrawerContentWrap, DrawerClose);

        visible ? this._showDrawer(Drawer, DrawerWrap, placement) : "";

        Drawer.appendChild(DrawerWrap);
        DrawerWrap.appendChild(DrawerContentBox);
        DrawerContentBox.appendChild(DrawerContentWrap);
        DrawerClose.appendChild(DrawerCloseIco);
        DrawerHeader.appendChild(DrawerTitle);

        if (header && header.innerHTML) {
            addElemetsOfSlots(header, DrawerTitle);
        } else {
            DrawerTitle.innerHTML = title;
        }

        if (content && content.innerHTML) {
            addElemetsOfSlots(content, DrawerBody);
        }

        DrawerContentWrap.append(DrawerHeader, DrawerBody);

        if (footer && footer.innerHTML) {
            addElemetsOfSlots(footer, DrawerFooter);
            DrawerContentWrap.appendChild(DrawerFooter);
        }

        return Drawer;
    },

    // drawer 离开的方向
    _initDirection(drawer, placement) {
        const T = 100;
        switch (placement) {
            case "top":
                drawer.style.transform = `translateY(-${T}%)`;
                break;
            case "right":
                drawer.style.transform = `translateX(${T}%)`;
                break;
            case "bottom":
                drawer.style.transform = `translateY(${T}%)`;
                break;
            case "left":
                drawer.style.transform = `translateX(-${T}%)`;
                break;
        }
    },

    _showDrawer(root, drawer) {
        drawerZIndex++;
        bodyScrollable(false);
        drawer.style.transform = null;
        root.style.zIndex = drawerZIndex;
        root.classList.add("rbt-drawer-open");
    },

    _hideDrawer(root, drawer, placement) {
        bodyScrollable(true);
        this._initDirection(drawer, placement);
        root.classList.remove("rbt-drawer-open");
    },

    _showMask(mask, drawer, drawerMask) {
        if (mask) {
            drawer.appendChild(drawerMask);
        }
    },

    _showClose(closable, el, closeEL) {
        if (closable) {
            el.appendChild(closeEL);
        }
    },

    _setDrawerSize(el, width, placement) {
        if (placement === "top" || placement === "bottom") {
            el.style.height = width;
        } else {
            el.style.width = width;
        }
    },

    _setDrawerStyles(el, style) {
        if (isObj(style)) {
            el.style.cssText = objToString(style);
        }
    },

    _setDrawerZIndex(mask, wrap, zindex) {
        mask.style.zIndex = zindex;
        wrap.style.zIndex = zindex;
    },

    // 关闭抽屉时触发的回调
    _onCloseEv(el, root, drawer, cb, placement) {
        el.onclick = () => {
            isFunc(cb) ? cb() : null;
            this._hideDrawer(root, drawer, placement);
        };
    },

    // 点击蒙层是否允许关闭
    _maskClose(mc, el, root, drawer, cb, placement) {
        if (mc) {
            el.onclick = () => {
                isFunc(cb) ? cb() : null;
                this._hideDrawer(root, drawer, placement);
            };
        }
    },

    // 是否支持键盘 esc 关闭
    _keyboardClose(keyboard, root, drawer, cb, placement) {
        if (keyboard) {
            window.addEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    isFunc(cb) ? cb() : null;
                    this._hideDrawer(root, drawer, placement);
                }
            });
        }
    },

    _getDrawerElement(el) {
        const elem = document.querySelector(el);
        const root = elem.querySelector(".rbt-drawer");
        const drawer = root.querySelector(".rbt-drawer-wrap");

        return {
            elem,
            root,
            drawer,
        };
    },

    _getDrawerPlacement(el) {
        if (el.classList.contains("rbt-drawer-top")) {
            return "top";
        }
        if (el.classList.contains("rbt-drawer-right")) {
            return "right";
        }
        if (el.classList.contains("rbt-drawer-bottom")) {
            return "bottom";
        }
        if (el.classList.contains("rbt-drawer-left")) {
            return "left";
        }
    },

    // 外部元素调用，用于显示隐藏 drawer

    show(el) {
        const elem = this._getDrawerElement(el);
        this._showDrawer(elem.root, elem.drawer);
    },

    hide(el) {
        const elem = this._getDrawerElement(el);
        this._hideDrawer(
            elem.root,
            elem.drawer,
            this._getDrawerPlacement(elem.root)
        );
    },
};