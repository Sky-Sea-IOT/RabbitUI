## Spin 加载中

### 摘要

用于页面和区块的加载中状态。

### 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

### 代码示例

##### 基础用法

一个简单的 loading 状态。

```html
<rb-spin rb-type="dot"></rb-spin>
```

##### 各种尺寸

通过设置`size`属性为`large`和`small`将 Spin 设置为大和小尺寸。小的用于文本加载，默认用于卡片容器级加载，大的用于**页面级**加载。

```html
<rb-spin rb-type="dot" rb-size="small"></rb-spin>
<rb-spin rb-type="dot"></rb-spin>
<rb-spin rb-type="dot" rb-size="large"></rb-spin>
```

##### 居中固定

通过设置属性 `rb-fix`  为 `true` 在容器内部垂直居中固定，需要父级有`relative`或`absolute`。

```html
<style>
    .demo {
        width: 40%;
        margin: 50px auto;
    }
    
    .demo-box {
        float: left;
        position: relative;
        width: 25%;
        height: 100px;
        border: 1px solid #ccc;
    }
</style>
<div class="demo">
   <div class="demo-box">
      <rb-spin rb-fix="true">
        <rb-spin rb-type="dot"></rb-spin>
      </rb-spin>
   </div>
</div>
```

##### 自定义内容

自定义 Spin 的内容或者使用自定义指示符。

```html
<rb-spin rb-fix="true">加载中...</rb-spin>

<rb-spin rb-fix="true">
    <i class="rbt-icon rbt-icon-loading1"></i>
    <p>Loading...</p>
</rb-spin>

<rb-spin rb-fix="true">
    <i class="rbt-icon rbt-icon-loading-solid"></i>
    <p>Loading...</p>
</rb-spin>
```

##### 整页加载

使用内置的 `Spin` 方法可以全局加载。

设置属性 `content` 可以自定义显示内容

```html
<button class="rbt-btn rbt-btn-primary" onclick="s1()">整页显示，3秒后关闭</button>
<button class="rbt-btn rbt-btn-primary" onclick="s2()">自定义显示内容</button>
<script>
    s1 = () => {
        RabbitUI.Spin.show();
        setTimeout(() => RabbitUI.Spin.hide(), 3000);
    };
    s2 = () => {
        RabbitUI.Spin.show({
            content: `<i class="rbt-icon rbt-icon-loading-solid"></i><p>Loading...</p>`,
        });
        setTimeout(() => RabbitUI.Spin.hide(), 3000);
    };
</script>
```

### API

| 属性    | 说明                                                         | 类型   | 默认值 |
| ------- | ------------------------------------------------------------ | ------ | ------ |
| rb-size | rb-spin尺寸，可选值为`large`和`small`或者不设置              | String | -      |
| rb-fix  | 是否固定，需要父级有`relative`或`absolute`                   | String | -      |
| rb-type | 可选值为 `dot`， 设置为外观为点状类型，如果要自定义内容请将这个属性去掉在设置 | String | dot    |

