# Collapse 折叠面板

## API

|  属性   | 说明  | 类型 |  默认值 |
|  ----  | ----  | ---- | ---  |
| accordion | 手风琴模式 | Boolean | false |
| bordered | 带边框风格的折叠面板 | Boolean | true |
| showArrow | 是否展示当前面板上的箭头 | Boolean | true |
| ghost | 使折叠面板透明且无边框 | Boolean | false |
| defaultActiveKey | 初始化选中面板的 key | Array | - |
| onChange | 切换面板时触发，返回当前已展开的面板的 key，格式为数组 | Function | - |
| key | 为面板设置对应的key，与 Collapse的defaultActiveKey对应，不填为索引值 | Array| index |

## slot

|  属性   | 说明  |
|  ----  | ----  |
| panel | 面板主体 |
| header | 面板头内容 |
| content | 面板描述内容 |
