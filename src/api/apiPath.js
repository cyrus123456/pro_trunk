var ApiPathConstant = {
  // ip: '',
  serverName: '',
  /* 系统组件 */
  menuData: '/getMenuData', // 测试环境
  /* 公共组件 */
  getTemplatefiles: '/gcd/templatefiles', // 模板下载文件

  /* 登录相关 */
  userInfo: '/gcd/login', // 全能保用户信息获取
  login: '/gcd/gcdlogin', // GCD登录
  getPermission: '/gcd/menuPower', // 功能菜单

  UserPostServlet: '/platform/UserPostServlet', // 提交新增
  OaAutomaticConfigurationServlet: '/platform/OaAutomaticConfigurationServlet', // OA自动化

  // 获取请求路径方法
  getPath (requestName) {
    // console.log('op.location',top.location)
    if (this[requestName]) {
      // console.log('top.location', top.location)
      return this.serverName + this[requestName]
      // return top.location.protocol + '//' + top.location.host + this[requestName]
    }
    // return top.location.host + requestName
    return this.serverName + requestName
  }
}
export default ApiPathConstant
