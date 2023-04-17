import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Search from '../views/Search.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
