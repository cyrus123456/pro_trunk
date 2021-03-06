import lodashFind from 'lodash/find'

var SIGN_REGEXP = /([yMdhsm])(\1*)/g
var DEFAULT_PATTERN = 'yyyy-MM-dd'

/**
 * 动态插入css
 */

export const loadStyle = url => {
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}
/**
 * 设置浏览器头部标题
 */
export const setTitle = function (title) {
  // title = title ? `${title}` : 'NxAdmin'
  // window.document.title = title + '-nxAdmin'
  if (title) {
    // title = title ?  : 'platform'
    window.document.title = `${title}` + '-platform'
  } else {
    window.document.title = 'platform'
  }
}

export function parseTime (time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatTime (time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) { // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

export function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

export function matchItems (list, name) {
  return lodashFind(list, {
    name: name.trim()
  }) || {}
}

function padding (s, len) {
  var lens = len - (s + '').length
  for (var i = 0; i < lens; i++) {
    s = '0' + s
  }
  return s
}

export function getQueryStringByName (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  var context = ''
  if (r != null) {
    context = r[2]
  }
  reg = null
  r = null
  return context == null || context === '' || context === 'undefined' ? '' : context
}

export function formatDate (date, pattern) {
  pattern = pattern || DEFAULT_PATTERN
  return pattern.replace(SIGN_REGEXP, function ($0) {
    switch ($0.charAt(0)) {
      case 'y':
        return padding(date.getFullYear(), $0.length)
      case 'M':
        return padding(date.getMonth() + 1, $0.length)
      case 'd':
        return padding(date.getDate(), $0.length)
      case 'w':
        return date.getDay() + 1
      case 'h':
        return padding(date.getHours(), $0.length)
      case 'm':
        return padding(date.getMinutes(), $0.length)
      case 's':
        return padding(date.getSeconds(), $0.length)
    }
  })
}

export function parseDate (dateString, pattern) {
  var matchs1 = pattern.match(SIGN_REGEXP)
  var matchs2 = dateString.match(/(\d)+/g)
  if (matchs1.length === matchs2.length) {
    var _date = new Date(1970, 0, 1)
    for (var i = 0; i < matchs1.length; i++) {
      var _int = parseInt(matchs2[i])
      var sign = matchs1[i]
      switch (sign.charAt(0)) {
        case 'y':
          _date.setFullYear(_int)
          break
        case 'M':
          _date.setMonth(_int - 1)
          break
        case 'd':
          _date.setDate(_int)
          break
        case 'h':
          _date.setHours(_int)
          break
        case 'm':
          _date.setMinutes(_int)
          break
        case 's':
          _date.setSeconds(_int)
          break
      }
    }
    return _date
  }
  return null
}

/**
 * @description [viewFile 查看文件]
 * @author  ZouMiao
 * @param {String} url [文件地址]
 * @returns {Null} [没有返回]
 */
export const viewFile = function (url) {
  let onlineViewType = ['doc', 'docx', 'xls', 'xlsx', 'xlsm', 'ppt', 'pptx']
  let fileTypeName = url.substring(url.lastIndexOf('.') + 1, url.length).split('?')[0]
  let isWord = onlineViewType.find((type) => type === fileTypeName)
  if (isWord) {
    url = 'http://view.officeapps.live.com/op/view.aspx?src=' + url
  }
  window.open(url, '_blank')
}
/**
 * 判断是否为IEisIE
 */
export const isIE = function () {
  if (!!window.ActiveXObject || 'ActiveXObject' in window) {
    return true
  } else {
    return false
  }
}

/**
 *网页加水印 svg 方式
 *
 * @export
 * @param {*} [{
 *   container = document.body,
 *   content = '请勿外传',
 *   width = '300px',
 *   height = '200px',
 *   opacity = '0.2',
 *   fontSize = '20px',
 *   zIndex = 1000
 * }={}]
 */
export function waterDocumentSvg ({
  container = document.body,
  content = '请勿外传',
  width = '300px',
  height = '200px',
  display = 'block',
  opacity = '0.2',
  id = '',
  fontSize = '20px',
  zIndex = 1000
} = {}) {
  const args = arguments[0]
  const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${width}">
  <text x="50%" y="50%" dy="12px"
  text-anchor="middle"
  stroke="#ff0000"
  stroke-width="1"
  stroke-opacity="${opacity}"
  fill="none"
  transform="rotate(-45, 120 120)"
  style="font-size: ${fontSize};">
  ${content}
  </text>
  </svg>`
  const base64Url = `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svgStr)))}`
  const __wm = document.querySelector('.__wm')
  const watermarkDiv = __wm || document.createElement('div')
  const styleStr = `
  position:absolute;
  display:${display};
  height:100%;
  left:10%;
  width:80%;
  bottom:30px;
  z-index:${zIndex};
  pointer-events:none;
  background-repeat:repeat;
  background-image:url('${base64Url}')`
  // const id = `${id}`
  watermarkDiv.setAttribute('style', styleStr)
  watermarkDiv.setAttribute('id', id)
  watermarkDiv.classList.add('__wm')
  if (!__wm) {
    container.style.position = 'relative'
    container.insertBefore(watermarkDiv, container.firstChild)
  }
  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver
  if (MutationObserver) {
    let mo = new MutationObserver(function () {
      const __wm = document.querySelector('.__wm')
      // 只在__wm元素变动才重新调用 __canvasWM
      if ((__wm && __wm.getAttribute('style') !== styleStr) || !__wm) {
        // 避免一直触发
        mo.disconnect()
        mo = null
        waterDocumentSvg(JSON.parse(JSON.stringify(args)))
      }
    })
    mo.observe(container, {
      attributes: true,
      subtree: true,
      childList: true
    })
  }
}
export function waterDocumentSvg1 ({
  container = document.body,
  content = '请勿外传',
  width = '300px',
  height = '200px',
  display = 'block',
  opacity = '0.2',
  id = '',
  fontSize = '20px',
  zIndex = 1000
} = {}) {
  const args = arguments[0]
  const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${width}">
  <text x="50%" y="50%" dy="12px"
  text-anchor="middle"
  stroke="#ff0000"
  stroke-width="1"
  stroke-opacity="${opacity}"
  fill="none"
  transform="rotate(-45, 120 120)"
  style="font-size: ${fontSize};">
  ${content}
  </text>
  </svg>`
  const base64Url = `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svgStr)))}`
  const __wm1 = document.querySelector('.__wm1')
  const watermarkDiv = __wm1 || document.createElement('div')
  const styleStr = `
  position:absolute;
  display:${display};
  height:100%;
  left:10%;
  width:80%;
  bottom:30px;
  z-index:${zIndex};
  pointer-events:none;
  background-repeat:repeat;
  background-image:url('${base64Url}')`
  // const id = `${id}`
  watermarkDiv.setAttribute('style', styleStr)
  watermarkDiv.setAttribute('id', id)
  watermarkDiv.classList.add('__wm1')
  if (!__wm1) {
    container.style.position = 'relative'
    container.insertBefore(watermarkDiv, container.firstChild)
  }
  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver
  if (MutationObserver) {
    let mo = new MutationObserver(function () {
      const __wm1 = document.querySelector('.__wm1')
      // 只在__wm元素变动才重新调用 __canvasWM
      if ((__wm1 && __wm1.getAttribute('style') !== styleStr) || !__wm1) {
        // 避免一直触发
        mo.disconnect()
        mo = null
        waterDocumentSvg(JSON.parse(JSON.stringify(args)))
      }
    })
    mo.observe(container, {
      attributes: true,
      subtree: true,
      childList: true
    })
  }
}
// 日期格式化
export function dateformarter (value, rowData, rowIndex) {
  if (!value) { return '' }
  // var date = new Date(value);
  var date = value
  var year = date.getFullYear().toString()
  var month = (date.getMonth() + 1)
  var day = date.getDate().toString()
  var hour = date.getHours().toString()
  var minutes = date.getMinutes().toString()
  var seconds = date.getSeconds().toString()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  if (hour < 10) {
    hour = '0' + hour
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  if (year == 'NaN' || month == 'NaN') {
    return ''
  }

  // return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":"+ seconds;
  return year + '-' + month + '-' + day + ' ' + hour
}
