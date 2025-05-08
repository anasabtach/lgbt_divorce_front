import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // import your router config

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'

import './assets/css/responsive.css'
import './assets/css/style.css' // global CSS
import './assets/js/custom.js' // global CSS

const app = createApp(App)
app.use(router) // enable router
app.mount('#app')
