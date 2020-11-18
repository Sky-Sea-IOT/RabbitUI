## Notice 通知提醒

### 摘要

全局展示通知提醒信息。

### 何时使用

<blockquote>在系统四个角显示通知提醒信息。经常用于以下情况：

- 较为复杂的通知内容。

- 带有交互的通知，给出用户下一步的行动点。

- 系统主动推送。

### 代码示例

##### 基础用法

<blockquote>最简单的用法，4.5 秒后自动关闭。title 和 desc 参数必填

```js
    rabbit.Notice.open({
        title: "这是通知标题",
        desc: "This is the content of the notification. This is the content of the notification.",
        onClick: () => console.log("点击通知的回调"),
        onClose: () => console.log("点击关闭的回调"),
     });
```

##### 带有图标的通知提醒框

<blockquote>通知提醒框左侧有图标。

```js
    rabbit.Notice.info({
        title: "这是通知标题",
        desc: "This is the content of the notification. This is the content of the notification.",
     });

    rabbit.Notice.success({
        title: "这是通知标题",
        desc: "This is the content of the notification. This is the content of the notification.",
     });

    rabbit.Notice.warning({
        title: "这是通知标题",
        desc: "This is the content of the notification. This is the content of the notification.",
     });

    rabbit.Notice.error({
        title: "这是通知标题",
        desc: "This is the content of the notification. This is the content of the notification.",
     });
```

##### 自动关闭的延时

<blockquote>自定义时长，为 0 则不自动关闭。也可以在 Notice.config() 中全局配置

```js
    rabbit.Notice.open({
        title: "这是通知标题",
        desc: "这条通知不会自动关闭，需要点击关闭按钮才可以关闭。",
        duration: 0,
     });
```

##### 位置

<blockquote>通知从右上角、右下角、左下角、左上角弹出。

```js
    rabbit.Notice.info({
        title: "这是通知标题",
        desc: "This is the content of the notification. This is the content of the notification.",
        placement: "topLeft"
     });

    rabbit.Notice.info({
        title: "这是通知标题",
        desc: "This is the content of the notification. This is the content of the notification.",
        placement: "topRight"
     });

    rabbit.Notice.info({
        title: "这是通知标题",
        desc: "This is the content of the notification. This is the content of the notification.",
        placement: "bottomLeft"
     });

    rabbit.Notice.info({
        title: "这是通知标题",
        desc: "This is the content of the notification. This is the content of the notification.",
        placement: "bottomRight"
     });
```

##### 自定义样式

<blockquote>使用 style 和 className 来定义样式。

```js
    rabbit.Notice.open({
        title: "这是通知标题",
        desc: "这条通知不会自动关闭，需要点击关闭按钮才可以关闭。",
        styles: {
            width: "600px",
            background: "#ccc",
        },
        className: "custom-notice",
     });
```

##### Promise 接口

<blockquote>可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 Notice 将要结束时通过 then 显示新的 Notice 。

```js
    rabbit.Notice.open({
        title: "这是第一条通知",
        desc: "....",
    }).then(() => {
        rabbit.Notice.info({
            title: "这是第二条通知",
            desc: "....",
         }).then(() => {
             rabbit.Notice.success({
                 title: "这是第三条通知",
                 desc: "....",
             });
         });
    });
```

### API

 Notice 实例

通过直接调用以下方法来使用组件：

- `rabbit.Notice.open(config)`
- `rabbit.Notice.info(config)`
- `rabbit.Notice.success(config)`
- `rabbit.Notice.warning(config)`
- `rabbit.Notice.error(config)`

以上方法隐式地创建及维护组件。参数 config 为对象，具体说明如下：

| 属性      | 说明                                                         | 类型             | 默认值   |
| --------- | ------------------------------------------------------------ | ---------------- | -------- |
| title     | 通知提醒标题，必选                                           | String           | -        |
| desc      | 通知提醒内容，必选                                           | String           | -        |
| duration  | 自动关闭的延时，单位秒，不关闭可以写 0                       | Number           | 4.5      |
| key       | 当前通知唯一标志                                             | String \| Number | -        |
| className | 自定义 CSS class                                             | String           | -        |
| style     | 自定义内联样式                                               | Object           | -        |
| top       | 消息从顶部弹出时，距离顶部的位置，单位px                     | Number           | 24       |
| bottom    | 消息从底部弹出时，距离底部的位置，单位px                     | Number           | 24       |
| onClick   | 点击通知时触发的回调函数                                     | Function         | -        |
| onClose   | 点击关闭时的回调                                             | Function         | -        |
| placement | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` | String           | topRight |
| closable  | 是否显示右上角关闭按钮                                       | Boolean          | true     |

#### 组件同时提供 promise 接口

- `rabbit.Notice.[type](config).then(afterClose)`

其中 `rabbit.Notice.[type]` 是组件已经提供的静态方法。`then` 接口返回值是 Promise。

#### 另外提供了全局配置和全局销毁的方法：

- `rabbit.Notice.config(options)`

- `rabbit.Notice.destroy()`

  也可通过 `rabbit.Notice.destroy(key)` 来关闭一条通知。

```js
rabbit.Notice.config({
    top: 50
    duration: 3,
    placement: "bottomRight"
 });
```

| 属性      | 说明                                                         | 类型   | 默认值   |
| --------- | ------------------------------------------------------------ | ------ | -------- |
| top       | 通知组件距离顶端的距离，单位px                               | Number | 24       |
| duration  | 默认自动关闭的延时，单位秒                                   | Number | 4.5      |
| placement | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` | String | topRight |
| bottom    | 通知组件距离底部的位置，单位px                               | Number | 24       |

```js
rabbit.Notice.open({
     title: "....",
     desc: "....",
     key: 'notice'
 });
rabbit.Notice.open({
     title: "....",
     desc: "....",
 });
...
// 关闭一条通知。
rabbit.Notice.destroy('notice');
// 关闭所有通知
rabbit.Notice.destroy();
```

