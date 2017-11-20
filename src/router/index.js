import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Project from '@/components/Project'
import Team from '@/components/Team'

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
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    }

  ]
})
