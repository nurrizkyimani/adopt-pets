import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cats from '../views/Cats.vue'
import Dogs from '../views/Dogs.vue'
import Pets from '../views/Pets.vue'

Vue.use(VueRouter)

export default router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cats',
      name: 'cats',
      component: Cats
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: Dogs
    },
    {
      path: '/Pets',
      name: 'pets',
      component: Pets
    }
  ]

})
