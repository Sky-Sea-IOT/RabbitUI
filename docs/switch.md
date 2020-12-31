# Switch 开关

开关选择器

## 何时使用

- 需要表示开关状态/两种状态之间的切换时
- 和 `checkbox`的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合

> 注意！使用前需要先实例化组件  `new Switch()`

## 代码示例

- 基本

基本用法，状态切换时会触发事件。

```html
<r-switch id="example"></r-switch>
开关状态：<span id="status">false</span>
<script>
	const $switch = new Switch();
    $switch.onChange('#example', ([status, $this]) => {
        document.querySelector('#status').textContent = `${status}`;
        console.log($this); // 输出当前点击的switch
    });
</script>
```

- 尺寸

设置`rb-size`为 `large` 或 `small` 使用大号和小号的开关。

```html
<r-switch rb-size="large"></r-switch>
<r-switch></r-switch>
<r-switch rb-size="small"></r-switch>
```

- 文字和图标

设置属性  `rb-open`  和 `rb-close` 自定义切换状态后显示的内容，建议如果使用2个汉字，将开关尺寸设置为 large。

```html
<r-switch rb-open="开" rb-close="关"></r-switch>
<r-switch
  rb-open="<i class='rab-icon rab-icon-md-checkmark'></i>"
  rb-close="<i class='rab-icon rab-icon-md-close'></i>"
></r-switch>
<r-switch rb-size="large" rb-open="开启" rb-close="关闭"></r-switch>
<r-switch rb-size="large" rb-open="ON" rb-close="OFF"></r-switch>

```

- 不可用

禁用开关

```html
<r-switch disabled></r-switch>
```

- 加载中

设置属性  `rb-loading="true"` 标识开关操作仍在执行中。

```html
<r-switch rb-loading="true" rb-checked="true"></r-switch>
<r-switch rb-loading="true" rb-size="small"></r-switch>
```

- 自定义颜色

设置属性 `rb-true-color` 和 `rb-false-color` 可以自定义背景色。

<p style="font-size: 32px">Attributes</p>

### Switch

| 属性           | 说明                                                         | 默认值 |
| -------------- | ------------------------------------------------------------ | ------ |
| rb-checked     | 指定当前是否选中                                             | false  |
| rb-size        | 开关的尺寸，可选值为`large`、`small`或者不写。建议开关如果使用了2个汉字的文字，使用 large。 | -      |
| disabled       | 禁用开关                                                     | false  |
| rb-true-color  | 自定义打开时的背景色                                         | -      |
| rb-false-color | 自定义关闭时的背景色                                         | -      |
| rb-loading     | 加载中的开关                                                 | false  |
| rb-open        | 开关打开时的内容                                             | -      |
| rb-close       | 开关关闭时的内容                                             | -      |

### 事件

| 名称     | 说明                           | 参数                          | 返回值                       |
| -------- | ------------------------------ | ----------------------------- | ---------------------------------- |
| onChange | 开关变化时触发，返回当前的状态。该事件的参数是一个数组 | `(sel, [status, $this]) => {}` | 第一个参数必须是选择器名称，第二个参数是一个数组，其第一个元素为当前状态，返回 `true` / `false` ，第二个返回当前switch |

