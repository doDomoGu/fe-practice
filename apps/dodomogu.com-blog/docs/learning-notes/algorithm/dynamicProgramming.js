const fib = function(n) {
  if(n < 2) {
    return n
  }

  let pre = 0, next = 0,result = 1
  for( let i = 2; i <= n; i++) {
    pre = next
    next = result
    result = pre + next
  }
  return result
}

console.time('遍历')
for(let i = 1; i <= 100; i++) {
  console.log(`${i} : ${fib(i)}`)
}
console.timeEnd('遍历')


let cache = []

const fib2 = function(n) {
  let result = 0
  if(cache[n] != undefined) {
    result = cache[n]
  } else {
    if(n < 2) {
      result = n
    } else {
      result = fib2(n-1) + fib2(n-2)
    }
    cache[n] = result
  }
  return result
}

console.time('递归')
for(let i = 1; i <= 100; i++) {
  console.log(`${i} : ${fib2(i)}`)
}
console.timeEnd('递归')

