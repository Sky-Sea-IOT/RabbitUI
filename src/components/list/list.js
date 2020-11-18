/**
 * List 列表
 * 基础的列表展示，可承载文字、列表、图片、段落
 */

Rabbit.prototype.List = {
    create(config, slot) {
        const prefixCls = "rbt-list";

        const {
            size = "defalut",
                split = true,
                border = true,
                header = "",
                footer = "",
                renderItem = [],
        } = config;

        const SLOT_HEADER = slot.header;
        const SLOT_FOOTER = slot.footer;
        const SLOT_LISTITEM = slot.listItem;

        const List = document.createElement("div");
        const ListHeader = document.createElement("div");
        const ListContainer = document.createElement("ul");
        const ListFooter = document.createElement("div");

        List.className = `${prefixCls} ${prefixCls}-${size} ${prefixCls}-bordered ${prefixCls}-split`;
        ListHeader.className = `${prefixCls}-header`;
        ListContainer.className = `${prefixCls}-container`;
        ListFooter.className = `${prefixCls}-footer`;

        if (!border) {
            List.classList.remove(`${prefixCls}-bordered`);
        }
        if (!split) {
            List.classList.remove(`${prefixCls}-split`);
            List.classList.remove(`${prefixCls}-bordered`);
        }

        if (header || SLOT_HEADER) {
            List.appendChild(ListHeader);
        }
        if (header) {
            ListHeader.innerHTML = header;
        } else if (SLOT_HEADER && SLOT_HEADER.innerHTML) {
            addElemetsOfSlots(SLOT_HEADER, ListHeader);
        }

        if (renderItem.length > 0) {
            this._renderItem(renderItem, ListContainer);
        } else {
            this.createItems(SLOT_LISTITEM, ListContainer);
        }

        List.appendChild(ListContainer);

        if (footer || SLOT_FOOTER) {
            List.appendChild(ListFooter);
        }
        if (footer) {
            ListFooter.innerHTML = footer;
        } else if (SLOT_HEADER && SLOT_HEADER.innerHTML) {
            addElemetsOfSlots(SLOT_FOOTER, ListFooter);
        }

        isSlotsUserd(true, SLOT_HEADER);
        isSlotsUserd(true, SLOT_FOOTER);
        return List;
    },

    _renderItem(data, el) {
        if (isArr(data)) {
            data.map((datas) => {
                const ListItem = document.createElement("li");
                ListItem.className = "rbt-list-item";
                if (isObj(datas)) {
                    Object.keys(datas).forEach((key) => {
                        ListItem.innerHTML = datas[key];
                    });
                } else {
                    ListItem.innerHTML = datas;
                }
                el.appendChild(ListItem);
            });
        }
    },

    createItems(slot_listItem, el) {
        for (let i = 0; i < slot_listItem.length; i++) {
            const _ListItem = document.createElement("li");

            addElemetsOfSlots(slot_listItem[i], _ListItem);
            el.appendChild(_ListItem);

            _ListItem.className = "rbt-list-item";
        }
    },
};