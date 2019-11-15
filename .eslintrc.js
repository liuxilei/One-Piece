module.exports = {
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
    "plugins": [
        "react-hooks"
    ],
    // 别人可以直接使用你配置好的ESLint
    "root": true,
    // 启用的规则及其各自的错误级别
    // 每个规则对应的0，1，2分别表示off, warning, error三个错误级别
    "rules": {
        // 禁止条件表达式中出现赋值操作符
        "no-cond-assign": 2,

        // 要求使用 isNaN() 检查 NaN
        "use-isnan": 2,

        // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
        "no-unreachable": 2,

        // 禁止对 function 声明重新赋值
        "no-func-assign": 2,

        // 禁止出现空语句块
        "no-empty": 2,
        
        // 禁止出现重复的 case 标签
        "no-duplicate-case": 2,

        // 禁止对象字面量中出现重复的 key
        "no-dupe-keys": 2,

        // 禁止 function 定义中出现重名参数
        "no-dupe-args": 2, 

        // 禁用 debugger
        "no-debugger": 2,

        // 禁用 console
        "no-console": 1,

        // 禁用 alert、confirm 和 prompt
        "no-alert": 2,

        // 定义了变量却没有在代码中使用，这是防止产生多余没用的变量
        "no-unused-vars": 1,

        // 禁止 case 语句落空
        "no-fallthrough": 2,

        // 禁用 eval()
        "no-eval": 2,

        // 禁止对原生对象或只读的全局对象进行赋值
        "no-global-assign": 2,

        // 禁止在循环中出现 function 声明和表达式
        "no-loop-func": 2,

        // 禁用 __proto__ 属性
        "no-proto": 2,

        // 强制数组方法的回调函数中有 return 语句
        "array-callback-return": 2,

        //强制把变量的使用限制在其定义的作用域范围内
        "block-scoped-var": 2,

        // 缺少分号，行尾必须使用分号，这是为了在压缩代码的时候出现意外情况
        "semi": 0,

        // 强制使用骆驼拼写法命名约定
        "camelcase": 1,

        // 禁止函数 if ... else if ... else 的复杂度超过 20 指定程序中允许的最大环路复杂度
        "complexity": 2,

        // if 后必须包含 { ，单行 if 除外
        "curly": [2, "multi-line", "consistent"],

        // 必须使用 === 和 !== ，和 null 对比时除外
        "eqeqeq": [2, "always", { "null": "ignore" }],

        //强制使用一致的换行风格
        "linebreak-style": [2, "windows"],

        "react-hooks/rules-of-hooks": 2,
        "react-hooks/exhaustive-deps": 1
    }
};
