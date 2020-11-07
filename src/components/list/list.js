/**
 * List 列表
 * 基础的列表展示，可承载文字、列表、图片、段落
 */

const List = {
    createList(config, slot) {
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

        const _List = document.createElement("div");
        const _ListHeader = document.createElement("div");
        const _ListContainer = document.createElement("ul");
        const _ListFooter = document.createElement("div");

        _List.className = `${prefixCls} ${prefixCls}-${size} ${prefixCls}-bordered ${prefixCls}-split`;
        _ListHeader.className = `${prefixCls}-header`;
        _ListContainer.className = `${prefixCls}-container`;
        _ListFooter.className = `${prefixCls}-footer`;

        if (!border) {
            _List.classList.remove(`${prefixCls}-bordered`);
        }
        if (!split) {
            _List.classList.remove(`${prefixCls}-split`);
            _List.classList.remove(`${prefixCls}-bordered`);
        }

        if (header || SLOT_HEADER) {
            _List.appendChild(_ListHeader);
        }
        if (header) {
            _ListHeader.innerHTML = header;
        } else if (SLOT_HEADER && SLOT_HEADER.innerHTML) {
            addElemetsOfSlots(SLOT_HEADER, _ListHeader);
        }

        if (renderItem.length > 0) {
            this._renderItem(renderItem, _ListContainer);
        } else {
            this.createItems(SLOT_LISTITEM, _ListContainer);
        }

        _List.appendChild(_ListContainer);

        if (footer || SLOT_FOOTER) {
            _List.appendChild(_ListFooter);
        }
        if (footer) {
            _ListFooter.innerHTML = footer;
        } else if (SLOT_HEADER && SLOT_HEADER.innerHTML) {
            addElemetsOfSlots(SLOT_FOOTER, _ListFooter);
        }

        isSlotsUserd(true, SLOT_HEADER);
        isSlotsUserd(true, SLOT_FOOTER);
        return _List;
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