rabbit.MessageBox = {
    info: ({ title, content, width, okText, onOk } = {}) => {
        createMsgBoxInstance({
            type: "info",
            title,
            content,
            width,
            okText,
            onOk,
        });
    },
    success: ({ title, content, width, okText, onOk } = {}) => {
        createMsgBoxInstance({
            type: "success",
            title,
            content,
            width,
            okText,
            onOk,
        });
    },
    warning: ({ title, content, width, okText, onOk } = {}) => {
        createMsgBoxInstance({
            type: "warning",
            title,
            content,
            width,
            okText,
            onOk,
        });
    },
    error: ({ title, content, width, okText, onOk } = {}) => {
        createMsgBoxInstance({
            type: "error",
            title,
            content,
            width,
            okText,
            onOk,
        });
    },
    confirm: ({
        title,
        content,
        width,
        okText,
        cancelText,
        onOk,
        onCancel,
    } = {}) => {
        createMsgBoxInstance({
            type: "confirm",
            title,
            content,
            width,
            okText,
            cancelText,
            onOk,
            onCancel,
        });
    },
};