import request from "@/request"


// 部品工业互联
const getBpOutput = () => request({
    url: "/bi/ZsInfo/output",
    method: 'get',
  })


export default {
    getBpOutput 
}