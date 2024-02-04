import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '../views/ServiceView.vue'
import TruckView from '../views/TruckView.vue'
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
