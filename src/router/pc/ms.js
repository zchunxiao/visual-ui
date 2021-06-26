const msRoutes = [
    // 煤山充放电数据"
    {
      path: '/ms/statistical',
      name: 'statistical',
      component: () => import(/* webpackChunkName: "about" */ '@/views/pc/ms/statistical'),
      meta:{
        title:"煤山充放电数据"
      }
    },
   // 煤山工业互联实时产量看板
   {
    path: '/ms/interConnection',
    name: 'interConnection',
    component: () => import(/* webpackChunkName: "about" */ '@/views/pc/ms/interConnection'),
    meta:{
      title:"煤山工业互联实时产量看板"
    } 
   },
    // 煤山点胶机实时产量看板
    {
      path: '/ms/glue',
      name: 'msGlue',
      component: () => import(/* webpackChunkName: "about" */ '@/views/pc/ms/glue'),
      meta:{
        title:"煤山点胶机实时产量看板"
      } 
     }
  ]
  
  export default  msRoutes