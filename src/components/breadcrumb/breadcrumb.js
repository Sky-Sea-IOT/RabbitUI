/**
 * Breadcrumb 面包屑
 * @description 显示当前页面在系统层级结构中的位置，并能向上返回。
 */

rabbit.Breadcrumb = {
    createBreadcrumb(config, slot) {
        const prefixCls = "rbt-breadcrumb";
        const { separator = "/" } = config;
        const { breadcrumbItem } = slot;
        const Breadcrumb = document.createElement("ol");

        Breadcrumb.className = `${prefixCls}`;

        for (let i = 0; i < breadcrumbItem.length; i++) {
            const BreadcrumbItem = document.createElement("li");
            const BreadcrumbSeparator = document.createElement("span");

            breadcrumbItem[i].classList.add(`${prefixCls}-link`);

            BreadcrumbSeparator.innerHTML = separator;
            BreadcrumbSeparator.setAttribute("role", "separator");
            BreadcrumbSeparator.className = `${prefixCls}-separator`;

            addElemetsOfSlots(breadcrumbItem[i], BreadcrumbItem);
            BreadcrumbItem.appendChild(BreadcrumbSeparator);
            Breadcrumb.appendChild(BreadcrumbItem);
        }

        return Breadcrumb;
    },
};