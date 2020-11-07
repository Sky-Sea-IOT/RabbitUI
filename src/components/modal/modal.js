/**
 * Modal 对话框
 * @description 模态对话框，在浮层中显示，引导用户进行相关操作。
 */

const Modal = {
    createModal(el, config, slot) {
        const prefixCls = "rbt-modal";
        const prefixIconCls = "rbt-icon";

        const API = getModalConfigs(config);
        const { header, content, footer } = slot;

        // 创建DOM
        const modalRoot = document.createElement("div");
        const modalMask = document.createElement("div");
        const modalWrap = document.createElement("div");
        const modal = document.createElement("div");
        const modalContent = document.createElement("div");
        const modalCloseBtn = document.createElement("a");
        const modalCloseIco = document.createElement("i");
        const modalHeader = document.createElement("div");
        const modalTitle = document.createElement("div");
        const modalBody = document.createElement("div");
        const modalFooter = document.createElement("div");
        const okBtn = document.createElement("button");
        const cancelBtn = document.createElement("button");

        // 添加样式类名
        modalRoot.className = `${prefixCls}-root`;
        modalMask.className = `${prefixCls}-mask`;
        modalWrap.className = `${prefixCls}-wrap ${API.className}`;
        modal.className = `${prefixCls}`;
        modalContent.className = `${prefixCls}-content`;
        modalCloseBtn.className = `${prefixCls}-close`;
        modalCloseIco.className = `${prefixIconCls} ${prefixIconCls}-ios-close`;
        modalHeader.className = `${prefixCls}-header`;
        modalTitle.className = `${prefixCls}-title`;
        modalBody.className = `${prefixCls}-body`;
        modalFooter.className = `${prefixCls}-footer`;
        okBtn.className = `rbt-btn rbt-btn-primary`;
        cancelBtn.className = `rbt-btn`;

        clickActions(el, API.onOk, API.onCancel);

        // 对话框是否显示
        if (API.visible) {
            modalMask.classList.add(`${prefixCls}-mask-enter-in`);
            modalWrap.classList.add(`${prefixCls}-enter-in`);
        }
        // 对话框宽度
        modal.style.width = API.width;

        // 对话框标题
        if (header) modalTitle.innerHTML = header.innerHTML;

        // 对话框内容
        addElemetsOfSlots(content, modalBody);

        // 是否全屏
        if (API.fullscreen) {
            modalWrap.classList.add(`${prefixCls}-fullscreen`);
            modalWrap.style.display = "none";
        }
        // 确定和取消按钮文字
        okBtn.innerText = API.okText;
        cancelBtn.innerText = API.cancelText;

        // 右上角关闭按钮的回调
        modalCloseBtn.onclick = () => {
            this.visible(el);
            isFunc(API.onCancel) ? API.onCancel() : null;
        };

        // 点击确定和取消按钮的回调
        okBtn.onclick = () => {
            this.visible(el);
            isFunc(API.onOk) ? API.onOk() : null;
        };
        cancelBtn.onclick = () => {
            this.visible(el);
            isFunc(API.onCancel) ? API.onCancel() : null;
        };

        // 是否支持键盘 esc 关闭
        if (API.keyboard)
            window.onkeydown = (e) => (e.keyCode === 27 ? this.visible(el) : null);

        // 是否允许点击遮罩层关闭
        if (API.maskClosable) {
            modalMask.onclick = () => {
                this.visible(el);
            };
        }

        modalRoot.append(modalMask, modalWrap);
        modalWrap.appendChild(modal);
        modal.appendChild(modalContent);
        modalContent.append(modalCloseBtn, modalHeader, modalBody, modalFooter);
        modalCloseBtn.appendChild(modalCloseIco);
        modalHeader.appendChild(modalTitle);

        // 是否添加遮盖层
        if (!API.mask) modalMask.classList.add(`${prefixCls}-no-mask`);

        // 是否显示右上角的关闭按钮
        if (!API.closable) modalContent.removeChild(modalCloseBtn);

        // 如果不添加slot（header/footer）则不显示页头或页脚
        if (!header) modalContent.removeChild(modalHeader);

        // footer自定义了内容则替换这两个按钮，反之
        if (!footer) {
            if (!API.footerHide) modalFooter.append(cancelBtn, okBtn);
        } else addElemetsOfSlots(footer, modalFooter);

        // 是否显示页脚
        if (API.footerHide) modalFooter.remove();

        return modalRoot;
    },
    visible(el) {
        const prefixCls = "rbt-modal";
        modalVisible(el, prefixCls);
    },
};