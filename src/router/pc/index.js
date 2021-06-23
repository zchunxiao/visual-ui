import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/pc/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home" // 根目录重定向到首页
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title:"首页"
    }
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/pc/About.vue'),
    meta:{
      title:"关于"
    }
  },
  // 吴山未来工厂质量管理平台
  {
    path: '/ws/qualityTesting',
    name: 'qualityTesting',
    component: () => import(/* webpackChunkName: "about" */ '@/views/pc/ws/qualityTesting/index.vue'),
    meta:{
      title:"吴山未来工厂质量管理平台"
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  // base:process.env.NODE_ENV == 'development' ? "/":"/web/",
  base:"/pc/",
  routes
})


// 前置导航
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title && document) {
    document.title = to.meta.title
  }

  next()
})


export default router
