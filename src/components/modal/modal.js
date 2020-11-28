let modalZIndex = 1000;

/**
 * Modal 对话框
 * 模态对话框，在浮层中显示，引导用户进行相关操作。
 */
Rabbit.prototype.Modal = {
    _createInstance(_el, _config, _slot) {
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

        this._addClassName(
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
        this._showMask(mask, ModalMask);
        this._setModalStyle(ModalBox, width, styles);
        this._setModalZIndex(ModalMask, ModalWrap, modalZIndex);
        this._buttonText(ModalOkButton, ModalCancelButton, okText, cancelText);
        this._setFullscreen(fullscreen, ModalBox);

        bindClickEv(_el, onOk, onCancel);

        this._onOKHandle(
            ModalOkButton,
            onOk,
            ModalMask,
            ModalWrap,
            loading,
            ModalButtonLoading
        );
        this._onCancleHandle(
            ModalCancelButton,
            onCancel,
            ModalMask,
            ModalWrap,
            ModalOkButton
        );
        this._onCancleHandle(
            ModalClose,
            onCancel,
            ModalMask,
            ModalWrap,
            ModalOkButton
        );
        this._keyboardClose(
            keyboard,
            onCancel,
            ModalMask,
            ModalWrap,
            ModalOkButton
        );
        this._modalHideByMask(maskClosable, ModalMask, ModalWrap, ModalOkButton);

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

        isSlotsUserd(true, HEADER);
        isSlotsUserd(true, CONTENT);
        isSlotsUserd(true, FOOTER);

        Modal.append(ModalMask, ModalWrap);
        ModalWrap.appendChild(ModalBox);
        ModalBox.appendChild(ModalContent);

        this._showClosable(closable, ModalContent, ModalClose, ModalCloseIco);

        ModalContent.append(ModalHeader, ModalBody);

        if (!footerHide) {
            ModalContent.appendChild(ModalFooter);
        }

        ModalHeader.appendChild(ModalTitle);

        return Modal;
    },

    _addClassName(
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
        const prefixCls = "rbt-modal";
        modal.className = `${prefixCls}-root`;
        modalMask.className = `${prefixCls}-mask`;
        modalWrap.className = `${prefixCls}-wrap ${className}`;
        modalBox.className = `${prefixCls}`;
        modalContent.className = `${prefixCls}-content`;
        modalClose.className = `${prefixCls}-close`;
        modalCloseIco.className = `rbt-icon rbt-icon-ios-close`;
        modalHeader.className = `${prefixCls}-header`;
        modalTitle.className = `${prefixCls}-title`;
        modalBody.className = `${prefixCls}-body`;
        modalFooter.className = `${prefixCls}-footer`;
        modalOkButton.className = "rbt-btn rbt-btn-primary";
        modalCancelButton.className = "rbt-btn";
    },

    // 展示遮盖层
    _showMask(mask, el) {
        if (!mask) {
            el.classList.add("rbt-modal-no-mask");
        }
    },

    _show(visible, mask, wrap) {
        if (visible) {
            bodyScrollable(false);
            mask.style.display = null;
            wrap.style.display = null;
            mask.classList.add("rbt-modal-mask-enter-in");
            wrap.classList.add("rbt-modal-enter-in");
        }
    },

    _close(mask, wrap, loadingBtn) {
        this._initScrollable();

        mask.classList.replace(
            "rbt-modal-mask-enter-in",
            "rbt-modal-mask-leave-out"
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
            mask.classList.remove("rbt-modal-mask-leave-out");
            wrap.classList.remove("rbt-modal-leave-out");
        }, 500);

        wrap.classList.replace("rbt-modal-enter-in", "rbt-modal-leave-out");
    },

    // 遮盖层关闭modal
    _modalHideByMask(m, el, wrap, loadingBtn) {
        if (m) {
            el.onclick = () => {
                this._close(el, wrap, loadingBtn);
                this._initScrollable();
            };
        }
    },

    // 显示关闭按钮
    _showClosable(closable, el, closeBox, closeIcon) {
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
    _setModalStyle(el, width, styles) {
        el.style.width = width;
        if (typeof styles === "object") {
            el.style.cssText = objToString(styles);
        }
    },

    // 设置层级
    _setModalZIndex(mask, wrap, modalZIndex) {
        mask.style.zIndex = modalZIndex;
        wrap.style.zIndex = modalZIndex;
    },

    // 设置全屏
    _setFullscreen(fullscreen, el) {
        if (fullscreen) {
            el.classList.add("rbt-modal-fullscreen");
        }
    },

    // 自定义按钮文字
    _buttonText(okBtn, cancelBtn, okText, cancelText) {
        okBtn.textContent = okText;
        cancelBtn.textContent = cancelText;
    },

    // 确定按钮的回调事件
    _onOKHandle(okBtn, cb, mask, wrap, loading, loadingIco) {
        okBtn.onclick = () => {
            // 点击按钮是否显示加载中状态
            if (loading) {
                okBtn.prepend(loadingIco);
                okBtn.classList.add("rbt-btn-loading");
                loadingIco.className = "rbt-icon rbt-icon-loading-solid";
            } else {
                this._close(mask, wrap);
            }

            isFunc(cb) ? cb() : null;
        };
    },

    // 取消按钮的回调事件
    _onCancleHandle(el, cb, mask, wrap, loadingBtn) {
        el.onclick = () => {
            isFunc(cb) ? cb() : null;
            this._close(mask, wrap, loadingBtn);
        };
    },

    // 键盘esc键关闭
    _keyboardClose(keyboard, cb, mask, wrap, loadingBtn) {
        if (keyboard) {
            window.addEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    isFunc(cb) ? cb() : null;
                    this._close(mask, wrap, loadingBtn);
                }
            });
        }
    },

    _getModalElement(el) {
        const elem = document.querySelector(el);
        const mask = elem.querySelector(".rbt-modal-mask");
        const wrap = elem.querySelector(".rbt-modal-wrap");
        const okBtn = elem.querySelector(".rbt-btn-primary");
        return {
            elem,
            mask,
            wrap,
            okBtn,
        };
    },

    // 外部调用，用于显示隐藏modal

    show(el) {
        const mask = this._getModalElement(el).mask;
        const wrap = this._getModalElement(el).wrap;

        modalZIndex++;
        mask.style.zIndex = modalZIndex;
        wrap.style.zIndex = modalZIndex;

        this._show(true, mask, wrap);
    },

    hide(el) {
        this._close(
            this._getModalElement(el).mask,
            this._getModalElement(el).wrap,
            this._getModalElement(el).okBtn
        );
    },
};