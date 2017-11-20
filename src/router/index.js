import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Person from '@/components/Person'
import Business from '@/components/Business'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      redirect : '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    },
    {
      path: '/business',
      name: 'Business',
      component: Business
    }

  ]
})
