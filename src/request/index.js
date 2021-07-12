/*
 * @Author: your name
 * @Date: 2021-07-10 16:24:55
 * @LastEditTime: 2021-07-12 08:32:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \visual-ui\src\request\index.js
 */
import axios from 'axios'
import { serialize } from '@/util/util'

import NProgress from 'nprogress' // progress bar
import errorCode from '@/const/errorCode'

import { Toast} from 'mint-ui'
import 'nprogress/nprogress.css'
import qs from 'qs'



// 返回其他状态码
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500 // 默认的
}
// // 根据环境设置baseUrl
// if(window.pageType =='pc'){
//   axios.defaults.baseURL= process.env.NODE_ENV == 'development'?  '/' :"http://192.168.33.86:8001"
// }else{
//   axios.defaults.baseURL= process.env.NODE_ENV == 'development'?  '/' :"http://192.168.33.186:8082"
// }
axios.defaults.baseURL= process.env.NODE_ENV == 'development'?  '/ai' :"/bi"

// 设置请求超时时间
axios.defaults.timeout = 30000

// 跨域请求，true为允许保存cookie
// 当允许保存cookie的时候，服务端设置允许跨域必须为具体地址，不能是通配符
axios.defaults.withCredentials = false

// NProgress Configuration
NProgress.configure({
  showSpinner: false
})

// HTTPrequest拦截
axios.interceptors.request.use(config => {
  NProgress.start() // start progress bar
  
  // headers中配置serialize为true开启序列化
  if (config.method === 'post' && config.headers.serialize) {
    config.data = serialize(config.data)
    delete config.data.serialize
  }

  if (config.method === 'get') {
    config.paramsSerializer = function (params) {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    }
  }

  return config
}, error => {
  return Promise.reject(error)
})

// HTTPresponse拦截
axios.interceptors.response.use(res => {
  NProgress.done()
  const status = Number(res.status) || 200
  const message = res.data.msg || errorCode[status] || errorCode['default']


  if (status !== 200 || res.data.code === 1) {
    Toast({
      message
    })
    return Promise.reject(new Error(message))
  }
  return res.data
}, error => {
  NProgress.done()
  return Promise.reject(new Error(error))
})

export default axios
