/**
 * Spin 加载中
 * 用于页面和区块的加载中状态
 */
Rabbit.prototype.Spin = {
    prefixCls: 'rbt-spin',
    customContent() {
        const spins = document.querySelectorAll('rb-spin');
        spins.forEach(spin => {
            if (spin.getAttribute('rb-type') !== 'dot') {
                const container = document.createElement('span');
                container.className = `${this.prefixCls}-main`;
                container.innerHTML = spin.innerHTML;
                spin.innerHTML = null;
                spin.appendChild(container);
            }
        });
    },
    show({ content } = {}) {
        const Spin = document.createElement('rb-spin');
        let SpinMain = document.createElement('span');

        Spin.setAttribute('rb-fix', 'true');
        Spin.dataset.fullscreen = true;
        Spin.style.position = 'fixed';

        SpinMain.className = `${this.prefixCls}-main`;
        SpinMain.innerHTML = content ?
            content :
            `<rb-spin rb-type="dot" rb-size="large"></rb-spin>`;

        Spin.appendChild(SpinMain);
        document.body.appendChild(Spin);

        CSSTransition(
            Spin,
            'in',
            `${this.prefixCls}-fade-in`,
            `${this.prefixCls}-fade-out`,
            250
        );
    },
    hide() {
        const Spin = document.querySelector('rb-spin[data-fullscreen="true"]');
        CSSTransition(
            Spin,
            'out',
            `${this.prefixCls}-fade-in`,
            `${this.prefixCls}-fade-out`,
            250
        );
        setTimeout(() => document.body.removeChild(Spin), 250);
    },
};
Rabbit.prototype.Spin.customContent();