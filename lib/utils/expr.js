// https://baidu.github.io/san/tutorial/template/#%E8%A1%A8%E8%BE%BE%E5%BC%8F

// <!-- 普通变量 -->
// <p>{{name}}</p>

// <!-- 属性访问 -->
// <p>{{person.name}}</p>
// <p>{{persons[1]}}</p>

// <!-- 一元否定 -->
// <p>{{!isOK}}</p>
// <p>{{!!isOK}}</p>

// <!-- 一元取负 -->
// <p>{{-num1 + num2}}</p>

// <!-- 二元运算 -->
// <p>{{num1 + num2}}</p>
// <p>{{num1 - num2}}</p>
// <p>{{num1 * num2}}</p>
// <p>{{num1 / num2}}</p>
// <p>{{num1 + num2 * num3}}</p>

// <!-- 二元关系 -->
// <p>{{num1 > num2}}</p>
// <p>{{num1 !== num2}}</p>

// <!-- 三元条件 -->
// <p>{{num1 > num2 ? num1 : num2}}</p>

// <!-- 括号 -->
// <p>{{a * (b + c)}}</p>

// <!-- 数值 -->
// <p>{{num1 + 200}}</p>

// <!-- 字符串 + 三元条件 -->
// <p>{{item ? ',' + item : ''}}</p>

// <!-- 数组字面量 -->
// <x-list data="{{ persons || [] }}" />

// <!-- 对象字面量 -->
// <x-article data="{{ {title: articleTitle, author: user} }}" />

// <!-- 方法调用 -->
// <p>{{max(num1, num2)}}</p>

module.exports = [
    // 普通变量
    'Identifier',
    // 属性访问
    'MemberExpression',
    // 一元否定
    'UnaryExpression',
    // 二元运算
    'BinaryExpression',
    // 条件
    'ConditionalExpression',
    // 对象
    'ObjectExpression',
    // 方法调用
    'CallExpression',
    // 数组
    'ArrayExpression'
]