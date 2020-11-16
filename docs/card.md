# Card 卡片

## API

|  属性   | 说明  | 类型 |  默认值 |
|  ----  | ----  | ---- | ---  |
|  width  | 卡片宽度，单位 px  | Number | 320  |
|  bordered  | 是否显示边框  | Boolean | true  |
|  hoverable  | 鼠标悬停显示阴影  | Boolean | true  |
|  padding  | 卡片内容区域内部间距，单位 px  | Number | 24  |
|  headStyle  | 自定义标题区域样式  | Object | - |
|  bodyStyle  | 内容区域自定义样式 | Object | - |
|  className  | 为卡片容器 `rbt-card` 添加class类名  | String | -  |

## Slot

|  名称   | 说明 |
|  ----  | ----  |
| title | 自定义卡片标题 |
| extra | 额外显示的内容，卡片右上角的操作区域 |
| content | 卡片主体内容 |
