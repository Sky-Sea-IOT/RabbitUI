# API

|  属性   | 说明  | 类型 |  默认值 |
|  ----  | ----  | ---- | ---  |
| type | 警告提示样式，可选值为`info`、`success`、`warning`、`error` | Boolean | false |
| banner | 是否用作顶部公告 | Boolean | false |
| closable | 是否可关闭 | Boolean | false |
| showIcon | 是否显示辅助图标 | Boolean | false |
| onClose | 关闭时触发的回调函数 | Function | - |
| closeText | 自定义关闭按钮内容 | String | - |

## Alert slot

|  名称   | 说明  |
|  ----  | ----  |
| message | 警告提示内容 |
| desc | 警告提示辅助性文字介绍 |
| icon | 自定义图标 |
