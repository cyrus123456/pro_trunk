import Mock from 'mockjs'
import loginAPI from './login'
import userAPI from './user'
import commonAPI from './common'

import authorityAPI from './authority'
import oaAutoAPI from './oaAuto'

const mockMap = {
  commonAPI,
  authorityAPI

}

// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
  timeout: '300-600'
})

// 云影像
// Mock.mock(/\/gcd\/yun\/upload/, 'post', commonAPI.uploadyun)
// Mock.mock(/\/gcd\/yun\/down$/, 'post', commonAPI.downyun)

// 登录相关
// Mock.mock(/\/user\/login/, 'post', loginAPI.login)
Mock.mock(/\/gcd\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/gcd\/user\/info\.*/, 'post', loginAPI.getUserInfo)
Mock.mock(/\/gcd\/user\/getCurrentToken\.*/, 'post', userAPI.getCurrentToken)
Mock.mock(/\/gcd\/getMenu/, 'post', loginAPI.getMenu)

// Mock.mock(/\/gcd\/login/, 'post', loginAPI.login)
Mock.mock(/\/gcd\/gcdlogin/, 'post', loginAPI.loginNew)
Mock.mock(/\/gcd\/menuPower/, 'post', commonAPI.getPermission)
// Mock.mock(/\/gcd\/authority\/queryAuthority/, 'post', authorityAPI.getLists)// 在线询价暂存单查看详情

Mock.mock(/\/platform\/UserPostServlet/, 'post', function (options) {
  console.log('UserPostServlet', options)
  let _data = JSON.parse(options.body)
  /**
   * [通过参数名获取url中的参数值]
   * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
   * @param  {[string]} queryName [参数名]
   * @return {[string]}           [参数值]
   */
  function GetQueryValue (queryName) {
    var query = decodeURI(options.url.split('?')[1])
    console.log('query', query)
    var vars = query.split('&')
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=')
      if (pair[1] === 'querySystemPostList') {
        return 'querySystemPostList'
      } else if (pair[1] === 'queryUserPostList') {
        return 'queryUserPostList'
      } else if (pair[1] === 'querySystemPostTaskMenu') {
        return 'querySystemPostTaskMenu'
      } else if (pair[1] === 'queryUserPostDisplayRisk') {
        return 'queryUserPostDisplayRisk'
      } else if (pair[0] === queryName) {
        return pair[1]
      }
    }
    return null
  }

  var queryVal = GetQueryValue('codeType')
  console.log('queryVal', queryVal)
  console.log('queryVal', authorityAPI)
  return authorityAPI[queryVal](options)
})

Mock.mock(/\/platform\/OaAutomaticConfigurationServlet/, 'post', function (options) {
  // let _data = JSON.parse(options.body)
  // console.log(_data.actionType)
  // console.log(oaAutoAPI[_data.actionType])
  // return oaAutoAPI[_data.actionType](options)
  // return oaAutoAPI.oaAutoLoad

  /**
   * [通过参数名获取url中的参数值]
   * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
   * @param  {[string]} queryName [参数名]
   * @return {[string]}           [参数值]
   */
  function GetQueryValue () {
    // var query = decodeURI(options.url.split('?')[1])
    var query = JSON.parse(options.body)
    if (query.codeType) {
      return query.codeType
    } else if (query.actionType) {
      if (query.actionType === 'infoSupply') {
        return query.actionType + query.fieldValue
      } else {
        return query.actionType
      }
    } else {
      return 'oaAutoLoad'
    }
    return null
  }

  var queryVal = GetQueryValue()
  console.log('queryVal', queryVal)
  console.log('queryVal', authorityAPI)
  return oaAutoAPI[queryVal](options)
})

export default Mock
