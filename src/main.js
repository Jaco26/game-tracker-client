import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'

import mySocketIo from './plugins/sockets'

Vue.use(mySocketIo, { store });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
