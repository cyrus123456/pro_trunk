import { login, logout, getInfo, getMenu } from '@/api/login'
import { getPermission} from '@/api/common'
import { getCurrentToken } from '@/api/user'
import { getToken, setToken, removeToken, getUserName, setUserName, removeUserName } from '@/utils/auth'
import website from '@/api/website'
import {
  setStore,
  getStore,
  removeStore
} from '@/utils/store'
const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [
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
      // 按钮权限
      {
        path: '/permission',
        name: 'permission',
        meta: { title: '按钮权限', icon: 'introduction' },
        children: [
          {
            path: 'permission',
            name: 'permission',
            meta: { title: '按钮权限', icon: 'introduction' }
          }
        ]
      }

    ],
    isLock: getStore({
      name: 'isLock'
    }) || false,
    lockPasswd: getStore({
      name: 'lockPasswd'
    }) || '',
    browserHeaderTitle: getStore({
      name: 'browserHeaderTitle'
    }) || 'GCD',
    permissionMenu: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_LOCK_PASSWD: (state, lockPasswd) => {
      state.lockPasswd = lockPasswd
      setStore({
        name: 'lockPasswd',
        content: state.lockPasswd,
        type: 'session'
      })
    },
    SET_LOCK: (state, action) => {
      state.isLock = true
      setStore({
        name: 'isLock',
        content: state.isLock,
        type: 'session'
      })
    },
    CLEAR_LOCK: (state, action) => {
      state.isLock = false
      state.lockPasswd = ''
      removeStore({
        name: 'lockPasswd'
      })
      removeStore({
        name: 'isLock'
      })
    },
    SET_BROWSERHEADERTITLE: (state, action) => {
      state.browserHeaderTitle = action.browserHeaderTitle
    },
    SET_PERMISSION_MENU: (state, permissionMenu) => {
      state.permissionMenu = permissionMenu
      // token: getToken(),
      // setStore({
      //   name: 'permissionMenu',
      //   content: state.permissionMenu
      // })
    }

  },

  actions: {
    // 登录
    /* Login ({ commit }, userInfo) {
      const userCode = userInfo.userCode.trim()
      const comCode = userInfo.comCode.trim()
      return new Promise((resolve, reject) => {
        login(userCode, comCode, userInfo.password).then(response => {
          const data = response
          setToken(data.token) // 获取用户信息之后设置localStorage
          commit('SET_TOKEN', data.token)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }, */
    // 登录
    Login ({ commit }, userInfo) {
      const userCode = userInfo.userCode.trim()
      const comCode = userInfo.comCode.trim()
      return new Promise((resolve, reject) => {
        login(userCode, comCode, userInfo.password).then(response => {
          // const data = response
          let token = ''
          if (response.data && response.data.data && response.data.data.token) {
            token = response.data.data.token
          } else {
            token = '77777'
            // token = response.headers['jwt']
          }
          if (token) {
            setToken(token) // 获取用户信息之后设置localStorage
            // setUserName(response.data.data.userCode) // 获取用户信息之后设置localStorage
            // commit('SET_TOKEN', token)
            // commit('SET_NAME', response.data.data.userCode)
            setUserName('10000034') // 获取用户信息之后设置localStorage
            commit('SET_TOKEN', token)
            commit('SET_NAME', '10000034')
            resolve(response)
          } else {
            reject('token信息获取失败')
          }
          // commit('SET_NAME', data.name)
          // commit('SET_AVATAR', data.avatar)
          // commit('SET_ROLES', website.menuList)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit }, almightyInfo) {
      return new Promise((resolve, reject) => {
        getInfo(almightyInfo).then(response => {
          console.log('获取用户信息', response)
          const data = response
          setToken(response.headers['jwt']) // 获取用户信息之后设置localStorage
          setUserName(response.data.data.userCode) // 获取用户信息之后设置localStorage
          commit('SET_TOKEN', response.headers['jwt'])
          // commit('SET_NAME', response.data.data.userCode)
          // commit('SET_AVATAR', data.avatar)
          commit('SET_ROLES', website.menuList)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    /* GetInfo ({ commit }, almightyInfo) {
      return new Promise((resolve, reject) => {
        getInfo(almightyInfo).then(response => {
          let token = ''
          if (response.data && response.data.data && response.data.data.token) {
            token = response.data.data.token
          } else {
            token = response.headers['jwt']
          }
          if (token) {
            setToken(token) // 获取用户信息之后设置localStorage
            commit('SET_TOKEN', token)
            commit('SET_ROLES', website.menuList)
            resolve(response)
          } else {
            reject('token信息获取失败')
          }
        }).catch(error => {
          reject(error)
        })
      })
    }, */

    // 获取用户信息 远程获取
    /* GetMenu ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getMenu(state.token).then(response => {
          const data = response
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }, */

    // 获取用户信息 静态菜单
    GetMenu ({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_ROLES', website.menuList)
        resolve(website.menuList)
      })
    },

    // 登出 动态
    /* LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          commit('CLEAR_LOCK')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }, */

    // 登出 静态
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('CLEAR_LOCK')
        removeToken()
        removeUserName()
        resolve()
      })
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },
    // 动态修改权限
    ChangeRoles ({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getInfo(role).then(response => {
          const data = response
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve()
        })
      })
    },
    // 远程获取token
    getCurrentToken ({ commit }, role) {
      return new Promise(resolve => {
        getCurrentToken(role).then(response => {
          const data = response
          setToken(data.data.token) // 登录成功之后设置cookie
          commit('SET_TOKEN', data.data.token) // 登录成功之后将token 写入 state
          resolve(response)
        })
      })
    },
    getPermission ({ commit }, menuName) {
      return new Promise((resolve, reject) => {
        getPermission(menuName).then(response => {
          commit('SET_PERMISSION_MENU', response.data)
          // commit('SET_AVATAR', data.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
