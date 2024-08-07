import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import DgUI from '@dodomogu/ui-vue'

import '@dodomogu/dev-configs/tailwind.css'

const app = createApp(App)

// app.use(createPinia())
app.use(router)
app.use(DgUI)

app.mount('#app')
