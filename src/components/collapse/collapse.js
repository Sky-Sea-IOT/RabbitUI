/**
 * Collapse 折叠面板
 * 可以折叠/展开的内容区域。
 */
Rabbit.prototype.Collapse = {
    prefixCls: 'rbt-collapse',
    createInstance(_config, _slot) {
        const prefixIconCls = 'rbt-icon';

        const {
            key = [],
                ghost = false,
                onChange,
                bordered = true,
                accordion = false,
                showArrow = true,
                defaultActiveKey = [],
        } = _config;

        const { COLLAPSEPANEL } = _slot;

        let expandedKeys = [];

        const error =
            '[Rabbit] You did not use the correct slot in the collapse component, like the one above';

        const Collapse = document.createElement('div');

        Collapse.className = `${this.prefixCls}`;

        // 折叠面板透明且无边框
        ghost ? Collapse.classList.add(`${this.prefixCls}-ghost`) : '';

        // 是否带边框的折叠面板
        !bordered ? Collapse.classList.add(`${this.prefixCls}-borderless`) : '';

        // 创建折叠面板项
        const createCollapseItem = (item, i) => {
            const title = item.children[0];
            const content = item.children[1];
            const CollapseItem = document.createElement('div');
            const CollapseHeader = document.createElement('div');
            const CollapseArrow = document.createElement('i');
            const CollapseContent = document.createElement('div');
            const CollapseContentBox = document.createElement('div');

            CollapseContent.style.display = 'none';

            if (
                title.getAttribute('slot') === 'title' &&
                content.getAttribute('slot') === 'content'
            ) {
                addElemetsOfSlots(item, CollapseItem);
                addElemetsOfSlots(title, CollapseHeader);
                addElemetsOfSlots(content, CollapseContentBox);
            } else if (title.getAttribute('slot') !== 'title') {
                console.error(title);
                console.error(error);
            } else if (content.getAttribute('slot') !== 'content') {
                console.error(content);
                console.error(error);
            }

            CollapseItem.className = `${this.prefixCls}-item`;
            CollapseHeader.className = `${this.prefixCls}-header`;
            CollapseArrow.className = `${prefixIconCls} ${prefixIconCls}-ios-arrow-forward`;
            CollapseContent.className = `${this.prefixCls}-content`;
            CollapseContentBox.className = `${this.prefixCls}-content-box`;

            Collapse.appendChild(CollapseItem);
            CollapseItem.append(CollapseHeader, CollapseContent);

            // 是否展示面板上的箭头
            showArrow
                ?
                CollapseHeader.prepend(CollapseArrow) :
                CollapseItem.classList.add(`${this.prefixCls}-no-arrow`);

            CollapseContent.appendChild(CollapseContentBox);

            item.remove();

            this.steKey(i, key, CollapseItem);

            this.setActive(defaultActiveKey, CollapseItem, CollapseContent);

            CollapseHeader.onclick = () =>
                this.handleToogle(
                    i,
                    CollapseItem,
                    CollapseContent,
                    key,
                    onChange,
                    accordion,
                    expandedKeys
                );
        };

        COLLAPSEPANEL.forEach((item, index) => createCollapseItem(item, index));

        return Collapse;
    },

    steKey(i, key, item) {
        if (key.length > 0) {
            item.dataset.key = key[i];
        } else {
            item.dataset.key = i;
        }
    },

    setActive(defaultActiveKey, item, itemPanel) {
        const { key } = item.dataset;
        defaultActiveKey.map(defKeys => {
            if (defKeys == key) {
                itemPanel.style.display = 'block';
                item.classList.add(`${this.prefixCls}-item-active`);
            }
        });
    },

    handleToogle(i, el1, el2, _key, onChange, accordion, expandedKeys) {
        let key = expandedKeys;
        const slideSpeed = 140;
        const CollapseItem = el1;
        const CollapseContent = el2;

        // 面板切换
        const toogle = () => {
            if (Rbt.hasClass(CollapseItem, `${this.prefixCls}-item-active`)) {
                // 收起面板时删除该面板的 key 并返回当前数组
                key.some((keys, j) => {
                    keys == _key[i] ? key.splice(j, 1) : null;
                });
                Rbt.slider().up(CollapseContent, slideSpeed);
                CollapseItem.classList.remove(`${this.prefixCls}-item-active`);
            } else {
                // 切换面板时返回当前已展开的面板的 key，格式为数组
                key.push(_key[i]);
                Rbt.slider().down(CollapseContent, slideSpeed);
                CollapseItem.classList.add(`${this.prefixCls}-item-active`);
            }
            isFunc(onChange) ? onChange(key) : null;
        };

        // TODO: 手风琴模式下，折叠其他展开的面板并删除数组中对应key
        const accordionToggle = () => {
            if (accordion) {
                Rbt.siblings(CollapseItem).forEach(item => {
                    const collapsePanel = item.children[1];
                    Rbt.slider().up(collapsePanel, slideSpeed);
                    item.classList.remove(`${this.prefixCls}-item-active`);
                });
            }
        };

        accordionToggle();
        toogle();
    },
};