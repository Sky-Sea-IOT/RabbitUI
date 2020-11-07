const getModalConfigs = (config) => {
    let {
        mask,
        onOk,
        width,
        styles,
        okText,
        visible,
        keyboard,
        onCancel,
        closable,
        className,
        scrollable,
        cancelText,
        fullscreen,
        footerHide,
        maskClosable,
        wrapClassName,
    } = config;

    isUndef(mask) ? (mask = true) : mask;
    isUndef(width) ? (width = "520px") : width;
    isUndef(styles) ? (styles = {}) : styles;
    isUndef(okText) ? (okText = "确定") : okText;
    isUndef(visible) ? (visible = false) : visible;
    isUndef(keyboard) ? (keyboard = true) : keyboard;
    isUndef(cancelText) ? (cancelText = "取消") : cancelText;
    isUndef(closable) ? (closable = true) : closable;
    isUndef(className) ? (className = "") : className;
    isUndef(fullscreen) ? (fullscreen = false) : fullscreen;
    isUndef(footerHide) ? (footerHide = false) : footerHide;
    isUndef(maskClosable) ? (maskClosable = true) : maskClosable;
    isUndef(wrapClassName) ? (wrapClassName = "") : wrapClassName;

    return {
        mask,
        onOk,
        width,
        styles,
        okText,
        visible,
        keyboard,
        onCancel,
        closable,
        className,
        scrollable,
        cancelText,
        fullscreen,
        footerHide,
        maskClosable,
        wrapClassName,
    };
};