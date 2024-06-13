// @ts-nocheck

interface CreateStoreOptions {
  local: boolean
  expireTime: number
}

const CreateStore = function (
  opts: CreateStoreOptions = { local: true, expireTime: NaN }
) {
  this.local = opts.local || true
  this.expireTime = opts.expireTime || NaN
  this.observe()
}

CreateStore.prototype.observe = function () {
  const context = this

  this.__storage = new Proxy(
    {},
    {
      get(target, propKey, receiver) {
        let result
        if (context.local) {
          // 如果你选用的是，本地的存储方式，我直接调用一个API getItem
          result =
            context.getItem(propKey) || Reflect.get(target, propKey, receiver)
        } else {
          result = Reflect.get(target, propKey, receiver)
        }
        return result
      },
      set(target, propKey, value, receiver) {
        // 数据要劫持一下，因为我还有提供更通用的能力（maxLength, expireTime...）
        let _value = value
        // if(value instanceof Array && value.length > context.maxLength) {
        //     _value = value.slice(0, maxLength);
        // }

        if (context.expireTime) {
          // TODO...
        }

        if (context.local) {
          context.setItem(propKey, _value)
        }

        // if(context.shouldFetch) {
        //     // fetchingdata....
        //     // debounceRun() -> run()
        // }

        return Reflect.set(target, propKey, _value, receiver)
      }
    }
  )
}

CreateStore.prototype.getItem = function (type) {
  // 判断 window 是否存在

  let data
  if (typeof window !== 'undefined') {
    data = window[this.storageMethod].getItem(type)
  } else {
    data = null
  }
  let dataJson
  try {
    dataJson = JSON.parse(data)
  } catch (err) {
    throw new Error(err)
  }
  return dataJson
}

CreateStore.prototype.setItem = function (type, data) {
  const dataJson = JSON.stringify(data)

  if (typeof window !== 'undefined') {
    window[this.storageMethod].setItem(type, dataJson)
  }
}

// CreateStore 的 API， set, get
CreateStore.prototype.set = function (type, data) {
  this.__storage[`${this.bizKey}_${type}`] = data
}

CreateStore.prototype.get = function (type) {
  return this.__storage[`${this.bizKey}_${type}`]
}

const methodArr = ['pop', 'push', 'unshift', 'shift', 'reverse', 'splice']

methodArr.forEach((method) => {
  CreateStore.prototype[method] = function (type, ...rest) {
    if (!this.get(type)) {
      this.set(type, [])
    }

    if (!(this.get(type) instanceof Array)) {
      throw new Error('must be arr')
    }

    const dataList = this.get(type)
    // dataList.push(item);
    Array.prototype[method].apply(dataList, rest)
    this.set(type, dataList)
  }
})

// 组合寄生式继承
const CreateLocalStore = function (bizKey, ...rest) {
  CreateStore.apply(this, rest)
  this.bizKey = bizKey
  this.storageMethod = 'localStorage'
}

CreateLocalStore.prototype = Object.create(CreateStore.prototype)
CreateLocalStore.prototype.constructor = CreateLocalStore

const CreateSessionStore = function (bizKey, ...rest) {
  CreateStore.apply(this, rest)
  this.bizKey = bizKey
  this.storageMethod = 'sessionStorage'
}

CreateSessionStore.prototype = Object.create(CreateStore.prototype)
CreateSessionStore.prototype.constructor = CreateSessionStore

export { CreateStore, CreateLocalStore, CreateSessionStore }
