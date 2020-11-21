/**
 * Spin 加载中
 * 用于页面和区块的加载中状态
 */
let spinZIndex = 2010;

Rabbit.prototype.Spin = {
    _createInstance(size, text, color) {
        const prefixCls = "rbt-spin";
        const enterAniCls = `${prefixCls}-fade-enter`;
        const leaveAniCls = `${prefixCls}-fade-leave`;

        const SpinFullscreen = document.createElement("div");
        const SpinFixBox = document.createElement("div");
        const SpinMainBox = document.createElement("div");

        const SpinDot = document.createElement("span");

        const SpinShowTextBox = document.createElement("div");
        const SpinTextBox = document.createElement("div");
        const SpinBorder = document.createElement("i");
        const SpinText = document.createElement("span");

        SpinFullscreen.className = `${prefixCls}-fullscreen ${prefixCls}-fullscreen-warpper`;
        SpinFixBox.className = `${prefixCls}-fix ${prefixCls}-fullscreen`;
        SpinMainBox.className = `${prefixCls}-main`;

        SpinDot.className = `${prefixCls}-dot bg-${color} ${size}`;

        SpinShowTextBox.className = `${prefixCls} ${prefixCls}-fix ${prefixCls}-show-text`;
        SpinTextBox.className = `${prefixCls}-text`;
        SpinBorder.className = `rbt-icon rbt-icon-loading-solid rbt-spin-loading ${size}`;

        SpinText.innerHTML = text;

        SpinFullscreen.style.zIndex = spinZIndex++;

        SpinFullscreen.appendChild(SpinFixBox);
        SpinFixBox.appendChild(SpinMainBox);
        SpinShowTextBox.append(SpinTextBox);
        SpinTextBox.append(SpinBorder, SpinText);

        text
            ?
            SpinMainBox.appendChild(SpinShowTextBox) :
            SpinMainBox.appendChild(SpinDot);

        document.body.appendChild(SpinFullscreen);

        CSSTransition(SpinFixBox, "in", enterAniCls, leaveAniCls, 250);
    },

    show({ size = "large", text = "", color = "primary" } = {}) {
        this._createInstance(size, text, color);
    },

    hide() {
        const spin = document.querySelector(".rbt-spin-fullscreen");
        const spinFixBox = spin.querySelector(".rbt-spin-fix");

        CSSTransition(
            spinFixBox,
            "out",
            "rbt-spin-fade-enter",
            "rbt-spin-fade-leave",
            250
        );

        setTimeout(() => document.body.removeChild(spin), 250);
    },
};