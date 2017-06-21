// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

// axios全局配置
let instance = axios.create({
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
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
// axios相应拦截器
instance.interceptors.response.use(function (response) {
  // Do something with response data
  // TODO: 简单错误请求拦截
  if (response.data.code !== 200) {
    alert(response.data.msg)
    return Promise.reject(response.data.msg)
  }
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})
Vue.prototype.$ajax = instance

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
