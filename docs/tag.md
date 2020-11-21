## Tag 标签

### 摘要

对不同维度进行简单的标记和分类。

### 何时使用

- 用于标记事物的属性和维度。

- 进行分类。

### 代码示例

##### 基本用法 

```html
    <span class="rbt-tag">标签 1</span>
    <div class="rbt-tag">
       <a href="https://github.com/niu-grandpa/RabbitUI">标签 2</a>
    </div>
    <div class="rbt-tag">
       标签 3 <i class="rbt-icon rbt-icon-ios-close rbt-tag-close-icon"></i>
    </div>
```

##### 各种颜色 

- 我们添加了多种预设色彩的标签样式，用作不同场景使用。

```htm
    <span class="rbt-tag rbt-tag-primary">primary</span>
    <span class="rbt-tag rbt-tag-success">success</span>
    <span class="rbt-tag rbt-tag-info">info</span>
    <span class="rbt-tag rbt-tag-warning">warning</span>
    <span class="rbt-tag rbt-tag-error">error</span>
    <span class="rbt-tag rbt-tag-magenta">magenta</span>
    <span class="rbt-tag rbt-tag-red">red</span>
    <span class="rbt-tag rbt-tag-volcano">volcano</span>
    <span class="rbt-tag rbt-tag-orange">orange</span>
    <span class="rbt-tag rbt-tag-gold">gold</span>
    <span class="rbt-tag rbt-tag-lime">lime</span>
    <span class="rbt-tag rbt-tag-green"> green</span>
    <span class="rbt-tag rbt-tag-cyan">cyan</span>
    <span class="rbt-tag rbt-tag-blue">blue</span>
    <span class="rbt-tag rbt-tag-geekblue">geekblue</span>
    <span class="rbt-tag rbt-tag-purple">purple</span>
```

##### 图标按钮

```htm
        <div class="rbt-tag rbt-tag-error">
            <i class="rbt-icon rbt-icon-logo-angular"></i>
            <span>Angular</span>
        </div>
        <div class="rbt-tag rbt-tag-primary">
            <i class="rbt-icon rbt-icon-logo-facebook"></i>
            <span>Facebook</span>
        </div>
        <div class="rbt-tag rbt-tag-info">
            <i class="rbt-icon rbt-icon-logo-twitter"></i>
            <span>Twitter</span>
        </div>
```

##### 可选择标签

- 点击切换选中效果

```htm
      <span class="rbt-tag rbt-tag-checkable">电影</span>
      <span class="rbt-tag rbt-tag-checkable rbt-tag-checkable-checked">书籍</span>
      <span class="rbt-tag rbt-tag-checkable">音乐</span>
      <span class="rbt-tag rbt-tag-checkable">运动</span>
```

