import{_ as s,c as a,o as i,a2 as n}from"./chunks/framework.DOwwFb84.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"learning-notes/fe-engineering/webpack.md","filePath":"learning-notes/fe-engineering/webpack.md"}'),l={name:"learning-notes/fe-engineering/webpack.md"},p=n(`<h3 id="工程化webpack" tabindex="-1">工程化webpack <a class="header-anchor" href="#工程化webpack" aria-label="Permalink to &quot;工程化webpack&quot;">​</a></h3><h4 id="_1-模块化的诉求" tabindex="-1">1. 模块化的诉求 <a class="header-anchor" href="#_1-模块化的诉求" aria-label="Permalink to &quot;1. 模块化的诉求&quot;">​</a></h4><ul><li><p>预期：</p><ol><li>功能上：能够将散落的模块打包到一起 - 基础打包</li><li>场景上：支持过程中编译的集成 - es ts vue react</li><li>拓扑化能力：能够支持不同类型的前端资源模块，以非一定链式的情况进行组织</li></ol></li><li><p>面试题：主流工具？gulp vs webpack？ webpack rollup grunt gulp vite... 相同点： 打包编译需求｜第三方依赖引入｜自定义模块介入｜自动化可监听运行 不同点： 本质 - gulp只会按照开发者预定的模块任务流进行工作 ｜ webpack深入到代码中，处理资源关系 配置 - 文件层级半自动 ｜ 自动 使用方式</p></li><li><p>理解 - webpack重点</p><ol><li>webpack config</li><li>webpack 核心流程</li><li>loaders &amp; plugins</li></ol></li></ul><h4 id="webpack-配置" tabindex="-1">webpack 配置 <a class="header-anchor" href="#webpack-配置" aria-label="Permalink to &quot;webpack 配置&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 1. 初始化</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    npm init</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    npm i webpack webpack</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cli </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">save</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 2. 默认打包</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    npx webpack</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 追问：默认打包入口/出口？配置？文件化配置？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // npm run dev / serve / build...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // package.json | webpack.config.js | entry &amp; output</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 3. 主要配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // entry | output</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // mode: </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // production(启动内置文件内容优化插件、打包速度偏慢)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // development(自动优化打包速度，添加一些调试辅助插件)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // none（最原始的打包）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // plugins:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 外部能力的扩充</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // loader:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 内部能力的延伸</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // pitch loader</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // * 面试题：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // loader 收集顺序和执行顺序</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // config.optiomization.splitChunks({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     chunks: &#39;all&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     cacheGroups: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //         vendors: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //             name: &#39;chunk-vendors&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //             test: /[/]node_modules[/]/,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //         },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //         echarts: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //             name: &#39;chunk-echarts&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //             test: /[/]node_modules[/]_?echarts(.*)/,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //         },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //         commons: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //             name: &#39;chunk-common&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //             minChunks: 2,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //             priority: 5,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //         }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //     }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 4. 打包产物</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // * 面试题 webpack的打包产物特点？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 主入口 default形式进行挂载</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // __webpack_module_cache__ 模块缓存主存储</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // __webpack_require__ 依赖模块封装</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 异步模块</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 函数封装 =&gt; 独立Promise 不在同步cache中，故不会一起加载</span></span></code></pre></div><h4 id="webpack的异步加载-异步分包" tabindex="-1">webpack的异步加载 - 异步分包 <a class="header-anchor" href="#webpack的异步加载-异步分包" aria-label="Permalink to &quot;webpack的异步加载 - 异步分包&quot;">​</a></h4><ol><li>webpack 的 require.ensure()</li><li>ES6 的 import()</li></ol><h4 id="hmr-热更新" tabindex="-1">HMR 热更新 <a class="header-anchor" href="#hmr-热更新" aria-label="Permalink to &quot;HMR 热更新&quot;">​</a></h4><ol><li>devServer =&gt; runtime</li><li>页面首次加载 =&gt; ws连接</li><li>webpack监听到文件变化，增量构建 =&gt; hash事件</li><li>浏览器接收到事件，增量范围确认</li><li>加载更新的模块</li><li>webpack回调执行代码变更后逻辑</li><li>finish</li></ol>`,9),e=[p];function h(k,t,c,r,d,o){return i(),a("div",null,e)}const g=s(l,[["render",h]]);export{D as __pageData,g as default};
