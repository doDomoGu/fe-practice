# Vue-router —— Vue全家桶 (三)

## 起源
- 单页应用的标配
  1. 路由标签 => 单页内多模块切换 => 提升视觉效果(无跳转刷新)
  2. 单页内部管理 => 管理每一个单页的内容以及传参


## 使用
1. 引入生成
2. 路由配置
3. 视图引入标签

### 生命周期
通过路由独立生命周期的方式 => 做路由的切换  => vue-router 导航守卫  => 提供回调钩子 


### 首屏加载问题  => 组件的异步加载 => 懒加载
1. require 懒加载函数回调内部
```js
{
    path: '/Dynamic',
    name: 'Dynamic', 
    component: resolve => (require(["@/components/dynamicComponent"], resolve))
}
```
2. import ES6懒加载
```js
{
    path: '/Dynamic',
    name: 'Dynamic', 
    component: () => import("@/components/dynamicComponent", "dynamic")
}
```
3. webpack require.ensure懒加载
```js
{
    path: '/Dynamic',
    name: 'Dynamic', 
    component: r => require.ensure([], () => r(require("@/components/dynamicComponent")), 'dynamic')

    /*
        require.ensure(
            dependencies: [], // 外部传入，所有需要用到的模块进行声明
            callback: function() {}, // 依赖完成加载后，进行的回调操作
            chunkName: 'chunk' // chunk名称
        )
    */
}
```

### scrollBehavior 
```js
{
    routes: [
        //...
    ],
    scrollBehavior(to, from, savedPosition) {
        
        // 1. 滚动到绝对位置 x = ?, y = ?
        return { x:0, y:0 } // 滚动到开头
        // 2. 滚动到上一个保存的位置
        // 第三个参数savedPosition => 期望回到的位置
        if ( savedPosition ) {
         return savedPosition
        }
        // 3. 异步滚动
        return new Promise( resolve, reject ) => {
            setTimeout(() => {
                resolve({ x: 0, y: 0 })
            }, 1000)
        }
    }
}
```
### 原理解析
#### 路由切换的实质
* 更新视图而不重新请求页面 => hash | state
* vue-router在实现单页前端路由 => 提供了hash模式 & history模式
  
#### hash模式 => 代替路由
* 核心: hashChange

#### history模式
* 核心: pushState

