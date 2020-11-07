const PageHeader = {
    createPageHeader: (config, slot) => {
        const prefixCls = "rbt-page-header";
        const prefixIconCls = "rbt-icon";

        const { onBack } = config;
        const { header, content } = slot;

        const PHeader = document.createElement("div");
        const PHeaderLeft = document.createElement("div");
        const PHeaderIcon = document.createElement("i");
        const PHeaderTitle = document.createElement("div");
        const PHeaderContent = document.createElement("div");

        PHeader.className = `${prefixCls}`;
        PHeaderLeft.className = `${prefixCls}-back`;
        PHeaderIcon.className = `${prefixIconCls} ${prefixIconCls}-ios-arrow-back`;
        PHeaderTitle.className = `${prefixCls}-title`;
        PHeaderContent.className = `${prefixCls}-content`;

        PHeaderLeft.onclick = () => (isFunc(onBack) ? onBack() : null);

        PHeader.append(PHeaderLeft, PHeaderContent);
        PHeaderLeft.append(PHeaderIcon, PHeaderTitle);

        addElemetsOfSlots(header, PHeaderTitle);
        addElemetsOfSlots(content, PHeaderContent);

        isSlotsUserd(true, header);
        isSlotsUserd(true, content);

        return PHeader;
    },
};