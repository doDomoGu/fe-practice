import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Demo列表'
      },
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/ball-collision',
      name: 'ball-collision',
      meta: {
        title: '小球碰撞'
      },
      component: () => import('@/views/ball-collision')
    }
  ]
})

export default router
