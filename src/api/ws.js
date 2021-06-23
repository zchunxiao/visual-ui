import request from "@/request"


// 吴山未来工厂质量管理平台
const  wsQuality =(query)=> {
    return request({
      url: '/client/quality/manager/data',
      method: 'get',
      params: query
    })
}



export default {
    wsQuality 
}
