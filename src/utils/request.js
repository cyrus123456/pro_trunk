import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken, setToken, removeToken } from '@/utils/auth'
// 创建axios实例
// console.log('top.location.host', top.location.host)
const service = axios.create({
  // baseURL: top.location.host, // api的base_url
  baseURL: '/', // api的base_url
  // baseURL: process.env.BASE_API, // process.env.BASE_API, api的base_url
  timeout: 120000, // 请求超时时间
  withCredentials: true
})

// request拦截器
service.interceptors.request.use(config => {
  console.log('------request拦截器------', config)
  /* if (store.getters.token) {
    config.headers['jwt'] = getToken() // 让每个请求携带自定义token localStorage获取
    config.headers['jwt'] = store.getters.token // 让每个请求携带自定义token
  } */
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(
  response => {
    console.log('text/html', response)
    if (!response.data) {
      Message({
        message: '系统异常',
        type: 'error',
        duration: 2 * 1000
      })
      return Promise.reject('error')
    } else if (response.data.flag !== '1') {
      Message({
        message: response.data.message,
        type: 'error',
        duration: 2 * 1000
      })
      return Promise.reject('error')
    } else {
      return response.data
    }
  /**
  * code为非20000是抛错 可结合自己业务进行修改
  */
    /* let res
    // 如果返回是数组
    if (response.data instanceof Array) {
      if (response.data.length === 1) {
        res = response.data[0]
      } else {
        return response.data
      }
    } else {
      res = response.data
    }
    // 每次重写token
    if (response.config.url.indexOf('login') === -1 && response.data && response.data.code === '200' && response.headers['jwt']) {
      setToken(response.headers['jwt']) // 获取用户信息之后设置localStorage
      store.commit('SET_TOKEN', response.headers['jwt'])
    }

    if (response.config.responseType === 'blob' || response.config.responseType === 'arraybuffer' || response.headers['content-type'] === 'application/octet-stream') {
      return response
    }

    if (response.config.url === '/gcd/login') {
      // response.setContentType("application/json");
      return response
    }

    if (response.config.url === '/gcd/gcdlogin') {
      // response.setContentType("application/json");
      return response
    }
    if (res.code !== '200') {
      Message({
        message: res.msg,
        type: 'error',
        duration: 2 * 1000
      })
      return Promise.reject('error')
    } else {
      return response.data
    } */
  },
  error => {
    console.log('err' + error)// for debug
    Message({
      message: '服务异常',
      type: 'error',
      duration: 2 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
