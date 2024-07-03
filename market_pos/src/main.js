import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faUserSecret,
  faArrowLeft,
  faArrowRight,
  faClockRotateLeft,
  faRightFromBracket,
  faHouse,
  faX,
  faClock,
  faCircleExclamation,
  faGear,
  faCashRegister,
  faBellConcierge,
  faTruck,
  faUsers,
  faFileInvoiceDollar,
  faLock,
  faLockOpen,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faUserSecret,
  faArrowLeft,
  faArrowRight,
  faClockRotateLeft,
  faRightFromBracket,
  faHouse,
  faX,
  faClock,
  faCircleExclamation,
  faCircleXmark,
  faGear,
  faCashRegister,
  faBellConcierge,
  faTruck,
  faUsers,
  faFileInvoiceDollar,
  faLock,
  faLockOpen
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
