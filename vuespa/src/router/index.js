import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tareas from '../views/Tareas.vue'
import Carros from '../views/Carros.vue'
import CrearTarea from '../components/CrearTarea'
import EditarTarea from '../components/EditarTarea'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/tareas',
    name: 'tareas',
    component: Tareas
  },
  {
    path: '/carros',
    name: 'carros',
    component: Carros
  },
 
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
