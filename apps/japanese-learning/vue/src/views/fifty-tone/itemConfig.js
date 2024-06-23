const config = [
  ['a', 'あ', 'ア'],
  ['i', 'い', 'イ'],
  ['u', 'う', 'ウ'],
  ['e', 'え', 'エ'],
  ['o', 'お', 'オ'],
  ['ka', 'か', 'カ'],
  ['ki', 'き', 'キ'],
  ['ku', 'く', 'ク'],
  ['ke', 'け', 'ケ'],
  ['ko', 'こ', 'コ'],
  ['sa', 'さ', 'サ'],
  ['shi', 'し', 'シ'],
  ['su', 'す', 'ス'],
  ['se', 'せ', 'セ'],
  ['so', 'そ', 'ソ'],
  ['ta', 'た', 'タ'],
  ['chi', 'ち', 'チ'],
  ['tsu', 'つ', 'ツ'],
  ['te', 'て', 'テ'],
  ['to', 'と', 'ト'],
  ['na', 'な', 'ナ'],
  ['ni', 'に', 'ニ'],
  ['nu', 'ぬ', 'ヌ'],
  ['ne', 'ね', 'ネ'],
  ['no', 'の', 'ノ'],
  ['ha', 'は', 'ハ'],
  ['hi', 'ひ', 'ヒ'],
  ['fu', 'ふ', 'フ'],
  ['he', 'へ', 'ヘ'],
  ['ho', 'ほ', 'ホ'],
  ['ma', 'ま', 'マ'],
  ['mi', 'み', 'ミ'],
  ['mu', 'む', 'ム'],
  ['me', 'め', 'メ'],
  ['mo', 'も', 'モ'],
  ['ya', 'や', 'ヤ'],
  ['i', 'い', 'イ'],
  ['yu', 'ゆ', 'ユ'],
  ['e', 'え', 'エ'],
  ['yo', 'よ', 'ヨ'],
  ['ra', 'ら', 'ラ'],
  ['ri', 'り', 'リ'],
  ['ru', 'る', 'ル'],
  ['re', 'れ', 'レ'],
  ['ro', 'ろ', 'ロ'],
  ['wa', 'わ', 'ワ'],
  ['i', 'い', 'イ'],
  ['u', 'う', 'ウ'],
  ['e', 'え', 'エ'],
  ['wo', 'を', 'ヲ'],
  ['n', 'ん', 'ン']
  // ['ga','が','ガ'],
  // ['gi','ぎ','ギ'],
]

const tableData = ((config) => {
  const repeatIdx = [7 * 5 + 1, 7 * 5 + 3, 9 * 5 + 1, 9 * 5 + 2, 9 * 5 + 3]

  let data = []
  for (let i = 0; i < 10; i++) {
    let dataLine = []
    for (let j = 0; j < 5; j++) {
      const id = i * 5 + j
      const item = config[id]
      dataLine.push({
        id,
        hiragana: item[1],
        katakana: item[2],
        romaji: item[0],
        isRepeat: repeatIdx.includes(id)
      })
    }
    data.push(dataLine)
  }
  return data
})(config)

export { config, tableData }