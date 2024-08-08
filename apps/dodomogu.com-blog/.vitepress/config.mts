import { defineConfig } from 'vitepress'

export default ({ mode }) => {
  const head: any[] = []
  if (mode == 'production') {
    head.push(['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?b61923f7937e56d6ce8d8a10e540f35b";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`]
    )
  }
  return defineConfig({
    srcDir: 'docs',
    // outDir: './public',
    cleanUrls: true,
    title: 'doDomoGu',
    description: "doDomoGu's Blog",
    head,
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        {
          text: '知识体系',
          items: [
            { text: 'HTTP', link: '/knowledge-system/http/semantization' },
            { text: 'CSS', link: '/knowledge-system/css/base' },
            { text: 'Javascript', link: '/knowledge-system/js/clean_code' }
          ]
        },
        { 
          text: '学习笔记', 
          items: [
            { text: 'Javascript基础', link: '/learning-notes/js/this' },
            { text: 'Javascript进阶', link: '/learning-notes/js2/ts-base' },
            { text: '算法', link: '/learning-notes/algorithm/index' }
          ]
        },
        { text: 'Examples', link: '/examples/markdown-examples' }
      ],

      sidebar: {
        '/knowledge-system/http/': [
          {
            text: '知识体系 - HTTP篇',
            items: [
              {
                text: 'src 与 href 的区别',
                link: '/knowledge-system/http/src_href'
              },
              {
                text: 'HTML5语义化',
                link: '/knowledge-system/http/semantization'
              },
              {
                text: 'script标签中 defer 和 async 的区别',
                link: '/knowledge-system/http/script_defer_async'
              }
            ]
          }
        ],
        '/knowledge-system/css/': [
          {
            text: '知识体系 - CSS篇',
            items: [
              {
                text: '入门基础',
                link: '/knowledge-system/css/base'
              },
              {
                text: '盒模型与布局',
                link: '/knowledge-system/css/box_layout'
              }
            ]
          }
        ],
        '/knowledge-system/js/': [
          {
            text: '知识体系 - JS篇',
            items: [
              {
                text: '代码整洁的Javascript',
                link: '/knowledge-system/js/clean_code'
              },
              {
                text: '任务Tasks - 微任务Microtasks - 队列Queues - 调度Schedules',
                link: '/knowledge-system/js/tasks_microtasks_queues_schedules'
              }
            ]
          }
        ],
        '/learning-notes/': [
          {
            text: '学习笔记',
            items: [
              { text: '目录', link: '/learning-notes/' },
              {
                text: 'Javascript基础',
                items: [
                  {
                    text: 'This指针 & 闭包 & 作用域',
                    link: '/learning-notes/js/this'
                  },
                  { text: 'OOP 与继承', link: '/learning-notes/js/oop' },
                  { text: 'Promise', link: '/learning-notes/js/promise' },
                  { text: 'JS模块化', link: '/learning-notes/js/module' },
                  { text: '浏览器 JS 详解', link: '/learning-notes/js/browser' },
                  { text: 'JS 性能优化', link: '/learning-notes/js/performance' },
                  { text: '函数式编程', link: '/learning-notes/js/functional' }
                ]
              },
              {
                text: 'Javascript进阶',
                items: [
                  {
                    text: 'TS详解',
                    link: '/learning-notes/js2/ts-base'
                  },
                  {
                    text: 'TS实战',
                    link: '/learning-notes/js2/ts-pactice'
                  }
                ]
              },
              {
                text: '算法',
                link: '/learning-notes/algorithm/index',
                items: [
                  {
                    text: '数组和链表',
                    link: '/learning-notes/algorithm/array_and_link'
                  },
                  {
                    text: '栈和队列',
                    link: '/learning-notes/algorithm/stack_and_queue'
                  }
                ]
              }
            ]
          }
        ],
        '/examples/': [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/examples/markdown-examples' },
              { text: 'Runtime API Examples', link: '/examples/api-examples' }
            ]
          }
        ]
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ],
      outline: {
        level: 'deep',
        label: '大纲'
      }
    }
  })
}
