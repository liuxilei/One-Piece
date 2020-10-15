### react 项目 demo

-   技术栈：react 全家桶(redux、react-redux、redux-saga、redux-thunk、redux-logger)
-   新增集成工具 immutable、styled-components 使用
-   支持 less、sass 编译、postcss 添加 css 前缀
-   配合 eslint 检测代码质量
-   集成 antd、阿里字体、g6、echarts、handsontable 等第三方库

##### 本地 mock 数据

    npm install http-server -g

##### Config

    webpack devServer配置代理 /api/*

##### Usage:

    http-server -p 1234(public目录下起一个1234端口服务)

##### todo:

-   public 下 api 文件下的资源请求不到
-   favicon.icon 请求不到
-   重新搭建项目
-   添加测试用例
-   全面转换为 typescript
