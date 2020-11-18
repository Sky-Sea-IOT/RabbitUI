/**
 * Table 表格
 * 主要用于展示大量结构化数据
 */

Rabbit.prototype.Table = {
    create(config) {
        const prefixCls = "rbt-table";
        const {
            size = "default",
                align = "left",
                width = "",
                height = "",
                border = false,
                stripe = false,
                showHeader = true,
                dataSource = {},
                onRowClick,
                noDataText = "暂无数据",
                highlightRow = false,
                disabledHover = false,
        } = config;

        const Table = document.createElement("div");
        const TableContainer = document.createElement("div");
        // header
        const TableHeaderBox = document.createElement("div");
        const TableHeaderTable = document.createElement("table");
        const TableHeaderTableHead = document.createElement("thead");
        const TableHeadTableTr = document.createElement("tr");
        // body
        const TableBodyBox = document.createElement("div");
        const TableBodyTable = document.createElement("table");
        const TableBodyTableBody = document.createElement("tbody");

        Table.className = `${prefixCls}-wrapper`;
        TableContainer.className = `${prefixCls} ${prefixCls}-${size}`;
        TableHeaderBox.className = `${prefixCls}-header`;
        TableBodyBox.className = `${prefixCls}-body`;
        TableBodyTableBody.className = `${prefixCls}-body`;

        if (width) {
            TableHeaderBox.style.width = width;
            TableBodyBox.style.width = width;
        }
        if (height) {
            Table.style.height = height;
            setTimeout(() => {
                let res =
                    Math.floor(Table.offsetHeight - TableHeaderBox.offsetHeight) + "px";
                TableBodyBox.style.height = res;
                TableBodyBox.classList.add(`${prefixCls}-overflow-y`);
            }, 0);
        }
        if (border) {
            Table.classList.add(`${prefixCls}-wrapper-with-border`);
            TableContainer.classList.add(`${prefixCls}-border`);
        }
        if (stripe) {
            TableContainer.classList.add(`${prefixCls}-stripe`);
        }

        Table.append(TableContainer);

        if (showHeader) TableContainer.appendChild(TableHeaderBox);

        TableContainer.appendChild(TableBodyBox);
        TableHeaderBox.appendChild(TableHeaderTable);
        TableHeaderTable.appendChild(TableHeaderTableHead);
        TableHeaderTableHead.appendChild(TableHeadTableTr);
        TableBodyBox.appendChild(TableBodyTable);
        TableBodyTable.appendChild(TableBodyTableBody);

        this.render(
            dataSource,
            TableHeadTableTr,
            TableBodyTableBody,
            align,
            highlightRow,
            disabledHover,
            noDataText,
            onRowClick
        );

        return Table;
    },

    render(
        dataSource,
        theadTr,
        tbody,
        align,
        highlightRow,
        disabledHover,
        noDataText,
        onRowClick
    ) {
        const data = {
            columns: dataSource["columns"],
            tableItems: dataSource["data"],
        };

        this.renderHeader(data.columns, theadTr, align);
        this.renderTBodyCell(
            data.columns,
            data.tableItems,
            tbody,
            align,
            highlightRow,
            disabledHover,
            noDataText,
            onRowClick
        );
    },

    renderHeader(data, theadTr, align) {
        if (isArr(data)) {
            data.map((item) => {
                const TableHeadTh = document.createElement("th");

                TableHeadTh.innerHTML = item;
                TableHeadTh.className = `rbt-table-column-${align}`;

                theadTr.appendChild(TableHeadTh);
            });
        } else {
            throw TypeError("[Rabbit] The type of property columns must be an array");
        }
    },

    renderTBodyCell(
        columnsData,
        data,
        tbody,
        align,
        highlightRow,
        disabledHover,
        noDataText,
        onRowClick
    ) {
        if (isArr(data)) {
            if (data.length <= 0) {
                const TableBodyTr = document.createElement("tr");
                const TableBodyTd = document.createElement("td");

                TableBodyTd.innerHTML = noDataText;
                TableBodyTd.style.textAlign = "center";

                TableBodyTr.appendChild(TableBodyTd);
                tbody.appendChild(TableBodyTr);
            } else {
                data.map((datas, i) => {
                    const TableBodyTr = document.createElement("tr");
                    tbody.appendChild(TableBodyTr);

                    if (isObj(datas)) {
                        Object.keys(datas).forEach((key) => {
                            if (key === "rowClassName") {
                                const rowClassName = datas[key];
                                TableBodyTr.className = rowClassName;
                            }
                            // 排除 rowClassName
                            if (key !== "rowClassName") {
                                if (columnsData.includes(key)) {
                                    const TableBodyTd = document.createElement("td");

                                    TableBodyTd.innerHTML = datas[key];
                                    TableBodyTd.className = `rbt-table-column-${align}`;
                                    TableBodyTr.appendChild(TableBodyTd);
                                } else {
                                    throw ReferenceError(
                                        `[Rabbit] ${key} is not included in the [${columnsData}] or vice versa`
                                    );
                                }
                            }
                        });
                    } else {
                        throw TypeError(
                            "[Rabbit] The data type that holds the content of the table must be an object"
                        );
                    }

                    this.disabledHover(disabledHover, TableBodyTr);
                    this.highlightRow(highlightRow, TableBodyTr);
                    this.rowClickEv(TableBodyTr, onRowClick, datas, i);
                });
            }
        } else {
            throw TypeError("[Rabbit] The type of property data must be an array");
        }
    },

    disabledHover(d, tr) {
        if (!d) {
            tr.onmouseenter = () => {
                tr.classList.add("rbt-table-row-hover");
                Rbt.siblings(tr).forEach((item) => {
                    if (Rbt.hasClass(item, "rbt-table-row-hover")) {
                        item.classList.remove("rbt-table-row-hover");
                    }
                });
            };
            tr.onmouseleave = () => tr.classList.remove("rbt-table-row-hover");
        }
    },

    highlightRow(h, tr) {
        if (h) {
            tr.onclick = () => {
                tr.classList.add("rbt-table-heightlight");
                Rbt.siblings(tr).forEach((item) => {
                    if (Rbt.hasClass(item, "rbt-table-heightlight")) {
                        item.classList.remove("rbt-table-heightlight");
                    }
                });
            };
        }
    },

    rowClickEv(tr, cb, row, index) {
        tr.onclick = () => {
            isFunc(cb) ? cb(row, index) : null;
        };
    },
};