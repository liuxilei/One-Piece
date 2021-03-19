## DEMOS

> 实践用 demo

基于 webpack 搭建 react 开发环境，后续可能单独弄成`cli`

## Preview

在线预览：https://liuxilei.github.io/One-Piece/#/

源代码： https://github.com/liuxilei/One-Piece

## Technology

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

## Start

```bash
# clone with Git Bash
$ git clone https://github.com/liuxilei/One-Piece.git

# change directory
$ cd One-Piece

# install dependencies
$ npm i

# serve with hot reload at localhost:4399
$ npm run start

# install husky install
npx husky install 

# build for production
$ npm run build

# test something
$ npm run test
```

## Git 规范

使用 [commitlint](https://github.com/conventional-changelog/commitlint) 工具，常用有以下几种类型：

- feat ：新功能
- fix ：修复 bug
- chore ：对构建或者辅助工具的更改
- refactor ：既不是修复 bug 也不是添加新功能的代码更改
- style ：不影响代码含义的更改 (例如空格、格式化、少了分号)
- docs ： 只是文档的更改
- perf ：提高性能的代码更改
- revert ：撤回提交
- test ：添加或修正测试

## TODOS:

-   重新搭建项目
-   添加测试用例
-   全面转换为 typescript

## License

[MIT](https://github.com/liuxilei/One-Piece/blob/master/LICENSE)

Copyright(c) 2021 liuxilei
