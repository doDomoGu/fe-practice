# Promise A+ 规范

> [官网引用](https://promisesaplus.com/)

##

```js
new Promise(function(resolve){ resolve() }).then(function(){ return new Promise((r)=>{r(4)}) }).then(function(r){ console.log(r) }) new Promise(function(resolve,reject){ resolve(2); }).then(function(r){ console.log(1) }).then(function(){ console.log(2) }).then(function(r){ console.log(3) });
```
