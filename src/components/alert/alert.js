const Alert = {
    createAlert: (config, slot) => {
        const prefixCls = "rbt-alert";
        const prefixIconCls = "rbt-icon";

        const {
            type = "info",
                closable = false,
                showIcon = false,
                banner = false,
                closeText,
                onClose,
        } = config;

        const { message, desc, icon } = slot;

        let _types = "",
            Icons = "";

        const alert = document.createElement("div");
        const alertIconBox = document.createElement("span");
        const alertIcon = document.createElement("i");
        const alertMessage = document.createElement("span");
        const alertDesc = document.createElement("span");
        const alertCloseBox = document.createElement("span");
        const alertCloseIcon = document.createElement("i");

        // 根据 type 属性自动添加不同图标，如果有描述内容则添加outline类型的图标
        if (showIcon && desc && desc.innerHTML) {
            _types = type + "-outline";
            Icons = getIconTypes(_types);
        } else {
            Icons = getIconTypes(type);
        }

        alert.className = `${prefixCls} ${prefixCls}-${type} ${prefixCls}-no-icon`;
        alertIconBox.className = `${prefixCls}-icon`;
        alertIcon.className = `${prefixIconCls} ${prefixIconCls}-${Icons}`;
        alertMessage.className = `${prefixCls}-message`;
        alertDesc.className = `${prefixCls}-desc`;
        alertCloseBox.className = `${prefixCls}-close`;
        alertCloseIcon.className = `${prefixIconCls} ${prefixIconCls}-ios-close`;

        // 是否用作顶部公告
        banner ? alert.classList.add(`${prefixCls}-banner`) : "";

        // 警告提示内容
        if (message && message.innerHTML) addElemetsOfSlots(message, alertMessage);
        else
            throw new Error(
                "creating an alert component requires at least a basic prompt"
            );

        // 警告提示辅助性文字介绍
        if (desc && desc.innerHTML) {
            alert.classList.add(`${prefixCls}-with-desc`);
            addElemetsOfSlots(desc, alertDesc);
        }

        // 是否显示图标
        if (showIcon) {
            alert.appendChild(alertIconBox);
            alert.classList.remove(`${prefixCls}-no-icon`);
            alertIconBox.appendChild(alertIcon);

            // 自定义图标，showIcon 为 true 时有效
            if (icon && icon.innerHTML) {
                alertIconBox.innerHTML = "";
                addElemetsOfSlots(icon, alertIconBox);
            }
        }

        // 是否可关闭
        if (closable) {
            // 自定义关闭内容
            closeText
                ?
                (alertCloseBox.innerHTML = closeText) :
                alertCloseBox.appendChild(alertCloseIcon);

            alert.appendChild(alertCloseBox);
        }

        const handlerEv = () => {
            destroy({
                el: alert,
                destroyParent: true,
                duration: 0.1,
                moveInCls: "",
                moveOutCls: `${prefixCls}-slide-up `,
                whenToDestroy: 0.3,
            });
            isFunc(onClose) ? onClose() : null;
        };

        // 关闭时触发的回调函数
        alertCloseBox.addEventListener("click", handlerEv);

        isSlotsUserd(true, desc);
        isSlotsUserd(showIcon, icon);

        alert.append(alertMessage, alertDesc);

        return alert;
    },
};