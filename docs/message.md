# Message全局提示

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 代码示例

普通提示

- 最基本的提示，默认在3秒后消失。

```js
Message.info('这是一条普通的提示');
```

提示类型

- 包括成功、失败、警告。

```js
Message.success('这是一条成功的提示');
Message.warning('这是一条警告的提示');
Message.error('这是一条错误的提示');
```

带背景色

设置属性 `background`  为 true 后，通知提示会显示背景色。

```js
Message.info({
  content: '这是一条带背景色的通知',
  background: true,
  duration: 5,
});
Message.success({
  content: '这是一条带背景色的通知',
  background: true,
});
Message.warning({
  content: '这是一条带背景色的通知',
  background: true,
});
Message.error({
  content: '这是一条带背景色的通知',
  background: true,
});
```

加载中

- 进行全局 loading，异步自行移除。需要手动调用 `destroy` 方法关闭

```javascript
Message.loading({
  content: '正在加载中...',
  duration: 0,
});
setTimeout(() => Message.destroy(), 3000);
```

Promise 接口

- 可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 Message 将要结束时通过 then 显示新的 message 。
- 如果手动通过关闭按钮结束则无效

```js
Message.loading('正在加载中...').then(() => {
  Message.success('加载成功!').then(() => {
    Message.info('加载成功后的提示');
  });
});
```

自定义时长 

- 自定义时长，也可以在`Message.config()`中全局配置，详见API。

```js
Message.success({
  content: '这是成功的提示信息，我将在10秒内消失',
  duration: 10,
});
```

可关闭

- 设置 `closable` 为 true 后可以手动关闭提示。

```js
Message.info({
  content: '可手动关闭的提示',
  duration: 8,
  closable: true,
});
```

使用 HTML 片段

- 传入 HTML 片段

```js
Message.info(`<strong>这是 <i>HTML</i> 片段</strong>`);
```

<p style="font-size: 32px">API</p>

#### Message 实例

通过直接调用以下方法来使用组件：

- `Message.info(config)`
- `Message.success(config)`
- `Message.warning(config)`
- `Message.error(config)`
- `Message.loading(config)`

组件同时提供 promise 接口。

- `Message[level](config).then(afterClose)`

其中 `Message[level]` 是组件已经提供的静态方法。`then` 接口返回值是 Promise。

参数 config 可以是字符串或对象，当为字符串时，直接显示内容，当为对象时，具体说明如下：

| 属性       | 说明                                   | 类型            | 默认值 |
| ---------- | -------------------------------------- | --------------- | ------ |
| content    | 提示内容                               | String          | -      |
| duration   | 自动关闭的延时，单位秒，不关闭可以写 0 | Number          | 3      |
| onClose    | 关闭时的回调                           | Function        | -      |
| closable   | 是否显示关闭按钮                       | Boolean         | false  |
| background | 是否显示背景色                         | Boolean         | false  |
| key        | 当前提示的唯一标志                     | String / Number | -      |

#### 全局方法

还提供了全局配置和全局销毁方法：

- `Message.config(options)`
- `Message.destroy()`

> 也可通过 `Message.destroy(key)` 来关闭一条消息。

```js
Message.loading({
  key: 'exampleKey',
  content: '正在加载中...',
  duration: 0,
});
setTimeout(() => Message.destroy('exampleKey'), 3000);
```

```js
Message.config({
  top: 100,
  duration: 2
});
```

| 属性     | 说明                             | 类型   | 默认值 |
| -------- | -------------------------------- | ------ | ------ |
| top      | 提示组件距离顶端的距离，单位像素 | Number | 24     |
| duration | 默认自动关闭的延时，单位秒       | Number | 3      |

## FAQ

### 通过异步或者手动移除消息后，为什么 `then`  接口的回调事件不生效

首先组件提供的 Promise 接口是用于实例自行移除后使用的，并不是说只要通过任意方式移除组件都会生效。

如果您想通过手动移除消息后接着添加回调事件，请使用 `onClose` api，至于要在异步移除后添加事件，建议是在异步的那个时机里额外添加事件