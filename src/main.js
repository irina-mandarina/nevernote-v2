import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store.js'
import router from './router.js'
import v$ from './vuelidation.js'


const app = createApp(App)
app.use(store)
app.use(router)
app.use(v$)
app.mount('#app')
