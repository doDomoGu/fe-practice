import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'pageList',
      meta: {
        title: '项目列表'
      },
      component: () => import('@/views/page-list')
    },
    {
      path: '/editor/:id',
      name: 'editor',
      meta: {
        title: '编辑器'
      },
      component: () => import('@/views/editor')
    },
    {
      path: '/editor/preview/:id',
      name: 'editorPreview',
      meta: {
        title: '编辑器预览页'
      },
      component: () => import('@/views/editor-preview')
    }
  ]
})

export default router
