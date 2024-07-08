import { bfs_BL, bfs_DG, dfs_BL, dfs_DG} from './tree.js'

// #### 面试题: 实现快速构造一个二叉树
//  1. 若他的左子树非空，那么他的所有左子节点的值都应该小于根节点的值
//  2. 若他的右子树非空，那么他的所有右子节点的值都应该小于根节点的值
//  3. 他的左、右子树各自又是一棵满足上面两个条件的二叉树

class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinaryTree{
  constructor() {
    // 根节点
    this.root = null
  }

  insert(key) {
    const newNode = new Node(key)

    const insertNode = (node, newNode) => {
      if(newNode.key < node.key){
        if(node.left === null) {
          // node没有left
          node.left = newNode
        } else {
          insertNode(node.left, newNode)
        }
      } else {
        if(node.right === null) {
          // node没有right
          node.right = newNode
        } else {
          insertNode(node.right, newNode)
        }
      } 
    }

    // 判断是否为根节点
    if(this.root === null)  {
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
    }
  }
}


const bTree = new BinaryTree()
bTree.insert(9)
bTree.insert(1)
bTree.insert(2)
bTree.insert(3)
bTree.insert(8)

console.log(bTree)