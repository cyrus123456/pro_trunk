import { asyncRouterMap, constantRouterMap } from '@/router'
// import { asyncRouterMap, constantRouterMap } from '@/router'
const menuList = [
  // 报表(工作台首页)
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { title: '工作台', icon: 'dashboard' },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: { title: '工作台', icon: 'dashboard' }
      }
    ]
  },
  // 第三方官网
  {
    path: '/myiframe',
    redirect: '/myiframe',
    children: [{
      path: ':routerPath',
      name: 'myiframe',
      meta: { title: 'thirdPartyWebsite', icon: 'people' }
    }]

  },
  // 公司简介
  {
    path: '/company',
    name: 'company',
    meta: { title: '公司简介', icon: 'introduction' },
    children: [
      {
        path: 'company',
        name: 'company',
        meta: { title: '公司简介', icon: 'introduction' }
      }
    ]
  },
  // 承保经验
  {
    path: '/proposal',
    name: 'proposal',
    meta: { title: '承保经验', icon: 'introduction' },
    children: [
      {
        path: 'proposal',
        name: 'proposal',
        meta: { title: '承保经验', icon: 'introduction' }
      }
    ]
  },
  // 理赔经验
  {
    path: '/claim',
    name: 'claim',
    meta: { title: '理赔经验', icon: 'introduction' },
    children: [
      {
        path: 'claim',
        name: 'claim',
        meta: { title: '理赔经验', icon: 'introduction' }
      }
    ]
  },
  // 核保指引
  {
    path: '/underwrite',
    name: 'underwrite',
    meta: { title: '核保指引', icon: 'introduction' },
    children: [
      {
        path: 'underwrite',
        name: 'underwrite',
        meta: { title: '核保指引', icon: 'introduction' }
      }
    ]
  },
  // 模板下载
  {
    path: '/templates',
    name: 'templates',
    meta: { title: '模版下载', icon: 'introduction' },
    children: [
      {
        path: 'templates',
        name: 'templates',
        meta: { title: '模版下载', icon: 'introduction' }
      }
    ]
  },
  // 按需定制
  {
    path: '/demand',
    name: 'demand',
    meta: { title: '按需定制', icon: 'introduction' },
    children: [
      {
        path: 'demand',
        name: 'demand',
        meta: { title: '按需定制', icon: 'introduction' }
      }
    ]
  },
  // 服务商场
  {
    path: '/shop',
    name: 'shop',
    meta: { title: '服务商场', icon: 'introduction' },
    children: [
      {
        path: 'shop',
        name: 'shop',
        meta: { title: '服务商场', icon: 'introduction' }
      }
    ]
  },
  // 在线询价
  {
    path: '/enquiry',
    name: 'enquiry',
    meta: { title: '在线询价', icon: 'introduction' },
    children: [
      {
        path: 'enquiry',
        name: 'enquiry',
        meta: { title: '在线询价', icon: 'introduction' }
      }
    ]
  },
  // 黑名单
  {
    path: '/blacklist',
    name: 'blacklist',
    meta: { title: '黑名单', icon: 'introduction' },
    children: [
      {
        path: 'blacklist',
        name: 'blacklist',
        meta: { title: '黑名单', icon: 'introduction' }
      }
    ]
  }

]
/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission (roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.indexOf(role) >= 0)
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter (asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    // routers: constantRouterMap,
    routers: menuList,
    addRouters: [],
    platform: 'almighty', // 全能保登录：almighty   gcd单独登录：gcd
    isOnlyShowContent: true
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      // state.routers = constantRouterMap.concat(routers)  // 完全后端返回，不需本地配置
      state.routers = routers
    },
    SET_ISONILSHOWCONTENT: (state, flag) => {
      state.isOnlyShowContent = flag
    },
    SET_PLATFORM: (state, flag) => {
      state.platform = flag
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters
        /* if (roles.indexOf('admin') >= 0) {
          console.log('admin>=0')
          accessedRouters = asyncRouterMap
        } else {
          console.log('admin<0')
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
          // accessedRouters = ''
          // accessedRouters = asyncRouterMap
        } */
        accessedRouters = roles
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
