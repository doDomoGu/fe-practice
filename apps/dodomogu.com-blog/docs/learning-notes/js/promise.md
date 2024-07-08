# 03 Promise

## 什么是 Promise

### 异步的逻辑

JavaScript 是一种单线程编程语言，意味着同一个时间只能执行一个任务。

- 优点: 单线程语言的代码是顺序执行的，实现起来比较简单，不用担心并发问题。
- 缺点: 只要有一个任务耗时较长，如网络请求、I/O 操作等任务，后续的任务就得排队等着，会阻塞整个程序的执行。

为了解决这个问题，JavaScript 内部采用了 [事件循环(Event Loop)](https://zhuanlan.zhihu.com/p/663694585) 机制，使用宏任务、微任务、任务队列、调度来实现异步编程。

### 为什么会有微任务

- 主线程执行消息队列的宏任务，粒度有点不够，微任务的时效性强；
- 微任务可以改变当前的编程模型；
- 如果数据量大，可以解决一些异步时机不可控的问题。

### 异步编程的发展

浏览器中 JavaScript 异步编程的发展可以分为四个阶段  
1.回调函数 callback
2.Promise
3.Generator
4.async/await

### 回调函数

> 回调函数非常简单容易理解和实现，缺点不利于代码的维护和阅读，各个部分之间高度耦合，还会造成回调地狱。
> 以实现红绿灯为例

```js
function red() {
  console.log('red')
}

function green() {
  console.log('green')
}

function yellow() {
  console.log('yellow')
}

const light = (timer, light, callback) => {
  setTimout(() => {
    switch (light) {
      case 'red':
        red()
        break
      case 'green':
        green()
        break
      case 'yellow':
        yellow()
        break
    }
    callback()
  }, timer)
}

const work = () => {
  task(3000, 'red', () => {
    task(1000, 'green', () => {
      task(2000, 'yellow', work)
    })
  })
}
work()
```

## Promise/A+ 规范

### 2.1111

### 2.2222

## 异步的进一步思考与实现
