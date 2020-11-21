Rabbit.prototype.MsgBox = {
    /**
     * 参数类型说明
     * @param {{ onOk: function
     *           width: number
     *           title: string
     *           content:string
     *           loading: boolean
     *           onCancel: function
     *           keyboard: boolean
     *           cancelText: string
     *           scrollable: boolean }}
     */
    _createInstance({
        type,
        onOk,
        width,
        title,
        okText,
        content,
        loading,
        onCancel,
        keyboard,
        cancelText,
        scrollable,
    } = {}) {
        const ModalList = [];
        const ModalNodeLens = 12;

        const ModalIcon = document.createElement("i");
        const ModalConfirmBtn = document.createElement("button");
        const ModalCancelBtn = document.createElement("button");
        const ModalLoading = document.createElement("i");

        for (let i = 0; i < ModalNodeLens; i++) {
            const ModalNodes = document.createElement("div");
            this._addClassName(ModalNodes, i, type);
            ModalList.push(ModalNodes);
        }

        this._setSize(ModalList[3], width);
        this._setBtnText(ModalConfirmBtn, ModalCancelBtn, okText, cancelText);

        this._addIcon(ModalList[8], ModalIcon);
        this._addTitle(ModalList[9], title);
        this._addContent(ModalList[10], content);
        this._addButton(type, ModalList[11], ModalConfirmBtn, ModalCancelBtn);

        this._onOKHandle(
            ModalConfirmBtn,
            ModalCancelBtn,
            onOk,
            loading,
            ModalLoading,
            ModalList[1],
            ModalList[2]
        );
        this._onCancleHandle(ModalCancelBtn, onCancel, ModalList[1], ModalList[2]);
        this._keyboardClose(keyboard, onCancel, ModalList[1], ModalList[2]);

        type === "confirm" ? (type = "warning") : type;
        let iconType = type + "-outline";

        ModalIcon.className = `rbt-icon rbt-icon-${getIconTypes(iconType)}`;
        ModalConfirmBtn.className = "rbt-btn rbt-btn-primary";
        ModalCancelBtn.className = "rbt-btn";
        ModalLoading.className = "rbt-icon rbt-icon-loading-solid";

        ModalList[0].append(ModalList[1], ModalList[2]);
        ModalList[2].appendChild(ModalList[3]);
        ModalList[3].appendChild(ModalList[4]);
        ModalList[4].appendChild(ModalList[5]);
        ModalList[5].appendChild(ModalList[6]);
        ModalList[6].append(ModalList[7], ModalList[10], ModalList[11]);
        ModalList[7].append(ModalList[8], ModalList[9]);

        this._show(ModalList[0], ModalList[1], ModalList[2], scrollable);

        return ModalList[0];
    },

    _addClassName(elems, index, type) {
        const prefixCls = "rbt-modal";
        const _classList = [
            `${prefixCls}-root ${prefixCls}-instance`,
            `${prefixCls}-mask ${prefixCls}-mask-enter-in`,
            `${prefixCls}-wrap ${prefixCls}-enter-in`,
            `${prefixCls} ${prefixCls}-confirm`,
            `${prefixCls}-content`,
            `${prefixCls}-body`,
            `${prefixCls}-confirm-wrap`,
            `${prefixCls}-confirm-header`,
            `${prefixCls}-confirm-header-icon ${prefixCls}-confirm-header-icon-${type}`,
            `${prefixCls}-confirm-header-title`,
            `${prefixCls}-confirm-body`,
            `${prefixCls}-confirm-footer`,
        ];
        elems.className = _classList[index];
    },

    _addIcon(modalIconBox, modalIcon) {
        modalIconBox.appendChild(modalIcon);
    },

    _addTitle(modalHeader, title) {
        modalHeader.innerHTML = title;
    },

    _addContent(modalBody, content) {
        modalBody.innerHTML = content;
    },

    _addButton(type, modalFooter, okBtn, cancelBtn) {
        if (type === "confirm") {
            modalFooter.appendChild(cancelBtn);
        }
        modalFooter.appendChild(okBtn);
    },

    _setSize(modal, width) {
        if (!width) width = 416;
        modal.style.width = width + "px";
    },

    _setBtnText(okBtn, cancelBtn, okText, cancelText) {
        if (!okText) okText = "确定";
        if (!cancelText) cancelText = "取消";

        okBtn.innerText = okText;
        cancelBtn.innerText = cancelText;
    },

    _scrollable(flag) {
        if (!flag) {
            bodyScrollable(flag);
        } else {
            bodyScrollable(true);
        }
    },

    _show(root, mask, modal, scrollable) {
        this._scrollable(scrollable);

        mask.classList.add("rbt-modal-mask-enter-in");
        modal.classList.add("rbt-modal-enter-in");

        document.body.appendChild(root);
    },

    _close(mask, modal) {
        this._scrollable(true);

        mask.classList.replace(
            "rbt-modal-mask-enter-in",
            "rbt-modal-mask-leave-out"
        );
        modal.classList.replace("rbt-modal-enter-in", "rbt-modal-leave-out");

        setTimeout(() => modal.parentElement.remove(), 300);
    },

    _onOKHandle(btn, cancelBtn, cb, loading, loadingIco, mask, modal) {
        btn.onclick = () => {
            if (loading) {
                // 添加loading图标
                btn.prepend(loadingIco);
                btn.classList.add("rbt-btn-loading");
                // 取消按钮禁用点击
                cancelBtn.style.pointerEvents = "none";
                cancelBtn.style.opacity = 0.65;
            } else {
                this._close(mask, modal);
            }
            isFunc(cb) ? cb() : null;
        };
    },

    _onCancleHandle(btn, cb, mask, modal) {
        btn.onclick = () => {
            this._close(mask, modal);
            isFunc(cb) ? cb() : null;
        };
    },

    _keyboardClose(keyboard, cb, mask, wrap) {
        if (keyboard) {
            window.addEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    isFunc(cb) ? cb() : null;
                    this._close(mask, wrap);
                }
            });
        }
    },

    info({
        onOk,
        width,
        title = "",
        okText,
        content = "",
        loading = false,
        keyboard = false,
        scrollable = false,
    } = {}) {
        this._createInstance({
            type: "info",
            onOk,
            width,
            title,
            okText,
            content,
            loading,
            keyboard,
            scrollable,
        });
    },

    success({
        onOk,
        width,
        title = "",
        okText,
        content = "",
        loading = false,
        keyboard = false,
        scrollable = false,
    } = {}) {
        this._createInstance({
            type: "success",
            onOk,
            width,
            title,
            okText,
            content,
            loading,
            keyboard,
            scrollable,
        });
    },

    warning({
        onOk,
        width,
        title = "",
        okText,
        content = "",
        loading = false,
        keyboard = false,
        scrollable = false,
    } = {}) {
        this._createInstance({
            type: "warning",
            onOk,
            width,
            title,
            okText,
            content,
            loading,
            keyboard,
            scrollable,
        });
    },

    error({
        onOk,
        width,
        title = "",
        okText,
        content = "",
        loading = false,
        keyboard = false,
        scrollable = false,
    } = {}) {
        this._createInstance({
            type: "error",
            onOk,
            width,
            title,
            okText,
            content,
            loading,
            keyboard,
            scrollable,
        });
    },

    confirm({
        onOk,
        width,
        title = "",
        okText,
        content = "",
        loading = false,
        onCancel,
        keyboard = false,
        cancelText,
        scrollable = false,
    } = {}) {
        this._createInstance({
            type: "confirm",
            onOk,
            width,
            title,
            okText,
            content,
            loading,
            onCancel,
            keyboard,
            cancelText,
            scrollable,
        });
    },

    destroy() {
        const ModalRoots = document.querySelector(".rbt-modal-instance");
        const ModalMask = ModalRoots.querySelector(".rbt-modal-mask");
        const Modal = ModalRoots.querySelector(".rbt-modal-wrap");

        this._close(ModalMask, Modal);
        this._scrollable(true);
    },

    destroyAll() {
        const ModalRoots = document.querySelectorAll(".rbt-modal-instance");

        Array.from(ModalRoots).map((item) => {
            const ModalMask = item.querySelector(".rbt-modal-mask");
            const Modal = item.querySelector(".rbt-modal-wrap");
            this._close(ModalMask, Modal);
        });

        this._scrollable(true);
    },
};