# Drawer 抽屉

- 抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。

## 何时使用

- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。

- 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。

## 代码演示

基础抽屉

基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区、右上角关闭按钮或esc键关闭

```html
<button onclick="showDrawer()">显示</button>
<div data-component="drawer" id="mydarwer">
  <div slot="header">基础抽屉</div>
  <div slot="content">
    <p>一些内容...</p>
    <p>一些内容...</p>
    <p>一些内容...</p>
  </div>
</div>
<script>
  const rbt = new Rabbit();

  rbt.createComps("#mydarwer", {
    onClose() {
      $drawer.visible("#mydarwer");
    },
  });
  showDrawer = () => {
    $drawer.visible("#mydarwer");
  };
</script>
```

方向

组件提供了 4 个不同的打开方向，通过设置属性 `placement` 可以更改方向。默认为 `right`

```js
      const rbt = new Rabbit();

      rbt.createComps("#mydarwer", {
          placement: 'left' // 'top' 'bottom' 'right'
          onClose() {
              $drawer.visible("#mydarwer");
          },
      });
```

在当前父容器下打开

drawer 打开后是显示在整个页面的，而不会显示在 `<div data-component="drawer"></div>` 其父容器里，如果要让其显示在里面则通过属性设置 `insideContainer` 为 `true` 即可

```html
<style>
    #mydarwer {
        position: relative;
        width: 500px;
        height: 200px;
        padding: 48px;
        overflow: hidden;
        text-align: center;
        background: #fafafa;
        border: 1px solid #ebedf0;
        border-radius: 2px;
    }
</style>

<button onclick="showDrawer()">显示</button>

<div data-component="drawer" id="mydarwer">
  <div slot="header">基础抽屉</div>
  <div slot="content">
    <p>一些内容...</p>
    <p>一些内容...</p>
    <p>一些内容...</p>
  </div>
</div>

<script>
  const rbt = new Rabbit();

  rbt.createComps("#mydarwer", {
    insideContainer: true,
    onClose() {
      $drawer.visible("#mydarwer");
    },
  });
  showDrawer = () => {
    $drawer.visible("#mydarwer");
  };
</script>
```

不添加标题

当你不需要标题到时候, 你还可以去掉标题，只需将 `slot="header"` 去掉即可

```html
<div data-component="drawer" id="mydarwer">
  <div slot="content">
    <p>一些内容...</p>
    <p>一些内容...</p>
    <p>一些内容...</p>
  </div>
</div>
```

抽屉的页脚

显示抽屉页脚并添加内容，比如提交按钮和取消按钮

```html
<div data-component="drawer" id="mydarwer">
  <div slot="header">基础抽屉</div>
  <div slot="content">
    <p>一些内容...</p>
    <p>一些内容...</p>
    <p>一些内容...</p>
  </div>
</div>
<div slot="footer">
  <div style="text-align:right;">
    <button>取消</button>
    <button>提交</button>
  </div>
</div>
```

API

|  属性   | 说明  | 类型 |  默认值 |
|  ----  | ----  | ---- | ---  |
| visible | Drawer 初始是否可见 | Boolean | false |
| closable | 是否显示右上角的关闭按钮 | Boolean | true |
| mask | 是否展示遮罩 | Boolean | true |
| maskClosable | 点击蒙层是否允许关闭 | Boolean | true |
| width | 抽屉宽度。当 `placement` 为 `top` 或 `bottom` 时抽屉宽度自动变为高度| String | 256px |
| className | 设置抽屉容器.rbt-drawer-wrap的类名 如果使用建议样式都添加 `!important`| string | - |
| placement | 抽屉的方向 `top`/`bottom`/`right`/`left` | String | `right` |
| keyboard | 是否支持键盘 esc 关闭 | Boolean | true |

Drawer events

|  事件名   | 说明  | 返回值 |
|  ----  | ----  | ---- |
| onClose | 点击遮罩层或右上角叉或esc键关闭的回调 | 无 |

Drawer slot

|  名称   | 说明  |
|  ----  | ----  |
| header | 自定义标题栏内容 |
| content | 自定义抽屉主体内容 |
| footer | 自定义抽屉的页脚内容 |

另外还提供了控制抽屉显示隐藏的方法

- $drawer.visible(el)

参数 `el` 为抽屉的父容器
