/*
 * @Author: your name
 * @Date: 2021-07-10 16:24:55
 * @LastEditTime: 2021-07-12 09:50:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \visual-ui\src\api\group.js
 */
import request from "@/request"

// 工业互联
const getSupplyChain = () => request({
    url: "/sc/ms/statistics",
    method: 'get',
  })


export default {
    getSupplyChain
}