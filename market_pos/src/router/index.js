import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/FrontDoor.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'front_door',
      component: Dashboard
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardPage.vue')
    },
    {
      path: '/timeclock',
      name: 'waiting_room',
      component: () => import('../views/WaitingRoom.vue')
    }
  ]
})

export default router
