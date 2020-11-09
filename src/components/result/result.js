/**
 * Result 结果
 * 用于反馈一系列操作任务的处理结果。
 */

rabbit.Result = {
    createResult: (config, slot) => {
        const prefixCls = "rbt-result";
        const prefixIconCls = "rbt-icon";

        let { status = "info", title = "", subTitle = "", icon = "" } = config;

        const { content, footer } = slot;

        let type = "",
            Icons = "",
            statusImage = "";

        if (status !== 404 && status !== 403 && status !== 500) {
            type = status;
        } else {
            statusImage = getStatusImage(status);
        }

        Icons = !icon ? getIconTypes(type) : icon;

        const _Result = document.createElement("div");
        const _ResultIconBox = document.createElement("div");
        const _ResultIcon = document.createElement("i");
        const _ResultTitle = document.createElement("div");
        const _ResultSubTitle = document.createElement("div");
        const _ResultContent = document.createElement("div");
        const _ResultFooter = document.createElement("div");

        _Result.className = `${prefixCls} ${prefixCls}-${type}`;
        _ResultIconBox.className = `${prefixCls}-icon`;
        _ResultIcon.className = `${prefixIconCls} ${prefixIconCls}-${Icons} ${prefixCls}-icon`;
        _ResultTitle.className = `${prefixCls}-title`;
        _ResultSubTitle.className = `${prefixCls}-subtitle`;
        _ResultContent.className = `${prefixCls}-content`;
        _ResultFooter.className = `${prefixCls}-footer`;

        _ResultTitle.innerHTML = title;
        _ResultSubTitle.innerHTML = subTitle;

        if (status !== 404 && status !== 403 && status !== 500) {
            _ResultIconBox.appendChild(_ResultIcon);
        } else {
            _ResultIconBox.classList.add(`${prefixCls}-img`);
            _ResultIconBox.innerHTML = statusImage;
        }

        _Result.append(_ResultIconBox, _ResultTitle, _ResultSubTitle);

        if (footer && footer.innerHTML) {
            addElemetsOfSlots(footer, _ResultFooter);
            _Result.appendChild(_ResultFooter);
        }

        if (content && content.innerHTML) {
            addElemetsOfSlots(content, _ResultContent);
            _Result.appendChild(_ResultContent);
        }

        isSlotsUserd(true, content);
        isSlotsUserd(true, footer);

        return _Result;
    },
};