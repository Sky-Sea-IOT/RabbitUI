<p align="center">
    <a href="https://github.com/niu-grandpa/RabbitUI">
        <img width="200" src="./assets/logo.svg">
    </a>
</p>

English | [简体中文](./README.md)

<h1>
Rabbit UI
    <h3>A library of UI components built on TypeScript</h3>
</h1>

> The project is still in production, with a lot of documentation, functionality, and code to work on

### Features

- Does not rely on any third party framework, the underlying code is based on native JavaScript code

- It can be used directly with Vue, React or other existing projects without restriction

- Rich components and features to meet most site scenarios

- Friendly API, free and flexible use of space

- Careful, beautiful UI

-Documentation in detail

### Install

- Using npm:

```text
npm install rabbitui --save
```

- Using a script tag for global use:

Import the file directly in the browser using the script and link tags, and use the global variable `Rabbit`.

> Note: Before you can introduce rabbit.min.js you need to introduce two dependencies yourself [popper.js](https://popper.js.org/) and [moment.js](http://momentjs.com/)

```html
<!--import the style-->
<link rel="stylesheet" href="dist/styles/rabbit.css">
<!--import RabbitUI -->
<script type="text/javascript" src="rabbit.min.js"></script>
```

## Usage

Browser environment example

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
     <!--import the style-->
    <link rel="stylesheet" href="dist/styles/rabbit.css">
</head>
    
<body>
    <r-alert type="success" message="Success Text"></r-alert>
    <r-tooltip content="this is the prompt text">When you mouse over the text, a bubble box will appear</r-tooltip>
</body>
    
<!--import Popper.js-->
<script type="text/javascript" src="https://unpkg.com/@popperjs/core@2"></script>
<!--import Moment.js-->
<script type="text/javascript" src="moment.js"></script>
<!--import Rabbit.js-->
<script type="text/javascript" src="rabbit.min.js"></script>
<script>
    const Alert = new Rabbit.Alert();   
    const Tooltip = new Rabbit.Tooltip();  
</script>
</html>
```

NPM environment

It is recommended to use NPM for installation, enjoy the convenience of the ecosystem and tools, and work well with Webpack. Of course, we also recommend using ES2015.

```js
import Rabbit from 'rabbitui';

const Alert = new Rabbit.Alert();   
const Tooltip = new Rabbit.Tooltip();  
```

Using css via import:

```js
import 'rabbitui/dist/styles/rabbit.css';
```

## Import as needed

With the help of [babel-plugin-import](https://github.com/ant-design/babel-plugin-import), you can load components on demand and reduce file size. First install and configure it in file '.babelrc ':

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

Then import the components as needed to reduce the size:

```js
import { Alert, Message } from 'rabbitui';
```

#### Especially remind

-According to the need to still need to import the reference style that the **main js** or the root component `import 'rabbitui/dist/styles/rabbit. CSS';`

## Browser Support

Modern browsers and Internet Explorer 10+.

## Related links

- [TypeScript](https://www.tslang.cn/)
- [Webpack](http://webpack.github.io/)
- [Iconfont](https://www.iconfont.cn/)
- [ViewUI](https://www.iviewui.com/)
- [Ant Design](https://ant.design/index-cn)
- [Ant Design of Vue](https://2x.antdv.com/docs/vue/introduce-cn/)
- [Element](https://element.eleme.cn/)
- [Element-angular](https://element-angular.faas.ele.me/guide/install)

## Contribute

If you wish to participate in contribution, welcome [Pull Request](https://github.com/vueComponent/ant-design-vue/pulls) or email contact 2864103063@qq.com, the contribution guide has not yet been produced

## LICENSE

[MIT](https://github.com/niu-grandpa/RabbitUI/blob/master/LICENSE)