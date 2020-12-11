## Tag 标签

### 摘要

对不同维度进行简单的标记和分类。

### 何时使用

- 用于标记事物的属性和维度。

- 进行分类。

### 代码示例

##### 基本用法 

```html
        <rab-tag>标签 1</rab-tag>
        <rab-tag><a href="https://github.com/niu-grandpa/RabbitUI">标签 2</a></rab-tag>
        <rab-tag> 标签 3<i class="rbt-icon rbt-icon-ios-close"></i></rab-tag>
```

##### 各种颜色 

- 我们添加了多种预设色彩的标签样式，用作不同场景使用。

```html
        <rab-tag rab-color="primary">primary</rab-tag>
        <rab-tag rab-color="success">success</rab-tag>
        <rab-tag rab-color="info">info</rab-tag>
        <rab-tag rab-color="warning">warning</rab-tag>
        <rab-tag rab-color="error">error</rab-tag>
        <rab-tag rab-color="magenta">magenta</rab-tag>
        <rab-tag rab-color="red">red</rab-tag>
        <rab-tag rab-color="volcano">volcano</rab-tag>
        <rab-tag rab-color="orange">orange</rab-tag>
        <rab-tag rab-color="gold">gold</rab-tag>
        <rab-tag rab-color="lime">lime</rab-tag>
        <rab-tag rab-color="green">green</rab-tag>
        <rab-tag rab-color="cyan">cyan</rab-tag>
        <rab-tag rab-color="blue">blue</rab-tag>
        <rab-tag rab-color="geekblue">geekblue</rab-tag>
        <rab-tag rab-color="purple">purple</rab-tag>
```

##### 图标按钮

```html
        <rab-tag rab-color="error">
            <i class="rbt-icon rbt-icon-logo-angular"></i>
            <span>Angular</span>
        </rab-tag>
        <rab-tag rab-color="primary">
            <i class="rbt-icon rbt-icon-logo-facebook"></i>
            <span>Facebook</span>
        </rab-tag>
        <rab-tag rab-color="info">
            <i class="rbt-icon rbt-icon-logo-twitter"></i>
            <span>Twitter</span>
        </rab-tag>
```

##### 可选择标签

- 点击切换选中效果

```html
        <rab-tag class="checkable">电影</rab-tag>
        <rab-tag class="checkable checked">书籍</rab-tag>
        <rab-tag class="checkable">音乐</rab-tag>
        <rab-tag class="checkable">运动</rab-tag>
```

### API

| 属性      | 说明                                                         | 类型   | 默认值 |
| --------- | ------------------------------------------------------------ | ------ | ------ |
| rab-color | 标签颜色，预设颜色值为`primary`、`success`、`warning`、`error`、`blue`、`green`、`red`、`yellow`、`pink`、`magenta`、`volcano`、`orange`、`gold`、`lime`、`cyan`、`geekblue`、`purple`，你也可以自定义颜色值。 | String | -      |

