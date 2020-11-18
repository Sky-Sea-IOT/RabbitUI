let modalZIndex = 1000;

/**
 * Modal 对话框
 * 模态对话框，在浮层中显示，引导用户进行相关操作。
 */
Rabbit.prototype.Modal = {
    create(el, config, slot) {
        const prefixCls = "rbt-modal";
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
        } = config;
        const { header, content, footer } = slot;

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

        Modal.className = `${prefixCls}-root`;
        ModalMask.className = `${prefixCls}-mask`;
        ModalWrap.className = `${prefixCls}-wrap ${className}`;
        ModalBox.className = `${prefixCls}`;
        ModalContent.className = `${prefixCls}-content`;
        ModalClose.className = `${prefixCls}-close`;
        ModalCloseIco.className = `rbt-icon rbt-icon-ios-close`;
        ModalHeader.className = `${prefixCls}-header`;
        ModalTitle.className = `${prefixCls}-title`;
        ModalBody.className = `${prefixCls}-body`;
        ModalFooter.className = `${prefixCls}-footer`;
        ModalOkButton.className = "rbt-btn rbt-btn-primary";
        ModalCancelButton.className = "rbt-btn";

        this.showModal(visible, ModalMask, ModalWrap);
        this.showMask(mask, ModalMask);
        this.setModalStyle(ModalBox, width, styles);
        this.setModalZIndex(ModalMask, ModalWrap, modalZIndex);
        this.buttonText(ModalOkButton, ModalCancelButton, okText, cancelText);
        this.setFullscreen(fullscreen, ModalBox);

        bindClickEv(el, onOk, onCancel);

        this.onOkEv(
            ModalOkButton,
            onOk,
            ModalMask,
            ModalWrap,
            loading,
            ModalButtonLoading
        );
        this.onCancelEv(
            ModalCancelButton,
            onCancel,
            ModalMask,
            ModalWrap,
            ModalOkButton
        );
        this.onCancelEv(ModalClose, onCancel, ModalMask, ModalWrap, ModalOkButton);
        this.keyboardClose(keyboard, onCancel, ModalMask, ModalWrap, ModalOkButton);
        this.modalHideByMask(maskClosable, ModalMask, ModalWrap, ModalOkButton);

        addElemetsOfSlots(content, ModalBody);

        if (header && header.innerHTML) {
            addElemetsOfSlots(header, ModalTitle);
        } else {
            ModalTitle.innerHTML = title;
        }

        if (footer && footer.innerHTML) {
            addElemetsOfSlots(footer, ModalFooter);
        } else {
            ModalFooter.append(ModalCancelButton, ModalOkButton);
        }

        isSlotsUserd(true, header);
        isSlotsUserd(true, content);
        isSlotsUserd(true, footer);

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

    // 展示遮盖层
    showMask(mask, el) {
        if (!mask) {
            el.classList.add("rbt-modal-no-mask");
        }
    },

    showModal(visible, mask, wrap) {
        if (visible) {
            bodyScrollable(false);
            mask.style.display = null;
            wrap.style.display = null;
            mask.classList.add("rbt-modal-mask-enter-in");
            wrap.classList.add("rbt-modal-enter-in");
        }
    },

    hideModal(mask, wrap, loadingBtn) {
        this.initScrollable();

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
    modalHideByMask(m, el, wrap, loadingBtn) {
        if (m) {
            el.onclick = () => {
                this.hideModal(el, wrap, loadingBtn);
                this.initScrollable();
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
    initScrollable() {
        setTimeout(() => bodyScrollable(true), 300);
    },

    // 设置自定义style内联样式
    setModalStyle(el, width, styles) {
        el.style.width = width;
        if (typeof styles === "object") {
            el.style.cssText = objToString(styles);
        }
    },

    // 设置层级
    setModalZIndex(mask, wrap, modalZIndex) {
        mask.style.zIndex = modalZIndex;
        wrap.style.zIndex = modalZIndex;
    },

    // 设置全屏
    setFullscreen(fullscreen, el) {
        if (fullscreen) {
            el.classList.add("rbt-modal-fullscreen");
        }
    },

    // 自定义按钮文字
    buttonText(okBtn, cancelBtn, okText, cancelText) {
        okBtn.textContent = okText;
        cancelBtn.textContent = cancelText;
    },

    // 确定按钮的回调事件
    onOkEv(el, cb, mask, wrap, loading, loadingIco) {
        el.onclick = () => {
            // 点击按钮是否显示加载中状态
            if (loading) {
                el.prepend(loadingIco);
                el.classList.add("rbt-btn-loading");
                loadingIco.className = "rbt-icon rbt-icon-loading-solid";
            } else {
                this.hideModal(mask, wrap);
            }

            isFunc(cb) ? cb() : null;
        };
    },

    // 取消按钮的回调事件
    onCancelEv(el, cb, mask, wrap, loadingBtn) {
        el.onclick = () => {
            isFunc(cb) ? cb() : null;
            this.hideModal(mask, wrap, loadingBtn);
        };
    },

    // 键盘esc键关闭
    keyboardClose(keyboard, cb, mask, wrap, loadingBtn) {
        if (keyboard) {
            window.addEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    isFunc(cb) ? cb() : null;
                    this.hideModal(mask, wrap, loadingBtn);
                }
            });
        }
    },

    // 外部元素调用，用于显示隐藏modal

    show(el) {
        const mask = this.getModalElement(el).mask;
        const wrap = this.getModalElement(el).wrap;

        modalZIndex++;
        mask.style.zIndex = modalZIndex;
        wrap.style.zIndex = modalZIndex;

        this.showModal(true, mask, wrap);
    },

    hide(el) {
        this.hideModal(
            this.getModalElement(el).mask,
            this.getModalElement(el).wrap,
            this.getModalElement(el).okBtn
        );
    },

    getModalElement(el) {
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
};