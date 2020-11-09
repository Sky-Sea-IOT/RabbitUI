/**
 * Breadcrumb 面包屑
 * @description 显示当前页面在系统层级结构中的位置，并能向上返回。
 */

rabbit.Breadcrumb = {
    createBreadcrumb(config, slot) {
        const prefixCls = "rbt-breadcrumb";
        const { separator = "/" } = config;
        const { breadcrumbItem } = slot;
        const _Breadcrumb = document.createElement("ol");

        _Breadcrumb.className = `${prefixCls}`;

        for (let i = 0; i < breadcrumbItem.length; i++) {
            const _BreadcrumbItem = document.createElement("li");
            const _BreadcrumbSeparator = document.createElement("span");

            breadcrumbItem[i].classList.add(`${prefixCls}-link`);

            _BreadcrumbSeparator.innerHTML = separator;
            _BreadcrumbSeparator.setAttribute("role", "separator");
            _BreadcrumbSeparator.className = `${prefixCls}-separator`;

            addElemetsOfSlots(breadcrumbItem[i], _BreadcrumbItem);
            _BreadcrumbItem.appendChild(_BreadcrumbSeparator);
            _Breadcrumb.appendChild(_BreadcrumbItem);
        }

        return _Breadcrumb;
    },
};