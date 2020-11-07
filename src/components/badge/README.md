# Badge 徽标数

调用 `Badge.listenCount`  方法监听徽标角标数变化，当达到设置的封顶数数后会显示${overflowCount}+，为 0 时隐藏，详见API

```html
<style>
    .demo-badge {
        width: 42px;
        height: 42px;
        border-radius: 2px;
        background: #eee;
        display: inline-block;
        vertical-align: middle;
    }
</style>

 <div class="rbt-badge" id="demoBadge4">
     <a href="#" class="demo-badge"></a>
     <sup class="rbt-badge-count">10</sup>
 </div>

 <div class="rbt-badge" id="demoBadge2">
     <a href="#" class="demo-badge"></a>
     <sup class="rbt-badge-count">10</sup>
 </div>

 <div class="rbt-badge" id="demoBadge3">
     <a href="#" class="demo-badge"></a>
     <sup class="rbt-badge-count">10</sup>
 </div>

 <script>
   Badge.listenCount({
        el: "#demoBadge1", // el:["#demoBadge1","#demoBadge2","#demoBadge3"]
        overflowCount: 9
    });
 </script>
```

- Badge.listenCount(config)

## API

|  属性   | 说明  | 类型 |  默认值 |
|  ----  | ----  | ---- | ---  |
|  el  | 选择的徽标，可以传入一个数组统一设置多个选择器 | String / Array | - |
|  overflowCount  | 展示封顶的数字值  | Number | 99 |
|  showZero  | 当数值为 0 时，是否展示 Badge | Boolean | false  |
