const SET = {
    /**
     * @param { HTMLElement } _attachedElement 下拉菜单附着的元素
     * @param { HTMLElement } _dropdown 下拉菜单
     * @param { Number } _attachedMargin 附着元素的margin值
     */
    setDirection(_attachedElement, _dropdown, _attachedMargin) {
        const dropdown = _dropdown;
        const attachedElement = _attachedElement;
        const attachedMargin = _attachedMargin + 3;
        const reg = {
            top: /^top/,
            left: /^left/,
            right: /^right/,
            bottom: /^bottom/,
        };
        const origin = {
            top: 'center bottom',
            bottom: 'center top',
        };

        // 获取下拉菜单设置的位置
        const { placement } = dropdown.dataset;

        // 获取attachedElement的宽高
        const getWidth = el => Math.floor(el.offsetWidth);
        const getHeight = el => Math.floor(el.offsetHeight);

        const offsetLeft = getWidth(attachedElement) + attachedMargin;
        const offsetTop = getHeight(attachedElement) + attachedMargin;

        // 初始化position、top、left、transform-origin和will-change的值
        const init = () => {
            dropdown.style.top = 0;
            dropdown.style.left = 0;
            dropdown.style.position = 'absolute';
            dropdown.style.willChange = 'top, left';

            if (reg.top.test(placement)) {
                dropdown.style.top = `-${getHeight(dropdown)}px`;
                dropdown.style.transformOrigin = origin.top;
            }

            if (reg.bottom.test(placement)) {
                dropdown.style.top = `${offsetTop}px`;
                dropdown.style.transformOrigin = origin.bottom;
            }

            if (reg.left.test(placement)) {
                const offsetLeft = getWidth(dropdown);
                dropdown.style.left = `-${offsetLeft}px`;
            }

            if (reg.right.test(placement)) {
                const offsetLeft = getWidth(dropdown) / 1.6;
                dropdown.style.left = `${offsetLeft}px`;
            }
        };

        // 设置 dropdown 的方向 top 和 bottom 在 attachedElement 的距离
        const setTopBottomDistance = () => {
            const offsetRight = getWidth(dropdown) - offsetLeft;
            const offsetCenter = Math.floor((offsetLeft - getWidth(dropdown)) / 4);

            if (placement === 'top' || placement === 'bottom')
                dropdown.style.left = `${offsetCenter}px`;

            if (placement === 'top-start' || placement === 'bottom-start')
                dropdown.style.left = '5px';

            if (placement === 'top-end' || placement === 'bottom-end')
                dropdown.style.left = `-${offsetRight}px`;
        };

        // 设置 dropdown 的方向 left 和 right 在 attachedElement 的距离
        const setLeftRightDistance = () => {
            const offsetHeight = getHeight(attachedElement);
            const dropdownHeight = getHeight(dropdown);
            const offsetCenter = Math.floor(dropdownHeight - offsetHeight) / 2;
            const offsetEnd = dropdownHeight - offsetHeight;

            if (placement === 'right-start' || placement === 'left-start') {
                dropdown.style.transformOrigin = origin.bottom;
            }
            if (placement === 'right' || placement === 'left')
                dropdown.style.top = `-${offsetCenter}px`;

            if (placement === 'right-end' || placement === 'left-end') {
                dropdown.style.top = `-${offsetEnd}px`;
                dropdown.style.transformOrigin = origin.top;
            }
        };

        init();
        setTopBottomDistance();
        setLeftRightDistance();
    },
};

// export default $DropDown;