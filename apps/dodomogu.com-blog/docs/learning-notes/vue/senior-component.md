# 组件高级用法
## 动态组件
```js
  <template>
    <div v-if="show">
      <div>****</div>
      <div>{{ variables }}</div>
      {/* vue 实例 */}
      <myComp></myComp>
      <component :is="variables" :key="variables" />
    </div>
  </template>
```

* 如何优化组件的加载  
  优化加载  
  控制引用 => 动态组件

* 动态组件的优势  
  动态占位符 + 运行时切换 => 操作时，实时控制部分模块实例的渲染

* 动态组件的生命周期  
  每一次切换都是一个完整的生命周期 重新渲染 直到销毁

* 实现组件状态的保留 | 反销毁  
  ```<keep-alive>```   
  对当前组件实例指定位置的缓存 => 提升渲染性能

* keep-alive配置
  include exclude max  
  LRU缓存算法

## 内置高级组件
* keep-alive 缓存组件实例， 保留在内存中
* teleport 传送门   
  将包裹的组件的内容渲染到任意dom节点上 => 实现组件的代码与实际渲染位置的解耦
* transition 过渡态  
  
* suspense 等待异步加载

## 自定义方式实现内部通用能力 => plugins