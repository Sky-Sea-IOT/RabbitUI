/**
 * Popover气泡卡片
 * 点击/鼠标移入元素，弹出气泡式的卡片浮层。
 */
Rabbit.prototype.Popover = {
    createInstance(_config, _slot) {
        const {
            width,
            title = "",
            content = "",
            padding = "",
            trigger = "click",
            disabled = false,
            placement = "top",
            className = "",
            showDelay = 0.1,
            hideDelay = 0.1,
            triggerHide,
            defaultShow = false,
            onPopoverShow,
            onPopoverHide,
        } = _config;

        const { REF, TITLE, CONTENT } = _slot;

        const Popover = document.createElement("div");
        const PopoverRef = document.createElement("div");
        const PopoverBox = document.createElement("div");
        const PopoverMain = document.createElement("div");
        const PopoverArrow = document.createElement("div");
        const PopoverArrowInner = document.createElement("div");
        const PopoverInner = document.createElement("div");
        const PopoverTitle = document.createElement("div");
        const PopoverContent = document.createElement("div");

        this.addTitle(title, TITLE, PopoverTitle);
        this.addContent(content, CONTENT, PopoverContent);
        this.setSize(width, padding, PopoverBox, PopoverTitle, PopoverContent);
        this.setPlacement(placement, Popover, PopoverRef, PopoverBox, trigger);
        this.addClassName(
            className,
            Popover,
            PopoverRef,
            PopoverBox,
            PopoverMain,
            PopoverArrow,
            PopoverArrowInner,
            PopoverInner,
            PopoverTitle,
            PopoverContent
        );
        this.defaultShow(
            defaultShow,
            trigger,
            placement,
            Popover,
            PopoverRef,
            PopoverBox
        );
        this.handlePopover(
            trigger,
            placement,
            disabled,
            Popover,
            PopoverRef,
            PopoverBox,
            onPopoverShow,
            onPopoverHide,
            showDelay,
            hideDelay
        );
        this.externalElemsTriggerHide(triggerHide, PopoverBox, onPopoverHide);

        addElemetsOfSlots(REF, PopoverRef);

        Popover.append(PopoverRef, PopoverBox);
        PopoverBox.appendChild(PopoverMain);
        PopoverMain.append(PopoverArrow, PopoverInner);
        PopoverArrow.appendChild(PopoverArrowInner);
        PopoverInner.append(PopoverTitle, PopoverContent);

        return Popover;
    },

    addClassName(
        className,
        popover,
        popoverRef,
        popoverBox,
        popoverMain,
        popoverArrow,
        popoverArrowInner,
        popoverInner,
        popoverTitle,
        popoverContent
    ) {
        const prefixCls = "rbt-popover";

        popover.className = `${prefixCls}`;
        popoverRef.className = `${prefixCls}-rel`;
        popoverBox.className = `${prefixCls}-popover ${className}`;
        popoverMain.className = `${prefixCls}-popover-content`;
        popoverArrow.className = `${prefixCls}-popover-arrow`;
        popoverArrowInner.className = `${prefixCls}-arrow-content`;
        popoverInner.className = `${prefixCls}-popover-inner`;
        popoverTitle.className = `${prefixCls}-popover-inner-title`;
        popoverContent.className = `${prefixCls}-popover-inner-content`;
    },

    setSize(width, padding, popover, popoverTitle, popoverContent) {
        if (isNum(width)) popover.style.width = `${width}px`;

        if (isStr(padding)) {
            popoverTitle.style.padding = padding;
            popoverContent.style.padding = padding;
        }
    },

    addTitle(title, slotTile, popoverTitle) {
        if (!title && !slotTile) setTimeout(() => popoverTitle.remove(), 0);

        if (slotTile) {
            addElemetsOfSlots(slotTile, popoverTitle);
        } else {
            popoverTitle.innerHTML = title;
        }
    },

    addContent(content, slotContent, popoverContent) {
        if (!content && !slotContent) setTimeout(() => popoverContent.remove(), 0);

        if (slotContent) {
            addElemetsOfSlots(slotContent, popoverContent);
        } else {
            popoverContent.innerHTML = content;
        }
    },

    setPlacement(placement, popoverRoot, popoverRef, popover, trigger) {
        if (trigger === "hover") {
            Popper.createPopper(popoverRoot, popover, { placement });
        } else {
            Popper.createPopper(popoverRef, popover, { placement });
        }

        popover.setAttribute("x-placement", placement);

        setInterval(() => detectTooltipDirection(popover), 1000);
    },

    _ani() {
        const fadeIn = "rbt-popover-fade-enter";
        const fadeOut = "rbt-popover-fade-leave";
        return { fadeIn, fadeOut };
    },

    _show(trigger, placement, popoverRoot, popoverRef, popover, cb) {
        if (popover.classList.contains(this._ani().fadeIn)) {
            this._hide(popover, cb);
        } else {
            popover.classList.add(this._ani().fadeIn);
            popover.classList.remove(this._ani().fadeOut);
        }

        isFunc(cb) ? cb() : null;

        this.setPlacement(placement, popoverRoot, popoverRef, popover, trigger);
    },

    _hide(popover, cb) {
        isFunc(cb) ? cb() : null;
        popover.classList.replace(this._ani().fadeIn, this._ani().fadeOut);
    },

    defaultShow(show, trigger, placement, popoverRoot, popoverRef, popover) {
        if (show) {
            this._show(trigger, placement, popoverRoot, popoverRef, popover, null);
        }
    },

    handlePopover(
        trigger,
        placement,
        disabled,
        popoverRoot,
        popoverRef,
        popover,
        showCb,
        hideCb,
        showTimeout,
        hideTimeout
    ) {
        if (disabled) return;

        const show = () => {
            setTimeout(
                () =>
                this._show(
                    trigger,
                    placement,
                    popoverRoot,
                    popoverRef,
                    popover,
                    showCb
                ),
                showTimeout * 1000
            );
        };

        const hide = () => {
            status = "hide";
            setTimeout(() => this._hide(popover, hideCb), hideTimeout * 1000);
        };

        if (trigger === "click") {
            clickOutSide(popoverRoot, hide);
            popoverRef.addEventListener("click", show);
        }

        if (trigger === "hover") {
            popoverRoot.addEventListener("mouseenter", show);
            popoverRoot.addEventListener("mouseleave", hide);
        }

        if (trigger === "focus") {
            popoverRef.addEventListener("mousedown", show);
            popoverRef.addEventListener("mouseup", hide);
        }
    },

    externalElemsTriggerHide(sel, popover, cb) {
        const hide = () => this._hide(popover, cb);

        if (isStr(sel) && sel) {
            setTimeout(() => {
                const el = document.querySelector(sel);
                el.addEventListener("click", hide);
            }, 0);
        }
    },
};