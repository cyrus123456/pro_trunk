import request from '@/utils/request'
import apiPath from '@/api/apiPath'

// 公司简介初始化数据
export function getData () {
  return request({
    url: apiPath.getPath('test'),
    method: 'post'
    // data: params,
  })
}
