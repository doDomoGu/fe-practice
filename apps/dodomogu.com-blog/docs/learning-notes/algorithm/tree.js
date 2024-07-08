const tree = {
  value: 'A',
  children: [{
    value: 'B',
    children: [{
      value: 'E'
    },{
      value: 'F'
    }]
  },{
    value: 'C'
  },{
    value: 'D',
    children: [{
      value: 'G'
    },{
      value: 'H'
    }]
  },
  {
    value: 'I',
    children: [{
      value: 'J'
    },{
      value: 'K'
    }]
  }]
}

// 深度优先 - 递归式
function dfs_DG(node) {
  // console.log(node.value)
  // 有子则子
  if(node.children){
    node.children.forEach(child => {
      dfs_DG(child)
    })
  }
}
// console.log('==深度优先搜索 - 递归式==')
// console.time('dfs_DG')
// for(let i = 0; i < 1000; i++){
//   dfs_DG(tree)
// }
// console.timeEnd('dfs_DG')

// 深度优先 - 遍历式 （使用栈）
function dfs_BL(node) {
  const stack = [node]
  while(stack.length > 0) {
    const current = stack.pop()
    // console.log(current.value)
    if(current.children){
      current.children.reverse().forEach(child=>{
        stack.push(child)
      })
    }
  }
}
// console.log('==深度优先搜索 - 遍历式==')
// console.time('dfs_BL')
// for(let i = 0; i < 1000; i++){
//   dfs_BL(tree)
// }
// console.timeEnd('dfs_BL')


// 广度优先 - 递归式
function bfs_DG(node, queue = [node]) {
  if(queue.length == 0) return
  const current = queue.shift()
  // console.log(current.value)
  if(current.children){
    queue.push(...current.children)
  }
  bfs_DG(null, queue)
}

// console.log('==广度优先搜索 - 递归式==')
// console.time('bfs_DG')
// for(let i = 0; i < 1000; i++){
//   bfs_DG(tree)
// }
// console.timeEnd('bfs_DG')

// 广度优先 - 遍历式
function bfs_BL(node) {
  const queue = [node]
  while(queue.length > 0) {
    const current = queue.shift()
    // console.log(current.value)
    if(current.children){
      current.children.forEach(child=>{
        queue.push(child)
      })
    }
  }
}

// console.log('==广度优先搜索 - 遍历式==')
// console.time('bfs_BL')
// for(let i = 0; i < 1000; i++){
//   bfs_BL(tree)
// }
// console.timeEnd('bfs_BL')

export { 
  bfs_DG,
  bfs_BL,
  dfs_DG,
  dfs_BL
}