import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '../views/ServiceView.vue'
import TruckView from '../views/TruckView.vue'
const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'home',
    meta: {
      title: "Home",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: HomeView,
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Home",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
  },
  {
    path: "/services/:id",
    name: 'service',
    meta: {
      title: "Service",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: ServiceView,
    props: true 
  },
  {
    path: "/trucks/:id",
    name: 'truck',
    meta: {
      title: "Truck",
      basePath: process.env.VUE_APP_PUBLIC_PATH || ''
    },
    component: TruckView,
    props: true 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
