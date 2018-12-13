import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../components/Homepage.vue'
import 'bootstrap'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    }
  ],
  mode: 'history'
})
