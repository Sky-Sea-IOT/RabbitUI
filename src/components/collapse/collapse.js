/**
 * Collapse 折叠面板
 * @deprecated 可以折叠/展开的内容区域。
 */

rabbit.Collapse = {
    createCollapse(config, slot) {
        const prefixCls = "rbt-collapse";
        const prefixIconCls = "rbt-icon";

        const {
            key = [],
                ghost = false,
                onChange,
                bordered = true,
                accordion = false,
                showArrow = true,
                defaultActiveKey = [],
        } = config;

        const { panel } = slot;

        let expandedKeys = [];

        const error =
            "[Rabbit] You did not use the correct slot in the collapse component, like the one above";

        const collapse = document.createElement("div");

        collapse.className = `${prefixCls}`;

        // 折叠面板透明且无边框
        ghost ? collapse.classList.add(`${prefixCls}-ghost`) : "";

        // 是否带边框的折叠面板
        !bordered ? collapse.classList.add(`${prefixCls}-borderless`) : "";

        // 创建折叠面板项
        const createCollapseItem = (item, i) => {
            const header = item.children[0];
            const content = item.children[1];
            const collapseItem = document.createElement("div");
            const collapseHeader = document.createElement("div");
            const collapseArrow = document.createElement("i");
            const collapseContent = document.createElement("div");
            const collapseContentBox = document.createElement("div");

            collapseContent.style.display = "none";

            if (
                header.getAttribute("slot") === "header" &&
                content.getAttribute("slot") === "content"
            ) {
                addElemetsOfSlots(item, collapseItem);
                addElemetsOfSlots(header, collapseHeader);
                addElemetsOfSlots(content, collapseContentBox);
            } else if (header.getAttribute("slot") !== "header") {
                console.error(header);
                console.error(error);
            } else if (content.getAttribute("slot") !== "content") {
                console.error(content);
                console.error(error);
            }

            collapseItem.className = `${prefixCls}-item`;
            collapseHeader.className = `${prefixCls}-header`;
            collapseArrow.className = `${prefixIconCls} ${prefixIconCls}-ios-arrow-forward`;
            collapseContent.className = `${prefixCls}-content`;
            collapseContentBox.className = `${prefixCls}-content-box`;

            collapse.appendChild(collapseItem);
            collapseItem.append(collapseHeader, collapseContent);

            // 是否展示面板上的箭头
            showArrow
                ?
                collapseHeader.prepend(collapseArrow) :
                collapseItem.classList.add(`${prefixCls}-no-arrow`);

            collapseContent.appendChild(collapseContentBox);

            item.remove();

            this.setItemsKey(i, key, collapseItem);

            this.setDefaultActiveItem(
                defaultActiveKey,
                collapseItem,
                collapseContent
            );

            collapseHeader.onclick = () =>
                this.toogleHandler(
                    i,
                    collapseItem,
                    collapseContent,
                    key,
                    onChange,
                    accordion,
                    expandedKeys
                );
        };

        panel.forEach((item, index) => createCollapseItem(item, index));

        return collapse;
    },

    setItemsKey(i, key, item) {
        if (key.length > 0) {
            item.dataset.key = key[i];
        } else {
            item.dataset.key = i;
        }
    },

    setDefaultActiveItem(defaultActiveKey, item, itemPanel) {
        const { key } = item.dataset;
        defaultActiveKey.map((defKeys, i) => {
            if (defKeys == key) {
                itemPanel.style.display = "block";
                item.classList.add("rbt-collapse-item-active");
            }
        });
    },

    toogleHandler(i, el1, el2, _key, onChange, accordion, expandedKeys) {
        let key = expandedKeys;

        const prefixCls = "rbt-collapse";
        const slideSpeed = 140;
        const collapseItem = el1;
        const collapseContent = el2;

        // 面板切换
        const toogle = () => {
            if (Rbt.hasClass(collapseItem, `${prefixCls}-item-active`)) {
                // 收起面板时删除该面板的 key 并返回当前数组
                key.some((keys, j) => {
                    keys == _key[i] ? key.splice(j, 1) : null;
                });
                Rbt.slider().up(collapseContent, slideSpeed);
                collapseItem.classList.remove(`${prefixCls}-item-active`);
            } else {
                // 切换面板时返回当前已展开的面板的 key，格式为数组
                key.push(_key[i]);
                Rbt.slider().down(collapseContent, slideSpeed);
                collapseItem.classList.add(`${prefixCls}-item-active`);
            }
            isFunc(onChange) ? onChange(key) : null;
        };

        // TODO: 手风琴模式下，折叠其他展开的面板并删除数组中对应key
        const accordionToggle = () => {
            if (accordion) {
                Rbt.siblings(collapseItem).forEach((item) => {
                    const collapsePanel = item.children[1];
                    Rbt.slider().up(collapsePanel, slideSpeed);
                    item.classList.remove(`${prefixCls}-item-active`);
                });
            }
        };

        accordionToggle();
        toogle();
    },
};