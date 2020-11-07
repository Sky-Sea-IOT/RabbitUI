/**
 * Avatar 头像
 * @description 用来代表用户或事物，支持图片、图标或字符展示。
 */

const Avatar = {
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

        const avatar = document.createElement("span");
        const avatarIcon = document.createElement("i");
        const image = document.createElement("img");
        const avatarString = document.createElement("span");

        avatar.className = `${prefixCls} ${prefixCls}-${shape} ${prefixCls}-${size} ${prefixCls}-icon ${className}`;
        avatarIcon.className = `${prefixIconCls} ${prefixIconCls}-${icon}`;
        avatarString.className = `${prefixCls}-string`;

        // 自定义 style 样式
        avatar.style.cssText = _styles;

        // 在不自定义的条件下添加头像
        if (!src && !text && !customIcon) {
            avatar.appendChild(avatarIcon);
        }

        // 使用字符头像
        if (text) {
            avatarString.innerHTML = text;
            avatar.appendChild(avatarString);
        }

        // 图片类头像的资源地址
        if (src) {
            image.src = src;
            avatar.appendChild(image);
        }

        // 自定义图标
        if (customIcon) avatar.innerHTML = customIcon;

        // 字体适应容器计算方法： 头像容器 / 字体容器宽度 + 15
        setTimeout(() => {
            let containerWidth = avatar.offsetWidth,
                stringWidth = avatarString.offsetWidth,
                newStrWidth = 0;

            if (stringWidth >= containerWidth) {
                newStrWidth = containerWidth / (stringWidth + 15);
                avatarString.style.transform = `scale(${newStrWidth}) translateX(-50%)`;
            }
        }, 0);

        return avatar;
    },
};