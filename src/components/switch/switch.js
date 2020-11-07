/**
 * Switch 开关
 * @description 在两种状态间切换时用到的开关选择器。
 */

const Switch = {
    createSwitch: (config, slot) => {
        const prefixCls = "rbt-switch";

        let {
            size,
            checked,
            onChange,
            offColor,
            disabled,
            openColor,
            className,
        } = config;

        const { open, close } = slot;

        // 记录 switch 状态，并作为 onChange 回调的参数返回出去
        let status = false;

        if (isUndef(size)) size = "";
        else size = "-" + size;

        isUndef(checked) ? (checked = false) : checked;
        isUndef(disabled) ? (disabled = false) : disabled;
        isUndef(offColor) ? (offColor = "") : offColor;
        isUndef(openColor) ? (openColor = "") : openColor;
        isUndef(className) ? (className = "") : className;

        const switchs = document.createElement("button");
        const switchHandle = document.createElement("div");
        const switchInner = document.createElement("span");

        switchs.className = `${prefixCls} ${prefixCls}${size} ${className}`;
        switchs.setAttribute("role", "switch");
        switchHandle.className = `${prefixCls}-handle`;
        switchInner.className = `${prefixCls}-inner`;

        // 指定当前是否选中
        if (checked) {
            status = checked;
            switchs.classList.add(`${prefixCls}-checked`);
        }

        const switchColorChange = (status) => {
            if (status) {
                // 初始化背景色
                switchs.style.background = "";

                // 自定义打开时的背景色
                openColor ? (switchs.style.background = openColor) : "";

                // 自定义显示打开时的内容
                open && open.innerHTML ? addElemetsOfSlots(open, switchInner) : "";
            } else {
                switchs.style.background = "";

                // 自定义关闭时的背景色
                offColor ? (switchs.style.background = offColor) : "";

                // 自定义显示关闭时的内容
                close && close.innerHTML ? addElemetsOfSlots(close, switchInner) : "";
            }

            switchs.setAttribute("aria-checked", status);
        };

        const switchChange = () => {
            if (status) {
                status = false;
                switchs.classList.remove(`${prefixCls}-checked`);
                switchInner.innerHTML = "";
            } else {
                status = true;
                switchs.classList.add(`${prefixCls}-checked`);
                switchInner.innerHTML = "";
            }

            switchColorChange(status);

            isFunc(onChange) ? onChange(status) : null;
        };

        // 是否禁用开关
        disabled
            ?
            switchs.classList.add(`${prefixCls}-disabled`) :
            (switchs.onclick = () => switchChange());

        switchColorChange(status);

        isSlotsUserd(true, open);
        isSlotsUserd(true, close);

        switchs.append(switchHandle, switchInner);

        return switchs;
    },
};