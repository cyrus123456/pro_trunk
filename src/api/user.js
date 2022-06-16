import request from '@/utils/request'

export function getCurrentToken () {
  return request({
    url: '/gcd/user/getCurrentToken',
    method: 'post',
    data: {
    }
  })
}

export function getInfo (token) {
  console.log('获取菜单', token)
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
