const jnRoutes = [
    // 晶能充放电数据
    {
      path: '/jn/statistical',
      name: '晶能充放电数据',
      component: () => import(/* webpackChunkName: "about" */ '@/views/pc/jn/statistical'),
      meta:{
        title:"晶能充放电数据"
      }
    },
    //  晶能工业互联实时产量看板
    {
      path: '/jn/interConnection',
      name: '晶能工业互联实时产量看板',
      component: () => import(/* webpackChunkName: "about" */ '@/views/pc/jn/interConnection'),
      meta:{
        title:"晶能工业互联实时产量看板"
      }
    },
      //  晶能点胶机实时产量看板
      {
        path: '/jn/glue',
        name: '晶能点胶机实时产量看板',
        component: () => import(/* webpackChunkName: "about" */ '@/views/pc/jn/glue'),
        meta:{
          title:"晶能点胶机实时产量看板"
        }
      },
  ]
  
  export default  jnRoutes