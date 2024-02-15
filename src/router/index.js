import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/MainPage.vue'
import Basket from '../views/BasketPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: Products
  },
  {
    path: '/Basket',
    name: 'Basket',
    component: Basket
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
