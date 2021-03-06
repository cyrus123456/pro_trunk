import router from '@/router' // 路由表
import store from '@/store' // 数据存储
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import {Message} from 'element-ui' // ui框架
import {getToken, setToken} from '@/utils/auth' // 验权
import {setTitle} from '@/utils/index' // 设置浏览器头部标题
import {
  oaConfigInit
} from '@/api/oaAuto'
const routerMap = {
  firstLoad: 'oaAutoLoad',
  menuapplyTask: 'oaAutoMenuApply',
  ehrBandTask: 'oaAutoEhrBand',
  claimsMenuApplyTask: 'oaAutoClaimsMenuApply',
  postReplaceApplyTask: 'oaAutoPostReplaceApply', // 双核权限模板权限申请
  claimUnderwritApplyTask: 'oaAutoClaimsUnderwrit', // 总公司核赔权限申请
  branchUnderwritApplyTask: 'oaAutoBranchUnderwrit', // 分公司核赔权限申请
  JFCDSWITCHTask: 'oaAutoJFCDSWITCHTask', // 非见费出单申请
  platformpostReplaceApplyTask: 'oaAutoplatformpostReplaceApplyTask', // 权限申请岗位换人
  platformupNodePermissionsTask: 'oaAutoplatformupNodePermissionsTask', // 双核权限模板权限申请
  upNodePermissionsReplaceMessageReplaceApplyTask: 'oaAutoupNodePermissionsReplaceMessageReplaceApplyTask' // 双核权限模板岗位换人
}
router.beforeEach((to, from, next) => {
  console.log('-------from-router-------', from)
  console.log('-------to-router-------', to)
  NProgress.start()
  const browserHeaderTitle = to.meta.title
  console.log('-------to-router-title-------', browserHeaderTitle)
  store.commit('SET_BROWSERHEADERTITLE', {
    browserHeaderTitle: browserHeaderTitle
  })
  if (to.path.indexOf('/oaAuto') !== -1) {
    if (getToken('oaAuto-Token')) {
      console.log('------有token直接跳转------打印oaAuto-Token：', getToken('oaAuto-Token'))
      console.log('------有token直接跳转------打印reloadFlag：', getToken('reloadFlag'))
      // 判断路由地址是否为/oaAuto
      if (to.path === '/oaAuto' && to.query.fdid) {
        if ((to.path === '/oaAuto' && from.path === '/oaAutoLoad') ||
            (to.path === '/oaAuto' && from.path === '/oaAutoMenuApply') ||
            (to.path === '/oaAuto' && from.path === '/oaAutoEhrBand') ||
            (to.path === '/oaAuto' && from.path === '/oaAutoClaimsMenuApply') ||
            (to.path === '/oaAuto' && from.path === '/oaAutoPostReplaceApply') ||
            (to.path === '/oaAuto' && from.path === '/oaAutoClaimsUnderwrit') ||
            (to.path === '/oaAuto' && from.path === '/oaAutoBranchUnderwrit') ||
            (to.path === '/oaAuto' && from.path === '/oaAutoJFCDSWITCHTask') ||
            (to.path === '/oaAuto' && from.path === '/oaAutoplatformpostReplaceApplyTask') ||
            (to.path === '/oaAuto' && from.path === '/oaAutoplatformupNodePermissionsTask') ||
            (to.path === '/oaAuto' && from.path === '/oaAutoupNodePermissionsReplaceMessageReplaceApplyTask')
        ) {
          next({path: from.path})
        } else {
          if (getToken('reloadFlag')) {
            console.log('------重新加载------', getToken('reloadFlag').name)
            next({path: '/' + getToken('reloadFlag').name})
          } else {
            next()
          }
        }
      } else {
        next()
      }
    } else {
      if (to.path === '/oaAuto' && to.query.fdid) {
        let para = {
          'actionType': 'oaAutoLoad',
          'fdDocId': to.query.fdid,
          'docCreator': to.query.docCreator,
          'docStatus': to.query.docStatus
        }
        oaConfigInit(para).then(res => {
          console.log('------permission.js文件调用oaConfigInit方法------', JSON.stringify(res))
          // setToken('initData', res.codeValues)
          /* if (to.query.pageName === 'firstLoad') {
            setToken('oaAuto-Token', {fdid: to.query.fdid, docCreator: to.query.docCreator, docStatus: to.query.docStatus})
            setToken('oaAutoLoad', [
              {
                "name": "自动化权限申请",
                "code": "menuapplyTask"
              },
              {
                "name": "EHR工号绑定",
                "code": "ehrBandTask"
              }
            ])
            next({path: '/' + routerMap['firstLoad']})
          } else if (to.query.pageName === 'menuapplyTask') {
            setToken('oaAuto-Token', {fdid: to.query.fdid, docCreator: to.query.docCreator, docStatus: to.query.docStatus})
            setToken('oaAutoMenuApply', [
              {
                "id": "002323000000000000001",
                "comcode": '02110000',
                "comcname": '山东省分公司营业部',
                "usercode": '02080027',
                "usercname": '张磊',
                "gradecode": '016',
                "gradename": '综合开拓管理岗',
              },
              {
                "id": "002323000000000000002",
                "comcode": '02126001',
                "comcname": '山东省分公司营业部山东省分公司济南N063维护团队',
                "usercode": '02080027',
                "usercname": '张磊',
                "gradecode": '016',
                "gradename": '综合开拓管理岗',
              },
              {
                "id": "002323000000000000003",
                "comcode": '0211A500',
                "comcname": '山东省分公司营业部章丘营销服',
                "usercode": '02080027',
                "usercname": '张磊',
                "gradecode": '016',
                "gradename": '综合开拓管理岗',
              },
              {
                "id": "002323000000000000004",
                "comcode": '0211A500',
                "comcname": '山东省分公司营业部章丘营销服',
                "usercode": '02010002',
                "usercname": '庞柏青',
                "gradecode": '016',
                "gradename": '综合开拓管理岗',
              },
              {
                "id": "002323000000000000005",
                "comcode": '0211A500',
                "comcname": '山东省分公司营业部章丘营销服',
                "usercode": '02010004',
                "usercname": '郑晓坤',
                "gradecode": '016',
                "gradename": '综合开拓管理岗',
              }])
            next({path: '/' + routerMap['menuapplyTask']})
          } else if (to.query.pageName === 'ehrBandTask') {
            setToken('oaAuto-Token', {fdid: to.query.fdid, docCreator: to.query.docCreator, docStatus: to.query.docStatus})
            setToken('oaAutoEhrBand', [
              {
                "id": "1",
                "hrno": "B201902060001",
                "systemname": "保险行业平台",
                "usercode": "02000001",
                "systemcode": "P027",
                "usercname": "钱明胜"
              },
              {
                "id": "2",
                "hrno": "B201902060002",
                "systemname": "保险行业平台",
                "usercode": "02000001",
                "systemcode": "P027",
                "usercname": "钱明胜"
              },
              {
                "id": "3",
                "hrno": "B201902060003",
                "systemname": "保险行业平台",
                "usercode": "02000001",
                "systemcode": "P027",
                "usercname": "钱明胜"
              },
              {
                "id": "4",
                "hrno": "B201902060004",
                "systemname": "保险行业平台",
                "usercode": "02000001",
                "systemcode": "P027",
                "usercname": "钱明胜"
              }])
            next({path: '/' + routerMap['ehrBandTask']})
          } */
          setToken('oaAuto-Token', {fdid: to.query.fdid, docCreator: to.query.docCreator, docStatus: res.docStatus})
          setToken(routerMap[res.identificationFlag], res.codeValues)
          next({path: '/' + routerMap[res.identificationFlag]})
        }).catch(error => {
          console.log('error', error)
        })
      } else {
        alert('拒绝访问')
      }
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  NProgress.done() // 结束Progress
  /* if (to.path === "/system" && from.path === "/systemDetail") {
    to.meta.keepAlive = true
  } else {
    to.meta.keepAlive = false
  } */
  setTimeout(() => {
    const browserHeaderTitle = store.getters.browserHeaderTitle
    setTitle(browserHeaderTitle)
  }, 0)
})
