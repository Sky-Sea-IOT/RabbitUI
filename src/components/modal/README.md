# Modal 对话框

模态对话框，在浮层中显示，引导用户进行相关操作。

## API

|  属性   | 说明  | 类型 |  默认值 |
|  ----  | ----  | ---- | ---  |
|  visible  | 对话框默认是否可见  | Boolean | false |
|  title | 对话框标题，如果使用 slot 自定义了页头，则 title 无效  | String | - |
|  mask | 是否显示遮罩层  | Boolean | true |
|  width  | 对话框宽度  | String | 520px |
|  styles  | 设置浮层样式，调整浮层位置等，该属性设置的是 `.rbt-modal` 的样式  | String | 520px |
|  zIndex  | 层级  | Number | 1000 |
|  loading  | 点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动关闭对话框 | Boolean | false |
|  closable  | 是否显示右上角的关闭按钮  | Boolean | true |
|  keyboard  | 是否支持键盘 esc 关闭  | Boolean | true |
|  okText  | 确定按钮文字  | String | 确定 |
|  cancelText  | 取消按钮文字  | String | 取消 |
|  fullscreen  | 是否全屏显示  | Boolean | false |
|  scrollable  | 页面是否可以滚动  | Boolean | false |
|  footerHide  | 不显示底部  | Boolean | false |
|  maskClosable   | 是否允许点击遮罩层关闭 | Boolean | true |
|  className  | 设置对话框容器 `.rbt-modal-wrap` 的类名，可辅助实现垂直居中等自定义效果  | String | - |
|  onOk | 点击确定的回调  | Function | - |
|  onCancel | 点击取消的回调  | Function | - |

## Slot

|  名称   | 说明  |
|  ----  | ----  |
|  header  | 自定义页头  |
|  content  | 对话框主体内容  |
|  footer  | 自定义页脚内容  |

## Methods

通过调用以下方法来控制 modal 显示和第三方控制隐藏

第三方控制隐藏指在 modal 开启异步关闭时使用

- `rabbit.Modal.show(el)`
- `rabbit.Modal.hide(el)`
