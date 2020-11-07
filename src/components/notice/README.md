# Notice 通知提醒

全局展示通知提醒信息。

## 何时使用

在系统四个角显示通知提醒信息。经常用于以下情况：

- 较为复杂的通知内容。

- 带有交互的通知，给出用户下一步的行动点。

- 系统主动推送。

## 代码示例

基础用法

最简单的用法，4.5 秒后自动关闭。

```html
  <button onclick="a()">打开提醒</button>
  <script>
      a = () => {
        $notice.open({
            title: "这是通知标题",
            desc: "这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述",
        });
    };
  </script>
```

自定义时长

自定义通知框自动关闭的延时，默认`4.5s`，取消自动关闭只要将该值设为 `0` 即可。

```js
    $notice.open({
        title: "这是通知标题",
        desc: "这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述",
        duration: 0
    });
```

自定义图标

图标可以被自定义。

```js
     $notice.info({
         title: "这是通知标题",
         desc: "这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述",
         customIcon: `<i class="rbt-icon rbt-icon-md-heart-empty rbt-$notice-$notice-icon rbt-$notice-$notice-icon-info"></i>`,
     });
```

自定义样式

使用 style 和 className 来定义样式。

```js
    $notice.open({
        title: "这是通知标题",
        desc: "这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述",
        className: "my-notice",
        style: {
            width: "600px",
            background: "#999",
        },
    });
```

位置

- 通知从右上角、右下角、左下角、左上角弹出。默认是右上角

```js
     $notice.open({
         title: "这是通知标题",
         desc: "这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述",
     });
     $notice.open({
         title: "这是通知标题",
         desc: "这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述",
         placement: "bottomRight",
     });
     $notice.open({
         title: "这是通知标题",
         desc: "这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述",
         placement: "topLeft",
     });
     $notice.open({
         title: "这是通知标题",
         desc: "这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述",
         placement: "bottomLeft",
     });
```

### API

通过直接调用以下方法来使用组件：

- $notice.success(config)

- $notice.error(config)

- $notice.info(config)

- $notice.warning(config)

- $notice.open(config)

- $notice.close(key)

- $notice.destroy()

以上方法隐式地创建及维护组件。config 参数如下：

|  属性   | 说明  | 类型 |  默认值 |
|  ----  | ----  | ---- | ---  |
| title | 通知提醒的标题（必选） | String | - |
| desc | 通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式（必选） | String | - |
| duration | 自动关闭的延时，单位秒，不关闭可以写 0 | Number | 4.5 |
| icon | 自定义图标 | String/ HTMLDOM | - |
| key | 当前通知唯一标志 | string/Number | - |
| top | 消息从顶部弹出时，距离顶部的位置，单位像素 | Number | 24 |
| bottom | 消息从底部弹出时，距离底部的位置，单位像素 | Number | 24 |
| onClose | 当通知关闭时触发 | Function | - |
| style | 自定义内联样式 | Object | - |
| className | 自定义 CSS class | String | - |
| placement | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` | String | `topRight` |

 $notice.close(key) 使用方法

- *当notice不自动关闭且在某些异步的状态下才关闭时可以这么使用*

```js
    const key = 'demo';
     $notice.open({
         title: "这是通知标题",
         desc: "....",
         duration: 0,
         key: key
     });
     setTimeout(() => {
         $notice.close(key);  
       }, 4000);

```

 调用 $notice.destroy() 可以全局关闭所有notice并销毁
