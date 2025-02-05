# Tooltip 文字提示

简单的文字提示气泡框。

## 何时使用

- 鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

- 可用来代替系统默认的 ‘title’ 提示，提供一个’按钮/文字/操作’的文案解释。

> 注意！使用前需要先实例化组件  `new Rabbit.Tooltip()`

## 代码示例

基础用法

- 最简单的用法。

```html
<r-tooltip content="这里是提示文字" id="test"> 鼠标经过这段文字时，会显示一个气泡框 </r-tooltip>
<script>
    const tooltip = new Rabbit.Tooltip();

    tooltip.config('#test').events({
        onShow: () => {
            console.log('show');
        },
        onHide: () => {
            console.log('hide');
        }
    });
</script>
```

位置

- 组件提供了12个不同的方向显示Tooltip，具体配置可查看API。

```html
<div class="top">
  <r-tooltip content="Top Left 文字提示" placement="top-start">
      <button class="rab-btn">上左</button>
  </r-tooltip>
  <r-tooltip content="Top Center 文字提示" placement="top">
      <button class="rab-btn">上边</button>
  </r-tooltip>
  <r-tooltip content="Top Right 文字提示" placement="top-end">
      <button class="rab-btn">上右</button>
  </r-tooltip>
</div>
<div class="center">
  <div class="center-left">
      <r-tooltip content="Left Top 文字提示" placement="left-start">
          <button class="rab-btn">左上</button> </r-tooltip><br /><br />
      <r-tooltip content="Left Center 文字提示" placement="left">
          <button class="rab-btn">左边</button> </r-tooltip><br /><br />
      <r-tooltip content="Left Bottom 文字提示" placement="left-end">
          <button class="rab-btn">左下</button>
      </r-tooltip>
  </div>
  <div class="center-right">
      <r-tooltip content="Right Top 文字提示" placement="right-start">
          <button class="rab-btn">右上</button> </r-tooltip><br /><br />
      <r-tooltip content="Right Center 文字提示" placement="right">
          <button class="rab-btn">右边</button> </r-tooltip><br /><br />
      <r-tooltip content="Right Bottom 文字提示" placement="right-end">
          <button class="rab-btn">右下</button>
      </r-tooltip>
  </div>
</div>
<div class="bottom">
  <r-tooltip content="Bottom Left 文字提示" placement="bottom-start">
      <button class="rab-btn">下左</button>
  </r-tooltip>
  <r-tooltip content="Bottom Center 文字提示" placement="bottom">
      <button class="rab-btn">下边</button>
  </r-tooltip>
  <r-tooltip content="Bottom Right 文字提示" placement="bottom-end">
      <button class="rab-btn">下右</button>
  </r-tooltip>
</div>
```

自定义内容 

- 如果需要添加带有HTML代码或其他复杂的内容，抑或是需要动态更新内容，请使用组件提供的响应式API渲染

```html
<r-tooltip content="content of tooltip" placement="top" id="test">
  <button class="rab-btn">多行</button>
</r-tooltip>

<script>
	const tooltip = new Rabbit.Tooltip();
    const custom = '<div><p>显示多行信息</p> <p><i>可以自定义样式</i></p></div>';
    tooltip.config('#test2').content = custom;
</script>
```

禁用

- 通过设置属性`disabled`可以禁用文字提示。

```html
<r-tooltip placement="top" disabled="true">
  <button class="rab-btn">禁用提示</button>
</r-tooltip>
```

延时

- 通过设置属性`delay`可以延时显示文字提示，单位毫秒。

```html
<r-tooltip content="Tooltip 文字提示" placement="top" delay="1000">
  <button class="rab-btn">延时1秒显示</button>
</r-tooltip>
```

主题

- 设置属性 `theme` 可以显示不同的颜色。

```html
<r-tooltip content="content of tooltip" placement="top">
  <button class="rab-btn">Dark(default)</button>
</r-tooltip>
<r-tooltip content="content of tooltip" placement="top" theme="light">
  <button class="rab-btn">Light</button>
</r-tooltip
```

自动换行

- 设置属性 `max-width`，当超出最大值后，文本将自动换行，并两端对齐。

```html
<r-tooltip
  max-width="200"
  content="史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。"
>
  <button class="rab-btn">长文本</button>
</r-tooltip>
```

<p style="font-size: 32px">Attributes</p>

#### Tooltip

| 属性      | 说明                                                         | 默认值 |
| :-------- | :----------------------------------------------------------- | :----- |
| content   | 显示的内容                                                   | 空     |
| placement | 提示框出现的位置，可选值为`top``top-start``top-end``bottom``bottom-start``bottom-end``left``left-start``left-end``right``right-start``right-end`，自动识别 | bottom |
| disabled  | 是否禁用提示框                                               | false  |
| delay     | 延迟显示，单位毫秒                                           | 0      |
| always    | 是否总是可见                                                 | false  |
| theme     | 主题，可选值为 dark 或 light                                 | dark   |
| max-width | 最大宽度，超出最大值后，文本将自动换行，并两端对齐           | -      |
| offset    | 出现位置的偏移量                                             | 0      |

### Config  方法

为组件提供一些必要的响应式更新DOM操作的API。

| 参数 | 说明                                             | 类型   |
| ---- | ------------------------------------------------ | ------ |
| el   | 配置当前选定的 tooltip，必须是选择器名称或者元素名 | String |

该方法返回以下两个值：

- `content`

- `events(options)`

| 返回值  | 说明                            | 类型             | 默认值 |
| ------- | ------------------------------- | ---------------- | ------ |
| content | 响应式设置提示框的内容          | String \| Number | -      |
| events  | 非响应式API，添加提示框的事件， | Function         | -      |

- `events`的参数 options 为对象，具体说明如下：

| 属性   | 说明               | 返回值 |
| :----- | :----------------- | :----- |
| onShow | 在提示框显示时触发 | 无     |
| onHide | 在提示框消失时触发 | 无     |