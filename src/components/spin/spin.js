/**
 * Spin 加载中
 * 用于页面和区块的加载中状态
 */
let spinZIndex = 2010;

Rabbit.prototype.Spin = {
    prefixCls: 'rbt-spin',
    createInstance(_size, _text, _color) {
        const enterAniCls = `${this.prefixCls}-fade-enter`;
        const leaveAniCls = `${this.prefixCls}-fade-leave`;

        const SpinFullscreen = document.createElement('div');
        const SpinFixBox = document.createElement('div');
        const SpinMainBox = document.createElement('div');

        const SpinDot = document.createElement('span');

        const SpinShowTextBox = document.createElement('div');
        const SpinTextBox = document.createElement('div');
        const SpinBorder = document.createElement('i');
        const SpinText = document.createElement('span');

        SpinFullscreen.className = `${this.prefixCls}-fullscreen ${this.prefixCls}-fullscreen-warpper`;
        SpinFixBox.className = `${this.prefixCls}-fix ${this.prefixCls}-fullscreen`;
        SpinMainBox.className = `${this.prefixCls}-main`;

        SpinDot.className = `${this.prefixCls}-dot bg-${_color} ${_size}`;

        SpinShowTextBox.className = `${this.prefixCls} ${this.prefixCls}-fix ${this.prefixCls}-show-text`;
        SpinTextBox.className = `${this.prefixCls}-text`;
        SpinBorder.className = `rbt-icon rbt-icon-loading-solid rbt-spin-loading ${_size}`;

        SpinText.innerHTML = _text;

        SpinFullscreen.style.zIndex = spinZIndex++;

        SpinFullscreen.appendChild(SpinFixBox);
        SpinFixBox.appendChild(SpinMainBox);
        SpinShowTextBox.append(SpinTextBox);
        SpinTextBox.append(SpinBorder, SpinText);

        _text
            ?
            SpinMainBox.appendChild(SpinShowTextBox) :
            SpinMainBox.appendChild(SpinDot);

        document.body.appendChild(SpinFullscreen);

        CSSTransition(SpinFixBox, 'in', enterAniCls, leaveAniCls, 250);
    },

    show({ size = 'large', text = '', color = 'primary' } = {}) {
        this.createInstance(size, text, color);
    },

    hide() {
        const spin = document.querySelector(`.${this.prefixCls}-fullscreen`);
        const spinFixBox = spin.querySelector(`.${this.prefixCls}-fix`);

        CSSTransition(
            spinFixBox,
            `out`,
            `${this.prefixCls}-fade-enter`,
            `${this.prefixCls}-fade-leave`,
            250
        );

        setTimeout(() => document.body.removeChild(spin), 250);
    },
};