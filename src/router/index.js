import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/pages/Login'
import Dashboard from '@/views/pages/Dashboard'
import Profile from '@/views/pages/Profile'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
