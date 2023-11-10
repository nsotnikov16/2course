import './assets/scss/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueTheMask from 'vue-the-mask'

createApp(App).use(store).use(VueTheMask).mount('#app')
