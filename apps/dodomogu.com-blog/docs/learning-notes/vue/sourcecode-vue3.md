# Vue 源码（下）

> 为什么要开发Vue3

## Vue2.x 存在的问题
* 代码结构
    * Vue2源码项目架构比较传统，能力集中，要使用必须整理引入整个框架，无法单独使用某一个功能或者能力，如defineReactive、Observer等。
    * Vue2分编译版本和运行时版本，运行时版本没有编译能力的，需要额外引用vue-template-complier，类库分散，不易于整体进行优化，如tree-shaking。

* 性能优化的空间
    * dom-diff: template -> render
    * Object.defineProperty: 对应对象属性的劫持，浅层属性可以劫持到，深层嵌套的属性也可以用$set设置，但是Array数组类型是封装了一层处理方法，势必影响到了一定的执行性能
    * stateMixin: props/data 都会生成数据劫持，做成响应式的，但不是所有的数据都需要响应式的，影响了性能。

* 选项式的页面配置模式
    * 不利于多人进行协同开发
    * 可维护性较差

* 浏览器真的需要老版本吗
  
## Vue3诞生中存在的问题
* 太多的破坏性修改 breaking changes
    * 默认使用 `<script setup>`  组合式API
* 生态影响
    * 弃用mixin
* 发布节奏
    * 过早的发布，接受不了，不够完善

## Vue3的优化

相较于Vue2做了哪些优化

### 结构上的优化 - monorepo
原子结构 可独立拆分引用 拓补结构 => 可做业务上的拆分 

### 性能上的优化
#### 移除了很多使用率比较低的api
如filter

#### tree-shaking => 产物打包优化
```js
import components from 'components'
// components.input

import { imput } from 'components'
import { ref, computed, watch } from 'vue'
```

#### 编译优化
compile阶段对静态模版进行分析 => 分析树 <= PatchFlag 用于区分各个类型的节点

#### 数据劫持优化
* Vue2: Object.defineProperty
    * 无法检测对象属性的增加或删除 => 通过$set $delete 操作
    * 数组 => 通过封装push、pop等操作
    * 层级较深的对象 => 递归遍历
* Vue3: Proxy => 底层优化

## 源码解读
### 模版编译
1. 词法分析阶段（baseParse）: template => AST
2. 指令和语法的转化阶段（transform）: AST => 解析不同的节点进行区分 PatchFlag => 不同类型的转换
3. 可执行函数的生成阶段（generator）： 转化后的AST生成渲染函数
   
>主编译入口: core/packages/compiler-core/src/index.ts
  
### 基于Proxy的响应式
1. 数据劫持 | 数据响应（reactive）: 监测数据变化 =>  函数监听化执行
2. 依赖收集 (effect副作用函数)   
    当前VM实例上挂载effect => 当前生效的(activeEffect)切换为这个effect   
    => 在这个effect上创建deps等属性, 用于传递依赖  
3. 订阅 | 变量访问 => 触发对应的get() => 创建deps对象 (targetMap)  
    => targetMap中的deps可以做为属性进行添加 => depsMap
    * depsMap会被添加activeEffect - 被收集的订阅方
    * activeEffect 中也同时存在deps数组，用于存放关联方的depsMap - 订阅者
4. 派发更新 (ref)
    依赖的set()被触发 => Reflect.set()修改对应的属性 => 获取到targetMap订阅方(depsMap)  
    => 链条传递 => 触发渲染

>主响应式入口 /core/packages/reactivity/src/index.ts


