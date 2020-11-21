## MsgBox 弹框

### 摘要

<blockquote>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容

##### 基本用法

<blockquote>四种基本的对话框，只提供一个确定按钮。

```js
rabbit.MsgBox.info({
    title: "对话框消息",
    content: "<p>一些对话框内容</p><p>一些对话框内容</p>",
 });
rabbit.MsgBox.success({
    title: "对话框消息",
    content: "<p>一些对话框内容</p><p>一些对话框内容</p>",
 });
rabbit.MsgBox.warning({
    title: "对话框消息",
    content: "<p>一些对话框内容</p><p>一些对话框内容</p>",
 });
rabbit.MsgBox.error({
    title: "对话框消息",
    content: "<p>一些对话框内容</p><p>一些对话框内容</p>",
 });
```

##### 确认对话框 

<blockquote>快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。

```js
rabbit.MsgBox.confirm({
    title: "对话框消息",
    content: "<p>一些对话框内容</p><p>一些对话框内容</p>",
 });
// 自定义文字
rabbit.MsgBox.confirm({
     title: "This is a notification message",
     content: `<p>some messages...some messages...</p>
               <p>some messages...some messages...</p>`,
     okText: "OK",
     cancelText: "Cancel",
        });
// 自定义宽度
rabbit.MsgBox.confirm({
    title: "对话框消息",
    content: "<p>一些对话框内容</p><p>一些对话框内容</p>",
    width: 600,
 });
// 异步关闭
rabbit.MsgBox.confirm({
    title: "对话框消息",
    content: "<p>一些对话框内容</p><p>一些对话框内容</p>",
    loading: true,
    onOk() {
        setTimeout(() => rabbit.MsgBox.destroy(), 3000);
     },
 });
```

##### 自定义内容

```js
// 放入一个用户名输入框
const usernameInput = document.createElement('input');
// 设置样式等操作...

rabbit.MsgBox.confirm({
    title: "输入用户名",
    content: usernameInput,
 });
```

### API

| 属性       | 说明                                                         | 类型                     | 默认值 |
| ---------- | ------------------------------------------------------------ | ------------------------ | ------ |
| title      | 标题                                                         | String \| Element String | -      |
| content    | 内容                                                         | String \| Element String | -      |
| width      | 宽度，单位 px                                                | Number \| String         | 416    |
| okText     | 确定按钮的文字                                               | String                   | 确定   |
| cancelText | 取消按钮的文字，只在`confirm`下有效                          | String                   | 取消   |
| loading    | 点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动调用`rabbit.MsgBox.destroy()`来关闭对话框 | Boolean                  | false  |
| scrollable | 页面是否可以滚动                                             | Boolean                  | false  |
| keyboard   | 是否可以按 Esc 键关闭                                        | Boolean                  | false  |
| onOk       | 点击确定的回调                                               | Function                 | -      |
| onCancel   | 点击取消的回调，只在`rabbit.MsgBox.destroy()`下有效          | Function                 | -      |

另外提供了全局关闭对话框的方法：

- `rabbit.MsgBox.destroy()`

- `rabbit.MsgBox.destroyAll()`

使用 `rabbit.MsgBox.destroyAll()` 可以销毁弹出的确认窗（即上述的 `rabbit.MsgBox.info`、`rabbit.MsgBox.success`、`rabbit.MsgBox.error`、`rabbit.MsgBox.warning`、`rabbit.MsgBox.confirm`）。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题，而不用各处去使用实例的返回值进行关闭（`rabbit.MsgBox.destroy()` 适用于主动关闭，而不是路由这样被动关闭）