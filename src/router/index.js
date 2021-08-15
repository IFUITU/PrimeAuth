import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from "../store/store"
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Home,
    beforeEnter:(to, form ,next)=>{
      if(to.name == 'login' && store.state.user == null) next()
      else next({name:'index'})
    }
  },
  {
    path: '/register',
    name: 'reg',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/reg.vue'),
    
  },
  {
    path:"/",
    name:"index",
    component:()=>import('@/views/index.vue'),
    beforeEnter:(to, from, next) => {
      
      if(to.name == 'index' && store.state.user != null) next()
      else next("/login")
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
