## Progress 进度条

展示操作的当前进度。

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；
- 当需要显示一个操作完成的百分比时。

### 代码示例

##### 基本用法

标准的进度条、处在不同状态下的进度条

> 注意：进度条的宽度是 100% 适配于它的父级元素

```html
<rb-progress>
  <rb-progress-bar style="width: 25%"></rb-progress-bar>
</rb-progress>

<rb-progress rb-status="active">
  <rb-progress-bar style="width: 35%"></rb-progress-bar>
</rb-progress>

<rb-progress rb-status="success">
  <rb-progress-bar style="width: 45%"></rb-progress-bar>
 </rb-progress>

<rb-progress rb-status="warning">
   <rb-progress-bar style="width: 65%"></rb-progress-bar>
</rb-progress>

<rb-progress rb-status="wrong">
   <rb-progress-bar style="width: 100%"></rb-progress-bar>
</rb-progress>

<rb-progress rb-status="info">
   <rb-progress-bar style="width: 40%"></rb-progress-bar>
</rb-progress>
```

##### 百分比内显 

```html
<rb-progress>
  <rb-progress-bar style="width: 25%">25%</rb-progress-bar>
</rb-progress>
```

##### 尺寸

通过设置属性 `rb-size`  为 `small` 或 `large`  设置大尺寸和小尺寸

```html
<rb-progress rb-size="small">
  <rb-progress-bar style="width: 25%"></rb-progress-bar>
</rb-progress>

<rb-progress rb-size="large">
  <rb-progress-bar style="width: 25%"></rb-progress-bar>
</rb-progress>
```

##### 自定义高度

自定义进度条的高度

```html
<rb-progress style="height: 2px">
  <rb-progress-bar style="width: 25%">25%</rb-progress-bar>
</rb-progress>

<rb-progress style="height: 18px">
  <rb-progress-bar style="width: 35%">35%</rb-progress-bar>
</rb-progress>
```

##### 渐变色

```html
<rb-progress>
  <rb-progress-bar style="
     width: 90%;
     background-image: linear-gradient(
       to right,
       rgb(16, 142, 233) 0%,
       rgb(135, 208, 104) 100%
     );"
   >25%</rb-progress-bar>
</rb-progress>
```

### API

| 属性      | 说明                                                         |
| --------- | ------------------------------------------------------------ |
| rb-status | 进度条状态颜色，可选值为`info`、`active`、`wrong`、`success`、`warning` |
| rb-size   | 尺寸、可选值为 `small`、`large`                              |

