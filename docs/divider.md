## Divider 分割线

### 摘要

区隔内容的分割线。

### 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

### 代码示例

##### 水平分割线

默认为水平分割线，可在中间加入文字。

通过设置属性 `rab-dashed` 使用虚线分割线

 ```html
        青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪。
        <rab-divider></rab-divider>
        史蒂芬·保罗·乔布斯是美国企业家和商业巨头。他是苹果公司的董事长、首席执行官和联合创始人。
        <rab-divider rab-dashed></rab-divider>
        少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉。
        <rab-divider></rab-divider>
        杜甫的思想核心是儒家的仁政思想，他有“致君尧舜上，再使风俗淳”的宏伟抱负。
 ```

##### 垂直分割线

使用 `rab-type="vertical"` 设置为行内的垂直分割线。

```html
        文本
        <rab-divider rab-type="vertical"></rab-divider>
        <a>链接</a>
        <rab-divider rab-type="vertical"></rab-divider>
        <a>链接</a>
```

##### 带文字的分割线

分割线中带有文字，可以用 `rab-orientation` 指定文字位置。默认是文字局中

```html
        <rab-divider rab-orientation="left">Left Text</rab-divider>
        史蒂芬·保罗·乔布斯是美国企业家和商业巨头。他是苹果公司的董事长、首席执行官和联合创始人。
        <rab-divider>Text</rab-divider>
        鲁迅一生在文学创作、文学批评、思想研究、文学史研究、翻译、美术理论引进、基础科学介绍和古籍校勘与研		 究等多个领域具有重大贡献。
        <rab-divider rab-orientation="right">Right Text</rab-divider>
        李清照出生于书香门第，早期生活优裕，其父李格非藏书甚富，她小时候就在良好的家庭环境中打下文学基础。
```