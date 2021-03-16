import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from 'containers/home/home.vue'
import NotFound from 'containers/notFound/notFound.vue'

const Dashboard = () => import('containers/dashboard/dashboard.vue')

// application routes
const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '*', name: 'notFound', component: NotFound }
]

// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
