const { add10 } = require('./func.js')

describe('"add10" - function test', () => {
  test('adsa;kd;asd', () => {
    // 测试用例的输入值
    const inputValue = {
      number: 9
    }

    // 预期值
    const expectValue = 19

    expect(add10(inputValue.number)).toBe(expectValue)
  })
})
