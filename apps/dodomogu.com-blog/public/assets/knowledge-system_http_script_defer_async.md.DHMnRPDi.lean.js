import{_ as s,c as t,o as a,j as e,a as n}from"./chunks/framework.DOwwFb84.js";const c="/assets/image.B00CeSvO.webp",w=JSON.parse('{"title":"script 标签中 defer 和 async 的区别","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge-system/http/script_defer_async.md","filePath":"knowledge-system/http/script_defer_async.md"}'),r={name:"knowledge-system/http/script_defer_async.md"},o=e("h1",{id:"script-标签中-defer-和-async-的区别",tabindex:"-1"},[n("script 标签中 defer 和 async 的区别 "),e("a",{class:"header-anchor",href:"#script-标签中-defer-和-async-的区别","aria-label":'Permalink to "script 标签中 defer 和 async 的区别"'},"​")],-1),d=e("p",null,"如果没有 defer 或 async 属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载。",-1),i=e("p",null,[e("img",{src:c,alt:"defer&async"})],-1),l=e("p",null,"其中蓝色代表 js 脚本网络加载时间，红色代表 js 脚本执行时间，绿色代表 html 解析。",-1),_=e("p",null,"defer 和 async 属性都是去异步加载外部的 JS 脚本文件，它们都不会阻塞页面的解析，其区别如下：",-1),p=e("ul",null,[e("li",null,"执行顺序： 多个带 async 属性的标签，不能保证加载的顺序；多个带 defer 属性的标签，按照加载顺序执行；"),e("li",null,"脚本是否并行执行：async 属性，表示后续文档的加载和执行与 js 脚本的加载和执行是并行进行的，即异步执行；defer 属性，加载后续文档的过程和 js 脚本的加载(此时仅加载不执行)是并行进行的(异步)，js 脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded 事件触发执行之前。")],-1),f=[o,d,i,l,_,p];function h(m,y,u,g,j,k){return a(),t("div",null,f)}const B=s(r,[["render",h]]);export{w as __pageData,B as default};
