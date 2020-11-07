const $DropDown = {
    /**
     * @param { HTMLElement } attachedElement 提示框附着的元素
     * @param { HTMLElement } tooltip 提示框
     * @param { Number } attachedMargin 附着元素的margin值
     */
    setDirection(_attachedElement, _tooltip, _attachedMargin) {
        const attachedElement = _attachedElement;
        const tooltip = _tooltip;
        const attachedMargin = _attachedMargin + 3;
        const reg = {
            top: /^top/,
            left: /^left/,
            right: /^right/,
            bottom: /^bottom/,
        };
        const Origin = {
            top: "center bottom",
            bottom: "center top",
        };
        const { placement } = tooltip.dataset;

        // 获取attachedElement的宽高
        const getWidth = (el) => Math.floor(el.offsetWidth);
        const getHeight = (el) => Math.floor(el.offsetHeight);

        const offsetLeft = getWidth(attachedElement);
        const offsetTop = getHeight(attachedElement) + attachedMargin;

        // 初始化position、top、left、transform-origin和will-change的值
        const init = () => {
            tooltip.style.top = 0;
            tooltip.style.left = 0;
            tooltip.style.position = "absolute";
            tooltip.style.willChange = "top, left";

            if (reg.top.test(placement)) {
                tooltip.style.top = `-${getHeight(tooltip)}px`;
                tooltip.style.transformOrigin = Origin.top;
            }

            if (reg.bottom.test(placement)) {
                tooltip.style.top = `${offsetTop}px`;
                tooltip.style.transformOrigin = Origin.bottom;
            }

            if (reg.left.test(placement)) {
                const offsetLeft = getWidth(tooltip);
                tooltip.style.left = `-${offsetLeft}px`;
            }

            if (reg.right.test(placement)) {
                const offsetLeft = getWidth(tooltip) / 1.6;
                tooltip.style.left = `${offsetLeft}px`;
            }
        };

        // 设置 tooltip 的方向 top 和 bottom 在 attachedElement 的距离
        const setTopBottomDistance = () => {
            const offsetRight = getWidth(tooltip) - offsetLeft - 5;
            const offsetCenter = Math.floor((offsetLeft - getWidth(tooltip)) / 4);
            if (placement === "top" || placement === "bottom")
                tooltip.style.left = `${offsetCenter}px`;

            if (placement === "top-start" || placement === "bottom-start")
                tooltip.style.left = 0;

            if (placement === "top-end" || placement === "bottom-end")
                tooltip.style.left = `-${offsetRight}px`;
        };

        // 设置 tooltip 的方向 left 和 right 在 attachedElement 的距离
        const setLeftRightDistance = () => {
            const offsetHeight = getHeight(attachedElement);
            const tooltipHeight = getHeight(tooltip);
            const offsetCenter = tooltipHeight - offsetHeight - attachedMargin;

            if (placement === "right-start" || placement === "left-start") {
                tooltip.style.transformOrigin = Origin.bottom;
            }
            if (placement === "right" || placement === "left")
                tooltip.style.top = `-${offsetHeight}px`;

            if (placement === "right-end" || placement === "left-end") {
                tooltip.style.top = `-${offsetCenter}px`;
                tooltip.style.transformOrigin = Origin.top;
            }
        };
        init();
        setTopBottomDistance();
        setLeftRightDistance();
    },
};