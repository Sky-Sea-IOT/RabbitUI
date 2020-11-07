const $table = () => ({
    createTable: (el, data = {}) => {
        const prefixCls = "rbt-table";

        const target = document.querySelector(el);
        target.className = `${prefixCls}`;

        // 参数data必须是一个对象
        if (!isObj(data)) {
            throw TypeError(
                "The parameter that the $Table.create() accepts must be an object"
            );
        }

        // $table此对象必须存在
        if (!data.$table) {
            throw Error(`$table was not found`);
        } else {
            setTable();
        }

        function setTable() {
            const { $table } = data;

            // 获取 $table 对象下的 title、data、cellClassName属性
            const titleData = $table.title;
            const bodyData = $table.data;

            // title和data属性必须存在$table中
            if (!("title" in $table) || !("data" in $table)) {
                throw Error(`Missing "title" or "data" attribute in the $table:{...}`);
            }

            // title和data在$table中必须是数组的形式
            if (!isArr($table.title) || !isArr($table.data)) {
                throw TypeError(`$table.title or $table.data must be an array`);
            }

            // 表格尺寸
            isUndef($table.size) ? ($table.size = "default") : $table.size;

            target.classList.add(`${prefixCls}-${$table.size}`);

            // 鼠标悬停时表格的行项是否高亮
            if (isUndef($table.hoverHighlight)) {
                $table.hoverHighlight = true;
            }

            if ($table.hoverHighlight) {
                target.classList.add(`${prefixCls}-row-hover`);
            } else {
                target.classList.remove(`${prefixCls}-row-hover`);
            }

            // 表格是否显示斑马线
            $table.stripe ? target.classList.add(`${prefixCls}-stripe`) : "";

            // 是否显示边框
            $table.border ? target.classList.add(`${prefixCls}-border`) : "";

            // 数据为空时默认显示的提示内容
            isUndef($table.noDataText) ?
                ($table.noDataText = "暂无数据") :
                $table.noDataText;

            // 创建table所需的基本结构
            const thead = document.createElement("thead");
            thead.className = `${prefixCls}-title`;

            const tbody = document.createElement("tbody");

            const titleTr = document.createElement("tr");
            thead.appendChild(titleTr);

            // 遍历 $table.title 中的所有元素并添加到表格标题
            titleData.map((item) => {
                const th = document.createElement("th");
                const div = document.createElement("div");

                div.className = `${prefixCls}-cell`;
                div.innerHTML = item;

                th.appendChild(div);
                titleTr.appendChild(th);
            });

            // 遍历$table.data再遍历$table.data内的对象拿到数据
            bodyData.map((item) => {
                const contentTr = document.createElement("tr");

                tbody.appendChild(contentTr);

                Object.keys(item).forEach((keys) => {
                    // $table.content中的所有键是否与 $table.title数组中的每一个值的名称相对应
                    if (!titleData.includes(keys)) {
                        throw Error(
                            `"${keys}" does not exist in the $table.title: [ ${titleData} ]`
                        );
                    } else {
                        const td = document.createElement("td");
                        const div = document.createElement("div");

                        div.className = "rbt-table-cell";

                        //表格内容项是否有数据
                        item[keys] ?
                            (div.innerHTML = item[keys]) :
                            (div.innerHTML = $table.noDataText);

                        td.appendChild(div);
                        contentTr.appendChild(td);
                    }
                });
            });
            // 把实例添加到指定table标签里
            target.append(thead, tbody);
        }
    },
});