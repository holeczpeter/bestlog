import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServiceView from '../views/ServiceView.vue'
import TruckView from '../views/TruckView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import PrivacyView from '../views/PrivacyView.vue'
const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: HomeView,
    meta: {
      title: "Home",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: HomeView,
  },
  {
    path: '/',
    name: HomeView,
    meta: {
      title: "Home",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: AboutView,
    meta: {
      title: "AboutView",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: () => import("../views/AboutView.vue"),
    props: true 
  },
  {
    path: "/services/:id",
    name: ServiceView,
    meta: {
      title: "Service",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: () => import("../views/ServiceView.vue"),
    props: true 
  },
  {
    path: "/trucks/:id",
    name: TruckView,
    meta: {
      title: "TruckView",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: () => import("../views/TruckView.vue"),
    props: true 
  },
  {
    path: "/impressum",
    name: ImpressumView,
    meta: {
      title: "ImpressumView",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: () => import("../views/ImpressumView.vue"),
    props: true 
  },
  {
    path: "/privacy",
    name: PrivacyView,
    meta: {
      title: "PrivacyView",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: () => import("../views/PrivacyView.vue"),
    props: true 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
  },
})

export default router
