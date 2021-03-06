import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import sortBy from 'lodash/sortBy'
import lodash from 'lodash'
import VuePreview from 'vue-preview'
import VueElementLoading from 'vue-element-loading'
// with parameters install
/* Vue.use(preview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
}) */
// echars图表
// import VCharts from 'v-charts'

// 引入echart
// import echarts from 'echarts'
// 将echarts引入到vue的原型中
// Vue.prototype.$echarts = echarts

// 地图
// import BaiduMap from 'vue-baidu-map'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n
// import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import '../static/css/iconfont/1.0.0/index.css' // icofont
import 'normalize.css/normalize.css'
// A modern alternative to CSS resets
import '@/assets/style/index.scss' // global css
// 右键菜单
// import contentmenu from 'v-contextmenu'
// import 'v-contextmenu/dist/index.css'
import './mock' // 模拟后台
// import './errorLog'// 错误 日志
// font-awesome
import '@/assets/library/font-awesome-4.7.0/css/font-awesome.min.css'
import App from './App'
import router from './router'
import store from './store'

// Internationalization
import i18n from './modules/lang'
import { global } from '@/modules/global/global'
import {
  loadStyle
} from './utils/index'
import {
  iconfontUrl,
  iconfontVersion
} from '@/api/env'

import '@/assets/icons' // 字体图标
import './utils/permission'
import * as filters from './utils/filters'
// Vue.config.silent = true //取消 Vue 所有的日志与警告。
/* Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` 是组件的继承关系追踪
  alert('warnHandler')
}
Vue.config.errorHandler = function (err, vm, info) {
  alert('errorHandler')
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
} */
/* Vue.config.ignoredElements = [
  'ded',
  'another-web-component',
  // 用一个 `RegExp` 忽略所有“ion-”开头的元素
  // 仅在 2.5+ 支持
  /^ion-/
] */
import positiveInt from '@/directive/positiveInt'

Vue.component('VueElementLoading', VueElementLoading)
Vue.prototype.sortBy = sortBy
Vue.prototype.lodash = lodash
// import countTo from "vue-count-to"
// Vue.component("countTo", countTo)
// import vueToastPanel from '@/modules/plugin/index'
// Vue.use(vueToastPanel, {params: 'xxx'})

// import RegionPicker from 'vue-region-picker'
// import REGION_DATA from 'china-area-data'

/* Vue.use(RegionPicker, {
  region: REGION_DATA,
  vueVersion: 2 // or 2, default 1
}) */

/* import elCascaderMulti from 'el-cascader-multi'
Vue.use(elCascaderMulti) */

// defalut install
Vue.use(VuePreview) // 权限控制
// 自定义组件的 v-model
/* Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
}) */
// 注册公用组件
const requireComponent = require.context(
  './components/common',
  true,
  /\w+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName.replace(/(.*\/)*([^.]+).*/ig, '$2'))
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
}) // 导入全局过滤器
// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// import Icon from '@/assets/images/lockLogin.png'
// // 将图像添加到我们现有的 div。
// var myIcon = new Image()
// myIcon.src = Icon
//
// document.body.appendChild(myIcon)

// Vue.use(VCharts)
// Vue.use(contentmenu)
// Vue.use(ElementUI, { locale })
iconfontVersion.forEach(ele => {
  loadStyle(iconfontUrl.replace('$key', ele))
})
// 全局设置elementui组件默认尺寸
Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
// 地图
// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: 'oW2UEhdth2tRbEE4FUpF9E5YVDCIPYih'
// })
// 加载用户主题
if (localStorage.getItem('themeValue')) {
  global.changeTheme(localStorage.getItem('themeValue'))
} else {
  // global.changeTheme('default')
  global.changeTheme('orange')
}

Vue.config.productionTip = false
// Vue.myGlobalMethod()
console.log('--------myGlobalMethod-------')
Vue.directive('positiveInt', positiveInt)
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  // template: '<App/>',
  // components: { App }
  render: h => h(App)
})
