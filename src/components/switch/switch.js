/**
 * Switch 开关
 * 在两种状态间切换时用到的开关选择器。
 */
Rabbit.prototype.Switch = {
    createInstance: (_config, _slot) => {
        const prefixCls = "rbt-switch";

        let {
            size,
            checked,
            onChange,
            offColor,
            disabled,
            openColor,
            className,
        } = _config;

        const { OPEN, CLOSE } = _slot;

        // 记录 switch 状态，并作为 onChange 回调的参数返回出去
        let status = false;

        if (isUndef(size)) size = "";
        else size = "-" + size;

        isUndef(checked) ? (checked = false) : checked;
        isUndef(disabled) ? (disabled = false) : disabled;
        isUndef(offColor) ? (offColor = "") : offColor;
        isUndef(openColor) ? (openColor = "") : openColor;
        isUndef(className) ? (className = "") : className;

        const Switch = document.createElement("button");
        const SwitchHandle = document.createElement("div");
        const SwitchInner = document.createElement("span");

        Switch.className = `${prefixCls} ${prefixCls}${size} ${className}`;
        Switch.setAttribute("role", "switch");
        SwitchHandle.className = `${prefixCls}-handle`;
        SwitchInner.className = `${prefixCls}-inner`;

        // 指定当前是否选中
        if (checked) {
            status = checked;
            Switch.classList.add(`${prefixCls}-checked`);
        }

        const changeColor = (status) => {
            if (status) {
                // 初始化背景色
                Switch.style.background = "";
                // 自定义打开时的背景色
                openColor ? (Switch.style.background = openColor) : "";
                // 自定义显示打开时的内容
                OPEN && OPEN.innerHTML ? addElemetsOfSlots(OPEN, SwitchInner) : "";
            } else {
                Switch.style.background = "";
                // 自定义关闭时的背景色
                offColor ? (Switch.style.background = offColor) : "";
                // 自定义显示关闭时的内容
                CLOSE && CLOSE.innerHTML ? addElemetsOfSlots(CLOSE, SwitchInner) : "";
            }

            Switch.setAttribute("aria-checked", status);
        };

        const switchChange = () => {
            if (status) {
                status = false;
                Switch.classList.remove(`${prefixCls}-checked`);
                SwitchInner.innerHTML = "";
            } else {
                status = true;
                Switch.classList.add(`${prefixCls}-checked`);
                SwitchInner.innerHTML = "";
            }
            changeColor(status);
            isFunc(onChange) ? onChange(status) : null;
        };

        // 是否禁用开关
        disabled
            ?
            Switch.classList.add(`${prefixCls}-disabled`) :
            (Switch.onclick = () => switchChange());

        changeColor(status);

        Switch.append(SwitchHandle, SwitchInner);

        return Switch;
    },
};