## Tag 标签

### 摘要

对不同维度进行简单的标记和分类。

### 何时使用

- 用于标记事物的属性和维度。

- 进行分类。

### 代码示例

##### 基本用法 

```html
        <rb-tag>标签 1</rb-tag>
        <rb-tag><a href="https://github.com/niu-grandpa/RabbitUI">标签 2</a></rb-tag>
        <rb-tag> 标签 3<i class="rbt-icon rbt-icon-ios-close"></i></rb-tag>
```

##### 各种颜色 

- 我们添加了多种预设色彩的标签样式，用作不同场景使用。

```html
        <rb-tag rb-color="primary">primary</rb-tag>
        <rb-tag rb-color="success">success</rb-tag>
        <rb-tag rb-color="info">info</rb-tag>
        <rb-tag rb-color="warning">warning</rb-tag>
        <rb-tag rb-color="error">error</rb-tag>
        <rb-tag rb-color="magenta">magenta</rb-tag>
        <rb-tag rb-color="red">red</rb-tag>
        <rb-tag rb-color="volcano">volcano</rb-tag>
        <rb-tag rb-color="orange">orange</rb-tag>
        <rb-tag rb-color="gold">gold</rb-tag>
        <rb-tag rb-color="lime">lime</rb-tag>
        <rb-tag rb-color="green">green</rb-tag>
        <rb-tag rb-color="cyan">cyan</rb-tag>
        <rb-tag rb-color="blue">blue</rb-tag>
        <rb-tag rb-color="geekblue">geekblue</rb-tag>
        <rb-tag rb-color="purple">purple</rb-tag>
```

##### 图标按钮

```html
        <rb-tag rb-color="error">
            <i class="rbt-icon rbt-icon-logo-angular"></i>
            <span>Angular</span>
        </rb-tag>
        <rb-tag rb-color="primary">
            <i class="rbt-icon rbt-icon-logo-facebook"></i>
            <span>Facebook</span>
        </rb-tag>
        <rb-tag rb-color="info">
            <i class="rbt-icon rbt-icon-logo-twitter"></i>
            <span>Twitter</span>
        </rb-tag>
```

##### 可选择标签

- 点击切换选中效果

```html
        <rb-tag class="checkable">电影</rb-tag>
        <rb-tag class="checkable checked">书籍</rb-tag>
        <rb-tag class="checkable">音乐</rb-tag>
        <rb-tag class="checkable">运动</rb-tag>
```

### API

| 属性      | 说明                                                         | 类型   | 默认值 |
| --------- | ------------------------------------------------------------ | ------ | ------ |
| rb-color | 标签颜色，预设颜色值为`primary`、`success`、`warning`、`error`、`blue`、`green`、`red`、`yellow`、`pink`、`magenta`、`volcano`、`orange`、`gold`、`lime`、`cyan`、`geekblue`、`purple`，你也可以自定义颜色值。 | String | -      |

