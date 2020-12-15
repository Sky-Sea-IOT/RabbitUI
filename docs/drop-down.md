## Dropdown 下拉菜单

### 摘要

展示一组折叠的下拉菜单

### 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

- 用于收罗一组命令操作。
- Select 用于选择，而 Dropdown 是命令集合。

### 代码示例

##### 基础用法

最简单的下拉菜单。

触发对象可以是链接、按钮等各种元素。

本例还展示了禁用项和分隔线，以及菜单展开时的回调事件

```html
<rb-dropdown id="d1">
    <a href="javascript:void(0)" slot="ref">
      下拉菜单<i class="rbt-icon rbt-icon-ios-arrow-down"></i>
    </a>
    <span slot="dropdownItem">菜单项 1</span>
    <span slot="dropdownItem">菜单项 2</span>
    <span slot="dropdownItem">菜单项 3</span>
    <span slot="dropdownItem">菜单项 4</span>
    <span slot="dropdownItem">菜单项 5</span>
</rb-dropdown>
<script>
    RabbitUI.create("#d1", {
        divided: [, , , , true],
        itemDisabled: [, , true, , ],
        onUnfold() {
            console.log("菜单展开");
        },
    });
</script>
```

##### 触发方式 

通过设置属性 `trigger` 可以更改触发方式，可选项为 click 、 hover(默认)、contextMenu

```html
<rb-dropdown id="d2">
    <a href="javascript:void(0)" slot="ref">
      下拉菜单<i class="rbt-icon rbt-icon-ios-arrow-down"></i>
    </a>
    <span slot="dropdownItem">菜单项 1</span>
    <span slot="dropdownItem">菜单项 2</span>
    <span slot="dropdownItem">菜单项 3</span>
    <span slot="dropdownItem">菜单项 4</span>
    <span slot="dropdownItem">菜单项 5</span>
</rb-dropdown>
<rb-dropdown id="d3">
    <a href="javascript:void(0)" slot="ref">
      下拉菜单<i class="rbt-icon rbt-icon-ios-arrow-down"></i>
    </a>
    <span slot="dropdownItem">菜单项 1</span>
    <span slot="dropdownItem">菜单项 2</span>
    <span slot="dropdownItem">菜单项 3</span>
    <span slot="dropdownItem">菜单项 4</span>
    <span slot="dropdownItem">菜单项 5</span>
</rb-dropdown>
<rb-dropdown id="d4">
    <a href="javascript:void(0)" slot="ref">
      下拉菜单<i class="rbt-icon rbt-icon-ios-arrow-down"></i>
    </a>
    <span slot="dropdownItem">菜单项 1</span>
    <span slot="dropdownItem">菜单项 2</span>
    <span slot="dropdownItem">菜单项 3</span>
    <span slot="dropdownItem">菜单项 4</span>
    <span slot="dropdownItem">菜单项 5</span>
</rb-dropdown>
<script>
    RabbitUI.create("#d2");
    RabbitUI.create("#d3", {
       trigger: "click",
    });
    RabbitUI.create("#d4", {
   	   trigger: "contextMenu",
    });
</script>
```

##### 对齐方向

通过设置属性 `placement` 可以更改下拉菜单出现的方向。支持 12 个方向，详见 API。

```html
<rb-dropdown id="d5">
    <a href="javascript:void(0)" slot="ref">
      下拉菜单<i class="rbt-icon rbt-icon-ios-arrow-down"></i>
    </a>
    <span slot="dropdownItem">菜单项 1</span>
    <span slot="dropdownItem">菜单项 2</span>
    <span slot="dropdownItem">菜单项 3</span>
    <span slot="dropdownItem">菜单项 4</span>
    <span slot="dropdownItem">菜单项 5</span>
</rb-dropdown>
<rb-dropdown id="d6">
    <a href="javascript:void(0)" slot="ref">
      下拉菜单<i class="rbt-icon rbt-icon-ios-arrow-down"></i>
    </a>
    <span slot="dropdownItem">菜单项 1</span>
    <span slot="dropdownItem">菜单项 2</span>
    <span slot="dropdownItem">菜单项 3</span>
    <span slot="dropdownItem">菜单项 4</span>
    <span slot="dropdownItem">菜单项 5</span>
</rb-dropdown>
<rb-dropdown id="d7">
    <a href="javascript:void(0)" slot="ref">
      下拉菜单<i class="rbt-icon rbt-icon-ios-arrow-down"></i>
    </a>
    <span slot="dropdownItem">菜单项 1</span>
    <span slot="dropdownItem">菜单项 2</span>
    <span slot="dropdownItem">菜单项 3</span>
    <span slot="dropdownItem">菜单项 4</span>
    <span slot="dropdownItem">菜单项 5</span>
</rb-dropdown>
<script>
    RabbitUI.create("#d5", {
        placement: "bottom-start",
    });
    RabbitUI.create("#d6");
    RabbitUI.create("#d7", {
   	   placement: "bottom-end",
    });
</script>
```

### API

| 属性         | 说明                                                         | 类型                 | 默认值 |
| ------------ | ------------------------------------------------------------ | -------------------- | ------ |
| trigger      | 触发方式，可选值为 `hover`（悬停）`click`（点击）`contextMenu`（右键） | String               | hover  |
| placement    | 下拉菜单出现的位置，可选值为`top``top-start``top-end``bottom``bottom-start``bottom-end``left``left-start``left-end``right``right-start``right-end` | String               | bottom |
| className    | 给下拉菜单添加额外的 class 名称                              | String               | -      |
| onClick      | 点击菜单项时触发，返回点击的项索引值和元素                   | Function(index,item) | -      |
| onUnfold     | 菜单展开时触发                                               | Function             | -      |
| divided      | 菜单项是否显示分割线                                         | Array                | [ ]    |
| selected     | 菜单项是否选中                                               | Array                | [ ]    |
| disabled     | 菜单是否禁用                                                 | Boolean              | false  |
| itemDisabled | 菜单项是否禁用                                               | Array                | [ ]    |

### Slot

| 名称         | 说明                     |
| ------------ | ------------------------ |
| ref          | 触发菜单展开收起的源元素 |
| dropdownItem | 菜单项内容               |

### 关于设置菜单项选中、禁用和分割线的使用

```js
// 示例
// 例如设置菜单项第二项和第四项为选中状态。选项禁用和分割线的设置也是一样
// 若不设置则在数组中根据对应菜单项的位置用逗号或 false 表示
selected: [,true , ,true] 
// 等同于
selected: [false, true ,false ,true]
```

