import request from '@/utils/request'
import apiPath from '@/api/apiPath'
import qs from 'qs'
export function getTemplatefiles (params) {
  window.location.href = apiPath.getPath('getTemplatefiles') + '/' + params
}
export function toyun (params) {
  let url = apiPath.getPath('toyun') + '?appcode=' + params.appcode + '&appname=' + params.appname + '&idlist=' + params.idlist[0]
  return url
}
export function uploadyun (params) {
  return request({
    url: apiPath.getPath('uploadyun'),
    method: 'post',
    data: params
  })
}
export function downyun (params) {
  return request({
    url: apiPath.getPath('downyun'),
    method: 'post',
    data: params
  })
}
export function downPackage (params) {
  return request({
    url: apiPath.getPath('downPackage'),
    method: 'post',
    // responseType: 'blob',
    data: params
  })
}
export function getPermission (params) {
  let par = ''
  if (params) {
    par = '?menuName=' + params
  } else {
    par = ''
  }
  return request({
    url: apiPath.getPath('getPermission') + par,
    method: 'post'
  })
}
