/**
 * Breadcrumb 面包屑
 * 显示当前页面在系统层级结构中的位置，并能向上返回。
 */
Rabbit.prototype.Breadcrumb = {
    _createInstance: (_config, _slot) => {
        const prefixCls = "rbt-breadcrumb";
        const { separator = "/" } = _config;
        const { BREADCRUMBITEM } = _slot;
        const Breadcrumb = document.createElement("ol");

        Breadcrumb.className = `${prefixCls}`;

        for (let i = 0; i < BREADCRUMBITEM.length; i++) {
            const BreadcrumbItem = document.createElement("li");
            const BreadcrumbSeparator = document.createElement("span");

            BREADCRUMBITEM[i].classList.add(`${prefixCls}-link`);

            BreadcrumbSeparator.innerHTML = separator;
            BreadcrumbSeparator.setAttribute("role", "separator");
            BreadcrumbSeparator.className = `${prefixCls}-separator`;

            addElemetsOfSlots(BREADCRUMBITEM[i], BreadcrumbItem);
            BreadcrumbItem.appendChild(BreadcrumbSeparator);
            Breadcrumb.appendChild(BreadcrumbItem);
        }

        return Breadcrumb;
    },
};