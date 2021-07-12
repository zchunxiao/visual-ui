import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/pc/Home.vue'
import wsRoutes from "./ws.js"
import msRoutes from "./ms.js"
import bpRoutes from "./bp.js"
import groupRoutes from "./group.js"
import jnRoutes from "./jn.js"

Vue.use(VueRouter)
const NotFound = resolve => require(['@/404'], resolve)

const routes = [
  {
    path: '/',
    redirect: "/home" // 根目录重定向到首页
  },
  {
    path: '/home',
    name: '首页',
    component: Home,
    meta: {
      title: "首页"
    }
  },
  {
    path: '*',
    component: NotFound,
    name: 'notfound'
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/pc/About.vue'),
  //   meta: {
  //     title: "关于"
  //   }
  // }
]



const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  base: "/pc/",
  routes: [
    ...routes,
    ...wsRoutes,
    ...msRoutes,
    ...bpRoutes,
    ...groupRoutes,
    ...jnRoutes
  ]
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
