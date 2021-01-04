# Alert 警告提示

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

> 注意！使用前需要先实例化组件  `new Rabbit.Alert()`

## 代码示例

- 基础用法

基本使用方法，有四种样式可以选择`info`、`success`、`warning`、`error`。默认是 `info`

```html
<r-alert rb-message="Info Text"></r-alert>
<r-alert rb-message="Success Text" rb-type="success"></r-alert>
<r-alert rb-message="Warning Text" rb-type="warning"></r-alert>
<r-alert rb-message="Error Text" rb-type="error"></r-alert>
```

- 含有辅助性文字介绍

含有辅助性文字介绍的警告提示。

```html
<r-alert 
  rb-message="Info Text" 
  rb-desc="Info Description Info Description Info Description Info Description">
</r-alert>

<r-alert 
 rb-message="Success Text" 
 rb-desc="Success Description Success Description Success Description" 
 rb-type="success">
</r-alert>

<r-alert 
 rb-message="Warning Text" 
 rb-desc="Warning Description Warning Description Warning Description" 
 rb-type="warning">
</r-alert>

<r-alert 
 rb-message="Error Text" 
 rb-desc="Error Description Error Description Error Description" 
 rb-type="error">
</r-alert>
```

- 图标

设置 `rb-show-icon`  为 `true` 并根据 `rb-type` 属性自动添加不同图标，或者自定义图标 ，稍后会讲到

```html
<r-alert rb-message="Info Text" rb-show-icon="true"></r-alert>
<r-alert rb-message="Success Text" rb-show-icon="true" rb-type="success"></r-alert>
<r-alert rb-message="Warning Text" rb-show-icon="true" rb-type="warning"></r-alert>
<r-alert rb-message="Error Text" rb-show-icon="true" rb-type="error"></r-alert>

<r-alert 
 rb-message="Info Notes" 
 rb-desc="Additional description and information about copywriting." 
 rb-show-icon="true">
</r-alert>

<r-alert
 rb-message="Success Tips" 
 rb-desc="Detailed description and advice about successful copywriting." 
 rb-show-icon="true" 
 rb-type="success"></r-alert>

<r-alert
 rb-message="Warning" 
 rb-desc="This is a warning notice about copywriting." 
 rb-show-icon="true" 
 rb-type="warning"></r-alert>

<r-alert
 rb-message="Error" 
 rb-desc="This is an error rb-message about copywriting." 
 rb-show-icon="true" 
 rb-type="error"></r-alert>

<r-alert
 rb-message="Custom icon" 
 rb-desc="Custom icon copywriting. Custom icon copywriting. Custom icon copywriting."
 rb-show-icon="true">
</r-alert>
```

- 可关闭

设置属性 `rb-closable`  为  `true` 显示关闭按钮，点击可关闭提示。

设置属性  `rb-close-text` 可以自定义关闭，自定义的文字会替换原先的关闭图标。

```html
<r-alert
 id="close" 
 rb-message="Info Text" 
 rb-closable="true">
</r-alert>

<r-alert
 rb-message="Success Text" 
 rb-desc="Success Description Success Description Success Description" 
 rb-closable="true" 
 rb-type="success">
</r-alert>

<r-alert
 rb-message="Success Text" 
 rb-closable="true" 
 rb-close-text="知道了" 
 rb-type="warning">
</r-alert>
```

顶部公告

设置属性 `banner`  为  `true` 可以应用顶部公告的样式。

```html
<r-alert
 rb-message="通知：顶部公告..." 
 rb-banner="true" 
 rb-type="warning">
</r-alert>

<r-alert
 rb-message="通知：顶部公告..." 
 rb-banner="true" 
 rb-closable="true" 
 rb-type="warning">
</r-alert>
```

<p style="font-size: 32px">Attributes</p>

#### Alert

| 属性       | 说明                                                        | 默认值 |
| ---------- | ----------------------------------------------------------- | ------ |
| rb-type       | 警告提示样式，可选值为`info`、`success`、`warning`、`error` | info   |
| rb-message    | 提示标题                                                    | -      |
| rb-desc       | 辅助性文字                                                  | -      |
| rb-show-icon  | 是否显示图标                                                | false  |
| rb-closable   | 是否可关闭                                                  | false  |
| rb-close-text | 关闭按钮自定义文本                                          | -      |
| banner     | 应用顶部公告的样式                                          | -      |

### 方法

| 名称   | 参数                 |  可设置的属性                |
| ------ | -------------------- | --------------------------- |
| config | `sel`，配置选定的 alert 组件，必须是选择器名称 | `rb-message` 、`rb-desc`、 `icon` |

### 事件

| 名称    | 说明       | 参数            | 返回值   |
| ------- | ---------- | --------------- | -------- |
| onClose | 关闭时触发 | `($this) => {}` | 当前元素 |

## 使用教程

#### 如何动态地或在异步在时机下改变 alert 的提示内容？

请使用 `config(sel).rb-message/rb-desc` 方法，该方法只有一个参数，用于传入选择器或元素名以用于单独为该组件进行配置

```html
<r-alert rb-message="Info Text" id="changeMsg"></r-alert>

<r-alert 
  id="changeDesc"
  rb-message="Info Text" 
  rb-desc="Info Description Info Description Info Description Info Description">
</r-alert>

<script>
	const $Alert = new Alert();
    let num = 0;
    setInterval(() => {
       num++;
       $Alert.config('#changeMsg').message = num;
       $Aalert.config('#changeDesc').desc = `当前数值：${num}`;
    }, 1000);
</script>
```

#### 为什么通过 `config`  方法设置  `rb-desc`  或 `rb-message` 会出现报错？

这是由于在组件标签上没有设置属性 `rb-desc` 或者设置了该属性为 `rb-desc=""` 正确的做法为 `rb-desc=" "`。

我们提供的该 `api` 仅仅只是为了用于在异步时机下动态改变组件的内容，而不是用于设置初始内容

```html
<r-alert rb-message="Info Text" rb-desc=" "></r-alert>
```

####  如何自定义图标？

请使用 `config(el).icon` 方法设置图标，请注意设置属性 `rb-show-icon="true"`

```html
<r-alert id="customIcon" rb-message="Info Text" rb-show-icon="true"></r-alert>

<script>
	const $Alert = new Alert();
    $Alert.config('#customIcon').icon = '<i class="rab-icon rab-icon-ios-star-outline"></i>';
</script>
```

### 如何在关闭提示的同时添加事件？

请使用 `onClose` 方法添加关闭时触发的回调事件

```html
<r-alert id="closeTip" rb-message="Info Text" rb-closable="true"></r-alert>

<script>
	const $Alert = new Alert();
    $Alert.onClose('#closeTip', ($this) => {
        // 参数 $this 是当前点击的整个元素
        // 任意代码...
	});
</script>
```

