import request from "@/request"
//报警列表
const fetchJnListAlarmInfo=()=> {
    return request({
        url: '/dev/jn/cdj/alarms',
        method: 'get'
    })
}
// 获取机房实时利用率
const  fetchJnRealTimeAvailability=()=> {
    return request({
        url: '/dev/jn/cdj/availability',
        method: 'get'
    })
}

// 获取回路状态
const fetchJnLoopState=()=> {
    return request({
        url: "/dev/jn/cdj/loop/status",
        method: 'get'
    })
}

// 回路利用率
const fetchJnUtilRate=()=> {
    return request({
        url: '/dev/jn/cdj/rates/utilization',
        method: 'get'
    })
}

// 获取当天机房产量
const fetchJnDayNum =()=> {
    return request({
        url: "/dev/jn/cdj/output/day",
        method: 'get'
    })
}

// 获取当月机房产量
const fetchJnMonthNum =()=> {
    return request({
        url: "/dev/jn/cdj/output/month",
        method: 'get'
    })
}

// 获取7天能耗趋势图
const fetchJnTrend =()=> {
    return request({
        url: "/dev/jn/cdj/consumption/trend",
        method: 'get'
    })
}

// 晶能充放电
const getJnBaseMap =()=> {
    return request({
        url: "/dev/jn/cdj/status",
        method: 'get',
    })
}



// 晶能点塑机产量

const getJnOutput=()=> {
    return request({
        // url: "/bi/jn/DevDjInfo/output",
        url:"/dev/jn/dj/output",
        method: "get"
    })
}



// 晶能点塑机状态
const getJnStatus=()=> {
    return request({
        url: "/dev/jn/dj/status",
        method: "get"
    })
}


// 移动端
// 晶能充电面板
const getCharge =()=>{
    return request.get(`/dev/jn/cdj/output`)
}
// 晶能装配产量看板
const getOutput =(params)=>{
    return request.get(`/dev/jn/assembly/output`,{params})
}

//当天开工确认人数和基地下产线编制人数
const getWorkList=(params)=>{
    return request.get(`/mes/jn/statistics/works`,{params})
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
    getJnStatus,

    // 移动端
    getCharge,
    getOutput,
    getWorkList
}


