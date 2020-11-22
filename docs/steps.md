## Steps 步骤条

### 摘要

拆分某项流程的步骤，引导用户按流程完成任务。

### 何时使用

<blockquote>当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

### 代码示例

##### 基础用法

基本用法，组件会根据`current`自动判断各步骤状态。

```html
        <rab-steps id="steps1">
            <div slot="step">
                <span slot="title">已完成</span>
                <span slot="content">这里是该步骤的描述信息</span>
            </div>
            <div slot="step">
                <span slot="title">进行中</span>
                <span slot="content">这里是该步骤的描述信息</span>
            </div>
            <div slot="step">
                <span slot="title">待进行</span>
                <span slot="content">这里是该步骤的描述信息</span>
            </div>
            <div slot="step">
                <span slot="title">待进行</span>
                <span slot="content">这里是该步骤的描述信息</span>
            </div>
        </rab-steps>
        <script>
            rabbit.create("#steps1", {
                current: 1,
            });
        </script>
```

##### 迷你版

设置属性`size`为`small`启用迷你版。

```html
        <rab-steps id="steps2">
            <div slot="step">
                <span slot="title">已完成</span>
                <span slot="content">这里是该步骤的描述信息</span>
            </div>
            <div slot="step">
                <span slot="title">进行中</span>
                <span slot="content">这里是该步骤的描述信息</span>
            </div>
            <div slot="step">
                <span slot="title">待进行</span>
                <span slot="content">这里是该步骤的描述信息</span>
            </div>
            <div slot="step">
                <span slot="title">待进行</span>
                <span slot="content">这里是该步骤的描述信息</span>
            </div>
        </rab-steps>
        <script>
            rabbit.create("#steps2", {
                current: 2,
                size: 'small'
            });
        </script>
```

##### 带图标的步骤条

```html
        <rab-steps id="steps3">
            <div slot="step">
                <i class="rbt-icon rbt-icon-ios-person-add" slot="icon"></i>
                <span slot="title">注册</span>
            </div>
            <div slot="step">
                <i class="rbt-icon rbt-icon-ios-camera" slot="icon"></i>
                <span slot="title">上传头像</span>
            </div>
            <div slot="step">
                <i class="rbt-icon rbt-icon-ios-mail" slot="icon"></i>
                <span slot="title">验证邮箱</span>
            </div>
        </rab-steps>
        <script>
            rabbit.create("#steps3", {
                current: 1,
            });
        </script>
```

##### 垂直方向 

设置属性`direction`为`vertical`在垂直方向展示。

```html
        <rab-steps id="steps4">
            <div slot="step">
                <span slot="title">已完成</span>
                <span slot="content">这里是该步骤的描述信息</span>
            </div>
            <div slot="step">
                <span slot="title">进行中</span>
                <span slot="content">这里是该步骤的描述信息</span>
            </div>
            <div slot="step">
                <span slot="title">待进行</span>
                <span slot="content">这里是该步骤的描述信息</span>
            </div>
            <div slot="step">
                <span slot="title">待进行</span>
                <span slot="content">这里是该步骤的描述信息</span>
            </div>
        </rab-steps>
        <script>
            rabbit.create("#steps4", {
                current: 2,
                direction: 'vertical'
            });
        </script>
```

##### 步骤运行错误 

设置属性`status`为`error`指定当前步骤状态。

```html
        <rab-steps id="steps5">
            <div slot="step">
                <span slot="title">已完成</span>
                <span slot="content">这里是该步骤的描述信息</span>
            </div>
            <div slot="step">
                <span slot="title">进行中</span>
                <span slot="content">这里是该步骤的描述信息</span>
            </div>
            <div slot="step">
                <span slot="title">待进行</span>
                <span slot="content">这里是该步骤的描述信息</span>
            </div>
            <div slot="step">
                <span slot="title">待进行</span>
                <span slot="content">这里是该步骤的描述信息</span>
            </div>
        </rab-steps>
        <script>
            rabbit.create("#steps5", {
               current: 1,
       		   status: "error",
            });
        </script>
```

### API

| 属性      | 说明                                                         | 类型   | 默认值     |
| --------- | ------------------------------------------------------------ | ------ | ---------- |
| current   | 当前步骤，从 0 开始计数                                      | Number | 0          |
| status    | 当前步骤的状态，可选值为`wait`、`process`、`finish`、`error` | String | process    |
| size      | 步骤条的尺寸，可选值为`small`或者不写                        | String | default    |
| direction | 步骤条的方向，可选值为`horizontal`（水平）或`vertical`（垂直） | String | horizontal |

### Slot

| 名称    | 说明       |
| ------- | ---------- |
| title   | 添加标题   |
| content | 添加内容   |
| icon    | 自定义图标 |

