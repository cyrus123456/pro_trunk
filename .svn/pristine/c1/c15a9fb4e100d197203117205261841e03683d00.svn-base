import testPanel from './panel.vue'
import testToast from './toast.vue'
let test = {}
test.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // console.log('自定义全局方法myGlobalMethod')
  }
  // Vue.prototype.$msg = 'Hello I am test.js'
  Vue.$msg = 'Hello I am test.js'
  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      el.style.color = '#ff0000'
      el.style.backgroundColor = '#ccc'
    }
  })
  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // console.log('注入组件选项')
    }
  })
  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (arr) {
    if (arr.length < 0) {
      return false
    } else {
      arr = arr.join('连接符')
      return arr
    }
  }
  Vue.component(testPanel.name, testPanel) // testPanel.name 组件的name属性
  Vue.component(testToast.name, testToast) // testPanel.name 组件的name属性
}
export default test
