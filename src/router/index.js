import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '@/modules/layout/Layout'

// const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login'), name: '登录NxAdmin', hidden: true },
  {
    path: '/',
    name: 'dashboard',
    component: Layout,
    children: [
      {
        path: '',
        name: 'dashboard',
        meta: {title: '首页', icon: 'introduction'},
        component: () => import('@/views/dashboard/index.vue')
      },
      {
        path: 'system',
        name: 'system',
        meta: {title: 'system', icon: 'introduction', keepAlive: true, isBack: true},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/system/index.vue')// import按需加载（官方写法）能够被webpack自动代码分割;允许将不同的组件打包到一个异步块中，使用命名chunk(特殊注释语法)。; Webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。
      },
      {
        path: 'systemDetail',
        name: 'systemDetail',
        meta: {title: 'systemDetail', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/system/page.vue')
      },
      {
        path: 'user',
        name: 'user',
        meta: {title: 'user', icon: 'introduction', keepAlive: false, isBack: true},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/user/index.vue')
      },
      {
        path: 'userDetail',
        name: 'userDetail',
        meta: {title: 'userDetail', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/user/page.vue')
      },
      {
        path: 'oaAuto',
        name: 'oaAuto',
        meta: {title: 'oaAuto', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/oaAuto/index.vue')
      },
      {
        path: 'oaAutoLoad',
        name: 'oaAutoLoad',
        meta: {title: 'oaAutoLoad', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/oaAuto/oaAutoLoad.vue')
      },
      {
        path: 'oaAutoMenuApply',
        name: 'oaAutoMenuApply',
        meta: {title: 'oaAutoMenuApply', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/oaAuto/oaAutoMenuApply.vue')
      },
      {
        path: 'oaAutoEhrBand',
        name: 'oaAutoEhrBand',
        meta: {title: 'oaAutoEhrBand', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/oaAuto/oaAutoEhrBand.vue')
      },
      {
        path: 'oaAutoGradesMenu',
        name: 'oaAutoGradesMenu',
        meta: {title: 'oaAutoGradesMenu', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/oaAuto/oaAutoGradesMenu.vue')
      },
      {
        path: 'oaAutoGradesMenuDetail',
        name: 'oaAutoGradesMenuDetail',
        meta: {title: 'oaAutoGradesMenuDetail', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/oaAuto/oaAutoGradesMenuDetail.vue')
      },
      // 新增非车险理赔权限申请
      {
        path: 'oaAutoClaimsMenuApply',
        name: 'oaAutoClaimsMenuApply',
        meta: {title: 'oaAutoClaimsMenuApply', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/oaAuto/oaAutoClaimsMenuApply.vue')
      },
      {
        path: 'oaAutoClaimsGradesMenu',
        name: 'oaAutoClaimsGradesMenu',
        meta: {title: 'ClaimsGradesMenu', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/oaAuto/oaAutoClaimsGradesMenu.vue')
      },
      // 新增非车险理赔岗位换人申请
      {
        path: 'oaAutoPostReplaceApply',
        name: 'oaAutoPostReplaceApply',
        meta: {title: 'oaAutoPostReplaceApply', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/oaAuto/oaAutoPostReplaceApply.vue')
      },
      /* {
        path: 'oaAuto/:code',
        name: 'oaAutoManage',
        meta: {title: 'oaAutoManage', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/oaAuto/page.vue')
      } */
      {
        path: 'oaAutoClaimsUnderwrit',
        name: 'oaAutoClaimsUnderwrit',
        meta: {title: 'oaAutoClaimsUnderwrit', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/oaAuto/oaAutoUnderwritApply.vue')
      },
      {
        path: 'oaAutoBranchUnderwrit',
        name: 'oaAutoBranchUnderwrit',
        meta: {title: 'oaAutoBranchUnderwrit', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/oaAuto/oaAutoUnderwritApply.vue')
      },
      {
        path: 'oaAutoUnderwritGradesMenu',
        name: 'oaAutoUnderwritGradesMenu',
        meta: {title: 'oaAutoUnderwritGradesMenu', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/oaAuto/oaAutoUnderwritGradesMenu.vue')
      },
      {
        path: 'oaAutoJFCDSWITCHTask',
        name: 'oaAutoJFCDSWITCHTask',
        meta: {title: 'oaAutoJFCDSWITCHTask', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/oaAuto/oaAutoJFCDSWITCHTask.vue')
      },
      {
        path: 'oaAutoplatformpostReplaceApplyTask',
        name: 'oaAutoplatformpostReplaceApplyTask',
        meta: {title: 'oaAutoplatformpostReplaceApplyTask', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/oaAuto/oaAutoplatformpostReplaceApplyTask.vue')
      },
      {
        path: 'oaAutoplatformupNodePermissionsTask',
        name: 'oaAutoplatformupNodePermissionsTask',
        meta: {title: 'oaAutoplatformupNodePermissionsTask', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/oaAuto/oaAutoplatformupNodePermissionsTask.vue')
      },
      {
        path: 'oaAutoupNodePermissionsReplaceMessageReplaceApplyTask',
        name: 'oaAutoupNodePermissionsReplaceMessageReplaceApplyTask',
        meta: {title: 'oaAutoupNodePermissionsReplaceMessageReplaceApplyTask', icon: 'introduction'},
        // component: r => require.ensure([], () => r(require('@/views/demo/index.vue')), 'demo')//webpack提供的require.ensure() ,这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
        // component: resolve => require(['@/views/demo/index.vue'], resolve)//vue异步组件。每个组件生成一个js文件，实现组件的懒加载
        component: () => import('@/views/oaAuto/oaAutoupNodePermissionsReplaceMessageReplaceApplyTask.vue')
      }
    ]
  },
  {
    path: '*', // 其他页面，强制跳转到登录页面
    meta: {title: '首页'},
    redirect: '/'
  }
  // { path: '/404', component: notError },
  // { path: '*', redirect: '/404'}
]

export default new Router({
  // base: '/platform/',
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
export const asyncRouterMap = [
  // 错误日志
  {
    path: '/errorLog',
    component: Layout,

    children: [
      {
        path: 'errorLog',
        name: '错误日志',
        component: () => import('@/views/errorLog/errorLog'),
        meta: { title: 'Errorlog', icon: 'errorLog' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
