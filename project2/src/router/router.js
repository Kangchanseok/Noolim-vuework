import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'


Vue.use(VueRouter)

const Loginform = () => {
  return import(/* webpackChunkName: "about" */ '@/views/Loginform.vue')
}




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/loginForm',
    name: 'loginForm',
    component: Loginform
  }
  
]
});



export default router
