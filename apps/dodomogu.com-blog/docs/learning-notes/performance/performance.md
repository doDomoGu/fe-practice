## 性能优化
### 一、回到那道面试题
* 输入
URL - 资源定位符
URI - 资源标识符
```js
protocol + hostname + port + path + query + fragment
'http://www.zhaowa.com:8080/fe/yunyin/1?id=3#hash'

// 协议
// 追问：http 和 TCP => OSI => 物理层 | 数据链路层 ｜ 网络层 ｜ 传输层 ｜ 会话层 ｜ 表示层 ｜ 应用层
// 1. http - 应用层 < = > TCP - 传输层
// 2. 关联 http基于TCP实现链接和通道建立 => TCP建立和断开方式
    // 优化：1.0 1.1 2.0 3.0
    // 1.1 - 长连接 ｜ keep-alive => 队头阻塞
    // 2.0 - 多路复用 ｜ 帧frame & 流stream | 复用通路，不受浏览器并发控制 => 多条请求同时进行不受限制
    // 3.0 - UDP（ vs TCP）+ QUIC

    // 追问：安全性 http & https => 对称加密 vs 非对称加密
    // 1. https = http + SSL/TLS
    // 2. 实现原理 - 加密图
    // 3. https多次链接问题 => 导致网络请求加载时间延长，增加开销
        // 优化：
        // 合并请求 + 长连接

```

* 域名解析
 寻址 => 面试：多级缓存 => 协调性能和功能
 1. 浏览器缓存
 2. 系统缓存 - 系统级别 HOST
 3. 路由器 - 各级路由缓存域名信息
 4. 运营商 ｜ 核心网
 5. 根域名服务器

追问 优化：
    1. prefetch & preload
```js
    <head>
        <link rel="preload" href="xxx" as="style">
        <link rel="prefetch" href="xxx" as="script">
    </head>
    {/* 只是加载不会执行，都会判断是否缓存 */}

    {/* preload */}
    {/* 告诉浏览器预加载资源 */}
    {/* prefetch */}
    {/* 告诉浏览器空闲时开始加载 */}
```

    2. 文件根据距离不同有加载时间差
    优化：
        CDN - content Delivery Network
        a. 多节点具备同一主机的内容
        b. LB - 负载均衡
        c. 各级缓存

* web服务
面试题：移动版本 + 桌面版本 < = > 域名同一个

不同代码 对应 不同静态资源

代理服务器：正向代理（掩盖真正的requester）    反向代理（掩盖的是真正的responeser）


* 标识 锚点
```js
// history 
'http://www.zhaowa.com:8080/fe/yunyin/1/zw?id=3'
// 服务端
// 后台服务：http://www.zhaowa.com:8080
// 资源：/fe/yunyin/1/zw
// 条件：id=3

// => ??? => index.html

// 前端
// index.html => index.js => router => '/zw' => zw.vue


// hash
'http://www.zhaowa.com:8080/fe/yunyin/1?id=3#zw'

// 服务端
// 后台服务：http://www.zhaowa.com:8080
// 资源：/fe/yunyin/1
// 条件：id=3

// => index3.html

// 前端
// index3.html => index3.js => router => zw => zw.vue
```


UA: mozilla/4.0 xxx(system) yyy(platform) zzz(extension)

* 浏览器渲染时
追问：运行时概念？
主线：.html => 模版

1. 流程
    加载解析：js css svg png...
    追问：
    文件加载解析的性能？
    文件资源访问形式？ => a. 直接通过外链（同域)进行访问 b. 转译文件 c. 服务端渲染
    优化性能？ => a. CDN进行加速、cookie 开关｜独立域名 b. 压缩文件gzip c. 首屏加载白屏
    写法？ => pre | scirpt - defer asyc | js阻塞加载

    执行处理
    HTML parser 
    => JS parser
    => DOM

    a. 脚本执行时 —— js
    es => AST => js AST => js
    var zhaowa = 'hello zhaowa'

    js 字节码：相对于机器码减少了存储空间；相对于高级语言减少了转译时间
    性能优化：
    字节码分流 —— JIT
    m&s - mark & sweep => 触达标记、锁定清空 => GC
    ```js
        // 内存分配：申明变量、函数、对象
        // 内存使用
        // 内存释放

        const zhaowa = {
            js: {
                performance: 'good',
                teacher: 'yunyin'
            }
        }

        // 建立引用关系
        const _obj = zhaowa
        // zhaowa gc ｜ _obj 尚未gc
        zhaowa = 'best'
        // _class _obj 尚未gc
        const _class = _obj.js
        // _obj gc ｜ _class 尚未gc
        _obj = 'worst'
        // gc 完成
        _class = null

        // 对象层级 宜平、不宜深 ｜ 根据业务 深、浅拷贝 ｜ 避免循环引用
        function traverseTree(node1, node2) {
            node1.parent = node2
            node2.children = node1
        }

        // 内存泄漏
        // 莫名其妙的全局变量
        function foo() {
            bar1 = ''
            this.bar2 = ''
        }

        // 未清理的定时器
        setTimeout(() => {
        }, 1000)
        setInterval(() => {
        }, 1000)

        // 闭包
        function zhaowa() {
            const _no = 1
            // ..
            return {
                number: _no
            }
        }
        let test = zhaowa()

        while(true) {
            //...
        }
    ```

    模版DOM + JS动态生成挂载
    面试题：微前端 ｜ 生成独立模块 ｜ 环境隔离
    => 环境隔离 - iframe ｜ webComponent ｜ single-spa
    => createElement => sandbox沙盒机制

    CSSOM 结构
    面试题：css处理过程？css预处理器？
    选择类型结构 => 优先级排序 => 从上而下进行样式补齐

    预处理器：1. 模块化 2. 变量 3. 层结构
    性能优化：
    

    汇总
    js组装模块 + dom + cssom => render tree

    渲染