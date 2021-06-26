import request from "@/request"


//报警列表
const fetchListAlarmInfo = () => request({ 
  url: '/bi/alarm/listAlarmInfo', 
  method: 'get' 
})

// 获取机房实时利用率
const fetchRealTimeAvailability = () => request({
   url: '/bi/comRoomAvailability/getRealTimeAvailability', 
   method: 'get' 
})


// 获取回路状态
const fetchLoopState = () => request({
  url: "/bi/loopState/getLoopState",
  method: 'get'
})


// 回路利用率
const fetchUtilRate = () => request({
  url: '/bi/utilRate',
  method: 'get'
})


// 获取当天机房产量
const fetchDayNum = () => request({
  url: "/bi/output/day",
  method: 'get'
})


// 获取当月机房产量
const fetchMonthNum = () => request({
  url: "/bi/output/month",
  method: 'get'
})

// 获取7天能耗趋势图
const fetchTrend = () => request({
  url: "/bi/energyConsumption/trend",
  method: 'get'
})


// 煤山充放电
const getBaseMap = () => request({
  url: "/bi/baseMap/getBaseMap",
  method: 'get',
})


// 煤山点塑机状态
const getMsOutput = () => request({
  url: "/bi/MsDevDjInfo/output",
  method: "get"
})

// 煤山点塑机状态
const getMsStatus = () => request({
  url: "/bi/MsDevDjInfo/status",
  method: "get"
})









export default {
  fetchListAlarmInfo,
  fetchRealTimeAvailability,
  fetchLoopState,
  fetchUtilRate,
  fetchDayNum,
  fetchMonthNum,
  fetchTrend,
  getBaseMap,
  getMsOutput,
  getMsStatus,
}

