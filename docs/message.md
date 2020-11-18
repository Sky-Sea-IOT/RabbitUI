## Message 全局提示

### 摘要

全局展示操作反馈信息。

### 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

### 代码示例

- 普通提示

最基本的提示，默认在2.5秒后消失。

```js
rabbit.Message.info("这是一条消息提示");
```

- 提示类型

不同的提示状态：成功、警告、错误。

```js
rabbit.Message.success("这是一条成功提示");
rabbit.Message.warning("这是一条警告提示");
rabbit.Message.error("这是一条错误提示");
```

- 带背景色 

设置属性 `background` 后，通知提示会显示背景色。

```js
rabbit.Message.info("这是一条带背景色的通知",{
	background: true
});
rabbit.Message.success("这是一条带背景色的通知",{
	background: true
});
rabbit.Message.warning("这是一条带背景色的通知",{
	background: true
});
rabbit.Message.error("这是一条带背景色的通知",{
	background: true
});
```

- 加载中

进行全局 loading，异步自行移除。

```js
rabbit.Message.loading("正在加载中...");
```

- 自定义时长 

自定义时长，也可以在`rabbit.Message.config()`中全局配置

```js
rabbit.Message.info("消息提示将在10秒后消失",{
	duration: 10,
});
```

- 可关闭 

设置 `closable` 为 true 后可以手动关闭提示

```js
rabbit.Message.info("可手动关闭的提示",{
	 closable: true
});
```

- Promise 接口

可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。

```js
rabbit.Message.loading("正在加载中...").then(() => {
    rabbit.Message.success("加载完成").then(() => {
        rabbit.Message.info("加载完成后的成功提示");
    });
});
```

### API

Message 实例

通过直接调用以下方法来使用组件：

- `rabbit.Message.info(content,config)`
- `rabbit.Message.success(content,config)`
- `rabbit.Message.warning(content,config)`
- `rabbit.Message.error(content,config)`
- `rabbit.Message.loading(content,config)`

以上方法隐式的创建及维护组件。参数 content 是字符串而 config 是一个对象，具体说明如下：

| 属性       | 说明                                        | 类型           | 默认值 |
| ---------- | ------------------------------------------- | -------------- | ------ |
| content    | 提示内容                                    | String         | -      |
| duration   | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | Number         | 2.5    |
| onClose    | 点击关闭的回调                              | Function       | -      |
| closable   | 是否显示关闭按钮                            | Boolean        | false  |
| background | 是否显示背景色                              | Boolean        | false  |
| key        | 当前提示的唯一标志                          | String\|Number | -      |

#### 组件同时提供 promise 接口

- `rabbit.Message.[type](content,config).then(afterClose)`

其中 `rabbit.Message.[type]` 是组件已经提供的静态方法。`then` 接口返回值是 Promise。

#### 另外提供了全局配置和全局销毁的方法：

- `rabbit.Message.config(options)`
- `rabbit.Message.destroy()`

也可通过 `rabbit.Message.destroy(key)` 来关闭一条消息。

```js
rabbit.Message.config({
    top: 50,
    duration: 1.5
});
```

| 属性     | 说明                           | 类型   | 默认值 |
| -------- | ------------------------------ | ------ | ------ |
| top      | 提示组件距离顶端的距离，单位px | Number | 24     |
| duration | 默认自动关闭的延时，单位秒     | Number | 2.5    |

```js
rabbit.Message.loading("正在加载中...", {
	key: "message",
    duration: 0
});
rabbit.Message.success("这是一条成功提示");
rabbit.Message.warning("这是一条警告提示");
rabbit.Message.error("这是一条错误提示");
// 关闭一条消息
rabbit.Message.destroy('message');
// 关闭所有消息
rabbit.Message.destroy();
```

