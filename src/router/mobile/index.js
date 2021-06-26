import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/mobile/Home.vue'

Vue.use(VueRouter)
const NotFound = resolve => require(['@/404'], resolve)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../../views/mobile/About.vue')
  },
  {
    path: '*',
    component: NotFound,
    name: 'notfound'
  },

]




const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: "/mobile/",
  routes
})


// 前置导航
router.beforeEach((to, from, next) => {
  console.log("前置导航:", to, from, next)
  /* 路由发生变化修改页面title */
  if (to.meta.title && document) {
    document.title = to.meta.title
  }
  // if(to.meta.title =='首页') {
  //   next({name:"login"})
  //   return false;
  // }

  next()
})

export default router
