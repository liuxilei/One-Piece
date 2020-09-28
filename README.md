### **react项目demo**

- 技术栈：react全家桶(redux、react-redux、redux-saga、redux-thunk、redux-logger)
- 新增集成工具 immutable、styled-components使用
- 支持less、sass编译、postcss添加css前缀
- 配合eslint检测代码质量
- 集成antd、阿里字体、g6、echarts、handsontable等第三方库


##### 本地mock数据
    npm install http-server -g

##### Config
    webpack devServer配置代理 /api/*

##### Usage:
    http-server -p 1234(public目录下起一个1234端口服务)

##### todo:

- public下api文件下的资源请求不到
- favicon.icon 请求不到
- 重新搭建项目
- 添加测试用例
- 全面转换为typescript
