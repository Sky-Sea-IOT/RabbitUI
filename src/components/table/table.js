/**
 * Table 表格
 * 主要用于展示大量结构化数据
 */

Rabbit.prototype.Table = {
    _createInstance(config) {
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
                _highlightRow = false,
                _disabledHover = false,
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

        this._render(
            dataSource,
            TableHeadTableTr,
            TableBodyTableBody,
            align,
            _highlightRow,
            _disabledHover,
            noDataText,
            onRowClick
        );

        return Table;
    },

    _render(
        dataSource,
        theadTr,
        tbody,
        align,
        _highlightRow,
        _disabledHover,
        noDataText,
        onRowClick
    ) {
        const data = {
            columns: dataSource["columns"],
            rows: dataSource["rows"],
        };

        this._renderHeader(data.columns, theadTr, align);
        this._renderTBodyCell(
            data.columns,
            data.rows,
            tbody,
            align,
            _highlightRow,
            _disabledHover,
            noDataText,
            onRowClick
        );
    },

    _renderHeader(data, theadTr, align) {
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

    _renderTBodyCell(
        columnsData,
        data,
        tbody,
        align,
        _highlightRow,
        _disabledHover,
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

                    this._disabledHover(_disabledHover, TableBodyTr);
                    this._highlightRow(_highlightRow, TableBodyTr);
                    this._rowClickEv(TableBodyTr, onRowClick, datas, i);
                });
            }
        } else {
            throw TypeError("[Rabbit] The type of property data must be an array");
        }
    },

    _disabledHover(d, tr) {
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

    _highlightRow(h, tr) {
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

    _rowClickEv(tr, cb, row, index) {
        tr.onclick = () => {
            isFunc(cb) ? cb(row, index) : null;
        };
    },
};