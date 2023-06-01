### 技能清单

#### 熟练掌握 HTML、CSS，了解 CSS 预处理器 Sass、Less 的用法，熟悉 DIV+CSS 布局，能够通过多种布局方式实现页面显示效果，熟悉 CSS3.0 相关知识

+ HTML元素的基本语法和常用标签的用法；
  
  HTML元素是构成HTML文档的基本单元，它们决定了文档的结构和内容。HTML元素可以分为块级元素和内联元素两种，它们分别具有不同的默认显示方式和特性。
  以下是HTML中常见的一些元素：

  1. 标题元素：`<h1>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>`
  2. 段落元素：`<p>`
  3. 文本样式元素：`<b>`、`<i>`、`<u>`、`<s>`、`<strong>`、`<em>`、`<mark>`、`<small>`、`<sub>`、`<sup>`
  4. 超链接元素：`<a>`
  5. 图像元素：`<img>`
  6. 列表元素：`<ul>`、`<ol>`、`<li>`
  7. 表格元素：`<table>`、`<tr>`、`<th>`、`<td>`
  8. 表单元素：`<form>`、`<input>`、`<select>`、`<option>`、`<textarea>`9. 视频和音频元素：`<video>`、`<audio>`、`<source>`
  9.  框架元素：`<iframe>`
  10. 分割线元素：`<hr>`
  11. 标题元素：`<header>`、`<footer>`、`<nav>`、`<main>`、`<section>`、`<article>`
  12. 标记和引用元素：`<blockquote>`、`<q>`、`<cite>`、`<abbr>`、`<acronym>`
  13. 元数据元素：`<meta>`、`<title>`、`<link>`
  14. 列表元素：`<dl>`、`<dt>`、`<dd>`
  15. 文档语义元素：`<div>`、`<span>`、`<br>`、`<wbr>`、`<pre>`、`<code>`、`<samp>`、`<kbd>`、`<var>`

  需要注意的是，HTML元素的分类和特性会影响到它们的默认样式和行为，因此在进行HTML文档的编写和设计时，需要根据实际需要选择合适的元素，并进行样式和属性的设置。
+ CSS选择器和样式的基本语法和用法；
  选择器类型：标签选择器、类选择器、ID选择器、伪类选择器（元素的状态和位置）、组合选择器、后代选择器
+ 各种选择器的权重；
  - !important：具有最高的优先级，可以覆盖其他所有样式，但不推荐使用
  - 行内样式：直接在元素标签中使用style属性设置的样式，权重为1000
  - ID选择器：通过元素的ID属性进行选择的选择器，权重为100。
  - 类选择器、属性选择器、伪类选择器：通过类名、属性或状态进行选择的选择器，权重为10。
  - 标签选择器、伪元素选择器：通过元素的标签名或伪元素进行选择的选择器，权重为1。::after ::before
  - 通配符选择器、子元素选择器、相邻兄弟选择器、一般兄弟选择器：权重都为0，只有在与其他选择器组合时才会有权重。
+ 盒子模型和定位的基本概念和使用方法；
  盒子模型是用来描述HTML元素的布局模型，它由四个部分组成：内容区域、内边距、边框和外边距。以下是盒子模型的详细介绍：

  1、内容区域：元素的实际内容区域，例如文本、图片等。

  2、内边距：内容区域和边框之间的距离，用来控制元素内部的空白区域。内边距可以使用padding属性进行设置。

  3、边框：包围内容和内边距的线条，用来控制元素的边框样式和宽度。边框可以使用border属性进行设置。

  4、外边距：边框和相邻元素之间的距离，用来控制元素之间的空白区域。外边距可以使用margin属性进行设置。

  盒子模型在CSS中有两种模式：标准模式和怪异模式。在标准模式下，盒子模型的宽度和高度不包括内边距和边框，只包括元素的内容区域。在怪异模式下，盒子模型的宽度和高度包括内边距和边框。
+ 浮动和清除浮动的原理和使用方法；
  - 清除浮动的方法
    空元素、overflow、伪元素清除浮动
  - 如何实现两栏布局
  - 如何实现三栏布局
    左右浮动、flex布局、grid布局
+ 响应式设计和移动端适配的基本概念和方法。
  - 响应式设计的方法：媒体查询、流式布局、弹性盒子布局
  - 移动端的其他优化：压缩文件、使用cdn、减少网络请求、使用html5和css3实现动画效果
+ Sass和Less的基本语法和变量、函数、混合器等高级功能的使用方法；
  使用缩进来表示层级关系、使用$符号来定义变量、继承@extend、@import引入实现模块化
+ Sass和Less的编译原理和工具的使用方法；
+ Sass和Less的模块化管理和代码组织的方法。
+ 块级元素和内联元素的基本概念和区别；
  - 块级元素 在页面中以块的形式展现，独占一行；如果没有设置宽度属性，它会自动填满其父元素的宽度(不用每次都给子元素设置width100%);
+ 盒子模型的概念和使用方法；
  盒子模型（Box Model）是CSS中的一个重要概念，用于描述元素在页面中的布局和排版。每个HTML元素都被表示为一个矩形盒子，包括内容区域、内边距、边框和外边距四个部分。
  盒子模型有两种渲染模式：标准模式和怪异模式。标准模式是指元素的宽度和高度不包括内边距和边框，而怪异模式是指元素的宽度和高度包括内边距和边框。
+ BFC 块级格式化上下文
  BFC（Block Formatting Context）是CSS中的一个重要概念，用于解决元素在布局时出现的一些问题，如浮动、外边距合并等。BFC是一个独立的渲染区域，具有一定的布局规则和限制。
  特征：
  + 内部的盒子会在垂直方向上一个接一个地放置，形成一个垂直的布局。
  + 盒子之间的垂直距离由它们的margin决定，相邻盒子的margin会发生外边距合并。
  + BFC的区域不会与浮动元素重叠。
  + BFC的区域不会被浮动元素覆盖，而是会自动调整位置以避开浮动元素。
  + 内部的Box会在垂直方向，由上到下一个接一个地放置。
  + 同一个BFC的两个垂直相邻的元素margin会发生重叠，同时会取margin的最大值做重叠部分。
  + BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
  + BFC的不会与已经float的元素发生重叠。
  + 计算BFC的高度时，浮动元素也参与计算。
  应用：
  + 清除浮动：在一个容器内包含浮动元素时，可以将该容器设置为BFC，以清除浮动，使得容器的高度能够正常被计算。这样可以避免出现高度塌陷的情况。
  + 防止 margin 重叠：在两个相邻的元素之间有 margin 时，如果它们的 margin 相遇，就会发生 margin 重叠。
  + 实现多列布局：可以使用多个BFC容器来实现多列布局
  + 避免元素被覆盖：在一个容器内，如果有元素设置了position属性为absolute或fixed，这些元素会脱离文档流，可能会导致与其他元素重叠。
  如何设置：
  + 使用overflow属性：将一个元素的overflow属性设置为hidden、auto或scroll，可以创建一个BFC。
  + 使用float属性：将一个元素设置为浮动元素，可以创建一个BFC
  + 使用display属性：将一个块级元素的display属性设置为inline-block、table-cell等，可以创建一个BFC。
  + 使用position属性：将一个元素的position属性设置为absolute或fixed，也可以创建一个BFC。
+ 浮动、定位和弹性布局等多种布局方式的原理和使用方法；
+ 网格布局和Flexbox布局的使用方法。
+ CSS3.0的新特性和新属性的使用方法；
  css3
  + 边框和背景: border-radius box-shadow background-size
  + 文字效果：text-shadow text-overflow word-wrap word-break
  + 变换和动画：transform、animation、transition
  + 布局方式：flex布局、grid布局
  + 其他：@media查询 calc 计算属性
+ CSS3.0的动画、过渡、变形等高级功能的使用方法；transform animation transition
+ CSS3.0的响应式设计和媒体查询的使用方法。

#### 熟悉 JavaScript 相关API，熟悉 ES6 相关新特性，对面向对象有一定的认识和理解；

JavaScript是一种常用的脚本语言，用于网页交互和动态效果实现。以下是JavaScript相关API和ES6新特性的介绍：

1. JavaScript相关API

- DOM API: Document Object Model API，用于操作HTML文档中的元素和属性，包括获取、创建、添加、删除等操作。
- BOM API: Browser Object Model API，用于操作浏览器窗口和页面，包括窗口大小、位置、历史记录、定时器等操作。
- AJAX API: Asynchronous JavaScript and XML API，用于实现异步数据交互，包括XMLHttpRequest对象和fetch函数等。
- Canvas API: 用于绘制图形和动画，可以实现复杂的图形效果和游戏动画等。
- Web Storage API: 用于在浏览器中存储数据，包括localStorage和sessionStorage两种方式。

2. ES6相关新特性

- let和const: 用于声明变量和常量，let声明的变量具有块级作用域，const声明的常量不可修改。
- 箭头函数: 简化函数声明的语法，可以减少代码量和提高代码可读性。
- 模板字符串: 用于拼接字符串和表达式，可以方便地插入变量和执行函数。
- 解构赋值: 可以将数组或对象的值赋给变量，可以方便地获取和操作数组或对象的属性。
- 扩展运算符: 可以将数组或对象展开成单个值，或者将多个值组合成数组或对象。
- Promise: 用于处理异步操作，可以方便地处理回调函数的嵌套和错误处理。
- async/await: 用于简化Promise的使用，可以以同步的方式处理异步操作。
- 类和继承: 用于实现面向对象编程，可以方便地定义类和继承关系，实现代码的复用和封装。

面向对象
概念：面向对象（Object-Oriented）是一种编程模式和思想，它将程序中的数据和操作数据的方法组织成一个相互依存、相互作用的对象，通过对象的封装、继承和多态等特性实现数据和行为的抽象和复用。面向对象的编程思想将现实世界中的实体和关系映射到程序中，通过对象的属性和方法来描述实体的特征和行为，通过对象之间的关联和继承来描述实体之间的关系和特征。

面向对象（Object-Oriented）是一种编程模式和思想，它将程序中的数据和操作数据的方法组织成一个相互依存、相互作用的对象，通过对象的封装、继承和多态等特性实现数据和行为的抽象和复用。面向对象的编程思想将现实世界中的实体和关系映射到程序中，通过对象的属性和方法来描述实体的特征和行为，通过对象之间的关联和继承来描述实体之间的关系和特征。

面向对象的编程模式主要包括以下几个核心概念：

- 1. 类（Class）：用于描述一类对象的共同特征和行为，包括属性和方法等。

- 2. 对象（Object）：类的实例化对象，包含类中定义的属性和方法，可以通过类来创建多个对象。

- 3. 属性（Property）：用于描述对象的特征和状态，包括基本类型和引用类型等。

- 4. 方法（Method）：用于描述对象的行为和操作，可以访问和修改对象的属性，实现对象的封装和复用。

- 5. 封装（Encapsulation）：将对象的属性和方法封装起来，对外部隐藏对象的实现细节，实现数据的保护和安全性。

- 6. 继承（Inheritance）：通过继承关系，实现类和对象之间的共性和特性的复用，减少代码的冗余和重复。

- 7. 多态（Polymorphism）：同一方法可以根据不同的对象实现不同的行为和操作，提高代码的灵活性和可扩展性。

面向对象的编程思想可以帮助程序员更好地组织和管理代码，提高代码的可读性、可维护性和可扩展性，实现代码的复用和可靠性。需要注意的是，面向对象不是一种语言或技术，而是一种编程思想和模式，可以应用于各种编程语言和场景中。

```
// 定义一个Person类
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old.`);
  }
}

// 定义一个Student类，继承自Person类
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`I'm studying in grade ${this.grade}.`);
  }
  sayMyselfHello() {
    super.sayHello()
    console.log('xixi')
  }
}

// 创建一个Person对象
const person = new Person("Tom", 20);
person.sayHello(); // 输出：Hello, my name is Tom, I'm 20 years old.

// 创建一个Student对象
const student = new Student("Jerry", 18, 10);
student.sayHello(); // 输出：Hello, my name is Jerry, I'm 18 years old.
student.study(); // 输出：I'm studying in grade 10.
student.sayMyselfHello()
```

#### 熟悉 Ajax 原理和封装方法，熟悉 TCP / IP协议以及 HTTP 协议，了解常见的状态码；

Ajax（Asynchronous JavaScript and XML）即异步 JavaScript 和 XML，是一种无需重新加载整个页面的技术，通过 JavaScript 与服务器进行数据交互，实现局部刷新的效果。Ajax 技术的核心是 XMLHttpRequest 对象，它可以通过 JavaScript 发送 HTTP 请求和接收 HTTP 响应，实现异步通信。

Ajax封装

```
export default class Request {
  static getRequest({
    url,
    method = 'GET',
    data = {},
    headers = {},
    timeout = 0
  }) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, url)
      xhr.timeout = timeout
      xhr.setRequestHeader('appkey', baseConfig.APPKEY)
      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key])
      })
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            resolve(JSON.parse(xhr.response))
          } catch (err) {
            reject(new Error('Invalid JSON response'))
          }
        }
      }

      xhr.onerror = () => {
        reject(new Error('Request failed'))
      }

      xhr.ontimeout = () => {
        reject(new Error('Request time out'))
      }
      if (['GET', 'HEAD'].includes(method)) {
        xhr.send()
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(data)
      }
    })
  }
}
```

TCP/IP 协议是一种网络通信协议，它定义了数据如何在网络中传输和路由。TCP/IP 协议是 Internet 上数据通信的基础，它包括两个分层协议：TCP（传输控制协议）和 IP（互联网协议）。

HTTP（Hypertext Transfer Protocol）协议是一种基于 TCP/IP 协议的应用层协议，用于在 Web 浏览器和 Web 服务器之间传输数据。HTTP 协议主要定义了客户端和服务器之间的通信格式和方式，包括请求方法、请求头、响应状态码等。

常见的 HTTP 状态码有以下几种：

+ 2xx 成功：表示服务器成功处理了请求，如 200 OK 表示请求成功，201 Created 表示资源被创建成功等。
+ 3xx 重定向：表示需要进一步操作以完成请求，如 301 Moved Permanently 表示所请求的资源已永久移动到新位置。
+ 4xx 客户端错误：表示客户端发送的请求有误，如 400 Bad Request 表示请求无效，401 Unauthorized 表示未经授权，403 Forbidden 表示拒绝访问，404 Not Found 表示请求的资源不存在等。
+ 5xx 服务器错误：表示服务器无法完成请求，如 500 Internal Server Error 表示服务器内部错误，503 Service Unavailable 表示服务器暂时无法处理请求等。

开发项目时设置代理

create-react-app 项目中，两种方式

+ package.json 中添加 proxy
```
proxy: ''http://se.talelin.com/v1'
```

+ 借助中间件 http-proxy-middleware
setupProxy.js (需要放在src目录下，否则无法生效)

```
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://se.talelin.com/v1',
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  )
}
```
*git撤销commit: git reset --soft HEAD^*

#### 熟练使用Vue，结合 ElementUI、Vant 等前端库，能够快速实现页面的开发，了解Vue的实现原理

##### vue2
+ Vue.js如何实现响应式数据绑定？
  - 1、Object.defineProperty()方法
  Vue.js使用Object.defineProperty()方法实现响应式数据绑定。该方法可以定义一个对象的属性，以便在读取和设置属性值时触发一些逻辑操作。在Vue.js中，数据对象中的每个属性都被定义为一个可观察的属性，并且属性的读取和设置都被拦截，以便在属性值发生变化时触发视图的更新
  - 2、依赖追踪
    Vue.js通过依赖追踪来自动追踪数据对象属性的依赖关系。当模板中使用了数据对象属性时，Vue.js会自动建立一个依赖关系，将模板和数据对象属性联系起来。当数据对象属性发生变化时，Vue.js会自动触发视图的更新。
  - 3、派发更新
    Vue.js通过触发数据对象属性的setter函数来派发更新。当数据对象属性发生变化时，Vue.js会调用属性的setter函数，并通知相关的依赖关系进行更新。这样，Vue.js就能够保证数据和视图的自动同步。

+ Vue.js中的生命周期钩子有哪些？
+ Vue.js中的computed和watcher有什么区别？
+ Vue.js中的组件通信有哪些方式？
+ Vue.js中的路由有哪些功能？
+ Vue.js中的v-model指令有什么作用？
+ Vue.js如何实现懒加载？

##### vue3
+ vue3如何实现响应式数据绑定？
