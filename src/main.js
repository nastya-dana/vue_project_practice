import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/style.scss'
import UUID from 'vue3-uuid'

createApp(App).use(store).use(router).use(UUID).mount('#app')
