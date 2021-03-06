import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './route';

import { store } from './store/store'

import UUID from 'vue-uuid'  
  
Vue.use(UUID); 

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
