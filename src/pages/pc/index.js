import Vue from 'vue'
import App from './index.vue'
import router from '@/router/pc'
import store from '../../store'
import DataV from "@/components/DataView"
import baseContainer from "@/components/base-container"


import topHeader from  "@/components/top-header"
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
Vue.config.productionTip = false


Vue.component('base-container',baseContainer);
Vue.component('top-header',topHeader);

Vue.component('swiper',Swiper);
Vue.component('swiper-slide',SwiperSlide);

Vue.use(DataV)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
