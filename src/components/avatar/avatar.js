/**
 * Avatar 头像
 * @description 用来代表用户或事物，支持图片、图标或字符展示。
 */

rabbit.Avatar = {
    createAvatar: (config) => {
        const prefixCls = "rbt-avatar";
        const prefixIconCls = "rbt-icon";

        const {
            src = "",
                icon = "md-person",
                size = "default",
                text = "",
                shape = "circle",
                styles = {},
                className = "",
                customIcon,
        } = config;

        let _styles = objToString(styles);

        const Avatar = document.createElement("span");
        const AvatarIcon = document.createElement("i");
        const AvatarImage = document.createElement("img");
        const AvatarString = document.createElement("span");

        Avatar.className = `${prefixCls} ${prefixCls}-${shape} ${prefixCls}-${size} ${prefixCls}-icon ${className}`;
        AvatarIcon.className = `${prefixIconCls} ${prefixIconCls}-${icon}`;
        AvatarString.className = `${prefixCls}-string`;

        // 自定义 style 样式
        Avatar.style.cssText = _styles;

        // 在不自定义的条件下添加头像
        if (!src && !text && !customIcon) {
            Avatar.appendChild(AvatarIcon);
        }

        // 使用字符头像
        if (text) {
            AvatarString.innerHTML = text;
            Avatar.appendChild(AvatarString);
        }

        // 图片类头像的资源地址
        if (src) {
            AvatarImage.src = src;
            Avatar.appendChild(AvatarImage);
        }

        // 自定义图标
        if (customIcon) Avatar.innerHTML = customIcon;

        // 字体适应容器计算方法： 头像容器 / 字体容器宽度 + 15
        setTimeout(() => {
            let containerWidth = Avatar.offsetWidth,
                stringWidth = AvatarString.offsetWidth,
                newStrWidth = 0;

            if (stringWidth >= containerWidth) {
                newStrWidth = containerWidth / (stringWidth + 15);
                AvatarString.style.transform = `scale(${newStrWidth}) translateX(-50%)`;
            }
        }, 0);

        return Avatar;
    },
};