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
    
    .demo rab-avatar {
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
   <rab-avatar class="custom"></rab-avatar>
   <rab-avatar rab-size="large"></rab-avatar>
   <rab-avatar></rab-avatar>
   <rab-avatar rab-size="small"></rab-avatar>
    </div>
<div class="demo">
  <rab-avatar rab-shape="square" class="custom"></rab-avatar>
  <rab-avatar rab-shape="square" rab-size="large"></rab-avatar>
  <rab-avatar rab-shape="square"></rab-avatar>
  <rab-avatar rab-shape="square" rab-size="small"></rab-avatar>
</div>
```

##### 类型

支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

> 注意，使用字符头像要需要用任意标签将文本包裹起来

```html
        <rab-avatar rab-icon="md-person"></rab-avatar>
        <rab-avatar><span>U</span></rab-avatar>
        <rab-avatar><span>USER</span></rab-avatar>
        <rab-avatar><img src="../../../assets/avatar.jpg" /></rab-avatar>
        <rab-avatar style="background: #f56a00"><span>U</span></rab-avatar>
        <rab-avatar style="background: #87d068"></rab-avatar>
```

##### 自动调整字符大小 

对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。

```html
        <rab-avatar style="background: #f56a00"><span>U</span></rab-avatar>
        <rab-avatar style="background: rgb(114, 101, 230)"><span>Jack</span></rab-avatar>
        <rab-avatar style="background: rgb(255, 191, 0)"><span>Tom</span></rab-avatar>
        <rab-avatar style="background: rgb(0, 162, 174)"><span>Edward</span></rab-avatar>
```

### API

| 属性      | 说明                                  | 类型   | 默认值    |
| --------- | ------------------------------------- | ------ | --------- |
| rab-shape | 指定头像的形状为方形，可选值为 square | String | -         |
| rab-size  | 设置头像的大小，可选值为 large、small | String | -         |
| rab-icon  | 设置头像的图标类型，参考 `icon` 组件  | String | md-person |

