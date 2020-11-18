/**
 * Popover气泡卡片
 * 点击/鼠标移入元素，弹出气泡式的卡片浮层。
 */

Rabbit.prototype.Popover = {
    create(config, slot) {
        const prefixCls = "rbt-popover";
        const {
            trigger = "click",
                placement = "top",
                maxWidth = 300,
                always = false,
                disabled = false,
                className = "",
                mouseEnterDelay = 0.1,
                mouseLeaveDelay = 0.1,
        } = config;
        const { ref, title, content } = slot;
        const tagsArr = [];
        const classNames = [
            `${prefixCls}`,
            `${prefixCls}-rel`,
            `${prefixCls}-popover`,
            `${prefixCls}-popover-content`,
            `${prefixCls}-popover-arrow`,
            `${prefixCls}-popover-arrow-content`,
            `${prefixCls}-popover-inner`,
            `${prefixCls}-popover-inner-title`,
            `${prefixCls}-popover-inner-content`,
        ];

        for (let i = 0; i < classNames.length; i++) {
            const divs = document.createElement("div");
            divs.className = classNames[i];
            tagsArr.push(divs);
        }

        const _Popover = tagsArr[0];
        const _PopoverRel = tagsArr[1];
        const _Popover_p = tagsArr[2];
        const _Popover_p_content = tagsArr[3];
        const _Popover_p_arrow = tagsArr[4];
        const _Popover_p_arrow_content = tagsArr[5];
        const _Popover_p_inner = tagsArr[6];
        const _Popover_p_inner_title = tagsArr[7];
        const _Popover_p_inner_content = tagsArr[8];

        if (always) _Popover_p.classList.add(`${prefixCls}-always`);
        if (className) _Popover_p.classList.add(className);

        _Popover_p.style.maxWidth = `${maxWidth}px`;
        _Popover_p.setAttribute("x-placement", placement);

        _Popover.append(_PopoverRel, _Popover_p);
        addElemetsOfSlots(ref, _PopoverRel);

        _Popover_p.appendChild(_Popover_p_content);
        _Popover_p_content.append(_Popover_p_arrow, _Popover_p_inner);
        _Popover_p_arrow.appendChild(_Popover_p_arrow_content);
        _Popover_p_inner.append(_Popover_p_inner_title, _Popover_p_inner_content);

        if (title && title.innerHTML)
            addElemetsOfSlots(title, _Popover_p_inner_title);
        if (content && content.innerHTML)
            addElemetsOfSlots(content, _Popover_p_inner_content);

        isSlotsUserd(true, title);
        isSlotsUserd(true, content);

        Popper.createPopper(_Popover, _Popover_p, { placement });

        this.handleConfig(
            _Popover,
            _PopoverRel,
            _Popover_p,
            trigger,
            always,
            disabled,
            mouseEnterDelay,
            mouseLeaveDelay
        );

        return _Popover;
    },

    handleConfig(
        popcorn,
        popcornRef,
        popover,
        trigger,
        always,
        disabled,
        mouseEnterDelay,
        mouseLeaveDelay
    ) {
        const prefixCls = "rbt-popover";
        let zIndex = 900;
        let _popovers = document.querySelectorAll(".rbt-popover");

        document.body.onclick = (e) => {
            const { parentNode } = e.target.parentNode;
            if (parentNode.className !== "rbt-popover") {
                _popovers.forEach((item) => {
                    item.children[1].classList.replace(
                        `${prefixCls}-fade-enter`,
                        `${prefixCls}-fade-leave`
                    );
                });
            }
        };

        const popoverFadeIn = () => {
            if (!always && !disabled) {
                setTimeout(() => {
                    hasClass(
                        popover,
                        `${prefixCls}-fade-enter`,
                        `${prefixCls}-fade-leave`
                    );
                    popover.style.zIndex = zIndex++;
                }, mouseEnterDelay * 1000);
            }
        };
        const popoverFadeOut = () => {
            if (!always && !disabled) {
                setTimeout(() => {
                    hasClass(
                        popover,
                        `${prefixCls}-fade-leave`,
                        `${prefixCls}-fade-enter`
                    );
                }, mouseLeaveDelay * 1000);
            }
        };

        if (trigger === "hover") {
            popcorn.addEventListener("mouseenter", popoverFadeIn);
            popcorn.addEventListener("mouseleave", popoverFadeOut);
        }
        if (trigger === "focus") {
            popcornRef.addEventListener("mousedown", popoverFadeIn);
            popcornRef.addEventListener("mouseup", popoverFadeOut);
        }
        if (trigger === "click") {
            popcornRef.addEventListener("click", popoverFadeIn);
        }

        setInterval(() => detectTooltipDirection(popover), 500);
    },
    hide(el) {
        let elem = document.querySelector(el);
        elem.classList.replace("rbt-popover-fade-enter", "rbt-popover-fade-leave");
    },
};