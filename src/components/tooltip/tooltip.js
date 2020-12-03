/**
 * Tooltip 文字提示
 * 文字提示气泡框，在鼠标悬停时显示，代替了系统的title提示。
 */
Rabbit.prototype.Tooltip = {
    createInstance(_config, _slot) {
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
        } = _config;

        const { REF } = _slot;

        let isAlwaysShow = always ? `${prefixCls}-always` : "";

        const Tooltip = document.createElement("div");
        const TooltipRel = document.createElement("div");
        const TooltipPopper = document.createElement("div");
        const TooltipContent = document.createElement("div");
        const TooltipArrow = document.createElement("div");
        const TooltipArrowContent = document.createElement("span");
        const TooltipInner = document.createElement("div");

        Tooltip.className = `${prefixCls}`;
        TooltipRel.className = `${prefixCls}-rel`;

        TooltipPopper.className = `${prefixCls}-popper ${prefixCls}-${theme} ${isAlwaysShow}`;
        TooltipPopper.style.maxWidth = `${maxWidth}px`;
        TooltipPopper.setAttribute("x-placement", placement);

        TooltipContent.className = `${prefixCls}-content`;

        TooltipArrow.className = `${prefixCls}-arrow`;
        TooltipArrowContent.className = `${prefixCls}-arrow-content`;
        TooltipArrowContent.style.backgroundColor = color;

        TooltipInner.className = `${prefixCls}-inner`;
        TooltipInner.innerHTML = title;
        TooltipInner.style.backgroundColor = color;

        Tooltip.append(TooltipRel, TooltipPopper);

        addElemetsOfSlots(REF, TooltipRel);

        TooltipPopper.appendChild(TooltipContent);
        TooltipContent.append(TooltipArrow, TooltipInner);
        TooltipArrow.appendChild(TooltipArrowContent);

        Popper.createPopper(Tooltip, TooltipPopper, { placement });

        this.setting(
            Tooltip,
            TooltipPopper,
            placement,
            always,
            disabled,
            mouseEnterDelay,
            mouseLeaveDelay
        );
        return Tooltip;
    },

    setting(
        popcorn,
        tooltip,
        placement,
        always,
        disabled,
        mouseEnterDelay,
        mouseLeaveDelay
    ) {
        const prefixCls = "rbt-tooltip";

        let timer = null;

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

        popcorn.addEventListener("mouseenter", () => {
            timer = setTimeout(() => showHidden("in"), mouseEnterDelay * 1000);
        });

        popcorn.addEventListener("mouseleave", () => {
            clearTimeout(timer);
            setTimeout(() => showHidden("out"), mouseLeaveDelay * 1000);
        });
    },
};