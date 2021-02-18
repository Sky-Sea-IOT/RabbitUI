# Time 相对时间

常用于表示几分钟前、几小时前等相对于此时此刻的时间描述。

> 注意！使用前需要先实例化组件  `new Rabbit.Time()`

## 代码示例

基础用法

- 为属性 `time` 设置一个时间戳或 Date，可自动转为相对于当前的时间。

```html
<r-time time="new Date().getTime() - 60 * 3 * 1000"></r-time>
<r-time time="new Date().getTime() - 86400 * 3 * 1000"></r-time>
```

自动更新间隔

- 设置自动更新间隔，默认为 60 秒。

```html
<r-time time="new Date()" interval="1"></r-time>
```

不同类型

- 设置属性 `type` 可以根据情况，设置不同的显示类型。

```html
<r-time time="new Date().getTime() - 86400 * 3 * 1000"></r-time>
<r-time time="new Date().getTime() - 86400 * 3 * 1000" type="date"></r-time>
<r-time time="new Date().getTime() - 86400 * 3 * 1000" type="datetime"></r-time>
```

锚点

- 设置 `hash` 属性，相对时间可以点击并定位锚点。

```html
<r-time time="new Date().getTime() - 86400 * 3 * 1000" hash="#hash"></r-time>
```

<p style="font-size: 32px">Attributes</p>

#### Time

| 属性     | 说明                                         | 默认值   |
| -------- | -------------------------------------------- | -------- |
| time     | 需要对比的时间，可以是时间戳或 Date 类型     | -        |
| type     | 类型，可选值为 relative、date 或 datetime    | relative |
| interval | 自动更新的间隔，单位：秒                     | 60       |
| hash     | 填写该值，点击会定位锚点                     | -        |
| local    | 日期语言环境，可选值为 en、es-us 和 zh-cn | zh-cn  |
