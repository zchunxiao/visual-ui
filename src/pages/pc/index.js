import Vue from 'vue'
import App from './index.vue'
import router from '@/router/pc'
import store from '../../store'
import DataV from "@/components/DataView"
Vue.config.productionTip = false

Vue.use(DataV)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
