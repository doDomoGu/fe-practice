# 树 

## 定义
  - 树是非线性数据结构
  - 每个节点都可能会有0个到多个后代
  - 每个节点(除了根节点)必须具备唯一父节点
  
### 常见的树结构
```js
// dom树
<html>
  <head></head>
  <body>
    <div id="app">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ul>
    </div>
  </body>
  <script></script>
</html>


const tree_obj = [{
  id: 1,
  type: 'dom',
  children: [{
    id: 2,
    type: 'html',
    children: [{
      id: 3,
      type: 'head',
    },{
      id: 4,
      type: 'body',
    },{
      id: 5,
      type: 'script',
    }]
  }]
}]
```

```
// 抽象语法树
```

### 树结构的遍历
```js
  const tree = {
    value: 'A',
    chidlren: [{
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
    }]
  }
```

#### 1.深度优先遍历 - DFS (Deep First Search)
* 优先遍历节点的子节点 => 兄弟节点
``` js 
  // 请分别用两种不同的方式进行深度优先遍历
  // 1. 确认输入输出 - 入: tree 出: void(边遍历边执行节点回调函数)
  // 2. 确认执行方式 - 遍历 & 递归
  // 3. 顺序: 先子后兄


// 递归式
function dfs_DG(node) {
  console.log(node.value)
  // 有子则子
  if(node.children){
    node.children.forEach(child => {
      dfs_DG(child)
    })
  }
}
console.log('==深度优先搜索 - 递归式==')
dfs_DG(tree)

// 遍历式 - 使用栈
function dfs_BL(node) {
  const stack = [node]
  while(stack.length > 0) {
    const current = stack.pop()
    console.log(current.value)
    if(current.children){
      current.children.reverse().forEach(child=>{
        stack.push(child)
      })
    }
  }
}
console.log('==深度优先搜索 - 遍历式==')
dfs_BL(tree)


// 输出: A B E F C D G H
```

#### 2.广度优先遍历 - BFS (Breadth First Search)
* 优先遍历节点的兄弟节点 => 子节点
``` js 
  // 请分别用两种不同的方式进行广度优先遍历
  // 1. 确认输入输出 - 入: tree 出: void(边遍历边执行节点回调函数)
  // 2. 确认执行方式 - 遍历 & 递归
  // 3. 顺序: 先兄后子

```

#### 面试题: 实现快速构造一个二叉树
```js
//  1. 若他的左子树非空，那么他的所有左子节点的值都应该小于根节点的值
//  2. 若他的右子树非空，那么他的所有右子节点的值都应该小于根节点的值
//  3. 他的左、右子树各自又是一棵满足上面两个条件的二叉树


```