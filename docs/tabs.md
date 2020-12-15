## Tabs 标签页

### 摘要

选项卡切换组件。

### 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 既可用于容器顶部，也可用于容器内部，是最通用的 Tabs。

### 代码示例

##### 基础用法

基础的、简洁的标签页。

通过设置 `active` 属性为 `true` 选中某一项

```html
<rb-tabs id="tabs1">
   <div slot="tabPane">标签1的内容</div>
   <div slot="tabPane">标签2的内容</div>
   <div slot="tabPane">标签3的内容</div>
</rb-tabs>
<script>
    RabbitUI.create('#tabs1', {
        label: [{
            text: '标签1',
            active: true,
        }, {
            text: '标签2',
        }, {
            text: '标签3',
        }, ],
        onClick(index, tabPane) {
            console.log(`当前点击项：`, index, tabPane);
        },
    });
</script>
```

##### 禁用

禁用某一项。

通过设置属性 `disabled` 属性为 `true` 禁用某一项

```html
<rb-tabs id="tabs2">
   <div slot="tabPane">标签1的内容</div>
   <div slot="tabPane">标签2的内容</div>
   <div slot="tabPane">标签3的内容</div>
</rb-tabs>
<script>
    RabbitUI.create('#tabs2', {
        label: [{
            text: '标签1',
            active: true,
        }, {
            text: '标签2',
            disabled: true
        }, {
            text: '标签3',
        }, ],
        onClick(index, tabPane) {
            console.log(`当前点击项：`, index, tabPane);
        },
    });
</script>
```

##### 自定义标签页

显示一个图标。

```html
<rb-tabs id="tabs3">
   <div slot="tabPane">标签1的内容</div>
   <div slot="tabPane">标签2的内容</div>
   <div slot="tabPane">标签3的内容</div>
</rb-tabs>
<script>
    RabbitUI.create('#tabs3', {
        label: [{
            text: '<i class="rbt-icon rbt-icon-logo-google"> Google',
            active: true,
        }, {
            text: '<i class="rbt-icon rbt-icon-logo-python"> Python',
        }, {
            text: '<i class="rbt-icon rbt-icon-logo-angular"> Angular',
        }, ],
        onClick(index, tabPane) {
            console.log(`当前点击项：`, index, tabPane);
        },
    });
</script>
```

##### 选项卡样式

选项卡样式的标签页。

通过设置属性 `type` 为 `card`

```html
<rb-tabs id="tabs4">
   <div slot="tabPane">标签1的内容</div>
   <div slot="tabPane">标签2的内容</div>
   <div slot="tabPane">标签3的内容</div>
</rb-tabs>
<script>
    RabbitUI.create('#tabs4', {
        label: [{
            text: '标签1',
            active: true,
        }, {
            text: '标签2',
        }, {
            text: '标签3',
        }, ],
        type: 'card',
    });
</script>
```

##### 卡片化

卡片化的标签页。

通过设置属性 `type` 为 `border-card`

```html
<rb-tabs id="tabs5">
   <div slot="tabPane">标签1的内容</div>
   <div slot="tabPane">标签2的内容</div>
   <div slot="tabPane">标签3的内容</div>
</rb-tabs>
<script>
    RabbitUI.create('#tabs5', {
        label: [{
            text: '标签1',
            active: true,
        }, {
            text: '标签2',
        }, {
            text: '标签3',
        }, ],
        type: 'border-card',
    });
</script>
```

##### 不使用动画

通过设置属性 `animated` 为 `false` 可以禁用动画。

```html
<rb-tabs id="tabs6">
   <div slot="tabPane">标签1的内容</div>
   <div slot="tabPane">标签2的内容</div>
   <div slot="tabPane">标签3的内容</div>
</rb-tabs>
<script>
    RabbitUI.create('#tabs6', {
        label: [{
            text: '标签1',
            active: true,
        }, {
            text: '标签2',
        }, {
            text: '标签3',
        }, ],
        animated: false
    });
</script>
```

##### 可关闭

通过设置属性 `closable` 可以设置该标签所有项为可关闭，仅在 `type` 为 `card` 时有效。

```html
<rb-tabs id="tabs7">
   <div slot="tabPane">标签1的内容</div>
   <div slot="tabPane">标签2的内容</div>
   <div slot="tabPane">标签3的内容</div>
</rb-tabs>
<script>
    RabbitUI.create('#tabs7', {
        label: [{
            text: '标签1',
            active: true,
        }, {
            text: '标签2',
        }, {
            text: '标签3',
        }, ],
        closable: true
    });
</script>
```

### API

| 属性        | 说明                                                       | 类型                    | 默认值 |
| ----------- | ---------------------------------------------------------- | ----------------------- | ------ |
| type        | 页签的基本样式，可选值为 `line` 、 `card` 和 `border-card` | String                  | line   |
| closable    | 是否可以关闭页签，仅在 `type="card"` 时有效                | Boolean                 | false  |
| animated    | 是否使用 CSS3 动画                                         | Boolean                 | true   |
| text        | 选项卡头显示文字                                           | String                  | -      |
| disabled    | 是否禁用该选项卡                                           | Boolean                 | false  |
| active      | 设置当前激活的 tab 面板                                    | Boolean                 | true   |
| label       | 选项卡头标签的配置项集                                     | Array                   | -      |
| onClick     | tab 被点击时触发，返回被点击的索引值和面板项               | Function(index,tabPane) | -      |
| onTabRemove | tab 被关闭时触发，返回被关闭的索引值                       | Function(index)         | -      |

