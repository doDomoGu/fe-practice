import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/fifty-tone',
      name: 'fifty-tone',
      meta: {
        title: '五十音图'
      },
      component: () => import('@/views/fifty-tone')
    }
    // {
    //   path: '/editor/preview/:id',
    //   name: 'editorPreview',
    //   meta: {
    //     title: '编辑器预览页'
    //   },
    //   component: () => import('@/views/editor-preview')
    // }
  ]
})

export default router
