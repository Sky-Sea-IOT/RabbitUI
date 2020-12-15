## Avatar 头像

### 摘要

用来代表用户或事物，支持图片、图标或字符展示。

##### 基础用法 

头像有三种尺寸，两种形状可选。	

```html
  <style>
    .demo {
        width: 460px;
        margin: 20px auto;
    }
    
    .demo rb-avatar {
        margin-top: 16px;
        margin-right: 16px;
    }
    
    .custom {
        width: 64px;
        height: 64px;
        line-height: 64px;
        font-size: 32px !important;
    }
</style>
<div class="demo">
   <rb-avatar class="custom"></rb-avatar>
   <rb-avatar rb-size="large"></rb-avatar>
   <rb-avatar></rb-avatar>
   <rb-avatar rb-size="small"></rb-avatar>
    </div>
<div class="demo">
  <rb-avatar rb-shape="square" class="custom"></rb-avatar>
  <rb-avatar rb-shape="square" rb-size="large"></rb-avatar>
  <rb-avatar rb-shape="square"></rb-avatar>
  <rb-avatar rb-shape="square" rb-size="small"></rb-avatar>
</div>
```

##### 类型

支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

> 注意，使用字符头像要需要用任意标签将文本包裹起来

```html
        <rb-avatar rb-icon="md-person"></rb-avatar>
        <rb-avatar><span>U</span></rb-avatar>
        <rb-avatar><span>USER</span></rb-avatar>
        <rb-avatar><img src="../../../assets/avatar.jpg" /></rb-avatar>
        <rb-avatar style="background: #f56a00"><span>U</span></rb-avatar>
        <rb-avatar style="background: #87d068"></rb-avatar>
```

##### 自动调整字符大小 

对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。

```html
        <rb-avatar style="background: #f56a00"><span>U</span></rb-avatar>
        <rb-avatar style="background: rgb(114, 101, 230)"><span>Jack</span></rb-avatar>
        <rb-avatar style="background: rgb(255, 191, 0)"><span>Tom</span></rb-avatar>
        <rb-avatar style="background: rgb(0, 162, 174)"><span>Edward</span></rb-avatar>
```

### API

| 属性      | 说明                                  | 类型   | 默认值    |
| --------- | ------------------------------------- | ------ | --------- |
| rb-shape | 指定头像的形状为方形，可选值为 square | String | -         |
| rb-size  | 设置头像的大小，可选值为 large、small | String | -         |
| rb-icon  | 设置头像的图标类型，参考 `icon` 组件  | String | md-person |

