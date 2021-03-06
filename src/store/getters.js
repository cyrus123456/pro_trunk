let _sessionStorage = window.sessionStorage
const USERINFO = 'USERINFO' // 用户信息
const MAPLIST = 'MAPLIST' // 列表
const ISLOGIN = 'ISLOGIN' // 登录状态
const MENULIST = 'MENULIST' // 菜单列表
const BREADLIST = 'BREADLIST' // 面包屑列表
const CURRENTITEM = 'CURRENTITEM' // 当前项目信息
const ISONLYSHOWCONTENT = 'ISONLYSHOWCONTENT' // 当前项目信息
const getters = {
  language: state => state.app.language,
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  website: state => state.common.website,
  isLock: state => state.user.isLock,
  lockPasswd: state => state.user.lockPasswd,
  isFullScren: state => state.common.isFullScren,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  browserHeaderTitle: state => state.user.browserHeaderTitle,
  errorLogs: state => state.errorLog.logs,
  platform: state => state.permission.platform,
  isOnlyShowContent: state => state.permission.isOnlyShowContent,
  permissionMenu: state => state.user.permissionMenu,
  [USERINFO] (state) {
    state.userInfo = {
      token: state.user.token,
      name: state.user.name,
      avatar: state.user.avatar
    }
    return state.userInfo
  }

}
export default getters
