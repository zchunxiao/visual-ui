import Vue from 'vue'
import App from './mobile.vue'
import router from '../../router/mobile'
import store from '../../store'
import "lib-flexible/flexible.js"
import "amfe-flexible"; 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')