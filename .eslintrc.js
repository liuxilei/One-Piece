module.exports = {
    // 指定解析器
    'parse': 'babel-eslint',
    // 指定解析器选项
    "plugins": [
        "react-hooks"
    ],
    'parserOptions': {
        // 启用ES8语法支持
        'ecmaVersion': 2017,
        // module表示ECMAScript模块
        'sourceType': 'module',
        // 使用额外的语言特性
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true,
            'modules': true,
        }
    },
    // 指定脚本的运行环境
    'env': {
        'browser': true,
        'jquery': true,
        'node': true,
        'commonjs': true,
        'es6': true,
        'jest': true
    },
    // 别人可以直接使用你配置好的ESLint
    'root': true,
    // 启用的规则及其各自的错误级别
    'rules': {
        // 箭头函数的书写规则
        // @off 不限制
        'arrow-body-style': 2,

        // 箭头函数的圆括号使用规则
        // @off 不限制
        'arrow-parens': 0,

        // if else 的花括号换行规则
        // @off 不关心
        'brace-style': 0,

        // callback 之后必须立即 return
        // @off 没必要
        'callback-return': 0,

        // 变量名必须使用驼峰式
        // @off 暂不限制
        'camelcase': 0,

        // 对象的最后一项后面是否写逗号
        // @off 此项目不关心
        // @fixable 对于 PC 项目考虑兼容性时需要设置
        'comma-dangle': 0,

        // 逗号前后是否有空格
        // @off 不关心
        'comma-spacing': 0,

        // 逗号写在行首还是行尾
        // @off 不关心
        'comma-style': 0,

        // 禁止函数 if ... else if ... else 的复杂度超过 20
        'complexity': 2,

        // 使用方括号访问对象属性时，方括号前后的空格规则
        // @off 不关心
        'computed-property-spacing': 0,

        // this 的别名规则，只允许 self 或 that
        'consistent-this': [2, 'self', 'that'],

        // if 后必须包含 { ，单行 if 除外
        'curly': [2, 'multi-line', 'consistent'],

        // 必须使用 === 和 !== ，和 null 对比时除外
        'eqeqeq': [2, 'always', { 'null': 'ignore' }],

        // jsx 语法中，属性的值必须使用双引号
        'jsx-quotes': [2, 'prefer-double'],

        'linebreak-style': ["error", "windows"],

        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    }
};
