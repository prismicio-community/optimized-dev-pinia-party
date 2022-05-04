import 'nes.css/css/nes.min.css'
import '@fontsource/press-start-2p/400.css'
import './assets/styles.css'

import { createApp } from 'vue'

import App from './App.vue'
// We import `createPinia`
import { createPinia } from 'pinia'

// We use it to register Pinia inside our Vue application
createApp(App).use(createPinia()).mount('#app')
