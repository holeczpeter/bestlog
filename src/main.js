import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import VueScrollTo from 'vue-scrollto'
import hu from './locales/hu.json'
import en from './locales/en.json'
export default {
    hu,en
}
createApp(App)
.use(VueScrollTo)
.use(i18n)
.mount('#app')

