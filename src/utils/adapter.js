// 数据入参转为后端格式
let exportRules = {
  // 验证码--入参
  verify: function (data) {
    let _data = {
      'head': {
        'requestType': '12021',
        'userCode': '',
        'token': '',
        'password': '0000',
        'version': '',
        'channel': ''
      },
      'body': {
      }
    }
    return _data
  }
}
// 数据出参转为前端格式
let importRules = {
  // 查询用户登录机构
  baseCode: function (data) {
    let _data = data.data.codeList.map(item => {
      return { value: item.codeCode, label: item.codeName }
    })
    return _data
  },
  // 批量获取下拉数据
  loadCode: function (data) {
    // let _data = data.data.map(item => {
    //   return { value: item.codeCode, label: item.codeName }
    // })
    if (Array.isArray(data.data)) {
      data.data = data.data.map(item => {
        return { value: item.key, label: item.value }
      })
    } else {
      for (var val in data.data) {
        data.data[val] = data.data[val].map(item => {
          return { value: item.key, label: item.value }
        })
      }
    }
    return data
  }
}

const adapter = {
  imports: function (type, data) {
    if (!importRules[type]) {
      return data
    } else {
      return importRules[type](data)
    }
  },
  exports: function (type, data) {
    return exportRules[type](data)
  }
}

export default adapter
