import FactoryView from '@/views/factory/index.vue'

export default [
  {
    path: '/factory',
    name: '工厂模式',
    component: FactoryView
  },
  {
    path: '/singleton',
    name: '单例模式'
    // component: SingletonView
  },
  {
    path: '/publish-subscribe',
    name: '发布-订阅模式'
    // component: FactoryView
  }
]
