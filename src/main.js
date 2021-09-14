import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//import bootstrap css & js
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

//import components
import PerpusIndex from './components/perpus/Index'
import PerpusCreate from './components/perpus/Create'
import PerpusEdit from './components/perpus/Edit'

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'perpus',
      component: PerpusIndex
    },
    {
      path: '/create',
      name: 'create',
      component: PerpusCreate
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: PerpusEdit
    }
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')