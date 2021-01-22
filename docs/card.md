# Card卡片

通用卡片容器。

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

> 注意！使用前需要先实例化组件  `new Rabbit.Card()`

## 代码示例

基本用法

- 包含标题、内容、操作区域。

```html
<r-card title="卡片标题" extra="<a href='#'>更多</a>" style="width: 340px">
  <p>卡片内容 1</p>
  <p>卡片内容 2</p>
  <p>卡片内容 3</p>
  <p>卡片内容 4</p>
</r-card>
```

无边框

- 通过设置属性`no-bordered` ，可以不添加边框，建议在灰色背景下使用。

```html
<div style="background: #eee; padding: 20px">
  <r-card title="无边框" no-border>
      <p>
          这是没有边框类型的卡片这是没有边框类型的卡片这是没有边框类型的卡片这是没有边框类型的卡片
      </p>
  </r-card>
</div>
```

禁用悬停阴影

- 通过设置属性`dis-hover`来禁用鼠标悬停显示阴影的效果。

```html
<r-card title="卡片标题">
  <p>卡片内容 1</p>
  <p>卡片内容 2</p>
  <p>卡片内容 3</p>
</r-card>
<r-card title="卡片标题" dis-hover>
  <p>卡片内容 1</p>
  <p>卡片内容 2</p>
  <p>卡片内容 3</p>
</r-card>
```

卡片阴影

- 通过设置属性`shadow="true"`来显示卡片阴影，使用该属性后，`no-bordered`和`dis-hover`将无效，建议在灰色背景下使用。

```html
<div style="background: #eee; padding: 20px">
  <r-card title="卡片标题" no-border>
      <p>卡片内容 1</p>
      <p>卡片内容 2</p>
      <p>卡片内容 3</p>
  </r-card>
  <r-card title="卡片标题" shadow="true">
      <p>卡片内容 1</p>
      <p>卡片内容 2</p>
      <p>卡片内容 3</p>
  </r-card>
</div>
```

简洁卡片 

- 只包含内容区域，没有标题。

```html
<r-card style="width: 340px">
  <div style="text-align: center">
      <img src="../../assets/logo.png" style="height: 95px" />
      <h3 style="margin: 8px 0">一套基于TS构建的UI组件库</h3>
  </div>
</r-card>
```

<p style="font-size: 32px">Attributes</p>

#### Card

| 属性        | 说明                             | 默认值 |
| ----------- | -------------------------------- | ------ |
| no-bodreded | 不显示边框，建议在灰色背景下使用 | -      |
| dis-hover   | 禁用鼠标悬停显示阴影             | -      |
| shadow      | 卡片阴影，建议在灰色背景下使用   | false  |
| title       | 卡片标题                         | -      |
| extra       | 卡片额外操作的内容               | -      |

### 方法

### Config  方法

为组件提供一些必要的响应式更新DOM操作的API。

| 参数 | 说明                                             | 类型   |
| ---- | ------------------------------------------------ | ------ |
| el   | 配置当前选定的 steps，必须是选择器名称或者元素名 | String |

该方法返回以下2个 String 类型的属性：

- `title`
- `extra`

| 返回值 | 说明                         | 类型   | 默认值 |
| ------ | ---------------------------- | ------ | ------ |
| title  | 响应式设置卡片标题           | String | -      |
| extra  | 响应式设置卡片额外操作的内容 | String | -      |