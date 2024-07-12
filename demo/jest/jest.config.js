module.exports = {
  // 转译
  transform: {
    '^.+\\.vue': '@vue/vue3-jest',
    '^.+\\.js': 'babel-jest',
    '^.+\\.(t|j)sx?$': 'ts-jest'
  },
  // 覆盖哪些类型(扩展名)的文件
  moduleFileExtensions: ['vue', 'js', 'json', 'ts', 'jsx', 'tsx', 'node']
}
