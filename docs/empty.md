## Empty空状态

### 摘要

空状态时的展示占位图。

### 何时使用

- 当目前没有数据时，用于显式的用户提示。
- 初始化场景时的引导创建流程。

### 代码示例

##### 基本

简单的展示。

```html
<rab-empty id="empty1"></rab-empty>
<script>
    RabbitUI.create("#empty1", {
        desc: "暂无数据",
    });
</script>
```

##### 简约

可以通过设置 `image` 为 `IMAGE_SIMPLE` 选择简约风格的图片。

```html
<rab-empty id="empty2"></rab-empty>
<script>
    RabbitUI.create("#empty2", {
        image: "IMAGE_SIMPLE"
        desc: "暂无数据",
    });
</script>
```

##### 自定义

自定义图片链接、图片大小、描述、底部附属内容。

```html
<rab-empty id="empty3"></rab-empty>
<script>
    RabbitUI.create("#empty3", {
        image: "https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",
        imageStyle: {
            height: "60px",
        },
        desc: `Customize <a href="#">Description</a>`,
        footer: `<button class="rbt-btn rbt-btn-primary">立即创建</button>`,
    });
</script>
```

##### 无描述

不添加参数 `desc` 或者插槽 `slot="desc"` 则·不展示描述内容。

```html
<rab-empty id="empty4"></rab-empty>
<script>
    RabbitUI.create("#empty4");
</script>
```

### API

| 属性       | 说明                                                  | 类型   | 默认值        |
| ---------- | ----------------------------------------------------- | ------ | ------------- |
| desc       | 自定义描述内容                                        | String | -             |
| image      | 设置显示图片，不为 默认内置图片时表示自定义图片地址。 | String | IMAGE_DEFAULT |
| footer     | 自定义底部附属内容                                    | String | -             |
| imageStyle | 图片样式                                              | Object | -             |

### Slot

| 名称   | 说明                                         |
| ------ | -------------------------------------------- |
| desc   | 自定义描述内容，会覆盖参数 desc 的内容       |
| footer | 自定义底部附属内容，会覆盖参数 footer 的内容 |

