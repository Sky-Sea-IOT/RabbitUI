/**
 * Alert 警告提示
 * 静态地呈现一些警告信息。
 */
Rabbit.prototype.Alert = {
    create: (config, slot) => {
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

        const Alert = document.createElement("div");
        const AlertIconBox = document.createElement("span");
        const AlertIcon = document.createElement("i");
        const alertMessage = document.createElement("span");
        const AlertDesc = document.createElement("span");
        const AlertCloseBox = document.createElement("span");
        const AlertCloseIcon = document.createElement("i");

        // 根据 type 属性自动添加不同图标，如果有描述内容则添加outline类型的图标
        if (showIcon && desc && desc.innerHTML) {
            _types = type + "-outline";
            Icons = getIconTypes(_types);
        } else {
            Icons = getIconTypes(type);
        }

        Alert.className = `${prefixCls} ${prefixCls}-${type} ${prefixCls}-no-icon`;
        AlertIconBox.className = `${prefixCls}-icon`;
        AlertIcon.className = `${prefixIconCls} ${prefixIconCls}-${Icons}`;
        alertMessage.className = `${prefixCls}-message`;
        AlertDesc.className = `${prefixCls}-desc`;
        AlertCloseBox.className = `${prefixCls}-close`;
        AlertCloseIcon.className = `${prefixIconCls} ${prefixIconCls}-ios-close`;

        // 是否用作顶部公告
        banner ? Alert.classList.add(`${prefixCls}-banner`) : "";

        // 警告提示内容
        if (message && message.innerHTML) addElemetsOfSlots(message, alertMessage);
        else
            throw new Error(
                "creating an alert component requires at least a basic prompt"
            );

        // 警告提示辅助性文字介绍
        if (desc && desc.innerHTML) {
            Alert.classList.add(`${prefixCls}-with-desc`);
            addElemetsOfSlots(desc, AlertDesc);
        }

        // 是否显示图标
        if (showIcon) {
            Alert.appendChild(AlertIconBox);
            Alert.classList.remove(`${prefixCls}-no-icon`);
            AlertIconBox.appendChild(AlertIcon);

            // 自定义图标，showIcon 为 true 时有效
            if (icon && icon.innerHTML) {
                AlertIconBox.innerHTML = "";
                addElemetsOfSlots(icon, AlertIconBox);
            }
        }

        // 是否可关闭
        if (closable) {
            // 自定义关闭内容
            closeText
                ?
                (AlertCloseBox.innerHTML = closeText) :
                AlertCloseBox.appendChild(AlertCloseIcon);

            Alert.appendChild(AlertCloseBox);
        }

        const handlerEv = () => {
            destroy({
                el: Alert,
                destroyParent: true,
                duration: 0.1,
                moveInCls: "",
                moveOutCls: `${prefixCls}-slide-up `,
                whenToDestroy: 0.3,
            });
            isFunc(onClose) ? onClose() : null;
        };

        // 关闭时触发的回调函数
        AlertCloseBox.addEventListener("click", handlerEv);

        isSlotsUserd(true, desc);
        isSlotsUserd(showIcon, icon);

        Alert.append(alertMessage, AlertDesc);

        return Alert;
    },
};