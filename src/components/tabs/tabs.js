/**
 * Tabs 标签页
 * 选项卡切换组件
 */

// 溢出滚动：1.先算出可分段移动的总次数 2.每移动一次移动次数+1直到等于总次数再停止
// 初始步数：1
// 移动总数（取整）：navWidth / scrollWidth
// 偏移矢量：scrollWidth * 初始步数++

Rabbit.prototype.Tabs = {
    prefixCls: 'rbt-tabs',
    createInstance(_config, _slot) {
        const {
            label,
            type = 'line',
            onClick,
            closable = false,
            animated = true,
            onTabRemove,
        } = _config;
        const { TABPANE } = _slot;

        const Tabs = document.createElement('div');
        const TabsHeader = document.createElement('div');
        const TabsNavWrap = document.createElement('div');
        const TabsNavScroll = document.createElement('div');
        const TabsNav = document.createElement('ul');
        const TabsContentBox = document.createElement('div');

        this.addClassName(
            Tabs,
            TabsHeader,
            TabsNavWrap,
            TabsNavScroll,
            TabsNav,
            TabsContentBox
        );
        this.useAnimation(animated, Tabs, TabsContentBox);
        this.setAppearance(type, Tabs);

        Tabs.append(TabsHeader, TabsContentBox);
        TabsHeader.appendChild(TabsNavWrap);
        TabsNavWrap.appendChild(TabsNavScroll);
        TabsNavScroll.appendChild(TabsNav);
        this.addTabsTab(
            TABPANE,
            TabsNav,
            type,
            label,
            closable,
            onClick,
            onTabRemove
        );
        this.addTabPane(TABPANE, TabsContentBox, label);

        return Tabs;
    },
    addClassName(
        tabs,
        tabsHeader,
        tabsNavWrap,
        tabsNavScroll,
        tabsNav,
        tabsContentBox
    ) {
        tabs.className = `${this.prefixCls}`;
        tabsHeader.className = `${this.prefixCls}-header`;
        tabsNavWrap.className = `${this.prefixCls}-nav-wrap`;
        tabsNavScroll.className = `${this.prefixCls}-nav-scroll`;
        tabsNav.className = `${this.prefixCls}-nav`;
        tabsContentBox.className = `${this.prefixCls}-content`;
    },
    useAnimation(animated, tabs, tabsContentBox) {
        if (animated) {
            tabsContentBox.classList.add(`${this.prefixCls}-content-animated`);
        } else {
            tabs.classList.add(`${this.prefixCls}-no-animation`);
            setTimeout(() => {
                [...tabsContentBox.childNodes].map(node => {
                    node.style.display = 'none';
                });
            }, 0);
        }
        tabsContentBox.style.transform = 'translateX(0%) translateZ(0px)';
    },
    setAppearance(type, tabs) {
        tabs.classList.add(`${this.prefixCls}-${type}`);
    },
    addTabsTab(itemSlot, tabsNav, type, config, closable, cb, removeCb) {
        for (let i = 0; i < itemSlot.length; i++) {
            const TabsTab = document.createElement('li');

            TabsTab.className = `${this.prefixCls}-tab`;
            TabsTab.innerHTML = config[i].text;
            tabsNav.appendChild(TabsTab);

            if (config[i].active)
                TabsTab.classList.add(`${this.prefixCls}-tab-active`);

            this.setDisabled(config[i].disabled, TabsTab);
            setTimeout(() => {
                this.handleClick(config[i].disabled, TabsTab, i, cb);
                this.setClosable(type, closable, TabsTab, i, removeCb);
            }, 0);
        }
    },
    addTabPane(itemSlot, tabsContentBox, config) {
        for (let i = 0; i < itemSlot.length; i++) {
            const TabsPane = document.createElement('div');
            TabsPane.className = `${this.prefixCls}-tabpane`;

            if (config[i].active)
                TabsPane.classList.add(`${this.prefixCls}-tabpane-active`);
            addElemetsOfSlots(itemSlot[i], TabsPane);
            tabsContentBox.appendChild(TabsPane);
            setTimeout(
                () => this.initSetActive(config[i].active, tabsContentBox, i),
                0
            );
        }
    },
    initSetActive(active, tabsContentBox, index) {
        const tabs = tabsContentBox.parentElement;
        const tabsPanes = tabsContentBox.childNodes;
        if (active) {
            if (tabs.classList.contains(`${this.prefixCls}-no-animation`)) {
                tabsPanes[index].style.display = null;
            } else {
                this.handleSetActive(tabsContentBox, index);
            }
        }
    },
    setDisabled(disabled, tabsTab) {
        if (!disabled) return;
        tabsTab.onclick = () => false;
        tabsTab.classList.add(`${this.prefixCls}-tab-disabled`);
    },
    setClosable(type, closable, tabsTab, index, cb) {
        if (type === 'card' && closable) {
            const closeBtn = document.createElement('i');
            closeBtn.className = 'rbt-icon rbt-icon-ios-close';
            tabsTab.appendChild(closeBtn);
            this.handleRemove(closeBtn, tabsTab, index, cb);
        }
    },
    handleChange(tabsTab, tabPanes, index) {
        this.handleSetActive(tabPanes.parentElement, index);
        const activeCls1 = `${this.prefixCls}-tab-active`;
        const activeCls2 = `${this.prefixCls}-tabpane-active`;

        tabsTab.classList.add(activeCls1);
        Rbt.siblings(tabsTab).map(item => item.classList.remove(activeCls1));

        tabPanes.classList.add(activeCls2);
        Rbt.siblings(tabPanes).map(item => item.classList.remove(activeCls2));
    },
    handleClick(disabled, tabsTab, index, cb) {
        if (!disabled) {
            const tabPanes = this.getTabElems(tabsTab).tabsPanes;
            const callback = () => {
                const tabPane = tabPanes[index].firstChild;
                isFunc(cb) ? cb(index, tabPane) : null;
            };
            tabsTab.addEventListener('click', () => {
                this.handleChange(tabsTab, tabPanes[index], index);
                callback();
            });
        }
    },
    handleRemove(closeEl, tabsTab, index, cb) {
        const tabsPane = this.getTabElems(tabsTab).tabsPanes;
        const _remove = () => {
            this.removeSetNewActive(tabsTab, 'tab');
            this.removeSetNewActive(tabsPane[index], 'tabpane');
            tabsTab.remove();
            tabsPane[index].remove();
            isFunc(cb) ? cb(index) : null;
        };
        closeEl.onclick = () => _remove();
    },
    handleSetActive(tabContentBox, index) {
        const border = -100;
        let offsetX = border * index;
        const tabs = tabContentBox.parentElement;
        // 为卡片化时偏移量需要减去5才准确
        if (tabs.classList.contains(`${this.prefixCls}-border-card`))
            offsetX = offsetX + 5 * index;
        // 不使用动画切换
        if (tabs.classList.contains(`${this.prefixCls}-no-animation`)) {
            const tabspane = tabContentBox.childNodes[index];
            tabspane.style.display = null;
            Rbt.siblings(tabspane).map(node => (node.style.display = 'none'));
        }
        tabContentBox.style.transform = `translateX(${offsetX}%) translateZ(0px)`;
    },
    // TODO: 溢出滚动
    handleOverflow() {},
    // TODO 删除会报错且倒序或不按顺序删除，面板不会自动设置active到下一个面板，但不影响删除节点
    removeSetNewActive(elem, cls) {
        // 如果要删除的元素是active状态则把这个状态移给它上一个或下一个节点
        if (elem.classList.contains(`${this.prefixCls}-${cls}-active`)) {
            if (elem.nextElementSibling) {
                elem.nextElementSibling.classList.add(
                    `${this.prefixCls}-${cls}-active`
                );
            } else if (elem.previousElementSibling) {
                elem.previousElementSibling.classList.add(
                    `${this.prefixCls}-${cls}-active`
                );
            } else {
                elem.classList.add(`${this.prefixCls}-${cls}-active`);
            }
        }
    },
    getTabElems(tabsTab) {
        // 我也很无奈才出此下策获取当前tab的最外层父元素
        const tabs =
            tabsTab.parentElement.parentElement.parentElement.parentElement
            .parentElement;
        const tabsPanes = tabs.querySelectorAll(`.${this.prefixCls}-tabpane`);
        return { tabs, tabsPanes };
    },
};