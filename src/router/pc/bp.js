const bpRoutes = [
    // 部品工业互联注塑实时产量看板
    {
      path: '/bp/interConnection',
      name: '部品工业互联注塑实时产量看板',
      component: () => import(/* webpackChunkName: "about" */ '@/views/pc/bp/interConnection'),
      meta:{
        title:"部品工业互联注塑实时产量看板"
      }
    }
  ]
  
  export default  bpRoutes