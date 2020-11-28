## Result结果

### 摘要 

用于反馈一系列操作任务的处理结果。

### 何时使用	

当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

### 代码示例

##### Info

展示处理结果。

```html
<rab-result id="result1">
    <button class="rbt-btn rbt-btn-primary" slot="footer">查看日志</button>
</rab-result>
<script>
    RabbitUI.create("#result1", {
        title: "您已经执行过该操作",
    });
</script>
```

##### Success

成功的结果。

```html
<rab-result id="result2">
   <div slot="footer">
       <button class="rbt-btn rbt-btn-success">打印账单</button>
       <button class="rbt-btn">再次购买</button>
   </div>
</rab-result>
<script>
    RabbitUI.create("#result2", {
        status: "success",
        title: "成功购买云服务器!",
        subtitle: "订单号: 2020362851226364808云服务器配置1-5分钟，请等待。",
    });
</script>
```

##### Warning

警告类型的结果。

```html
<rab-result id="result3">
    <button class="rbt-btn rbt-btn-primary" slot="footer">查看日志</button>
</rab-result>
<script>
    RabbitUI.create("#result3", {
        status: "warning",
        title: "您的操作环境出了异常",
    });
</script>
```

##### Error

复杂的错误反馈。

```html
<rab-result id="result4">
    <div class="desc" slot="content">
        <h3 style="font-size: 16px">The content you submitted has the following error:</h3>
         <ul>
           <li style="margin: 1em 0">Your account has been frozen.
               <a href="#">Thaw immediately ></a>
           </li>
           <li style="margin-bottom: 1em">Your account is not yet eligible to apply.
               <a href="#"> Apply Unlock ></a>
           </li>
         </ul>
    </div>
     <div slot="footer">
         <button class="rbt-btn rbt-btn-primary">查看日志</button>
         <button class="rbt-btn">联系客服</button>
     </div>
</rab-result>
<script>
    RabbitUI.create("#result4", {
        status: "error",
        title: "无法访问此网站!",
        subtitle: "xxxwtf.com 的响应时间过长，请检查网络连接",
    });
</script>
```

##### 403

你没有此页面的访问权限。

```html
<rab-result id="result5">
   <button class="rbt-btn rbt-btn-primary" slot="footer">返回首页</button>
</rab-result>
<script>
    RabbitUI.create("#result5", {
        status: "403",
        title: "403",
        subtitle: "抱歉，您没有权限访问此页。",
    });
</script>
```

##### 404

此页面未找到。

```html
<rab-result id="result6">
   <button class="rbt-btn rbt-btn-primary" slot="footer">返回首页</button>
</rab-result>
<script>
    RabbitUI.create("#result6", {
        status: "404",
        title: "404",
        subtitle: "抱歉，您访问的页面不存在。",
    });
</script>
```

##### 500

服务器发生了错误。

```html
<rab-result id="result7">
   <button class="rbt-btn rbt-btn-primary" slot="footer">返回首页</button>
</rab-result>
<script>
    RabbitUI.create("#result7", {
        status: "500",
        title: "500",
        subtitle: "服务器错误，无法完成请求。",
    });
</script>
```

##### 自定义图标

自定义 icon。

```html
<rab-result id="result8">
    <i class="rbt-icon rbt-icon-ios-airplane" slot="icon"></i>
    <button class="rbt-btn rbt-btn-primary" slot="footer">下一步</button>
</rab-result>
<script>
    RabbitUI.create("#result8", {
        title: "太棒了，我们已经完成了所有的步骤！",
    });
</script>
```

### API

| 属性     | 说明                                                         | 类型   | 默认值 |
| -------- | ------------------------------------------------------------ | ------ | ------ |
| status   | 结果的状态，决定图标和颜色。可选值为  `success` `info` `warning` `error` `403` `404` `500` | String | info   |
| title    | 结果状态的标题                                               | String | -      |
| subtitle | 结果状态的副标题                                             | String | -      |

### Slot

| 名称    | 说明                 |
| ------- | -------------------- |
| content | 自定义额外的描述内容 |
| footer  | 自定义底部栏内容     |
| icon    | 自定义图标           |

