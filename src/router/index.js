import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/MainPage.vue'
import Basket from '../views/BasketPage.vue'
import ProductPage from '../views/ProductPage.vue'
import AuthPage from '../views/AuthPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: Products
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthPage
  },
  {
    path: '/basket',
    name: 'basket',
    component: Basket
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
