export default class Collection {
  collection = []

  constructor(classObj, maxCount = 1000) {
    this.classObj = classObj
    this.maxCount = maxCount
  }

  add() {
    // 判断是否要添加
    if (this.collection.length >= this.maxCount) return
    this.collection.push(
      new this.classObj({ ...arguments[0], id: this.collection.length })
    )
  }

  update(ctx) {
    for (let i = 0; i < this.collection.length; i++) {
      this.collection[i].update(ctx)
    }
  }

  paint(ctx) {
    for (let i = 0; i < this.collection.length; i++) {
      this.collection[i].paint(ctx)
    }
  }
}
