/**
 * Tooltip 文字提示
 * @description 文字提示气泡框，在鼠标悬停时显示，代替了系统的title提示。
 */

const Tooltip = {
    createTooltip(config, slot) {
        const prefixCls = "rbt-tooltip";

        const {
            title = "",
                color = "",
                theme = "dark",
                always = false,
                disabled = false,
                maxWidth = 250,
                placement = "top",
                mouseEnterDelay = 0.1,
                mouseLeaveDelay = 0.1,
        } = config;

        const { ref } = slot;

        let isAlwaysShow = always ? `${prefixCls}-always` : "";

        const _Tooltip = document.createElement("div");
        const _TooltipRel = document.createElement("div");
        const _TooltipPopper = document.createElement("div");
        const _TooltipContent = document.createElement("div");
        const _TooltipArrow = document.createElement("div");
        const _TooltipArrowContent = document.createElement("span");
        const _TooltipInner = document.createElement("div");

        _Tooltip.className = `${prefixCls}`;
        _TooltipRel.className = `${prefixCls}-rel`;

        _TooltipPopper.className = `${prefixCls}-popper ${prefixCls}-${theme} ${isAlwaysShow}`;
        _TooltipPopper.style.maxWidth = `${maxWidth}px`;
        _TooltipPopper.setAttribute("x-placement", placement);

        _TooltipContent.className = `${prefixCls}-content`;

        _TooltipArrow.className = `${prefixCls}-arrow`;
        _TooltipArrowContent.className = `${prefixCls}-arrow-content`;
        _TooltipArrowContent.style.backgroundColor = color;

        _TooltipInner.className = `${prefixCls}-inner`;
        _TooltipInner.innerHTML = title;
        _TooltipInner.style.backgroundColor = color;

        _Tooltip.append(_TooltipRel, _TooltipPopper);
        addElemetsOfSlots(ref, _TooltipRel);
        _TooltipPopper.appendChild(_TooltipContent);
        _TooltipContent.append(_TooltipArrow, _TooltipInner);
        _TooltipArrow.appendChild(_TooltipArrowContent);

        isSlotsUserd(true, ref);
        Popper.createPopper(_Tooltip, _TooltipPopper, { placement });
        this.config(
            _Tooltip,
            _TooltipPopper,
            placement,
            always,
            disabled,
            mouseEnterDelay,
            mouseLeaveDelay
        );
        return _Tooltip;
    },
    config(
        popcorn,
        tooltip,
        placement,
        always,
        disabled,
        mouseEnterDelay,
        mouseLeaveDelay
    ) {
        const prefixCls = "rbt-tooltip";

        setInterval(() => detectTooltipDirection(tooltip), 500);

        const showHidden = (flag) => {
            if (!disabled && !always) {
                Popper.createPopper(popcorn, tooltip, { placement });
                if (flag === "in") {
                    tooltip.classList.add(`${prefixCls}-fade-enter`);
                    tooltip.classList.remove(`${prefixCls}-fade-leave`);
                } else if (flag === "out") {
                    tooltip.classList.replace(
                        `${prefixCls}-fade-enter`,
                        `${prefixCls}-fade-leave`
                    );
                }
            }
        };

        popcorn.onmouseenter = () =>
            setTimeout(() => showHidden("in"), mouseEnterDelay * 1000);

        popcorn.onmouseleave = () =>
            setTimeout(() => showHidden("out"), mouseLeaveDelay * 1000);
    },
};