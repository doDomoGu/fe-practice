const { add10 } = require('../utils/func.js')

describe('"add10" - function test', () => {
  test('case 1', () => {
    // 测试用例的输入值
    const inputValue = {
      number: 9
    }

    // 预期值
    const expectValue = 19

    expect(add10(inputValue.number)).toBe(expectValue)
    // expect(add10(8)).toBe(18)
  })

  const caseList = [
    {
      inputValue: {
        number: 9
      },
      expectValue: 19
    },
    {
      inputValue: {
        number: 100
      },
      expectValue: 100
    },
    {
      inputValue: {
        number: 5
      },
      expectValue: 15
    },
    {
      inputValue: {
        number: 10
      },
      expectValue: 10
    }
  ]

  caseList.forEach((caseItem, idx) => {
    test(`case ${idx + 2}`, () => {
      expect(add10(caseItem.inputValue.number)).toBe(caseItem.expectValue)
    })
  })
})
