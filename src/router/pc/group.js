const groupRoutes = [
    // 基于工业互联网的供应链协同平台
    {
      path: '/group/platform',
      name: '基于工业互联网的供应链协同平台',
      component: () => import(/* webpackChunkName: "about" */ '@/views/pc/group/platform'),
      meta:{
        title:"基于工业互联网的供应链协同平台"
      }
    }
  ]
  
  export default  groupRoutes