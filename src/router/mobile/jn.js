const jnRoutes = [
    // 晶能产量和充放电
    {
      path: '/jn/outputAndCharge',
      name: '晶能',
      component: () => import('@/views/mobile/jn/outputAndCharge/index.vue'),
      meta:{
        title:"晶能"
      }
    },
    //晶能装配产量看板
    {
        path: '/jn/outputAndCharge/output',
        name: '晶能装配产量看板',
        component: () => import(/* webpackChunkName: "output" */ '@/views/mobile/jn/outputAndCharge/output.vue'),
        meta:{
          title:"晶能装配产量看板"
        }
      },
    //   晶能充电
      {
        path: '/jn/outputAndCharge/charge',
        name: '晶能充电看板',
        component: () => import(/* webpackChunkName: "charge" */ '@/views/mobile/jn/outputAndCharge/charge.vue'),
        meta:{
          title:"晶能充电看板"
        }
      }
  ]
  
  export default  jnRoutes