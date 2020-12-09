## Card 卡片

### 摘要

通用卡片容器。

### 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

### 代码示例

##### 基本用法

包含标题，内容和操作。

```html
<rab-card>
    <rab-card-header>
       卡片标题<a style="float: right; padding: 3px 0">操作按钮</a>
    </rab-card-header>
    <rab-card-body>
       <p class="text">卡片的内容</p>
       <p class="text">卡片的内容</p>
       <p class="text">卡片的内容</p>
	</rab-card-body>
</rab-card>
```

##### 简单卡片

只包含内容区域。

```html
<rab-card>
  <rab-card-body>
     <p>卡片的内容</p>
     <p>卡片的内容</p>
     <p>卡片的内容</p>
  </rab-card-body>
</rab-card>
```

##### 带图片

可配置定义更丰富的内容展示。

```html
<style>
    .bottom {
        margin: 12px 0;
        line-height: 12px;
        color: #999;
    }
    
    .image {
        width: 100%;
        display: block;
    }
</style>     
	<div style="float: left; margin-right: 6%">
        <rab-card style="width: 270px">
           <rab-card-body style="padding: 0">
               <img src="../../../assets/card.jpg" class="image" />
                  <div style="padding: 14px; text-align: center">
                      <h4>那些年那些事那些兔</h4>
                      <div class="bottom">www.bilibili.com</div>
                  </div>
            </rab-card-body>
          </rab-card>
      </div>
```

##### 卡片阴影

可对阴影的显示进行配置。

通过属性 `rab-shadow` 设置阴影显示时机。  `hover`  鼠标悬浮时显示，  `never` 从不显示

```html
<rab-card>
   <rab-card-body>总是显示</rab-card-body>
</rab-card>

<rab-card rab-shadow="hover">
   <rab-card-body>总是显示</rab-card-body>
</rab-card>

<rab-card rab-shadow="nerve">
   <rab-card-body>总是显示</rab-card-body>
</rab-card>
```