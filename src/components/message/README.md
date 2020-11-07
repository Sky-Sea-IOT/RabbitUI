# Message 全局提示

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息。

- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 代码示例

普通提示

最基本的提示，默认在 3 秒后消失。

```js
$message().info("这是一条消息提示");
```

提示类型

不同的提示状态：成功、警告、错误。

```js
$message().info("这是一条消息提示");
$message().success("这是一条消息提示");
$message().warning("这是一条消息提示");
$message().error("这是一条消息提示");
```

加载中

Loading 的状态，并异步在某个时机移除。

```js
const key = "updata";
$message().loading("正在加载中...", {
  duration: 0,
  key,
});
setTimeout(() => {
  $message().destroy(key);
}, 2000);
```

修改延时

自定义时长 10s，默认时长为 3s。

```js
$message().open(" 我将在10秒后消失", {
  duration: 10,
  afterClose() {
    $message().success("我成功消失了");
  },
});
```

可关闭

将参数设置为一个对象，并指定 `closable` 为 true 后可以手动关闭提示

```js
$message().info("这是一条消息提示", {
  closable: true,
});
```

背景色

设置参数属性 `background` 为 true 让 message 带背景色

```js
$message().info("这是一条消息提示", {
  background: true,
});
```

### API

通过直接调用以下方法来使用组件：

- \$message().info(content,config)
- \$message().success(content,config)
- \$message().warning(content,config)
- \$message().error(content,config)
- \$message().loading(content,config)

以上方法隐式的创建及维护组件。参数 content 为字符串，即显示的内容，参数 config 为对象配置项

| 属性       | 说明                                   | 类型     | 默认值 |
| ---------- | -------------------------------------- | -------- | ------ |
| top        | 提示组件距离顶端的距离，单位像素       | Number   | 16     |
| key        | 当前提示的唯一标志                     | String   | Number | - |
| duration   | 自动关闭的延时，单位秒，不关闭可以写 0 | Number   | 3      |
| closable   | 是否显示关闭按钮                       | Boolean  | false  |
| background | 是否带背景色                           | Boolean  | false  |
| onClose    | 点击关闭按钮关闭时的回调               | Function | -      |
| afterClose | 组件自动关闭后的回调                   | Function | -      |

### 全局销毁方法

_通过 message.destroy(key) 来关闭一条消息。_
