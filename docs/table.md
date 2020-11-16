# Table 表格

## API

|  属性   | 说明  | 类型 |  默认值 |
|  ----  | ----  | ---- | ---  |
|  dataSource | 数据源对象  | Object | - |
|  data  | 显示的结构化数据，内包含数据类型需为对象的形式，其中，字段 `rowClassName` 用于设置某一行指定一个样式名称。  | Array | - |
|  columns  | 表格列的标题描述，内包含的数据类型为单一数组的形式  | Array | - |
|  stripe  | 是否显示间隔斑马纹  | Boolean| false |
|  border  | 是否显示纵向边框  | Boolean| false |
|  showHeader  | 是否显示表头  | Boolean| true |
|  width  | 表格宽度，单位需手动填  | String | - |
|  height  | 表格高度，单位需手动填 ，设置后，如果表格内容大于此值，会固定表头  | String | - |
|  align  | 对齐方式，可选值为 `left` 左对齐、`right` 右对齐和 `center` 居中对齐  | String | left |
|  disabledHover  | 禁用鼠标悬停时的高亮  | Boolean | false |
|  highlightRow  | 是否支持高亮选中的行，即单选  | Boolean | false |
|  size  | 表格尺寸，可选值为 `large`、`small`、`default` 或者不填  | String | default |
|  noDataText  | 数据为空时显示的提示内容 | String | 暂无数据 |
|  onRowClick  | 单击某一行时触发，返回当前行的数据和索引值 | Function(row,index) | - |
