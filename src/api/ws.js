import request from "@/request"


// 吴山未来工厂质量管理平台
const  wsQuality =(query)=> {
    return request({
      url: '/ws/qc/manager',
      method: 'get',
      params: query
    })
}

// 吴山点塑机
const getWsOutput = () => request({
  url: "/dev/ws/dj/output",
  method: "get"
})


// 吴山点塑机状态
const getWsStatus = () => request({
  url: "/dev/ws/dj/status",
  method: "get"
})

// 动力能源
const getPower = () => request({
  url: "/dev/ws/statistics",
  method: "get"
})
// 动力能源 球磨
const getQmOutput = () => request({
  url: "/dev/ws/qm/output",
  method: "get"
})

// 动力能源 机械手臂
const getArmOutput = () => request({
  url: "/dev/ws/jxb/output",
  method: "get"
})

// 动力能源 封装
const getBriefOutput = () => request({
  url: "/dev/ws/dj/output/brief",
  method: "get"
})

// 打码
const getCode = () => request({
  url: "/dev/ws/dmj/output",
  method: "get"
})

const getStockInfo = () => request({
  url: "/sc/ws/statistics/stock/lead",
  method: "get"
})

//动力能源  获取在充电池数
const getChargingCount = (query) => request({
  url: "/dev/ws/cdj/output/charging",
  method: "get",
  params: query
})

// 动力能源  获取开机数量
const getLaunchCount = (query) => request({
  url: "/dev/ws/cdj/output/launch",
  method: "get",
  params: query
})


// 动力能源  获取下架数量
const getFinishCount = (query) => request({
  url: `/dev/ws/cdj/output/finish`,
  method: "get",
  params: query
})

// 动力能源 获取利用率
const getUtilizationRate = (query) => request({
  url: `/dev/ws/cdj/rates/utilization`,
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
