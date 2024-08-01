import{_ as s,c as a,o as i,a2 as n}from"./chunks/framework.DOwwFb84.js";const g=JSON.parse('{"title":"脚手架","description":"","frontmatter":{},"headers":[],"relativePath":"learning-notes/fe-engineering/scaffold.md","filePath":"learning-notes/fe-engineering/scaffold.md"}'),e={name:"learning-notes/fe-engineering/scaffold.md"},l=n(`<h1 id="脚手架" tabindex="-1">脚手架 <a class="header-anchor" href="#脚手架" aria-label="Permalink to &quot;脚手架&quot;">​</a></h1><ul><li>快速自动化搭建启动项目的工具 <ol><li name="">调用工具 - vue create $</li><li>传参 - vue create zhaowaProject webpack -f</li><li>轮询 - 对话获取更多信息</li><li>模版读取 - 远端/本地 拉取</li><li>加工</li></ol></li></ul><h2 id="第一步-处理依赖" tabindex="-1">第一步: 处理依赖 <a class="header-anchor" href="#第一步-处理依赖" aria-label="Permalink to &quot;第一步: 处理依赖&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  npm i commander</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  npm i inquirer</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  npm i chalk</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  npm i axios</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  npm i download</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">repo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  npm i path</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  npm i fs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">extra</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  npm i ora</span></span></code></pre></div><h2 id="第二步-处理工程入口" tabindex="-1">第二步: 处理工程入口 <a class="header-anchor" href="#第二步-处理工程入口" aria-label="Permalink to &quot;第二步: 处理工程入口&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vue create zhaowaProject</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. 初始化npm</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  npm init</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 新建主命令，引入到配置项</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// bin / package.json</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3. 关联主命令与配置项</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  npm link</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 4. 执行主命令即可关联逻辑内容</span></span></code></pre></div>`,6),p=[l];function t(h,k,r,c,d,o){return i(),a("div",null,p)}const m=s(e,[["render",t]]);export{g as __pageData,m as default};
