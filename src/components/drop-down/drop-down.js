/**
 * Dropdown 下拉菜单
 * 展示一组折叠的下拉菜单。
 */

let dropDownState = false;

rabbit.Dropdown = {
    createDropDown(config, slot) {
        const prefixCls = "rbt-dropdown";
        const animationEnterCls = `${prefixCls}-drop-in`;
        const animationLeaveCls = `${prefixCls}-drop-out`;

        const { trigger = "hover", placement = "bottom", onClick } = config;

        const { ref, dropdownItem } = slot;

        const itemLens = dropdownItem.length;

        let isDisabled = "",
            isSelected = "";

        const Dropdown = document.createElement("div");
        const DropdownRel = document.createElement("div");
        const DropdownMenu = document.createElement("ul");

        Dropdown.className = `${prefixCls}`;
        Dropdown.dataset.trigger = trigger;
        DropdownRel.className = `${prefixCls}-rel`;
        DropdownMenu.className = `${prefixCls}-menu`;
        DropdownMenu.dataset.placement = placement;

        addElemetsOfSlots(ref, DropdownRel);

        this.setDropWidth(DropdownRel, DropdownMenu);

        setTimeout(() => this.dropdownEvent(), 0);

        const itemClickEvent = (i, DropdownItem) => {
            dropDownState = false;
            isFunc(onClick) ? onClick(i, DropdownItem) : null;
            this.drop("up", DropdownMenu, animationEnterCls, animationLeaveCls);
        };

        for (let i = 0; i < itemLens; i++) {
            const DropdownItem = document.createElement("li");
            DropdownItem.className = `${prefixCls}-menu-item`;

            isDisabled = dropdownItem[i].getAttribute("disabled");
            isSelected = dropdownItem[i].getAttribute("selected");

            if (!isDisabled)
                DropdownItem.onclick = () => itemClickEvent(i, DropdownItem);
            if (isDisabled === "true")
                DropdownItem.classList.add(`${prefixCls}-menu-item-disabled`);
            if (isSelected === "true")
                DropdownItem.classList.add(`${prefixCls}-menu-item-selected`);

            addElemetsOfSlots(dropdownItem[i], DropdownItem);
            isSlotsUserd(true, dropdownItem[i]);

            DropdownMenu.appendChild(DropdownItem);
        }

        Dropdown.append(DropdownRel, DropdownMenu);

        isSlotsUserd(true, ref);

        return Dropdown;
    },

    setDropWidth(el, dropdownMenu) {
        setTimeout(() => {
            let elWidth = Math.floor(el.offsetWidth);
            elWidth <= 100 ? null : (dropdownMenu.style.minWidth = `${elWidth}px`);
        }, 0);
    },

    setPlacement(el, dropdown) {
        $DropDown.setDirection(el, dropdown, 5);
    },

    dropdownEvent() {
        const prefixCls = "rbt-dropdown";
        const animationEnterCls = `${prefixCls}-drop-in`;
        const animationLeaveCls = `${prefixCls}-drop-out`;
        const dropdowns = document.querySelectorAll(`.${prefixCls}`);
        const dropdownRels = document.querySelectorAll(`.${prefixCls}-rel`);
        const dropdownMenus = document.querySelectorAll(`.${prefixCls}-menu`);

        const clickOutside = (con) => {
            document.onclick = (e) => {
                con.forEach((item) => {
                    if (e.target.contains(item)) {
                        dropDownState = false;
                        this.drop("up", item, animationEnterCls, animationLeaveCls);
                    }
                });
            };
        };

        const dropState = (currentIndex) => {
            let state = "up";

            if (dropDownState) {
                dropDownState = false;
                state = "up";
            } else {
                dropDownState = true;
                state = "down";
                this.setDropWidth(
                    dropdownRels[currentIndex],
                    dropdownMenus[currentIndex]
                );
            }

            this.drop(
                state,
                dropdownMenus[currentIndex],
                animationEnterCls,
                animationLeaveCls
            );

            this.setPlacement(
                dropdownRels[currentIndex],
                dropdownMenus[currentIndex]
            );
        };

        dropdowns.forEach((dropdown, dropdownIndex) => {
            const { trigger } = dropdown.dataset;
            if (trigger === "hover") {
                dropdown.onmouseenter = () => {
                    this.drop(
                        "down",
                        dropdownMenus[dropdownIndex],
                        animationEnterCls,
                        animationLeaveCls
                    );
                    this.setDropWidth(
                        dropdownRels[dropdownIndex],
                        dropdownMenus[dropdownIndex]
                    );
                    this.setPlacement(
                        dropdownRels[dropdownIndex],
                        dropdownMenus[dropdownIndex]
                    );
                };

                dropdown.onmouseleave = () =>
                    this.drop(
                        "up",
                        dropdownMenus[dropdownIndex],
                        animationEnterCls,
                        animationLeaveCls
                    );
            }

            if (trigger === "click" || trigger === "contextMenu") {
                //点击空白处关闭菜单
                const con = document.querySelectorAll(".rbt-dropdown-menu");
                clickOutside(con);
            }

            if (trigger === "click") {
                dropdownRels[dropdownIndex].onclick = () => {
                    dropState(dropdownIndex);
                };
            }

            if (trigger === "contextMenu") {
                dropdownRels[dropdownIndex].oncontextmenu = (e) => {
                    e.preventDefault();
                    dropState(dropdownIndex);
                };
            }
        });
    },

    drop(mode, dropdownMenu, animationEnterCls, animationLeaveCls) {
        if (mode === "down") {
            CSSTransition(
                dropdownMenu,
                "in",
                animationEnterCls,
                animationLeaveCls,
                250
            );
        } else if (mode === "up") {
            CSSTransition(
                dropdownMenu,
                "out",
                animationEnterCls,
                animationLeaveCls,
                250
            );
            setTimeout(() => (dropdownMenu.style.display = ""), 240);
        }
    },
};