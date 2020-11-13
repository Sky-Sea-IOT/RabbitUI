rabbit.PageHeader = {
    createPageHeader: (config, slot) => {
        const prefixCls = "rbt-page-header";
        const prefixIconCls = "rbt-icon";

        const { onBack } = config;
        const { header, content } = slot;

        const PageHeader = document.createElement("div");
        const PageHeaderLeft = document.createElement("div");
        const PageHeaderIcon = document.createElement("i");
        const PageHeaderTitle = document.createElement("div");
        const PageHeaderContent = document.createElement("div");

        PageHeader.className = `${prefixCls}`;
        PageHeaderLeft.className = `${prefixCls}-back`;
        PageHeaderIcon.className = `${prefixIconCls} ${prefixIconCls}-ios-arrow-back`;
        PageHeaderTitle.className = `${prefixCls}-title`;
        PageHeaderContent.className = `${prefixCls}-content`;

        PageHeaderLeft.onclick = () => (isFunc(onBack) ? onBack() : null);

        PageHeader.append(PageHeaderLeft, PageHeaderContent);
        PageHeaderLeft.append(PageHeaderIcon, PageHeaderTitle);

        addElemetsOfSlots(header, PageHeaderTitle);
        addElemetsOfSlots(content, PageHeaderContent);

        isSlotsUserd(true, header);
        isSlotsUserd(true, content);

        return PageHeader;
    },
};