import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import { store } from '@/store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import mySocketIo from './plugins/sockets'

// use 3rd party plugins
Vue.use(BootstrapVue);

// use my plugins
Vue.use(mySocketIo, { store });


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
