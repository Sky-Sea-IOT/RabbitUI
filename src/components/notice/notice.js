/**
 * Notice  通知提醒
 * @description 全局展示通知提醒信息。
 * 在系统四个角显示通知提醒信息。经常用于以下情况：
 * 较为复杂的通知内容。
 * 带有交互的通知，给出用户下一步的行动点。
 * 系统主动推送。
 */

rabbit.Notice = {
    open: ({
        key,
        top,
        desc = "",
        title = "",
        styles = {},
        bottom,
        duration = 4.5,
        onClose = () => {},
        className,
        placement = "topRight",
    } = {}) => {
        createNotice({
            top,
            key,
            type: "open",
            desc,
            title,
            styles,
            bottom,
            onClose,
            duration,
            placement,
            className,
        });
    },
    info: ({
        key,
        top = 24,
        desc = "",
        title = "",
        styles = {},
        bottom = 24,
        duration = 4.5,
        onClose = () => {},
        className,
        placement = "topRight",
        customIcon,
    } = {}) => {
        createNotice({
            top,
            key,
            type: "info",
            desc,
            title,
            styles,
            bottom,
            onClose,
            duration,
            placement,
            className,
            customIcon,
        });
    },
    success: ({
        key,
        top = 24,
        desc = "",
        title = "",
        styles = {},
        bottom = 24,
        duration = 4.5,
        onClose = () => {},
        className,
        placement = "topRight",
        customIcon,
    } = {}) => {
        createNotice({
            top,
            key,
            type: "success",
            desc,
            title,
            styles,
            bottom,
            onClose,
            duration,
            placement,
            className,
            customIcon,
        });
    },
    warning: ({
        key,
        top = 24,
        desc = "",
        title = "",
        styles = {},
        bottom = 24,
        duration = 4.5,
        onClose = () => {},
        className,
        placement = "topRight",
        customIcon,
    } = {}) => {
        createNotice({
            top,
            key,
            type: "warning",
            desc,
            title,
            styles,
            bottom,
            onClose,
            duration,
            placement,
            className,
            customIcon,
        });
    },
    error: ({
        key,
        top = 24,
        desc = "",
        title = "",
        styles = {},
        bottom = 24,
        duration = 4.5,
        onClose = () => {},
        className,
        placement = "topRight",
        customIcon,
    } = {}) => {
        createNotice({
            top,
            key,
            type: "error",
            desc,
            title,
            styles,
            bottom,
            onClose,
            duration,
            placement,
            className,
            customIcon,
        });
    },
    close: (key) => {
        const prefixCls = "rbt-notice";
        const notices = document.querySelectorAll(".rbt-notice-notice");
        destroyByKey({
            key,
            target: notices,
            moveInCls: `${prefixCls}-move-in`,
            moveOutCls: `${prefixCls}-move-out`,
            whenToDestroy: 0.5,
        });
    },
    destroy: () => {
        const prefixCls = "rbt-notice";
        const notices = document.querySelectorAll(".rbt-notice-notice");
        destoryAll({
            el: notices,
            moveInCls: `${prefixCls}-move-in`,
            moveOutCls: `${prefixCls}-move-out`,
            whenToDestroy: 0.5,
        });
    },
};