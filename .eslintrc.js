const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
    "parser": "babel-eslint",
    // 指定解析器选项
    "parserOptions": {
        // 启用ES8语法支持
        "ecmaVersion": 2017,
        // module表示ECMAScript模块
        "sourceType": "module",
        // 使用额外的语言特性
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "modules": true,
        }
    },
    // 指定脚本的运行环境
    "env": {
        "browser": true,
        "jquery": true,
        "node": true,
        "commonjs": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier"
    ],
    "plugins": [
        "react",
        "react-hooks"
    ],
    // 别人可以直接使用你配置好的ESLint
    "root": true,
    // 启用的规则及其各自的错误级别
    // 每个规则对应的0，1，2分别表示off, warning, error三个错误级别
    "rules": {
        // 定义了变量却没有在代码中使用，这是防止产生多余没用的变量
        "no-unused-vars": OFF,

        // 禁用 console
        "no-console": OFF,

        // 禁用未声明的变量
        "no-undef": OFF,

        "no-useless-escape": OFF,

        "react/no-deprecated": OFF,

        "react/no-find-dom-node": OFF,

        "react/display-name": OFF,

        "react/prop-types": OFF,

        "react-hooks/rules-of-hooks": ERROR,

        "react-hooks/exhaustive-deps": WARN,

        "react/jsx-key": WARN,

        "no-case-declarations": WARN,

        "react/jsx-uses-react": OFF,
        "react/react-in-jsx-scope": OFF,
    }
};
