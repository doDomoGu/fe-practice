function Singleton() {
  if (typeof Singleton.instance === 'object') {
    return Singleton.instance
  }

  this.property1 = 'value1'
  this.property2 = 'value2'
  this.property3 = 'value3'
  this.count = 0
  this.add = function () {
    this.count++
  }

  Singleton.instance = this
}

// const instance1 = new Singleton();
// const instance2 = new Singleton();

export default Singleton
