# Drawer抽屉

## API

| 属性         | 说明                                                | 类型     | 默认值 |
| ------------ | --------------------------------------------------- | -------- | ------ |
| visible      | 抽屉默认是否显示                                    | Boolean  | false  |
| title        | 抽屉标题，如果使用 slot 自定义了页头，则 title 无效 | String   | -      |
| width        | 抽屉宽度，当抽屉方向为 top或者bottom时自动设为高度  | String   | 256px  |
| closable     | 是否显示右上角的关闭按钮                            | Boolean  | true   |
| maskClosable | 是否允许点击遮罩层关闭                              | Boolean  | true   |
| mask         | 是否显示遮罩层                                      | Boolean  | true   |
| styles       | 抽屉内容区域的样式                                  | Object   | -      |
| scrollable   | 页面是否可以滚动                                    | Boolean  | false  |
| placement    | 抽屉的方向，可选值为`top` `left` `right` `bottom`   | String   | right  |
| className    | 设置抽屉容器 `.rbt-drawer-wrap`  的类名             | String   | -      |
| onClose      | 关闭抽屉时触发的回调                                | Function | -      |
| keyboard     | 是否支持键盘 esc 关闭                               | Boolean  | true   |
| zIndex       | 设置抽屉的 `z-index`                                | Number   | 1000   |

## Slot

| 名称    | 说明             |
| ------- | ---------------- |
| header  | 自定义标题栏内容 |
| footer  | 自定义页脚       |
| content | 抽屉主体内容     |
