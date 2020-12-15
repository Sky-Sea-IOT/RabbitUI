## Layout 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构

#### 导航样式上需要根据信息层级合理的选择样式：

- **大色块强调**

  建议用于底色为深色系时，当前页面父级的导航项。

- **高亮火柴棍**

  当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。

- **字体高亮变色**

  从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。

- **字体放大**

  `12px`、`14px` 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。

### 组件概述

- `<rb-layout>`：布局容器，其下可嵌套 `<rb-header>` `<rb-sider> ` `<rb-content>` `<rb-footer>`或 `<rb-layout>` 本身，可以放在任何父容器中。
- `<rb-header>`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `<rb-layout>` 中。
- `<rb-sider>`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `<rb-layout>` 中。
- `<rb-content>`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `<rb-layout>` 中。
- `<rb-footer>`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `<rb-layout>` 中。

> 注意：采用 flex 布局实现，请注意[浏览器兼容性](https://caniuse.com/#search=flex)。
>
> 此外，该组件不需要使用 `RabbitUI.create()` 方法进行创建，并且使用 `<rb-sider>` 时其父元素 `<rb-layout>` 需要添加属性 `has-sider` 

### 代码示例

##### 基本结构

典型的页面布局

```html
<div class="demo">
    <rb-layout>
        <rb-header>Header</rb-header>
        <rb-content>Content</rb-content>
        <rb-footer>Footer</rb-footer>
    </rb-layout>
</div>

<div class="demo">
    <rb-layout>
        <rb-header>Header</rb-header>
        <rb-layout has-sider>
            <rb-sider>Sider</rb-sider>
            <rb-content>Content</rb-content>
        </rb-layout>
        <rb-footer>Footer</rb-footer>
    </rb-layout>
</div>

<div class="demo">
    <rb-layout>
        <rb-header>Header</rb-header>
        <rb-layout has-sider>
            <rb-content>Content</rb-content>
            <rb-sider>Sider</rb-sider>
        </rb-layout>
        <rb-footer>Footer</rb-footer>
    </rb-layout>
</div>

<div class="demo">
    <rb-layout has-sider>
        <rb-sider style="line-height: 250px">Sider</rb-sider>
        <rb-layout>
            <rb-header>Header</rb-header>
            <rb-content>Content</rb-content>
            <rb-footer>Footer</rb-footer>
        </rb-layout>
    </rb-layout>
</div>

<style>
    .demo {
        width: 1010px;
        text-align: center;
        margin: 20px auto;
        padding: 42px 24px 50px;
        color: rgba(0, 0, 0, 0.85);
        border-bottom: 1px solid #f0f0f0;
    }
    
    .demo rb-header,
    .demo rb-footer {
        color: #fff;
        background: #7dbcea;
    }
    
    .demo rb-content {
        min-height: 120px;
        color: #fff;
        line-height: 120px;
        background: rgba(16, 142, 233, 1);
    }
    
    .demo rb-sider {
        color: #fff;
        line-height: 120px;
        background: #3ba0e9;
    }
</style>
```
