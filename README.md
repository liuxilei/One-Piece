### demo

> 实践用 demo

基于 webpack 搭建 react 开发环境，后续可能单独弄成`cli`

### Preview

在线预览：https://liuxilei.github.io/demos/#/

源代码： https://github.com/liuxilei/demos

### Technology

主要用到的技术：

-   React：MVVM 框架，用于构建前端界面。
-   Ant Design：基于 React 的组件库。
-   echarts: React 的图表库。
-   Less：CSS 预处理器，提供变量、计算、嵌套、Mixin、函数等。
-   sass: CSS 预处理器
-   styled-components: css in js
-   Webpack：打包前端项目，生成静态文件。
-   Jest：测试前后端项目，单元测试，API 测试等。
-   Typescript：为 JS 提供良好的类型检查功能，能编译出高质量的 JS 代码。
-   G6: 图可视化引擎
-   handsontable: 电子表格功能和外观的数据网格

### Start

```bash
# clone with Git Bash
$ git clone https://github.com/liuxilei/demos.git

# change directory
$ cd demos

# install dependencies
$ npm i

# serve with hot reload at localhost:4399
$ npm run start

# build for production
$ npm run build

# test something
$ npm run test
```

### others

```bash
# 本地 mock 数据
$ npm install http-server -g

# Config
$ webpack devServer配置代理 /api/*

#Usage:(public目录下起一个1234端口服务)
$ http-server -p 1234
```

##### TODO:

-   public 下 api 文件下的资源请求不到
-   favicon.icon 请求不到
-   重新搭建项目
-   添加测试用例
-   全面转换为 typescript

### License

[MIT](https://github.com/liuxilei/demos/blob/master/LICENSE)

Copyright(c) 2021 liuxilei
