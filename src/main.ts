import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponents from '@/components'
import router from './router'
import store from './store'
import './assets/normalize.css'
import './assets/iconfont.css'
import './assets/common.scss'
import './assets/base.css'

const app = createApp(App)

app.use(store).use(router).use(GlobalComponents).mount('#app')
