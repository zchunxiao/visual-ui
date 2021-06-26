import request from "@/request"

// 工业互联
const getSupplyChain = () => request({
    url: "/bi/supplyChain/getSupplyChain",
    method: 'get',
  })


export default {
    getSupplyChain
}