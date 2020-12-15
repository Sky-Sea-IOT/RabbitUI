## Divider 分割线

### 摘要

区隔内容的分割线。

### 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

### 代码示例

##### 水平分割线

默认为水平分割线，可在中间加入文字。

通过设置属性 `rb-dashed` 使用虚线分割线

 ```html
        青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪。
        <rb-divider></rb-divider>
        史蒂芬·保罗·乔布斯是美国企业家和商业巨头。他是苹果公司的董事长、首席执行官和联合创始人。
        <rb-divider rb-dashed></rb-divider>
        少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉。
        <rb-divider></rb-divider>
        杜甫的思想核心是儒家的仁政思想，他有“致君尧舜上，再使风俗淳”的宏伟抱负。
 ```

##### 垂直分割线

使用 `rb-type="vertical"` 设置为行内的垂直分割线。

```html
        文本
        <rb-divider rb-type="vertical"></rb-divider>
        <a>链接</a>
        <rb-divider rb-type="vertical"></rb-divider>
        <a>链接</a>
```

##### 带文字的分割线

分割线中带有文字，可以用 `rb-orientation` 指定文字位置。默认是文字局中

```html
        <rb-divider rb-orientation="left">Left Text</rb-divider>
        史蒂芬·保罗·乔布斯是美国企业家和商业巨头。他是苹果公司的董事长、首席执行官和联合创始人。
        <rb-divider>Text</rb-divider>
        鲁迅一生在文学创作、文学批评、思想研究、文学史研究、翻译、美术理论引进、基础科学介绍和古籍校勘与研		 究等多个领域具有重大贡献。
        <rb-divider rb-orientation="right">Right Text</rb-divider>
        李清照出生于书香门第，早期生活优裕，其父李格非藏书甚富，她小时候就在良好的家庭环境中打下文学基础。
```