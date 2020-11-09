/**
 *  Select 选择器
 * 使用模拟的增强下拉选择器来代替浏览器原生的选择器。
 */

class Select {
    constructor(config, slot) {
        this.config = config || {};
        this.slot = slot;
        return this.create(this.config, this.slot);
    }

    create(config, slot) {
        const prefixCls = "rbt-select";
        const prefixIconCls = "rbt-icon";

        const {
            size = "default",
                width = 180,
                onSelect,
                disabled = false,
                placement = "bottom",
                placeholder = "请选择",
                onOpenChange,
                renderOption = {},
        } = config;
        const { OPTION } = slot;

        const _Select = document.createElement("div");
        const _SelectSelection = document.createElement("div");
        const _SelectPlaceholder = document.createElement("span");
        const _SelectArrow = document.createElement("i");
        const _SelectDropdown = document.createElement("div");
        const _SelectDropdownList = document.createElement("ul");

        _Select.className = `${prefixCls} ${prefixCls}-${size} ${prefixCls}-single`;
        _SelectSelection.className = `${prefixCls}-selection`;
        _SelectPlaceholder.className = `${prefixCls}-placeholder`;
        _SelectArrow.className = `${prefixIconCls} ${prefixIconCls}-ios-arrow-down ${prefixCls}-arrow`;
        _SelectDropdown.className = `${prefixCls}-dropdown`;
        _SelectDropdownList.className = `${prefixCls}-dropdown-list`;

        if (renderOption.length > 0) {
            this._renderOption(renderOption, _SelectDropdownList);
        } else {
            this.createOption(OPTION, _SelectDropdownList);
        }

        isSlotsUserd(true, OPTION);

        _Select.append(_SelectSelection, _SelectDropdown);
        _SelectSelection.append(_SelectPlaceholder, _SelectArrow);
        _SelectDropdown.appendChild(_SelectDropdownList);

        return _Select;
    }

    setWidth(width, el, dorpdown) {
        el.style.width = `${width}px`;
        dorpdown.style.minWidth = `${width}px`;
    }

    setPlacement(placement, el) {
        Popper.createPopper(el, el, { placement });
    }

    setPlaceholder(text, el) {
        el.style.textContent = text;
    }

    selectFocus(el, isDisabled, callback) {
        let status = false;
        if (isDisabled) {
            el.classList.add("rbt-select-disabled");
            el.onclick = () => false;
        } else {
            el.classList.add("rbt-select-visible");
            //  @todo
            //  菜单栏下拉
            //  双击select收起菜单栏
            //  点击空白处收起菜单栏
            el.onclick = () => {
                status
                    ?
                    (status = false) :
                    !status ?
                    (status = true) :
                    (status = false);
                isFunc(callback) ? callback(status) : null;
            };
        }
    }

    createOption(slot_option, el) {
        for (let i = 0; i < slot_option.length; i++) {
            const _SelectItem = document.createElement("li");
            _SelectItem.className = "rbt-select-item";
            addElemetsOfSlots(slot_option, _SelectItem);
            el.appendChild(_SelectItem);
        }
    }

    _renderOption(data, el) {
        if (isArr(data)) {
            data.map((datas) => {
                const _SelectItem = document.createElement("li");
                _SelectItem.className = "rbt-select-item";
                if (isObj(datas)) {
                    Object.keys(datas).forEach(
                        (key) => (_SelectItem.innerHTML = datas[key])
                    );
                } else {
                    _SelectItem.innerHTML = datas;
                }
                el.appendChild(_SelectItem);
            });
        }
    }

    // @todo
    optionClick() {}
}