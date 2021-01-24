<p align="center">
    <a href="https://github.com/niu-grandpa/RabbitUI">
        <img width="200" src="./assets/logo.svg">
    </a>
</p>

简体中文 | [English](./README.en-US.md)

<h1>
Rabbit UI
    <h3>一个基于 TypeScript 构建的UI组件库</h3>
</h1>

> 目前项目还处于制作阶段，还有许多的文档接受、功能和代码待完善

### 特性

- 不依赖任何第三方框架，底层基于原生 Javascript 代码编写

- 基本可以不受限制的直接在 Vue、React或者其他现有项目配合使用

- 丰富的组件和功能，满足大部分网站场景

- 友好的 API ，自由灵活地使用空间

- 细致、漂亮的 UI

- 事无巨细的文档

### 安装

- 使用 npm

```text
npm install rabbitui --save
```

- 浏览器引入

在浏览器中使用 script 和 link 标签直接引入文件，并使用全局变量 `Rabbit`。

> 注意：引入 rabbit.min.js 前你需要自行引入两个依赖插件 [popper.js](https://popper.js.org/) 和 [moment.js](http://momentjs.com/)

```html
<!--引入样式库-->
<link rel="stylesheet" href="dist/styles/rabbit.css">
<!--引入脚本-->
<script type="text/javascript" src="rabbit.min.js"></script>
```

## 示例

浏览器环境示例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!--引入样式库-->
    <link rel="stylesheet" href="dist/styles/rabbit.css">
</head>
    
<body>
    <r-alert type="success" message="Success Text"></r-alert>
    <r-tooltip content="这里是提示文字">鼠标经过这段文字时，会显示一个气泡框</r-tooltip>
</body>
    
<!--引入 Popper.js-->
<script type="text/javascript" src="https://unpkg.com/@popperjs/core@2"></script>
<!--引入 Moment.js-->
<script type="text/javascript" src="moment.js"></script>
<!--引入 Rabbit.js-->
<script type="text/javascript" src="rabbit.min.js"></script>
<script>
    const Alert = new Rabbit.Alert();   
    const Tooltip = new Rabbit.Tooltip();  
</script>
</html>
```

NPM 环境

推荐使用 npm 来安装，享受生态圈和工具带来的便利，更好地和 webpack 配合使用，当然，我们也推荐使用 ES2015。

```js
import Rabbit from 'rabbitui';

const Alert = new Rabbit.Alert();   
const Tooltip = new Rabbit.Tooltip();  
```

引入样式：

```js
import 'rabbitui/dist/styles/rabbit.css';
```

## 按需引用

 借助插件 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)可以实现按需加载组件，减少文件体积。首先安装，并在文件 `.babelrc` 中配置：

```js
npm install babel-plugin-import --save-dev

// .babelrc
{
  "plugins": [["import", {
    "libraryName": "rabbitui",
    "libraryDirectory": "src/components"
  }]]
}
```

然后这样按需引入组件，就可以减小体积了：

```js
import { Alert, Message } from 'rabbitui';
```

#### 特别提醒

- 按需引用仍然需要导入样式，即在 **main.js** 或根组件执行 `import 'rabbitui/dist/styles/rabbit.css';`

## 浏览器支持

现代浏览器和Internet Explorer 10+。

## 相关链接

- [TypeScript](https://www.tslang.cn/)

- [Webpack](http://webpack.github.io/)
- [阿里巴巴矢量图标库](https://www.iconfont.cn/)
- [ViewUI](https://www.iviewui.com/)
- [Ant Design](https://ant.design/index-cn)

- [Ant Design of Vue](https://2x.antdv.com/docs/vue/introduce-cn/)
- [Element](https://element.eleme.cn/)
- [Element-angular](https://element-angular.faas.ele.me/guide/install)

## 如何贡献

如果你希望参与贡献，欢迎 [Pull Request](https://github.com/vueComponent/ant-design-vue/pulls)或者邮件联系 2864103063@qq.com ，贡献指南暂时还未制作

## LICENSE

[MIT](https://github.com/niu-grandpa/RabbitUI/blob/master/LICENSE)