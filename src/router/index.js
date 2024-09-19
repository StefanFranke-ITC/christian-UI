import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerView from "@/views/CustomerView.vue";
import VerwaltungsView from "@/views/VerwaltungsView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/verwaltung',
    name: 'verwaltung',
    component: VerwaltungsView
  },
  {
    path: '/:param',
    name: 'Customer',
    component: CustomerView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
