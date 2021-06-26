import request from "@/request"
//报警列表
const fetchJnListAlarmInfo=()=> {
    return request({
        url: '/bi/jn/alarm/listAlarmInfo',
        method: 'get'
    })
}
// 获取机房实时利用率
const  fetchJnRealTimeAvailability=()=> {
    return request({
        url: '/bi/jn/charge/getRealTimeAvailability',
        method: 'get'
    })
}

// 获取回路状态
const fetchJnLoopState=()=> {
    return request({
        url: "/bi/jn/loopState/state",
        method: 'get'
    })
}

// 回路利用率
const fetchJnUtilRate=()=> {
    return request({
        url: '/bi/jn/utilRate',
        method: 'get'
    })
}

// 获取当天机房产量
const fetchJnDayNum =()=> {
    return request({
        url: "/bi/jn/charge/day",
        method: 'get'
    })
}

// 获取当月机房产量
const fetchJnMonthNum =()=> {
    return request({
        url: "/bi/jn/charge/month",
        method: 'get'
    })
}

// 获取7天能耗趋势图
const fetchJnTrend =()=> {
    return request({
        url: "/bi/jn/energyConsumption/trend",
        method: 'get'
    })
}

// 晶能充放电
const getJnBaseMap =()=> {
    return request({
        url: "/bi/jn/BaseMap/getBaseMap",
        method: 'get',
    })
}



// 晶能点塑机产量

const getJnOutput=()=> {
    return request({
        url: "/bi/DevDjInfo/output",
        method: "get"
    })
}



// 晶能点塑机状态
const getJnStatus=()=> {
    return request({
        url: "/bi/DevDjInfo/status",
        method: "get"
    })
}



export default {
    fetchJnDayNum,
    fetchJnMonthNum,
    fetchJnRealTimeAvailability,
    fetchJnLoopState,
    fetchJnTrend,
    fetchJnUtilRate,
    fetchJnListAlarmInfo,
    getJnBaseMap,
    getJnOutput,
    getJnStatus
}


