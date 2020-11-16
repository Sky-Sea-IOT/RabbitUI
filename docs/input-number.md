##  InputNumber 数字输入框

#### 摘要

使用鼠标或键盘输入一定范围的标准数值。

#### 何时使用

当需要获取标准数值时。

#### 代码示例

<img src="C:\Users\qq286\AppData\Roaming\Typora\typora-user-images\image-20201116194122235.png" alt="image-20201116194122235" style="zoom:80%;" />

- 基础用法

数字输入框。

```html
<rab-input-number id="ipn"></rab-input-number>
<script>
    rabbit.create("#ipn", {
        min: 1,
        max: 10,
        value: 1
    });
</script> 
```

<img src="C:\Users\qq286\AppData\Roaming\Typora\typora-user-images\image-20201116194427482.png" alt="image-20201116194427482" style="zoom:80%;" />

- 小数

通过设置 `step`属性控制每次改变的精度。

```html
<rab-input-number id="ipn2"></rab-input-number>
<script>
    rabbit.create("#ipn2", {
        min: 1,
        max: 10,
        value: 1,
        step: 1.2
    });
</script> 
```

<img src="C:\Users\qq286\AppData\Roaming\Typora\typora-user-images\image-20201116194746635.png" alt="image-20201116194746635" style="zoom:80%;" />

- 尺寸

通过设置 `size`属性为 `large`和 `small`将输入框设置为大和小尺寸，不设置为默认（中）尺寸。

```html
<rab-input-number id="ipn3"></rab-input-number>
<rab-input-number id="ipn4"></rab-input-number>
<rab-input-number id="ipn5"></rab-input-number>
<script>
    rabbit.create("#ipn3", {
       size: 'small'
    });
    rabbit.create("#ipn4");
    rabbit.create("#ipn5", {
       size: 'large'
    })
</script> 
```

<img src="C:\Users\qq286\AppData\Roaming\Typora\typora-user-images\image-20201116195015162.png" alt="image-20201116195015162" style="zoom:80%;" />

- 不可用

通过设置 `disabled`属性禁用输入框

```html
<rab-input-number id="ipn6"></rab-input-number>
<script>
    rabbit.create("#ipn2", {
       disabled: true
    });
</script> 
```

<img src="C:\Users\qq286\AppData\Roaming\Typora\typora-user-images\image-20201116195151267.png" alt="image-20201116195151267" style="zoom:80%;" />

- 只读

通过设置 `readOnly`属性开启只读。

```html
<rab-input-number id="ipn7"></rab-input-number>
<script>
    rabbit.create("#ipn7", {
       readOnly: true
    });
</script> 
```

<img src="C:\Users\qq286\AppData\Roaming\Typora\typora-user-images\image-20201116195206915.png" alt="image-20201116195206915" style="zoom:80%;" />

- 不可编辑 

通过设置 `editable`属性控制是否能编辑。

```html
<rab-input-number id="ipn8"></rab-input-number>
<script>
    rabbit.create("#ipn8", {
       editable: false
    });
</script> 
```

### API

| 属性        | 说明                                                       | 类型    | 默认值    |
| ----------- | ---------------------------------------------------------- | ------- | --------- |
| max         | 最大值                                                     | Number  | Infinity  |
| min         | 最小值                                                     | Number  | -Infinity |
| value       | 当前初始值                                                 | Number  | 1         |
| step        | 每次改变的步伐，可以是小数                                 | Number  | 1         |
| size        | 输入框尺寸，可选值为 `large`、 `small`、 `default`或者不填 | String  | default   |
| disabled    | 设置禁用状态                                               | Boolean | false     |
| placeholder | 占位文本                                                   | String  | -         |
| readOnly    | 是否设置为只读                                             | Boolean | true      |
| editable    | 是否可编辑                                                 | Boolean | true      |
| precision    | 数值精度                                                 | Number | -      |
| onChange    | 数值改变时的回调，返回当前值                                | Function(val) | - |
| onFocus    | 聚焦时触发，返回当前事件对象                               | Function(e) | -   |
| onBlur    | 失焦时触发                                             | Function | -      |
