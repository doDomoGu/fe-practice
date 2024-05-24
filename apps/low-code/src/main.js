import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import DvUI from '@data-visualization/ui'
// import DvEcharts from '@data-visualization/echarts'

import '@dodomogu/dev-configs/tailwind.css'

const app = createApp(App)

// app.use(createPinia())
app.use(router)
// app.use(DvUI)
// app.use(DvEcharts)

app.mount('#app')
