let newWindow = function (windowId) {
  this.windowId = windowId
}
let newWindows = []
/**
 * 开始循环
 */
newWindow.prototype.beginInterval = function (callback) {
  var that = this
  if (this.newWindow)
  // 父窗口去检测子窗口是否关闭，然后刷新列表
  {
    this.timer = setInterval(function () {
      if (that.newWindow.closed === true) {
        clearInterval(that.timer)
        newWindows.forEach((newWindow, index) => {
          if (newWindow.windowId === that.windowId) {
            newWindows.splice(index, 1)
            return false
          }
        })
        callback && callback()
      }
    }, 1000)
  }
}
let isHadNewWindow = function (windowId) {
  /* if(actionURL != ''){ */
  let isHad = false
  newWindows.forEach((newWindow, index) => {
    if (newWindow.windowId === windowId) {
      isHad = true
      alert('窗口已打开,不可重复点击')
    }
  })
  /* if (!isHad) {
   newWindows.push(new newWindow(taskId))
   } */
  return isHad
  /* } */
}
const listenWindow = {
  newWindows: newWindows,
  newWindow: function (windowId) {
    return new newWindow(windowId)
  },
  isHadNewWindow: function (windowId) {
    return isHadNewWindow(windowId)
  }
}
export default listenWindow
