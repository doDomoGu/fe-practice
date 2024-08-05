export default class Collection {
  collection = []

  constructor(classObj) {
    this.classObj = classObj
  }

  add() {
    this.collection.push(new this.classObj(...arguments))
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
