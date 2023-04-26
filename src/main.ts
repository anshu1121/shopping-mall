import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/normalize.css'
import './assets/iconfont.css'
import './assets/common.scss'
import './assets/base.css'

createApp(App).use(store).use(router).mount('#app')
