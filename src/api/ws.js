import request from "@/request"


// 吴山未来工厂质量管理平台
const  wsQuality =(query)=> {
    return request({
      url: '/client/quality/manager/data',
      method: 'get',
      params: query
    })
}

// 吴山点塑机
const getWsOutput = () => request({
  url: "/bi/DevDjInfo/output",
  method: "get"
})


// 吴山点塑机状态
const getWsStatus = () => request({
  url: "/bi/DevDjInfo/status",
  method: "get"
})

// 动力能源
const getPower = () => request({
  url: "/bi/qm/report",
  method: "get"
})
// 动力能源 球磨
const getQmOutput = () => request({
  url: "/bi/qm/output",
  method: "get"
})

// 动力能源 机械手臂
const getArmOutput = () => request({
  url: "/bi/mechanical/arm/output",
  method: "get"
})

// 动力能源 封装
const getBriefOutput = () => request({
  url: "/bi/DevDjInfo/outputBrief",
  method: "get"
})

// 打码
const getCode = () => request({
  url: "/bi/qm/coding",
  method: "get"
})

const getStockInfo = () => request({
  url: "/bi/mechanical/arm/getStockInfo",
  method: "get"
})

//动力能源  获取在充电池数
const getChargingCount = (query) => request({
  url: "/client/jinfan/charging/count",
  method: "get",
  params: query
})

// 动力能源  获取开机数量
const getLaunchCount = (query) => request({
  url: "/client/jinfan/launch/count",
  method: "get",
  params: query
})


// 动力能源  获取下架数量
const getFinishCount = (query) => request({
  url: `/client/jinfan/finish/count`,
  method: "get",
  params: query
})

// 动力能源 获取利用率
const getUtilizationRate = (query) => request({
  url: `/client/jinfan/utilization/rate`,
  method: "get",
  params: query
})

export default {
    wsQuality ,
    getWsOutput,
    getWsStatus,
    getPower,
    getQmOutput ,
    getArmOutput,
    getBriefOutput,
    getCode,
    getStockInfo,
    getChargingCount,
    getLaunchCount,
    getFinishCount,
    getUtilizationRate
}
