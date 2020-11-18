Rabbit.prototype.MessageBox = {
    /**
     * 参数类型说明
     * @param {{ onOk: function
     *           width: number
     *           title: string
     *           content:string
     *           loading: boolean
     *           onCancel: function
     *           keyboard: boolean
     *           cancelText: string
     *           scrollable: boolean }}
     */
    create({
        type,
        onOk,
        width,
        title,
        okText,
        content,
        loading,
        onCancel,
        keyboard,
        cancelText,
        scrollable,
    } = {}) {},

    info() {},

    success() {},

    warning() {},

    error() {},

    confirm() {},

    destroy() {},
};