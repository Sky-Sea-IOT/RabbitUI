## Popover气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。

### 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

### 代码示例

##### 基础用法

支持三种触发方式：鼠标悬停、点击、聚焦。默认是点击。

浮层的大小由内容区域决定。

```html
 <rb-popover id="popover1">
     <button class="rbt-btn" slot="ref">Hover 触发</button>
 </rb-popover>
 <rb-popover id="popover2">
     <button class="rbt-btn" slot="ref">Focus 触发</button>
 </rb-popover>
 <rb-popover id="popover3">
     <button class="rbt-btn" slot="ref">Click 触发</button>
 </rb-popover>
<script>
    rabbit.create("#popover1", {
        title: "标题",
        content: `提示内容<br />提示内容`,
        trigger: "hover",
    });
    rabbit.create("#popover2", {
        title: "标题",
        content: `提示内容<br />提示内容`,
        trigger: "focus",
    });
     rabbit.create("#popover3", {
        title: "标题",
        content: `提示内容<br />提示内容`,
    });
</script>
```

##### 位置

组件提供了12个不同的方向

```html
	<div class="demo">
        <div class="top">
            <rb-popover id="popover4">
                <button class="rbt-btn" slot="ref">上左</button>
            </rb-popover>
            <rb-popover id="popover5">
                <button class="rbt-btn" slot="ref">上边</button>
            </rb-popover>
            <rb-popover id="popover6">
                <button class="rbt-btn" slot="ref">上左</button>
            </rb-popover>
        </div>
        <div class="left">
            <rb-popover id="popover7">
                <button class="rbt-btn" slot="ref">左上</button>
            </rb-popover>
            <rb-popover id="popover8">
                <button class="rbt-btn" slot="ref">左边</button>
            </rb-popover>
            <rb-popover id="popover9">
                <button class="rbt-btn" slot="ref">左下</button>
            </rb-popover>
        </div>
        <div class="right">
            <rb-popover id="popover10">
                <button class="rbt-btn" slot="ref">右上</button>
            </rb-popover>
            <rb-popover id="popover11">
                <button class="rbt-btn" slot="ref">右边</button>
            </rb-popover>
            <rb-popover id="popover12">
                <button class="rbt-btn" slot="ref">右下</button>
            </rb-popover>
        </div>
        <div class="bottom">
            <rb-popover id="popover13">
                <button class="rbt-btn" slot="ref">下左</button>
            </rb-popover>
            <rb-popover id="popover14">
                <button class="rbt-btn" slot="ref">下边</button>
            </rb-popover>
            <rb-popover id="popover15">
                <button class="rbt-btn" slot="ref">下右</button>
            </rb-popover>
        </div>
    </div>
<script>
	rabbit.create("#popover4", {
        title: "标题",
        content: `提示内容<br />提示内容`,
        placement: "top-start",
    });
    rabbit.create("#popover5", {
        title: "标题",
        content: `提示内容<br />提示内容`,
    });

    rabbit.create("#popover6", {
        title: "标题",
        content: `提示内容<br />提示内容`,
        placement: "top-end",
    });
    rabbit.create("#popover7", {
        title: "标题",
        content: `提示内容<br />提示内容`,
        placement: "left-start",
    });
    rabbit.create("#popover8", {
        title: "标题",
        content: `提示内容<br />提示内容`,
        placement: "left",
    });
    rabbit.create("#popover9", {
        title: "标题",
        content: `提示内容<br />提示内容`,
        placement: "left-end",
    });
    rabbit.create("#popover10", {
        title: "标题",
        content: `提示内容<br />提示内容`,
        placement: "right-start",
    });
    rabbit.create("#popover11", {
        title: "标题",
        content: `提示内容<br />提示内容`,
        placement: "right",
    });
    rabbit.create("#popover12", {
        title: "标题",
        content: `提示内容<br />提示内容`,
        placement: "right-end",
    });
    rabbit.create("#popover13", {
        title: "标题",
        content: `提示内容<br />提示内容`,
        placement: "bottom-start",
    });
    rabbit.create("#popover14", {
        title: "标题",
        content: `提示内容<br />提示内容`,
        placement: "bottom",
    });
    rabbit.create("#popover15", {
        title: "标题",
        content: `提示内容<br />提示内容`,
        placement: "bottom-end",
    });
</script>
```

##### 从浮层内关闭 

通过属性 `triggerHide` 传入一个选择器名称，指定该元素用来关闭 Popover，

```html
<rb-popover id="popover16">
    <button class="rbt-btn" slot="ref">click 激活</button>
</rb-popover>
<script>
	rabbit.create("#popover16", {
        title: `<em>自定义标题</em>`,
        content: `<a id="close">关闭提示框</a>`,
        triggerHide: "#close",
    });
</script>
```

#### 嵌套操作

通过自定义 slot 来实现复杂的内容。

```html
<rb-popover id="popover17">
    <button class="rbt-btn" slot="ref">click 激活</button>
    <div slot="content">
  	     <div class="custom-table" slot="content">
                <table>
                    <thead>
                        <tr>
                            <th>日期</th>
                            <th>姓名</th>
                            <th>地址</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2020-08-22</td>
                            <td>李康</td>
                            <td>深圳市南山区步行街</td>
                        </tr>
                        <tr>
                            <td>2020-10-02</td>
                            <td>李康</td>
                            <td>深圳市南山区步行街</td>
                        </tr>
                        <tr>
                            <td>2020-12-24</td>
                            <td>李康</td>
                            <td>深圳市南山区步行街</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
</rb-popover>
<script>
	rabbit.create("#popover17",{ placement: 'right' });
</script>
```

### API

 

| 属性          | 说明                                                         | 类型             | 默认值   |
| ------------- | ------------------------------------------------------------ | ---------------- | -------- |
| trigger       | 触发方式，可选值为`hover`（悬停）`click`（点击）`focus`（聚焦） | String           | click    |
| title         | 显示的标题                                                   | String \| Number | -        |
| content       | 显示的正文内容                                               | String \| Number | -        |
| placement     | 提示框出现的位置，可选值为`top``top-start``top-end``bottom``bottom-start``bottom-end``left``left-start``left-end``right``right-start``right-end` | String           | top      |
| width         | 宽度，最小宽度为 150px。单位px                               | Number           | -        |
| disabled      | 是否禁用                                                     | Boolean          | false    |
| padding       | 自定义间距值                                                 | String           | 8px 16px |
| className     | 给 Popover 设置类名                                          | String           | -        |
| showDelay     | 延时多少才显示 Popover，单位：秒                             | Number           | 0.1      |
| hideDelay     | 延时多少才隐藏 Popover，单位：秒                             | Number           | 0.1      |
| triggerHide   | 触发 Popover 关闭的元素，一般用于浮层内关闭。设置的值必须为选择器而不是一个实例元素 | String           | -        |
| defaultShow   | 默认是否显隐                                                 | Boolean          | false    |
| onPopoverShow | 在提示框显示时触发                                           | Function         | -        |
| onPopoverHide | 在提示框消失时触发                                           | Function         | -        |

### Slot

| 名称    | 说明                                                    |
| ------- | ------------------------------------------------------- |
| title   | 提示框标题，定义此 slot 时，会覆盖属性 `title` 的内容   |
| content | 提示框内容，定义此 slot 时，会覆盖属性 `content` 的内容 |

