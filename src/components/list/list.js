/**
 * List 列表
 * 基础的列表展示，可承载文字、列表、图片、段落
 */

Rabbit.prototype.List = {
    createInstance(_config, _slot) {
        const prefixCls = 'rbt-list';

        const {
            size = 'defalut',
                split = true,
                border = true,
                header = '',
                footer = '',
                renderItem = [],
        } = _config;

        const { HEADER, FOOTER, LISTITEM } = _slot;

        const List = document.createElement('div');
        const ListHeader = document.createElement('div');
        const ListContainer = document.createElement('ul');
        const ListFooter = document.createElement('div');

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

        if (header || HEADER) {
            List.appendChild(ListHeader);
        }
        if (header) {
            ListHeader.innerHTML = header;
        } else if (HEADER && HEADER.innerHTML) {
            addElemetsOfSlots(HEADER, ListHeader);
        }

        if (renderItem.length > 0) {
            this.renderItem(renderItem, ListContainer);
        } else {
            this.createItems(LISTITEM, ListContainer);
        }

        List.appendChild(ListContainer);

        if (footer || FOOTER) {
            List.appendChild(ListFooter);
        }
        if (footer) {
            ListFooter.innerHTML = footer;
        } else if (HEADER && HEADER.innerHTML) {
            addElemetsOfSlots(FOOTER, ListFooter);
        }

        isSlotsUserd(true, HEADER);
        isSlotsUserd(true, FOOTER);
        return List;
    },

    renderItem(data, el) {
        if (isArr(data)) {
            data.map(datas => {
                const ListItem = document.createElement('li');
                ListItem.className = 'rbt-list-item';
                if (isObj(datas)) {
                    Object.keys(datas).forEach(key => {
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
            const _ListItem = document.createElement('li');

            addElemetsOfSlots(slot_listItem[i], _ListItem);
            el.appendChild(_ListItem);

            _ListItem.className = 'rbt-list-item';
        }
    },
};