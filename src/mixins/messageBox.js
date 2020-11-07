const msgBoxVisible = (el, elCls, prefixCls) => {
    modalVisible(elCls, prefixCls);
    destroy({
        el: el,
        duration: 0.4,
        moveInCls: `${prefixCls}-enter-in`,
        moveOutCls: `${prefixCls}-leave-out`,
    });
};

const createMsgBoxInstance = ({
    type = "",
    title = "",
    width = "416px",
    zIndex = 1000,
    okText = "确定",
    content = "",
    cancelText = "取消",
    onOk = () => {},
    onCancel = () => {},
} = {}) => {
    const prefixCls = "rbt-modal";
    const prefixIconCls = "rbt-icon";

    let Icons = getIconTypes(type);

    type === "confirm" ? (Icons = "ios-help-circle") : type;

    const iTag = document.createElement("i");
    iTag.className = `${prefixIconCls} ${prefixIconCls}-${Icons}`;

    let divs = [],
        divsCls = [
            `${prefixCls}-root`,
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

    /**
     *  批量创建div以及所属的位置说明
     *  divs[0] .rbt-modal-root
     *  divs[1] .rbt-modal-mask
     *  divs[2] .rbt-modal-wrap
     *  divs[3] .rbt-modal-confirm
     *  divs[4] .rbt-modal-content
     *  divs[5] .rbt-modal-body
     *  divs[6] .rbt-modal-confirm-wrap
     *  divs[7] .rbt-modal-confirm-header
     *  divs[8] .rbt-modal-confirm-header-icon
     *  divs[9] .rbt-modal-confirm-header-title
     *  divs[10]  .rbt-modal-confirm-body
     *  divs[11]  .rbt-modal-confirm-footer
     */

    for (let i = 0; i < divsCls.length; i++) {
        const div = document.createElement("div");
        div.className = divsCls[i];
        divs.push(div);
    }

    const pTag = document.createElement("p");
    const contentElem = document.createRange().createContextualFragment(content);

    pTag.appendChild(contentElem);

    const okBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");

    okBtn.className = "rbt-btn rbt-btn-primary";
    cancelBtn.className = "rbt-btn";

    okBtn.innerText = okText;
    cancelBtn.innerText = cancelText;

    divs[1].style.zIndex = zIndex;
    divs[2].style.zIndex = zIndex;
    divs[3].style.width = width;
    divs[8].appendChild(iTag);
    divs[9].innerHTML = title;
    divs[10].appendChild(pTag);

    type !== "confirm" ?
        divs[11].appendChild(okBtn) :
        divs[11].append(cancelBtn, okBtn);

    const messageBox = divs[0];

    messageBox.append(divs[1], divs[2]);
    divs[2].appendChild(divs[3]);
    divs[3].appendChild(divs[4]);
    divs[4].appendChild(divs[5]);
    divs[5].appendChild(divs[6]);
    divs[6].append(divs[7], divs[10], divs[11]);
    divs[7].append(divs[8], divs[9]);

    okBtn.onclick = () => {
        isFunc(onOk) ? onOk() : null;
        msgBoxVisible(messageBox, `.${divsCls[0]}`, prefixCls);
    };
    cancelBtn.onclick = () => {
        isFunc(onCancel) ? onCancel() : null;
        msgBoxVisible(messageBox, `.${divsCls[0]}`, prefixCls);
    };

    document.body.appendChild(messageBox);
    return messageBox;
};