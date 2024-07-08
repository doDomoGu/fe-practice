# 数组 和 链表

## 相连性 指向性
1. 查找操作:  
    - 数组的元素素是连续空间，可以迅速定位到数组中某一个元素的位置，效率较高
    - 链表则需要通过前一个元素指向下一个元素、前后依赖顺序地查找，效率较低
2. 插入操作:
   - 数组插入元素后，后续所有元素的索引都会受到影响，进而改变
   - 链表由于其指向性的原因，只要改变前一项和当前被插入的next指针即可

## 面试题：实现链表
> head => node1 => node2 => ... => null
```js
class LinkedList {
  constructor() {
    this.length = 0
    // 空链表特征 => 判断链表长度
    this.head = null 
  }

  // 返回索引对应的元素
  getElementAt(position) {

  }

  // 返回元素对应的位置
  indexOf(element) {

  }

  // 添加节点
  append(element) {

  }

  // 插入节点(指定位置)
  insert(position, element) {

  }

  // 删除指定位置的元素
  removeAt(position) {

  }

  // 删除指定元素
  remove(element) {

  }
}
```