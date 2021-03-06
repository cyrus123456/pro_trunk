import request from '@/utils/request'
import apiPath from '@/api/apiPath'
import qs from 'qs'
export function login (userCode, comCode, password) {
  console.log(userCode)
  console.log(comCode)
  console.log(password)
  return request({
    url: apiPath.getPath('login'),
    method: 'post',
    data: {
      userCode,
      comCode,
      password
    }
  })
}

export function getMenu (token) {
  console.log(token)
  return request({
    url: '/gcd/getMenu',
    method: 'post',
    data: {
      token
    }
  })
}

export function getInfo (params) {
  return request({
    url: apiPath.getPath('userInfo'),
    method: 'post',
    data: params
  })
  /* return new Promise((resolve, reject) => {
    request({
      url: '/api/gcd/user/info',
      method: 'post',
      data: {
        token
      }
    }).then(response => {
      console.log('最外层用户', response)
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  }) */
}

export function logout () {
  return request({
    url: '/gcd/logout',
    method: 'post'
  })
}
