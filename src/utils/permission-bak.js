import router from '@/router' // 路由表
import store from '@/store' // 数据存储
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import {Message} from 'element-ui' // ui框架
import {getToken} from '@/utils/auth' // 验权
import {setTitle} from '@/utils/index' // 设置浏览器头部标题

console.log('window.location.host', window.location.host)
router.beforeEach((to, from, next) => {
  console.log('-------to-router-------', to)
  NProgress.start()
  const browserHeaderTitle = to.meta.title
  store.commit('SET_BROWSERHEADERTITLE', {
    browserHeaderTitle: browserHeaderTitle
  })
  /* if (to.path === "/system" && from.path === "/systemDetail") {
    to.meta.keepAlive = true
  } else {
    to.meta.keepAlive = false
  } */
  next()
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
