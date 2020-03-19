import Vue from 'vue'
import { firestorePlugin  } from 'vuefire'
import VueRouter from 'vue-router'
import App from './App.vue'

import ItemAdd from './components/item/Add.vue'
import ItemEdit from './components/item/Edit.vue'
import ItemList from './components/item/List.vue'
import Home from './components/Home.vue'

Vue.use(firestorePlugin)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Add',
    path: '/create',
    component: ItemAdd
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: ItemEdit
  },
  {
    name: 'List',
    path: '/index',
    component: ItemList
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
