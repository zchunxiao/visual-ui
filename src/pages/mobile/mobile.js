import Vue from 'vue'
import App from './mobile.vue'
import router from '../../router/mobile'
import store from '../../store'
import "lib-flexible/flexible.js"
//import "amfe-flexible"; 
import mobileContainer from "@/components/mobile-container"
import card from "@/components/card"
import customerTable from "@/components/customer-table"
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui';



Vue.config.productionTip = false
// 注册全局容器
Vue.component('mobileContainer', mobileContainer);
Vue.component('card', card);
Vue.component('customerTable', customerTable);

Vue.use(Mint);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')