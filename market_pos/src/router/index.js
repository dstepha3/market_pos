import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'front_door',
      component: () => import('../views/FrontDoor.vue'),
      meta: {
        title: 'Welcome | Market POS',
        description: ''
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardPage.vue'),
      meta: {
        title: 'Dashboard | Market POS',
        description: ''
      }
    },
    {
      path: '/timeclock',
      name: 'waiting_room',
      component: () => import('../views/WaitingRoom.vue'),
      meta: {
        title: `Hello {{ USERNAME }} | Market POS`,
        description: ''
      }
    },
    {
      path: '/cash-register',
      name: 'cash_register',
      component: () => import('../views/CashRegister.vue'),
      meta: {
        title: 'Cash Register | Market POS',
        description: ''
      }
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/Order.vue'),
      meta: {
        title: 'Order | Market POS',
        description: ''
      }
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import('../views/Inventory.vue'),
      meta: {
        title: 'Inventory | Market POS',
        description: ''
      }
    },
    {
      path: '/staff',
      name: 'staff_management',
      component: () => import('../views/StaffManagement.vue'),
      meta: {
        title: 'Staff Management | Market POS',
        description: ''
      }
    },
    {
      path: '/employee',
      name: 'employee',
      component: () => import('../views/Employee.vue'),
      meta: {
        title: `Hello {{ USERNAME }} | Market POS`,
        description: ''
      }
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/Reports.vue'),
      meta: {
        title: 'Reports | Market POS',
        description: ''
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/Settings.vue'),
      meta: {
        title: 'Settings | Market POS',
        description: ''
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Update document title
  if (to.meta.title) {
    document.title = to.meta.title
  }

  // Update meta description
  if (to.meta.description) {
    let descriptionMetaTag = document.querySelector('meta[name="description"]')
    if (descriptionMetaTag) {
      descriptionMetaTag.setAttribute('content', to.meta.description)
    } else {
      descriptionMetaTag = document.createElement('meta')
      descriptionMetaTag.setAttribute('name', 'description')
      descriptionMetaTag.setAttribute('content', to.meta.description)
      document.head.appendChild(descriptionMetaTag)
    }
  }

  next()
})

export default router
