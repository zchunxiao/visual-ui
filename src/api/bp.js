/*
 * @Author: your name
 * @Date: 2021-07-10 16:24:55
 * @LastEditTime: 2021-07-12 09:53:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \visual-ui\src\api\bp.js
 */
import request from "@/request"


// 部品工业互联
const getBpOutput = () => request({
    url: "/dev/bp/zs/output",
    method: 'get',
  })


export default {
    getBpOutput 
}