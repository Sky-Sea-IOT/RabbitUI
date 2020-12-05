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
            onTabRemove,
        } = _config;
        const { TABPANE } = _slot;

        const Tabs = document.createElement('div');
        const TabsHeader = document.createElement('div');
        const TabsNavWrap = document.createElement('div');
        const TabsNavScroll = document.createElement('div');
        const TabsNav = document.createElement('ul');
        const TabsNavActBar = document.createElement('div');
        const TabsContentBox = document.createElement('div');

        this.addClassName(
            Tabs,
            TabsHeader,
            TabsNavWrap,
            TabsNavScroll,
            TabsNav,
            TabsNavActBar,
            TabsContentBox
        );
        this.setAppearance(type, Tabs);

        Tabs.append(TabsHeader, TabsContentBox);
        TabsHeader.appendChild(TabsNavWrap);
        TabsNavWrap.appendChild(TabsNavScroll);
        TabsNavScroll.appendChild(TabsNav);
        TabsNav.appendChild(TabsNavActBar);
        this.addTabsTab(
            TABPANE,
            TabsNav,
            TabsNavActBar,
            type,
            label,
            closable,
            onClick
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
        tabsNavActBar,
        tabsContentBox
    ) {
        tabs.className = `${this.prefixCls}`;
        tabsHeader.className = `${this.prefixCls}-header`;
        tabsNavWrap.className = `${this.prefixCls}-nav-wrap`;
        tabsNavScroll.className = `${this.prefixCls}-nav-scroll`;
        tabsNav.className = `${this.prefixCls}-nav`;
        tabsNavActBar.className = `${this.prefixCls}-active-bar`;
        tabsContentBox.className = `${this.prefixCls}-content`;
    },
    addTabsTab(itemSlot, tabsNav, tabsActiveBar, type, config, closable, cb) {
        for (let i = 0; i < itemSlot.length; i++) {
            const TabsTab = document.createElement('li');

            TabsTab.className = `${this.prefixCls}-tab`;
            TabsTab.innerHTML = config[i].text;
            tabsNav.appendChild(TabsTab);

            if (config[i].active)
                TabsTab.classList.add(`${this.prefixCls}-tab-active`);

            this.setClosable(type, closable, TabsTab);
            this.setDisabled(config[i].disabled, TabsTab);
            setTimeout(() => {
                this.setActiveBar(config[i].active, tabsActiveBar, TabsTab, i);
                this.handleClick(config[i].disabled, TabsTab, i, cb);
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
        }
    },
    setDisabled(disabled, tabsTab) {
        if (!disabled) return;
        tabsTab.onclick = () => false;
        tabsTab.classList.add(`${this.prefixCls}-tab-disabled`);
    },
    setClosable(type, closable, tabsTab) {
        if (type === 'card' && closable) {
            const closeBtn = document.createElement('i');
            closeBtn.className = 'rbt-icon rbt-icon-ios-close';
            tabsTab.appendChild(closeBtn);
        }
    },
    setAppearance(type, tabs) {
        tabs.classList.add(`${this.prefixCls}-${type}`);
    },
    handleClick(disabled, tabsTab, index, cb) {
        if (!disabled) {
            const tabPanes = document.querySelectorAll(`.${this.prefixCls}-tabpane`);
            const paneChange = () => {
                tabsTab.classList.add(`${this.prefixCls}-tab-active`);
                Rbt.siblings(tabsTab).map(item =>
                    item.classList.remove(`${this.prefixCls}-tab-active`)
                );
                tabPanes[index].classList.add(`${this.prefixCls}-tabpane-active`);
                Rbt.siblings(tabPanes[index]).map(item =>
                    item.classList.remove(`${this.prefixCls}-tabpane-active`)
                );
            };
            const callback = () => {
                const tabPane = tabPanes[index].firstChild;
                isFunc(cb) ? cb(index, tabPane) : null;
            };
            tabsTab.addEventListener('click', () => {
                paneChange();
                callback();
            });
        }
    },
    handleRemove() {},
    // TODO:设置跟随条位置
    setActiveBar(active, bar, tabsTab, index) {
        let offsetX = 0;
        if (active) {
            bar.style.width = `${tabsTab.offsetWidth}px`;
            bar.style.transform = `translateX(${offsetX}px)`;
        }
        tabsTab.addEventListener('click', () => {
            bar.style.width = `${tabsTab.offsetWidth}px`;
            if (index === 1) {}
        });
    },
    // TODO: 溢出滚动
};