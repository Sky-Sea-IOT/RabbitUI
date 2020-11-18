/**
 * Result 结果
 * 用于反馈一系列操作任务的处理结果。
 */

Rabbit.prototype.Result = {
    create: (config, slot) => {
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

        const Result = document.createElement("div");
        const ResultIconBox = document.createElement("div");
        const ResultIcon = document.createElement("i");
        const ResultTitle = document.createElement("div");
        const ResultSubTitle = document.createElement("div");
        const ResultContent = document.createElement("div");
        const ResultFooter = document.createElement("div");

        Result.className = `${prefixCls} ${prefixCls}-${type}`;
        ResultIconBox.className = `${prefixCls}-icon`;
        ResultIcon.className = `${prefixIconCls} ${prefixIconCls}-${Icons} ${prefixCls}-icon`;
        ResultTitle.className = `${prefixCls}-title`;
        ResultSubTitle.className = `${prefixCls}-subtitle`;
        ResultContent.className = `${prefixCls}-content`;
        ResultFooter.className = `${prefixCls}-footer`;

        ResultTitle.innerHTML = title;
        ResultSubTitle.innerHTML = subTitle;

        if (status !== 404 && status !== 403 && status !== 500) {
            ResultIconBox.appendChild(ResultIcon);
        } else {
            ResultIconBox.classList.add(`${prefixCls}-img`);
            ResultIconBox.innerHTML = statusImage;
        }

        Result.append(ResultIconBox, ResultTitle, ResultSubTitle);

        if (footer && footer.innerHTML) {
            addElemetsOfSlots(footer, ResultFooter);
            Result.appendChild(ResultFooter);
        }

        if (content && content.innerHTML) {
            addElemetsOfSlots(content, ResultContent);
            Result.appendChild(ResultContent);
        }

        isSlotsUserd(true, content);
        isSlotsUserd(true, footer);

        return Result;
    },
};