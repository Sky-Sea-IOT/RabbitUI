/**
 * Table 表格
 * 主要用于展示大量结构化数据
 */
Rabbit.prototype.Table = {
    prefixCls: 'rbt-table',
    createInstance(_config) {
        const {
            size = 'default',
                align = 'left',
                width = '',
                height = '',
                border = false,
                stripe = false,
                showHeader = true,
                dataSource = {},
                onRowClick,
                noDataText = '暂无数据',
                highlightRow = false,
                disabledHover = false,
        } = _config;

        const Table = document.createElement('div');
        const TableContainer = document.createElement('div');
        // header
        const TableHeaderBox = document.createElement('div');
        const TableHeaderTable = document.createElement('table');
        const TableHeaderTableHead = document.createElement('thead');
        const TableHeadTableTr = document.createElement('tr');
        // body
        const TableBodyBox = document.createElement('div');
        const TableBodyTable = document.createElement('table');
        const TableBodyTableBody = document.createElement('tbody');

        Table.className = `${this.prefixCls}-wrapper`;
        TableContainer.className = `${this.prefixCls} ${this.prefixCls}-${size}`;
        TableHeaderBox.className = `${this.prefixCls}-header`;
        TableBodyBox.className = `${this.prefixCls}-body`;
        TableBodyTableBody.className = `${this.prefixCls}-body`;

        if (width) {
            TableHeaderBox.style.width = width;
            TableBodyBox.style.width = width;
        }
        if (height) {
            Table.style.height = height;
            setTimeout(() => {
                let res =
                    Math.floor(Table.offsetHeight - TableHeaderBox.offsetHeight) + 'px';
                TableBodyBox.style.height = res;
                TableBodyBox.classList.add(`${this.prefixCls}-overflow-y`);
            }, 0);
        }
        if (border) {
            Table.classList.add(`${this.prefixCls}-wrapper-with-border`);
            TableContainer.classList.add(`${this.prefixCls}-border`);
        }
        if (stripe) {
            TableContainer.classList.add(`${this.prefixCls}-stripe`);
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
            columns: dataSource['columns'],
            rows: dataSource['rows'],
        };

        this.renderHeader(data.columns, theadTr, align);
        this.renderTBodyCell(
            data.columns,
            data.rows,
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
            data.map(item => {
                const TableHeadTh = document.createElement('th');

                TableHeadTh.innerHTML = item;
                TableHeadTh.className = `${this.prefixCls}-column-${align}`;

                theadTr.appendChild(TableHeadTh);
            });
        } else {
            throw TypeError('The type of property columns must be an array');
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
                const TableBodyTr = document.createElement('tr');
                const TableBodyTd = document.createElement('td');

                TableBodyTd.innerHTML = noDataText;
                TableBodyTd.style.textAlign = 'center';

                TableBodyTr.appendChild(TableBodyTd);
                tbody.appendChild(TableBodyTr);
            } else {
                data.map((datas, i) => {
                    const TableBodyTr = document.createElement('tr');
                    tbody.appendChild(TableBodyTr);
                    if (isObj(datas)) {
                        Object.keys(datas).forEach(key => {
                            if (key === 'rowClassName') {
                                const rowClassName = datas[key];
                                TableBodyTr.className = rowClassName;
                            }
                            // 排除 rowClassName
                            if (key !== 'rowClassName') {
                                // columns 的值和 rows 对象的键要相等
                                if (columnsData.includes(key)) {
                                    const TableBodyTd = document.createElement('td');

                                    TableBodyTd.innerHTML = datas[key];
                                    TableBodyTd.className = `${this.prefixCls}-column-${align}`;

                                    TableBodyTr.appendChild(TableBodyTd);
                                } else {
                                    warn(
                                        `In the rows of table data source there are data inconsistent with those in columns.  row: [{${key}}`
                                    );
                                    return;
                                }
                            }
                        });
                    } else {
                        throw TypeError(
                            'The data type that holds the content of the table must be an object'
                        );
                    }

                    this.disabledHover(disabledHover, TableBodyTr);
                    this.highlightRow(highlightRow, TableBodyTr);
                    this.handleRowsClick(TableBodyTr, onRowClick, datas, i);
                });
            }
        } else {
            throw TypeError('The type of property data must be an array');
        }
    },

    disabledHover(d, tr) {
        if (!d) {
            tr.onmouseenter = () => {
                tr.classList.add(`${this.prefixCls}-row-hover`);
                Rbt.siblings(tr).forEach(item => {
                    if (Rbt.hasClass(item, `${this.prefixCls}-row-hover`)) {
                        item.classList.remove(`${this.prefixCls}-row-hover`);
                    }
                });
            };
            tr.onmouseleave = () =>
                tr.classList.remove(`${this.prefixCls}-row-hover`);
        }
    },

    highlightRow(h, tr) {
        if (h) {
            tr.onclick = () => {
                tr.classList.add(`${this.prefixCls}-heightlight`);
                Rbt.siblings(tr).forEach(item => {
                    if (Rbt.hasClass(item, `${this.prefixCls}-heightlight`)) {
                        item.classList.remove(`${this.prefixCls}-heightlight`);
                    }
                });
            };
        }
    },

    handleRowsClick(tr, cb, row, index) {
        tr.onclick = () => {
            isFunc(cb) ? cb(row, index) : null;
        };
    },
};