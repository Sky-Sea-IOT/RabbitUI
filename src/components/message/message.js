/**
 * Message 全局提示
 * @description 轻量级的信息反馈组件。
 * 可作为提供成功、警告和错误等反馈信息的载体。
 * 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。
 */
const Rbt = new Rabbit();

Rbt.Message = {
    info: (
        content = "", {
            top = 8,
            background = false,
            closable = false,
            duration = 3,
            onClose = () => {},
            afterClose = () => {},
            key,
        } = {}
    ) => {
        createMessageInstance({
            key,
            type: "info",
            content,
            closable,
            top,
            background,
            duration,
            onClose,
            afterClose,
        });
    },
    success: (
        content = "", {
            top = 8,
            background = false,
            closable = false,
            duration = 3,
            onClose = () => {},
            afterClose = () => {},
            key,
        } = {}
    ) => {
        createMessageInstance({
            key,
            type: "success",
            content,
            closable,
            top,
            background,
            duration,
            onClose,
            afterClose,
        });
    },

    warning: (
        content = "", {
            top = 8,
            background = false,
            closable = false,
            duration = 3,
            onClose = () => {},
            afterClose = () => {},
            key,
        } = {}
    ) => {
        createMessageInstance({
            key,
            type: "warning",
            content,
            closable,
            top,
            background,
            duration,
            onClose,
            afterClose,
        });
    },

    error: (
        content = "", {
            top = 8,
            background = false,
            closable = false,
            duration = 3,
            onClose = () => {},
            afterClose = () => {},
            key,
        } = {}
    ) => {
        createMessageInstance({
            key,
            type: "error",
            content,
            closable,
            top,
            background,
            duration,
            onClose,
            afterClose,
        });
    },
    loading: (
        content = "", {
            top = 8,
            background = false,
            closable = false,
            duration = 3,
            onClose = () => {},
            afterClose = () => {},
            key,
        } = {}
    ) => {
        createMessageInstance({
            key,
            type: "loading-outline",
            content,
            closable,
            top,
            background,
            duration,
            onClose,
            afterClose,
        });
    },
    destroy: (key) => {
        const messages = document.querySelectorAll(".rbt-message-notice");
        destroyByKey({
            key,
            target: messages,
            moveInCls: "move-up-enter",
            moveOutCls: "move-up-leave",
        });
    },
};