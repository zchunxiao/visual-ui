const wsRoutes = [
  // 吴山未来工厂质量管理平台
  {
    path: '/ws/qualityTesting',
    name: '吴山未来工厂质量管理平台',
    component: () => import(/* webpackChunkName: "about" */ '@/views/pc/ws/qualityTesting/index.vue'),
    meta:{
      title:"吴山未来工厂质量管理平台"
    }
  },
  // 吴山点胶机实时产量看板
  {
    path: '/ws/glue',
    name: '吴山点胶机实时产量看板',
    component: () => import(/* webpackChunkName: "about" */ '@/views/pc/ws/glue'),
    meta:{
      title:"吴山点胶机实时产量看板"
    }
  },
  // 吴山动力能源
  {
    path:'/ws/power',
    name: '动力能源工业互联网数据驾驶舱',
    component: () => import(/* webpackChunkName: "about" */ '@/views/pc/ws/power'),
    meta:{
      title:"动力能源工业互联网数据驾驶舱"
    }
  }
]

export default  wsRoutes
