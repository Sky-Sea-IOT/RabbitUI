# Switch 开关

## API

|  属性   | 说明  | 类型 |  默认值 |
|  ----  | ----  | ---- | ---  |
| size | 开关大小，可选值：`large`、`small` 或者不写。建议开关如果使用了2个汉字的文字，使用 large。 | String | - |
| disabled | 是否禁用 | Boolean | false |
| checked | 指定当前是否选中 | Boolean | false |
| openColor | 自定义打开时的背景色 | String | - |
| offColor | 自定义关闭时的背景色 | String | - |
| className | Switch 容器类名 | String | - |
| onChange | 开关变化时触发，返回当前的状态 (true 或 false) 用来判断是否选中时会很有用| Function | - |

## Switch slot

|  属性   | 说明  |
|  ----  | ----  |
| open | 自定义显示打开时的内容 |
| close | 自定义显示关闭时的内容 |
