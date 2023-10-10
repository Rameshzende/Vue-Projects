import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProjects from '../views/AddProjects.vue'
import editProject from '../views/editProject.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/addProject',
    name: 'addProject',
    component: AddProjects
  }, {
    path: '/editProject/:id?',
    name: 'editProject',
    component: editProject,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
