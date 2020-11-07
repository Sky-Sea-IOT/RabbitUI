let baseZIndex = 1000;

// 创建notice的各个方向父容器添加到body底部
const noticeWrapperTR = document.createElement("div"), // top-right
    noticeWrapperTL = document.createElement("div"), // top-left
    noticeWrapperBR = document.createElement("div"), // bottom-right
    noticeWrapperBL = document.createElement("div"); // bottom-left

noticeWrapperTR.className = "rbt-notice rbt-notice-topRight";
noticeWrapperTL.className = "rbt-notice rbt-notice-topLeft";
noticeWrapperBR.className = "rbt-notice rbt-notice-bottomRight";
noticeWrapperBL.className = "rbt-notice rbt-notice-bottomLeft";

document.body.append(
    noticeWrapperTR,
    noticeWrapperTL,
    noticeWrapperBR,
    noticeWrapperBL
);

const setNoticePlacement = (p, notice, top, bottom) => {
    switch (p) {
        case "topLeft":
            noticeWrapperTL.appendChild(notice);
            noticeWrapperTL.style.top = `${top}px`;
            break;
        case "topRight":
            noticeWrapperTR.appendChild(notice);
            noticeWrapperTR.style.top = `${top}px`;
            break;
        case "bottomLeft":
            noticeWrapperBL.appendChild(notice);
            noticeWrapperBL.style.bottom = `${bottom}px`;
            break;
        case "bottomRight":
            noticeWrapperBR.appendChild(notice);
            noticeWrapperBR.style.bottom = `${bottom}px`;
            break;
    }
};

const createNotice = ({
    top,
    key,
    type,
    desc,
    styles,
    title,
    bottom,
    onClose,
    duration,
    placement,
    className,
    customIcon,
} = {}) => {
    const prefixCls = "rbt-notice";
    const prefixIconCls = "rbt-icon";

    const iconTypes = {
        info: "md-information-circle-outline ",
        success: "ios-checkmark-circle-outline",
        warning: "ios-information-circle-outline",
        error: "ios-close-circle-outline",
    };

    const icon = type !== "open" ? iconTypes[type] : "";

    // 层级递增
    let addZIdx = baseZIndex++;
    noticeWrapperTR.style.zIndex = addZIdx;
    noticeWrapperTL.style.zIndex = addZIdx;
    noticeWrapperBR.style.zIndex = addZIdx;
    noticeWrapperBL.style.zIndex = addZIdx;

    // notice方向是左边则改为左边的入场动画
    let direction = "";
    if (placement === "topLeft" || placement === "bottomLeft")
        direction = "-left";

    // notice父盒子
    const noticeBox = document.createElement("div");
    noticeBox.className = `${prefixCls}-notice ${prefixCls}-notice-closable ${prefixCls}-move-in${direction}`;

    // 添加当前通知唯一标志
    key ? (noticeBox.dataset.key = key) : "";

    // 使用 style 和 className 来定义样式。
    className ? noticeBox.classList.add(className) : "";

    const res = objToString(styles);
    noticeBox.style.cssText = res;

    // notice内容盒子
    const contentBox = document.createElement("div");
    contentBox.className = `${prefixCls}-content`;

    // notice是否带图标盒子
    const noticeWithcIconBox = document.createElement("div");

    // notice的type不为open时添加带图标类名
    let witchIconCls = type !== "open" ? `${prefixCls}-notice-with-icon` : "";
    noticeWithcIconBox.className = `${witchIconCls}`;

    // notice放置图标的盒子
    const noticeTypeIcon = document.createElement("i");

    //  是否自定义图标
    if (customIcon) {
        noticeTypeIcon.innerHTML = customIcon;
    } else {
        noticeTypeIcon.className = `${prefixIconCls} ${prefixIconCls}-${icon} ${prefixCls}-notice-icon ${prefixCls}-notice-icon-${type}`;
    }

    // notice标题盒子
    const titleBox = document.createElement("div");
    titleBox.className = `${prefixCls}-notice-title`;

    // 没有添加标题则报错
    if (!title)
        throw Error("creating a notification reminder must have a header content");

    titleBox.innerHTML = title;

    // notice描述内容盒子
    const descBox = document.createElement("div");
    descBox.className = `${prefixCls}-notice-desc`;

    // 没有添加描述内容则报错
    if (!desc)
        throw Error(
            "Create notification reminder must have description content, if you do not want to add description content, you are advised to use the $Message component"
        );

    let descElem = document.createRange().createContextualFragment(desc);
    descBox.appendChild(descElem);

    // 关闭按钮盒子
    const closeBox = document.createElement("a");
    closeBox.className = `${prefixCls}-notice-close`;

    // 关闭按钮图标
    const closeIcon = document.createElement("i");
    closeIcon.className = `${prefixIconCls} ${prefixIconCls}-ios-close`;

    type !== "open" ?
        noticeWithcIconBox.append(noticeTypeIcon, titleBox, descBox) :
        noticeWithcIconBox.append(titleBox, descBox);

    closeBox.appendChild(closeIcon);
    contentBox.append(noticeWithcIconBox, closeBox);
    noticeBox.appendChild(contentBox);

    setNoticePlacement(placement, noticeBox, top, bottom);

    // 在调用该方法创建DOM实例后，通过duration设置的时间自动销毁该实例
    if (duration > 0) {
        destroy({
            el: noticeBox,
            moveInCls: `${prefixCls}-move-in${direction}`,
            moveOutCls: `${prefixCls}-move-out${direction}`,
            duration,
            whenToDestroy: 0.5,
        });
    }

    // 关闭按钮则点击按钮时调用该销毁事件
    clickDestroy({
        el: closeBox,
        destroyTarget: noticeBox,
        moveInCls: `${prefixCls}-move-in${direction}`,
        moveOutCls: `${prefixCls}-move-out${direction}`,
        onClose,
    });

    return noticeBox;
};