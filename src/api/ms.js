/*
 * @Author: your name
 * @Date: 2021-07-10 16:24:55
 * @LastEditTime: 2021-07-12 09:49:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \visual-ui\src\api\ms.js
 */
import request from "@/request"


//报警列表
const fetchListAlarmInfo = () => request({ 
  url: '/dev/ms/cdj/alarms', 
  method: 'get' 
})

// 获取机房实时利用率
const fetchRealTimeAvailability = () => request({
   url: '/dev/ms/cdj/availability', 
   method: 'get' 
})


// 获取回路状态
const fetchLoopState = () => request({
  url: "/dev/ms/cdj/loop/status",
  method: 'get'
})


// 回路利用率
const fetchUtilRate = () => request({
  url: '/dev/ms/cdj/rates/utilization',
  method: 'get'
})


// 获取当天机房产量
const fetchDayNum = () => request({
  url: "/dev/ms/cdj/output/day",
  method: 'get'
})


// 获取当月机房产量
const fetchMonthNum = () => request({
  url: "/dev/ms/cdj/output/month",
  method: 'get'
})

// 获取7天能耗趋势图
const fetchTrend = () => request({
  url: "/dev/ms/cdj/consumption/trend",
  method: 'get'
})


// 煤山充放电
const getBaseMap = () => request({
  url: "/dev/ms/cdj/status",
  method: 'get',
})


// 煤山点塑机状态
const getMsOutput = () => request({
  url: "/dev/ms/dj/output",
  method: "get"
})

// 煤山点塑机状态
const getMsStatus = () => request({
  url: "/dev/ms/dj/status",
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

