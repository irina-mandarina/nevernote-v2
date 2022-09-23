import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
App.use(store)
createApp(App).mount('#app')
