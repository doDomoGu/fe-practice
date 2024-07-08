# 任务 Tasks - 微任务 Microtasks - 队列 Queues - 调度 Schedules

> [原文转载翻译](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

以下面这段 Javascript 为例

```js
console.log('script start')

setTimeout(function () {
  console.log('setTimeout')
}, 0)

Promise.resolve()
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })

console.log('script end')
```

思考一下，日志的显示顺序是什么？

正确答案是: **script start**, **script end**, **promise1**, **promise2**, **setTimeout**, 但就浏览器支持而言，会有些不一致。
