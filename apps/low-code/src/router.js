import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'pageList',
      component: () => import('@/views/page-list')
    },
    {
      path: '/editor/:id',
      name: 'editor',
      component: () => import('@/views/editor')
    },
    {
      path: '/editor/preview/:id',
      name: 'editorPreview',
      component: () => import('@/views/editor-preview')
    },
    {
      path: '/champion',
      name: 'champion',
      component: () => import('@/views/Champion')
    }
  ]
})

export default router
