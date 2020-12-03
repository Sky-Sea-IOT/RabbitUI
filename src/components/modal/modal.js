let modalZIndex = 1000;

/**
 * Modal 对话框
 * 模态对话框，在浮层中显示，引导用户进行相关操作。
 */
Rabbit.prototype.Modal = {
    prefixCls: "rbt-modal",
    prefixIconCls: "rbt-icon",
    createInstance(_el, _config, _slot) {
        const {
            mask = true,
                onOk,
                width = "520px",
                title = "默认标题",
                styles,
                zIndex = 1000,
                okText = "确定",
                visible = false,
                loading = false,
                closable = true,
                onCancel,
                keyboard = true,
                className = "",
                footerHide = false,
                cancelText = "取消",
                scrollable = false,
                fullscreen = false,
                maskClosable = true,
        } = _config;
        const { HEADER, CONTENT, FOOTER } = _slot;

        modalZIndex = zIndex;

        const Modal = document.createElement("div");
        const ModalMask = document.createElement("div");
        const ModalWrap = document.createElement("div");
        const ModalBox = document.createElement("div");
        const ModalContent = document.createElement("div");
        const ModalClose = document.createElement("a");
        const ModalCloseIco = document.createElement("i");
        const ModalHeader = document.createElement("div");
        const ModalTitle = document.createElement("div");
        const ModalBody = document.createElement("div");
        const ModalFooter = document.createElement("div");
        const ModalOkButton = document.createElement("button");
        const ModalCancelButton = document.createElement("button");
        const ModalButtonLoading = document.createElement("i");

        this.addClassName(
            className,
            Modal,
            ModalMask,
            ModalWrap,
            ModalBox,
            ModalContent,
            ModalClose,
            ModalCloseIco,
            ModalHeader,
            ModalTitle,
            ModalBody,
            ModalFooter,
            ModalOkButton,
            ModalCancelButton
        );
        this._show(visible, ModalMask, ModalWrap);
        this.showMask(mask, ModalMask);
        this.setStyle(ModalBox, width, styles);
        this.setZIndex(ModalMask, ModalWrap, modalZIndex);
        this.addButtonText(ModalOkButton, ModalCancelButton, okText, cancelText);
        this.setFullscreen(fullscreen, ModalBox);

        bindClickEv(_el, onOk, onCancel);

        this.handleOk(
            ModalOkButton,
            onOk,
            ModalMask,
            ModalWrap,
            loading,
            ModalButtonLoading
        );
        this.handleCancel(
            ModalCancelButton,
            onCancel,
            ModalMask,
            ModalWrap,
            ModalOkButton
        );
        this.handleCancel(
            ModalClose,
            onCancel,
            ModalMask,
            ModalWrap,
            ModalOkButton
        );
        this.keyboardClose(keyboard, onCancel, ModalMask, ModalWrap, ModalOkButton);
        this.handleMask(maskClosable, ModalMask, ModalWrap, ModalOkButton);

        addElemetsOfSlots(CONTENT, ModalBody);

        if (HEADER && HEADER.innerHTML) {
            addElemetsOfSlots(HEADER, ModalTitle);
        } else {
            ModalTitle.innerHTML = title;
        }

        if (FOOTER && FOOTER.innerHTML) {
            addElemetsOfSlots(FOOTER, ModalFooter);
        } else {
            ModalFooter.append(ModalCancelButton, ModalOkButton);
        }

        Modal.append(ModalMask, ModalWrap);
        ModalWrap.appendChild(ModalBox);
        ModalBox.appendChild(ModalContent);

        this.showClosable(closable, ModalContent, ModalClose, ModalCloseIco);

        ModalContent.append(ModalHeader, ModalBody);

        if (!footerHide) {
            ModalContent.appendChild(ModalFooter);
        }

        ModalHeader.appendChild(ModalTitle);

        return Modal;
    },

    addClassName(
        className,
        modal,
        modalMask,
        modalWrap,
        modalBox,
        modalContent,
        modalClose,
        modalCloseIco,
        modalHeader,
        modalTitle,
        modalBody,
        modalFooter,
        modalOkButton,
        modalCancelButton
    ) {
        modal.className = `${this.prefixCls}-root`;
        modalMask.className = `${this.prefixCls}-mask`;
        modalWrap.className = `${this.prefixCls}-wrap ${className}`;
        modalBox.className = `${this.prefixCls}`;
        modalContent.className = `${this.prefixCls}-content`;
        modalClose.className = `${this.prefixCls}-close`;
        modalCloseIco.className = `${this.prefixIconCls} ${this.prefixIconCls}-ios-close`;
        modalHeader.className = `${this.prefixCls}-header`;
        modalTitle.className = `${this.prefixCls}-title`;
        modalBody.className = `${this.prefixCls}-body`;
        modalFooter.className = `${this.prefixCls}-footer`;
        modalOkButton.className = "rbt-btn rbt-btn-primary";
        modalCancelButton.className = "rbt-btn";
    },

    // 展示遮盖层
    showMask(mask, el) {
        if (!mask) {
            el.classList.add(`${this.prefixCls}-no-mask`);
        }
    },

    _show(visible, mask, wrap) {
        if (visible) {
            bodyScrollable(false);
            mask.style.display = null;
            wrap.style.display = null;
            mask.classList.add(`${this.prefixCls}-mask-enter-in`);
            wrap.classList.add(`${this.prefixCls}-enter-in`);
        }
    },

    _close(mask, wrap, loadingBtn) {
        this._initScrollable();

        mask.classList.replace(
            `${this.prefixCls}-mask-enter-in`,
            `${this.prefixCls}-mask-leave-out`
        );

        if (loadingBtn) {
            // modal隐藏时将加载中状态的按钮初始化
            loadingBtn.classList.remove("rbt-btn-loading");

            // 如果按钮中有加载中图标则清空类名
            if (loadingBtn.querySelector("i")) {
                loadingBtn.querySelector("i").className = "";
            }
        }

        setTimeout(() => {
            mask.style.display = "none";
            wrap.style.display = "none";
            mask.classList.remove(`${this.prefixCls}-mask-leave-out`);
            wrap.classList.remove(`${this.prefixCls}-leave-out`);
        }, 500);

        wrap.classList.replace(
            `${this.prefixCls}-enter-in`,
            `${this.prefixCls}-leave-out`
        );
    },

    // 遮盖层关闭modal
    handleMask(m, el, wrap, loadingBtn) {
        if (m) {
            el.onclick = () => {
                this._close(el, wrap, loadingBtn);
                this._initScrollable();
            };
        }
    },

    // 显示关闭按钮
    showClosable(closable, el, closeBox, closeIcon) {
        if (closable) {
            el.appendChild(closeBox);
            closeBox.appendChild(closeIcon);
        }
    },

    // 初始化页面是否滚动
    _initScrollable() {
        setTimeout(() => bodyScrollable(true), 300);
    },

    // 设置自定义style内联样式
    setStyle(el, width, styles) {
        el.style.width = width;
        if (typeof styles === "object") {
            el.style.cssText = objToString(styles);
        }
    },

    // 设置层级
    setZIndex(mask, wrap, modalZIndex) {
        mask.style.zIndex = modalZIndex;
        wrap.style.zIndex = modalZIndex;
    },

    // 设置全屏
    setFullscreen(fullscreen, el) {
        if (fullscreen) {
            el.classList.add(`${this.prefixCls}-fullscreen`);
        }
    },

    // 自定义按钮文字
    addButtonText(okBtn, cancelBtn, okText, cancelText) {
        okBtn.textContent = okText;
        cancelBtn.textContent = cancelText;
    },

    // 确定按钮的回调事件
    handleOk(okBtn, cb, mask, wrap, loading, loadingIco) {
        okBtn.onclick = () => {
            // 点击按钮是否显示加载中状态
            if (loading) {
                okBtn.prepend(loadingIco);
                okBtn.classList.add("rbt-btn-loading");
                loadingIco.className = `${this.prefixIconCls} ${this.prefixIconCls}-loading-solid`;
            } else {
                this._close(mask, wrap);
            }

            isFunc(cb) ? cb() : null;
        };
    },

    // 取消按钮的回调事件
    handleCancel(el, cb, mask, wrap, loadingBtn) {
        el.onclick = () => {
            isFunc(cb) ? cb() : null;
            this._close(mask, wrap, loadingBtn);
        };
    },

    // 键盘esc键关闭
    keyboardClose(keyboard, cb, mask, wrap, loadingBtn) {
        if (keyboard) {
            window.addEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    isFunc(cb) ? cb() : null;
                    this._close(mask, wrap, loadingBtn);
                }
            });
        }
    },

    getRealElem(el) {
        const elem = document.querySelector(el);
        const mask = elem.querySelector(`.${this.prefixCls}-mask`);
        const wrap = elem.querySelector(`.${this.prefixCls}-wrap`);
        const okBtn = elem.querySelector(`.rbt-btn-primary`);
        return {
            elem,
            mask,
            wrap,
            okBtn,
        };
    },

    // 外部调用，用于显示隐藏modal

    show(el) {
        const mask = this.getRealElem(el).mask;
        const wrap = this.getRealElem(el).wrap;

        modalZIndex++;
        mask.style.zIndex = modalZIndex;
        wrap.style.zIndex = modalZIndex;

        this._show(true, mask, wrap);
    },

    hide(el) {
        this._close(
            this.getRealElem(el).mask,
            this.getRealElem(el).wrap,
            this.getRealElem(el).okBtn
        );
    },
};