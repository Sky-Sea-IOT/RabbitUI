/**
 * Alert 警告提示
 * 静态地呈现一些警告信息。
 */
Rabbit.prototype.Alert = {
    _createInstance(_config, _slot) {
        const prefixCls = "rbt-alert";

        const {
            type = "info",
                closable = false,
                showIcon = false,
                banner = false,
                closeText,
                onClose,
        } = _config;

        const { MESSAGE, DESC, ICON } = _slot;

        let _types = "",
            Icons = "";

        const Alert = document.createElement("div");
        const AlertIconBox = document.createElement("span");
        const AlertIcon = document.createElement("i");
        const AlertMessage = document.createElement("span");
        const AlertDesc = document.createElement("span");
        const AlertCloseBox = document.createElement("span");
        const AlertCloseIcon = document.createElement("i");

        // 根据 type 属性自动添加不同图标，如果有描述内容则添加outline类型的图标
        if (showIcon && DESC && DESC.innerHTML) {
            _types = type + "-outline";
            Icons = getIconTypes(_types);
        } else {
            Icons = getIconTypes(type);
        }

        this.addClassName(
            type,
            Icons,
            Alert,
            AlertIconBox,
            AlertIcon,
            AlertMessage,
            AlertDesc,
            AlertCloseBox,
            AlertCloseIcon
        );

        this.setBanner(banner, Alert);

        // 警告提示内容
        if (MESSAGE && MESSAGE.innerHTML) {
            addElemetsOfSlots(MESSAGE, AlertMessage);
        } else {
            throw new Error(
                "creating an alert component requires at least a basic prompt"
            );
        }

        // 警告提示辅助性文字介绍
        if (DESC && DESC.innerHTML) {
            Alert.classList.add(`${prefixCls}-with-desc`);
            addElemetsOfSlots(DESC, AlertDesc);
        }

        this.showIcon(showIcon, Alert, AlertIconBox, AlertIcon, ICON);
        this.closable(closable, closeText, Alert, AlertCloseBox, AlertCloseIcon);

        AlertCloseBox.addEventListener("click", () =>
            this.clickHandle(Alert, onClose)
        );

        isSlotsUserd(true, DESC);
        isSlotsUserd(showIcon, ICON);

        Alert.append(AlertMessage, AlertDesc);

        return Alert;
    },

    addClassName(
        type,
        Icons,
        alert,
        alertIconBox,
        alertIcon,
        alertMessage,
        alertDesc,
        alertCloseBox,
        alertCloseIcon
    ) {
        const prefixCls = "rbt-alert";
        const prefixIconCls = "rbt-icon";

        alert.className = `${prefixCls} ${prefixCls}-${type} ${prefixCls}-no-icon`;
        alertIconBox.className = `${prefixCls}-icon`;
        alertIcon.className = `${prefixIconCls} ${prefixIconCls}-${Icons}`;
        alertMessage.className = `${prefixCls}-message`;
        alertDesc.className = `${prefixCls}-desc`;
        alertCloseBox.className = `${prefixCls}-close`;
        alertCloseIcon.className = `${prefixIconCls} ${prefixIconCls}-ios-close`;
    },

    // 是否用作顶部公告
    setBanner(banner, alert) {
        if (banner) {
            alert.classList.add("rbt-alert-banner");
        }
    },

    // 是否显示图标
    showIcon(show, alert, alertIconBox, alertIcon, iconSlot) {
        if (show) {
            alert.appendChild(alertIconBox);
            alert.classList.remove("rbt-alert-no-icon");
            alertIconBox.appendChild(alertIcon);
            // 自定义图标，showIcon 为 true 时有效
            if (iconSlot && iconSlot.innerHTML) {
                alertIconBox.innerHTML = null;
                addElemetsOfSlots(iconSlot, alertIconBox);
            }
        }
    },

    // 是否显示关闭按钮
    closable(_closable, closeText, alert, alertCloseBox, alertCloseIcon) {
        if (_closable) {
            // 自定义关闭内容
            if (closeText) {
                alertCloseBox.innerHTML = closeText;
            } else {
                alertCloseBox.appendChild(alertCloseIcon);
            }
            alert.appendChild(alertCloseBox);
        }
    },

    clickHandle(alert, cb) {
        destroy({
            el: alert,
            destroyParent: true,
            duration: 0.1,
            moveInCls: "",
            moveOutCls: "rbt-alert-slide-up",
            whenToDestroy: 0.3,
        });
        isFunc(cb) ? cb() : null;
    },
};