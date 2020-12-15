## Time 相对时间

### 摘要

> 常用于表示几分钟前、几小时前等相对于此时此刻的时间描述。

### 代码示例

##### 基础用法

设置一个时间戳或 Date，可自动转为相对于当前的时间。

```html
<rb-time id="t1"></rb-time>
<rb-time id="t2"></rb-time>
<script>
    RabbitUI.create("#t1", {
        time: new Date().getTime() - 60 * 3 * 1000
    });
    RabbitUI.create("#t2", {
        time: new Date().getTime() - 86400 * 3 * 1000
    });    
</script>
```

##### 自动更新间隔

设置自动更新间隔，默认为 60 秒。

```html
<rb-time id="t3"></rb-time>
<script>
    RabbitUI.create("#t3", {
        time: new Date().getTime() - 60 * 3 * 1000,
        interval: 1
    });
</script>
```

##### 不同类型

可以根据情况，设置不同的显示类型。

在属性 `type`  为 `data` 或者  `datatime` 时可以设置日期为字符串，

例如：`"2020-12-01"` 、`"2020-12-01 13:04:56"`

```html
<rb-time id="t4"></rb-time>
<rb-time id="t5"></rb-time>
<rb-time id="t6"></rb-time>
<script>
    RabbitUI.create("#t4", {
        time: new Date().getTime() - 86400 * 3 * 1000  
    });
    RabbitUI.create("#t5", {
        time: new Date().getTime() - 86400 * 3 * 1000, 
        type: 'date'
    }); 
    RabbitUI.create("#t6", {
        time: new Date().getTime() - 86400 * 3 * 1000,
        type: 'datetime'
    });        
</script>
```

##### 锚点

设置 `hash` 或者 `link` 属性，相对时间可以点击并定位锚点或打开链接。

```html
<rb-time id="t7"></rb-time>
<rb-time id="t8"></rb-time>
<script>
    RabbitUI.create("#t7", {
        time: new Date().getTime() - 86400 * 3 * 1000,
        hash: '#hash'
    });
    RabbitUI.create("#t8", {
        time: new Date().getTime() - 86400 * 3 * 1000,
        link: 'https://github.com/niu-grandpa/RabbitUI'
    });    
</script>
```

### API

| 属性     | 说明                                             | 类型                     | 默认值   |
| -------- | ------------------------------------------------ | ------------------------ | -------- |
| time     | 需要对比的时间，可以是时间戳或 Date 类型         | Number \| Date \| String | -        |
| type     | 类型，可选值为 `relative`、`date` 或  `datetime` | String                   | relative |
| interval | 自动更新的间隔，单位：秒                         | Number                   | 60       |
| hash     | 填写该值，点击会定位锚点                         | String                   | -        |
| link     | 填写该值，点击会以 `href` 链接的形式             | String                   | -        |

