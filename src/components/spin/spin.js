/**
 * Spin 加载中
 * 用于页面和区块的加载中状态
 */
let spinZIndex = 2010;

rabbit.Spin = {
    create(size, text, color) {
        const prefixCls = "rbt-spin";
        const enterAniCls = `${prefixCls}-fade-enter`;
        const leaveAniCls = `${prefixCls}-fade-leave`;

        const _SpinFullscreen = document.createElement("div");
        const _SpinFixBox = document.createElement("div");
        const _SpinMainBox = document.createElement("div");

        const _SpinDot = document.createElement("span");

        const _SpinShowTextBox = document.createElement("div");
        const _SpinTextBox = document.createElement("div");
        const _SpinBorder = document.createElement("i");
        const _SpinText = document.createElement("span");

        _SpinFullscreen.className = `${prefixCls}-fullscreen ${prefixCls}-fullscreen-warpper`;
        _SpinFixBox.className = `${prefixCls}-fix ${prefixCls}-fullscreen`;
        _SpinMainBox.className = `${prefixCls}-main`;

        _SpinDot.className = `${prefixCls}-dot bg-${color} ${size}`;

        _SpinShowTextBox.className = `${prefixCls} ${prefixCls}-fix ${prefixCls}-show-text`;
        _SpinTextBox.className = `${prefixCls}-text`;
        _SpinBorder.className = `rbt-icon rbt-icon-loading-solid rbt-spin-loading ${size}`;

        _SpinText.innerHTML = text;

        _SpinFullscreen.style.zIndex = spinZIndex++;

        _SpinFullscreen.appendChild(_SpinFixBox);
        _SpinFixBox.appendChild(_SpinMainBox);
        _SpinShowTextBox.append(_SpinTextBox);
        _SpinTextBox.append(_SpinBorder, _SpinText);

        text
            ?
            _SpinMainBox.appendChild(_SpinShowTextBox) :
            _SpinMainBox.appendChild(_SpinDot);

        document.body.appendChild(_SpinFullscreen);

        CSSTransition(_SpinFixBox, "in", enterAniCls, leaveAniCls, 250);
    },

    show({ size = "large", text = "", color = "primary" } = {}) {
        this.create(size, text, color);
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