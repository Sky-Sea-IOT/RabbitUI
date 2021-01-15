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
<r-alert message="Info Text"></r-alert>
<r-alert message="Success Text" type="success"></r-alert>
<r-alert message="Warning Text" type="warning"></r-alert>
<r-alert message="Error Text" type="error"></r-alert>
```

- 含有辅助性文字介绍

含有辅助性文字介绍的警告提示。

```html
<r-alert 
  message="Info Text" 
  desc="Info Description Info Description Info Description Info Description">
</r-alert>

<r-alert 
 message="Success Text" 
 desc="Success Description Success Description Success Description" 
 type="success">
</r-alert>

<r-alert 
 message="Warning Text" 
 desc="Warning Description Warning Description Warning Description" 
 type="warning">
</r-alert>

<r-alert 
 message="Error Text" 
 desc="Error Description Error Description Error Description" 
 type="error">
</r-alert>
```

- 图标

设置 `show-icon`  为 `true` 并根据 `type` 属性自动添加不同图标，或者自定义图标 ，稍后会讲到

```html
<r-alert message="Info Text" show-icon="true"></r-alert>
<r-alert message="Success Text" show-icon="true" type="success"></r-alert>
<r-alert message="Warning Text" show-icon="true" type="warning"></r-alert>
<r-alert message="Error Text" show-icon="true" type="error"></r-alert>

<r-alert 
 message="Info Notes" 
 desc="Additional description and information about copywriting." 
 show-icon="true">
</r-alert>

<r-alert
 message="Success Tips" 
 desc="Detailed description and advice about successful copywriting." 
 show-icon="true" 
 type="success"></r-alert>

<r-alert
 message="Warning" 
 desc="This is a warning notice about copywriting." 
 show-icon="true" 
 type="warning"></r-alert>

<r-alert
 message="Error" 
 desc="This is an error message about copywriting." 
 show-icon="true" 
 type="error"></r-alert>

<r-alert
 message="Custom icon" 
 desc="Custom icon copywriting. Custom icon copywriting. Custom icon copywriting."
 show-icon="true">
</r-alert>
```

- 可关闭

设置属性 `closable`  为  `true` 显示关闭按钮，点击可关闭提示。

设置属性  `close-text` 可以自定义关闭，自定义的文字会替换原先的关闭图标。

```html
<r-alert
 id="close" 
 message="Info Text" 
 closable="true">
</r-alert>

<r-alert
 message="Success Text" 
 desc="Success Description Success Description Success Description" 
 closable="true" 
 type="success">
</r-alert>

<r-alert
 message="Success Text" 
 closable="true" 
 close-text="知道了" 
 type="warning">
</r-alert>
```

顶部公告

设置属性 `banner`  为  `true` 可以应用顶部公告的样式。

```html
<r-alert
 message="通知：顶部公告..." 
 banner="true" 
 type="warning">
</r-alert>

<r-alert
 message="通知：顶部公告..." 
 banner="true" 
 closable="true" 
 type="warning">
</r-alert>
```

<p style="font-size: 32px">Attributes</p>

#### Alert

| 属性       | 说明                                                        | 默认值 |
| ---------- | ----------------------------------------------------------- | ------ |
| type       | 警告提示样式，可选值为`info`、`success`、`warning`、`error` | info   |
| message    | 提示标题                                                    | -      |
| desc       | 辅助性文字                                                  | -      |
| show-icon  | 是否显示图标                                                | false  |
| closable   | 是否可关闭                                                  | false  |
| close-text | 关闭按钮自定义文本                                          | -      |
| banner     | 应用顶部公告的样式                                          | -      |

### 方法

| 名称   | 参数                 |  可设置的属性                |
| ------ | -------------------- | --------------------------- |
| config | `el`，配置选定的 alert 组件 | `message` 、`desc`、 `icon` |

### Config  方法

为组件提供一些必要的响应式更新DOM操作的API。

| 参数 | 说明                                             | 类型   |
| ---- | ------------------------------------------------ | ------ |
| el   | 配置当前选定的 steps，必须是选择器名称或者元素名 | String |

该方法返回以下的4个属性，其中一个为函数类型：

- `message`
- `desc`
- `icon`
- `onClose(el,cb)`

`onClose` 的参数 ，具体说明如下：

| 返回值 | 说明                                             | 类型     | 默认值 |
| ------ | ------------------------------------------------ | -------- | ------ |
| el     | Alert 的选择器名称或者元素名                     | String   | -      |
| cb     | 点击关闭的回调事件，回调参数为 `($this) => void` | Function | -      |

### 使用示例

#### 如何动态地或在异步在时机下改变 alert 的提示内容？

请使用 config 方法提供的属性 `message`或者`desc` 

```html
<r-alert message="Info Text" id="changeMsg"></r-alert>

<r-alert 
  id="changeDesc"
  message="Info Text" 
  desc="Info Description Info Description Info Description Info Description">
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

#### 为什么通过 `config`  方法设置  `desc`  或 `message` 会出现报错？

这是由于在组件标签上没有设置属性 `desc` 或者设置了该属性为 `desc=""` 正确的做法为 `desc=" "`。

我们提供的该 `api` 仅仅只是为了用于在异步时机下动态改变组件的内容，而不是用于设置初始内容

```html
<r-alert message="Info Text" desc=" "></r-alert>
```

####  如何自定义图标？

请使用 config 方法提供的属性 `icon` 设置图标，

请注意设置属性 `show-icon="true"`

```html
<r-alert id="customIcon" message="Info Text" show-icon="true"></r-alert>

<script>
	const $Alert = new Alert();
    $Alert.config('#customIcon').icon = '<i class="rab-icon rab-icon-ios-star-outline"></i>';
</script>
```

### 如何在关闭提示的同时添加事件？

请使用 config 方法提供的属性 `onClose` 方法添加关闭时触发的回调事件

```html
<r-alert id="closeTip" message="Info Text" closable="true"></r-alert>

<script>
	const $Alert = new Alert();
    $Alert.onClose('#closeTip', ($this) => {
        // 参数 $this 是当前点击的整个元素
        // 任意代码...
	});
</script>
```

