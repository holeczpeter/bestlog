import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import VueScrollTo from 'vue-scrollto'
import hu from './locales/hu.json'
import en from './locales/en.json'
import "./assets/css/custom.css";
import "./assets/css/plugins.css";
import "./assets/css/styles.css";
import "./assets/css/styles.scss";
import "./assets/css/plugins/animate.css";
import "./assets/css/plugins/bootstrap.min.css";
import "./assets/css/plugins/default.css";
import "./assets/css/plugins/fontawesome-all.min.css";
import "./assets/css/plugins/lightgallery.css";
import "./assets/css/plugins/magnific-popup.css";
import "./assets/css/plugins/nav-menu.css";
import "./assets/css/plugins/owl.carousel.css";
import "./assets/css/plugins/owl.theme.default.css";
import "./assets/css/plugins/prism.css";
import "./assets/css/plugins/themify-icons.css";
import router from './router'
export default {
    hu,en
}
createApp(App).use(router)
.use(VueScrollTo)
.use(i18n)
.mount('#app')


