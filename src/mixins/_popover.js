const showHidden = (flag, popcorn, popover, placement, disabled, always) => {
    const prefixCls = "rbt-popover";
    if (!disabled && !always) {
        Popper.createPopper(popcorn, popover, { placement });
        if (flag === "in") {
            popover.classList.add(`${prefixCls}-fade-enter`);
            popover.classList.remove(`${prefixCls}-fade-leave`);
        } else if (flag === "out") {
            popover.classList.replace(
                `${prefixCls}-fade-enter`,
                `${prefixCls}-fade-leave`
            );
        }
    }
};