module.exports = {
  semi: false, // 不要分号
  singleQuote: true, // 使用单引号
  useTabs: false, //使用 tab 缩进
  tabWidth: 2, //缩进
  trailingComma: 'none', //后置逗号，多行对象、数组在最后一行增加逗号
  arrowParens: 'avoid', //箭头函数只有一个参数的时候可以忽略括号
  bracketSpacing: true, //括号内部不要出现空格
  proseWrap: 'preserve', //换行方式 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  endOfLine: 'auto', // 结尾是 \n \r \n\r auto
  stylelintIntegration: false, //不让prettier使用stylelint的代码格式进行校验
  eslintIntegration: false, //不让prettier使用eslint的代码格式进行校验
  tslintIntegration: false, // 不让prettier使用tslint的代码格式进行校验
  htmlWhitespaceSensitivity: 'css'
}
