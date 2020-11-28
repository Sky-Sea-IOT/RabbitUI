/**
 * Dropdown 下拉菜单
 * 展示一组折叠的下拉菜单。
 */
Rabbit.prototype.Dropdown = {
    _createInstance(_config, _slot) {
        const {
            onClick,
            onUnfold,
            trigger = "hover",
            divided = [],
            selected = [],
            disabled = false,
            className = "",
            placement = "bottom",
            itemDisabled = [],
        } = _config;

        const { REF, DROPDOWNITEM } = _slot;

        const DropDown = document.createElement("div");
        const DropDownRef = document.createElement("div");
        const DropDownMenu = document.createElement("ul");
        const DrpDownDivided = document.createElement("li");

        this._addClassName(
            className,
            DropDown,
            DropDownRef,
            DropDownMenu,
            DrpDownDivided
        );

        let itemList = [];

        for (let i = 0; i < DROPDOWNITEM.length; i++) {
            const DropDownItem = document.createElement("li");

            DropDownItem.className = "rbt-dropdown-item";
            DropDownMenu.appendChild(DropDownItem);

            addElemetsOfSlots(DROPDOWNITEM[i], DropDownItem);

            this._itemClickHandle(
                DropDown,
                DropDownMenu,
                DropDownItem,
                placement,
                onClick,
                i
            );

            itemList.push(DropDownItem);
        }

        this._setDisabled(disabled, DropDownRef);
        this._setItemDisabled(itemDisabled, itemList);
        this._setSelected(selected, itemList);
        this._setDivided(divided, itemList, DrpDownDivided);
        this._setPlacement(placement, DropDownMenu, DropDown);

        this._hoverHandle(
            trigger,
            disabled,
            placement,
            DropDown,
            DropDownMenu,
            onUnfold
        );

        this._clickHandle(
            trigger,
            disabled,
            placement,
            DropDown,
            DropDownRef,
            DropDownMenu,
            onUnfold
        );

        addElemetsOfSlots(REF, DropDownRef);

        DropDown.append(DropDownRef, DropDownMenu);

        this._documentClickHandle(DropDown, DropDownMenu, trigger, placement);

        return DropDown;
    },

    _addClassName(
        className,
        dropDown,
        dropDownRef,
        dropDownMenu,
        drpDownDivided
    ) {
        const prefixCls = "rbt-dropdown";

        dropDown.className = `${prefixCls}`;
        dropDownRef.className = `${prefixCls}-rel`;
        dropDownMenu.className = `${prefixCls}-menu ${className}`;
        drpDownDivided.className = `${prefixCls}-item-divider`;
    },

    _commonSet({ api, isDivided, dropDownItem, cls, drpDownDivided }) {
        if (isArr(api) && api.length > 0) {
            api.map((item, i) => {
                if (item === true) {
                    if (isDivided) {
                        const prev = i - 1;
                        dropDownItem[prev].after(drpDownDivided);
                    } else {
                        dropDownItem[i].classList.add(cls);
                    }
                }
            });
        }
    },

    _setDisabled(disabled, dropdownRef) {
        if (disabled) dropdownRef.classList.add("rbt-dropdown-disabled");
    },

    _setItemDisabled(disabled, dropDownItem) {
        const cls = "rbt-dropdown-item-disabled";
        this._commonSet({
            api: disabled,
            dropDownItem,
            cls,
        });
    },

    _setSelected(selected, dropDownItem) {
        const cls = "rbt-dropdown-item-selected";
        this._commonSet({
            api: selected,
            dropDownItem,
            cls,
        });
    },

    _setDivided(divider, dropDownItem, drpDownDivided) {
        this._commonSet({
            api: divider,
            isDivided: true,
            dropDownItem,
            drpDownDivided,
        });
    },

    _setPlacement(placement, dropdownMenu, dropdownRoot) {
        dropdownMenu.dataset.placement = placement;
        SET.setDirection(dropdownRoot, dropdownMenu, -10);
    },

    _autoWidth(dropdown, dropdownMenu) {
        const dropdownWidth = dropdown.offsetWidth;
        if (dropdownWidth < 70 || dropdownWidth > 100) {
            dropdownMenu.style.minWidth = `${dropdownWidth}px`;
        }
    },

    _slider(dropdown, dropdownMenu, mode, placement, callback) {
        const slideUp = () => {
            dropdownMenu.classList.replace(
                "rbt-dropdown-drop-in",
                "rbt-dropdown-drop-out"
            );

            setTimeout(() => (dropdownMenu.style.display = "none"), 240);
        };

        const slideDown = () => {
            CSSTransition2(
                dropdownMenu,
                "rbt-dropdown-drop-in",
                "rbt-dropdown-drop-out",
                235
            );

            isFunc(callback) ? callback() : null;

            this._autoWidth(dropdown, dropdownMenu);
        };

        if (mode === "down") {
            slideDown();
            this._setPlacement(placement, dropdownMenu, dropdown);
        } else slideUp();
    },

    _hoverHandle(trigger, disabled, placement, dropdown, dropdownMenu, cb) {
        let timer = null;

        if (trigger === "hover" && !disabled) {
            dropdown.addEventListener("mouseenter", () => {
                timer = setTimeout(
                    () => this._slider(dropdown, dropdownMenu, "down", placement, cb),
                    350
                );
            });

            dropdown.addEventListener("mouseleave", () => {
                clearTimeout(timer);
                this._slider(dropdown, dropdownMenu, "", placement, cb);
            });
        }
    },

    _clickHandle(
        trigger,
        disabled,
        placement,
        dropdown,
        dropdownRef,
        dropdownMenu,
        cb
    ) {
        if (disabled) return;

        if (trigger === "click") {
            dropdownRef.addEventListener("click", () => {
                this._slider(dropdown, dropdownMenu, "down", placement, cb);
                return false;
            });
        }

        if (trigger === "contextMenu") {
            dropdownRef.addEventListener("contextmenu", (e) => {
                e.preventDefault();
                this._slider(dropdown, dropdownMenu, "down", placement, cb);
            });
        }
    },

    _itemClickHandle(dropdown, dropdownMenu, dropdownItem, placement, cb, index) {
        const item = dropdownItem;

        item.addEventListener("click", (e) => {
            if (item.classList.contains("rbt-dropdown-item-disabled")) {
                return false;
            } else {
                isFunc(cb) ? cb(index, item) : null;
                this._slider(dropdown, dropdownMenu, "", placement, cb);
            }
            return false;
        });
    },

    _documentClickHandle(dropdown, dropdownMenu, trigger, placement) {
        if (trigger !== "click" && trigger !== "contextMenu") return;

        const _con = Array.from(document.querySelectorAll(".rbt-dropdown-menu"));

        document.addEventListener("click", (e) => {
            e.stopPropagation;

            _con.map((item) => {
                if (e.target.contains(item))
                    this._slider(dropdown, dropdownMenu, "", placement, null);
            });
        });
    },
};