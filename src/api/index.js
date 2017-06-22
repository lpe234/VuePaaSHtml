/**
 * Created by lpe234 on 2017/6/21.
 */

import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// axios全局配置
let $ = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: {
    common: {
      Authorization: 'AUTH_TOKEN'
    },
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
})

// axios请求拦截器
$.interceptors.request.use(function (config) {
  // Do something before request is sent
  NProgress.start()
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
// axios相应拦截器
$.interceptors.response.use(function (response) {
  // Do something with response data
  NProgress.done()
  // TODO: 简单错误请求拦截
  if (response.data.code !== 200) {
    alert(response.data.msg)
    return Promise.reject('请求出错:' + response.data.msg)
  }
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default $
