# Modal 对话框

模态对话框，在浮层中显示，引导用户进行相关操作。

## 何时使用

- 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

### 代码示例

基础用法

最简单的使用方法，通过 `$modal.visible(el)` 方法来显示 / 隐藏对话框。

默认按键盘 ESC 键也可以关闭。

```html
<button onclick="a()">显示对话框</button>
<div data-component="modal" id="modal1">
  <div slot="header">基本对话框</div>
  <div slot="content">
    <p>对话框内容</p>
    <p>对话框内容</p>
    <p>对话框内容</p>
  </div>
  <div slot="footer">
    <button data-click-action="close">取消</button>
    <button data-click-action="confirm">确定</button>
  </div>
</div>
<script>
  const rbt = new Rabbit();
  rbt.createComps("#modal1");

  a = () => {
    $modal.visible("#modal1");
  };
</script>
```

## API

|  属性   | 说明  | 类型 |  默认值 |
|  ----  | ----  | ---- | ---  |
|  mask | 是否显示遮罩层  | Boolean | true |
|  width  | 对话框宽度  | String | 520px |
|  visible  | 对话框是否可见  | Boolean | false |
|  closable  | 是否显示右上角的关闭按钮  | Boolean | true |
|  className  | 设置对话框容器.rbt-modal-wrap的类名，可辅助实现垂直居中等自定义效果  | String | - |
|  okText  | 确定按钮文字  | String | 确定 |
|  cancelText  | 取消按钮文字  | String | 取消 |
|  fullscreen  | 是否全屏显示  | Boolean | false |
|  footerHide  | 不显示底部  | Boolean | false |
|  maskClosable   | 是否允许点击遮罩层关闭 | Boolean | true |
