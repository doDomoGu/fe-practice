const quickSort = function(arr) {
  // 1.对当前数组做基线条件定义  在数组中找到一个值作为基线
  // 2.根据基线条件对主体数组进行拆分，分别对前后两项进行基线条件定义
  // 3.再回到第一步
  // 4.退出条件 一 只剩下基线本身


  // 4. 只剩下基线本身 
  if(arr.length < 2) {
    return arr
  }

  // 1. 计算基线
  let pivotIndex = Math.floor(arr.length / 2) 
  let pivot = arr.splice(pivotIndex,1)[0]

  // 2. 拆分
  let left = []
  let right = []

  for(let i = 0; i < arr.length; i++){
    if(arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  // 3. 回到第一步 - 递归
  return quickSort(left).concat([pivot], quickSort(right))
}


const randomArr = function() {
  const nums = [1,2,3,4,5,6,7,8,9,10]
  const len = parseInt(Math.random() * 10) + 100
  let ret = []

  for(let i = 0; i < len; i++){
    ret.push(nums[parseInt(Math.random()* 10)])
  }
  return ret
}


const run = function() {
  console.log(' ')
  console.log('========')
  console.time('random')
  const oriArr = randomArr()
  console.timeEnd('random')
  console.log(oriArr.length,oriArr)
  console.log('--------')
  console.time('sort')
  const targetArr = quickSort(oriArr)
  console.timeEnd('sort')
  console.log(targetArr.length,targetArr)
}

run()
run()
run()

// console.log(quickSort([1,2,3,4,5,6]))
// console.log(quickSort([9,1,2,3,4,5,6]))
// console.log(quickSort([9,6,3,4,1,2,3,5,6,5]))