# Steps 步骤条

引导用户按照流程完成任务的导航条。

## 何时使用

- 当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

> 注意！使用前需要先实例化组件  `new Rabbit.Steps()`

## 代码示例

基础用法 

- 基本用法，组件会根据`current`自动判断各步骤状态。( 设置后需要浏览器刷新才生效 )

```html
<r-steps current="1">
  <r-step title="已完成" content="这里是该步骤的描述信息"></r-step>
  <r-step title="进行中" content="这里是该步骤的描述信息"></r-step>
  <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
  <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
</r-steps>
```

迷你版

- 设置属性`size`为`small`启用迷你版。

```html
<r-steps current="2" size="small">
  <r-step title="已完成"></r-step>
  <r-step title="已完成"></r-step>
  <r-step title="进行中"></r-step>
  <r-step title="待进行"></r-step>
</r-steps>
```

带图标的步骤条

通过设置`r-step`的`icon`属性可以自定义图标。

```html
<r-steps current="1">
  <r-step title="注册" icon="ios-person"></r-step>
  <r-step title="上传头像" icon="ios-camera"></r-step>
  <r-step title="验证邮箱" icon="ios-mail"></r-step>
</r-steps>
```

垂直方向

- 设置属性`direction`为`vertical`在垂直方向展示。

```html
<r-steps current="2" direction="vertical">
  <r-step title="已完成" content="这里是该步骤的描述信息"></r-step>
  <r-step title="已完成" content="这里是该步骤的描述信息"></r-step>
  <r-step title="进行中" content="这里是该步骤的描述信息"></r-step>
  <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
</r-steps>
```

步骤运行错误

设置`r-steps`的属性`status`为`error`指定当前步骤状态。

```html
<r-steps current="1" status="error">
  <r-step title="已完成" content="这里是该步骤的描述信息"></r-step>
  <r-step title="进行中" content="这里是该步骤的描述信息"></r-step>
  <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
  <r-step title="待进行" content="这里是该步骤的描述信息"></r-step>
</r-steps>
```

<p style="font-size: 32px">Attributes</p>

### Steps

| 属性      | 说明                                                         | 默认值     |
| :-------- | :----------------------------------------------------------- | :--------- |
| current   | 当前步骤，从 0 开始计数                                      | 0          |
| status    | 当前步骤的状态，可选值为`wait`、`process`、`finish`、`error` | process    |
| size      | 步骤条的尺寸，可选值为`small`或者不写                        | -          |
| direction | 步骤条的方向，可选值为`horizontal`（水平）或`vertical`（垂直） | horizontal |

### Step

| 属性    | 说明                                                         | 默认值  |
| :------ | :----------------------------------------------------------- | :------ |
| status  | 步骤的状态，可选值为`wait`、`process`、`finish`、`error`，不设置时自动判断 | process |
| title   | 标题                                                         | -       |
| content | 步骤的详细描述，可选                                         | -       |
| icon    | 步骤的图标，可选                                             | -       |

#### 该组件没有提供 `Config` 方法，即通过 JS 动态设置的标签属性与内容需要页面刷新后才会生效。

组件提供的所有属性都可以通过 js 的原生API `setAttribute` 设置