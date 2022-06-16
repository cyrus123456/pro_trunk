import request from '@/utils/request'
import apiPath from '@/api/apiPath'
import qs from 'qs'

export function systemCode (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
  })
}
export function systemRemarkCode (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
  })
}

export function comCode (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
    /* headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    } */
  })
}

export function comName (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
    /* headers: {
       'Content-Type': 'application/x-www-form-urlencoded'
     } */
  })
}

export function userName (params) {
  return request({
    // url: encodeURI(apiPath.getPath('UserPostServlet') + '?actionType=' + params.actionType + '&codeType=' + params.codeType + '&fieldValue=' + params.fieldValue + '&codeMethod=' + params.codeMethod + '&comCode=' + params.comCode),
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params,
    // data: params,
    headers: {
      'Content-Type': 'charset=utf-8'
    }
  })
}
export function userCode (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
    /* headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=GBK'
    } */
  })
}
export function usermessageByComCode (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
    /* headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=GBK'
    } */
  })
}
export function queryUserGrade (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
    /* headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=GBK'
    } */
  })
}

export function gradeCode (params) {
  return request({
    url: apiPath.getPath('UserPostServlet'),
    method: 'post',
    params: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export function getLists (params) {
  return request({
    url: apiPath.getPath('UserPostServlet'),
    method: 'post',
    params: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
export function querySystemPostListExportExcel (params) {
  let comCode = params.comCode ? ('&comCode=' + params.comCode) : ''
  let utiUserGradeGradeCode = params.utiUserGradeGradeCode ? ('&utiUserGradeGradeCode=' + params.utiUserGradeGradeCode) : ''
  let chkComCode = params.chkComCode == '1' ? ('&chkComCode=' + params.chkComCode) : ''
  let url = apiPath.getPath('UserPostServlet') + '?actionType=' + params.actionType + '&systemCode=' + params.systemCode + comCode + utiUserGradeGradeCode + chkComCode
  console.log(url)
  window.location.href = url
  /* return request({
    url: apiPath.getPath('UserPostServlet'),
    method: 'get',
    params: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }) */
}
export function userPostExportExcel (params) {
  let comCode = params.comCode ? ('&comCode=' + params.comCode) : ''
  let utiUserGradeGradeCode = params.utiUserGradeGradeCode ? ('&utiUserGradeGradeCode=' + params.utiUserGradeGradeCode) : ''
  let userCode = params.userCode ? ('&userCode=' + params.userCode) : ''
  let url = apiPath.getPath('UserPostServlet') + '?actionType=' + params.actionType + userCode + comCode + utiUserGradeGradeCode
  console.log(url)
  window.location.href = url
}
export function queryTaskMenu (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
  })
}
export function exportSystemPostTaskMenuExcle (params) {
  let actionType = '?actionType=' + params.actionType
  let comCode = '&comCode=' + params.comCode
  let utiUserGradeGradeCode = '&utiUserGradeGradeCode=' + params.utiUserGradeGradeCode
  let userCode = '&userCode=' + params.userCode
  let systemCode = '&systemCode=' + params.systemCode
  let url = apiPath.getPath('UserPostServlet') + actionType + userCode + comCode + utiUserGradeGradeCode + systemCode
  console.log(url)
  window.location.href = url
}
export function queryUserPostTaskMenu (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
  })
}
export function exportUserPostTaskMenuExcle (params) {
  let actionType = '?actionType=' + params.actionType
  let comCode = '&comCode=' + params.comCode
  let utiUserGradeGradeCode = '&utiUserGradeGradeCode=' + params.utiUserGradeGradeCode
  let userCode = '&userCode=' + params.userCode
  let url = apiPath.getPath('UserPostServlet') + actionType + userCode + comCode + utiUserGradeGradeCode
  console.log(url)
  window.location.href = url
}
export function queryDisplayRisk (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
  })
}
export function systemCode1 (params) {
  return request({
    // url: 'http://2g93q95806.zicp.vip/platform/UserPostServlet',
    url: apiPath.getPath('UserPostServlet'),
    method: 'post',
    /* params: {
      actionType: 'query'
    }, */
    params: params,
    /* data: {
       SYSTEMCODE: 'prpall',
       COMCODE : '00000000',
       GRADECODE:'001'
     }, */
    // data: params,
    /* transformRequest: [
      function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        ret = ret.substring(0, ret.lastIndexOf('&'));
        return ret
      }
    ], */
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
export function processCodeInput (params) {
  return request({
    url: apiPath.getPath('processCodeInput'),
    method: 'post',
    responseType: 'text/html',
    // data: params
    params: {
      actionType: 'query'
    },

    // data: params,
    data: {
      fieldIndex: 3,
      fieldValue: '000',
      codeMethod: 'query',
      codeType: 'comCode',
      codeRelation: 0,
      isClear: 'Y'
    },
    transformRequest: [
      function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        ret = ret.substring(0, ret.lastIndexOf('&'))
        return ret
      }
    ],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }

  })
}
export function importFile (params) {
  return request({
    url: '/gcd/importFile',
    method: 'get',
    params: params
  })
}
export function downloadTemplateFile (params) {
  return request({
    url: '/gcd/downloadTemplateFile',
    method: 'get',
    params: params
  })
}
export function downloadBatch (params) {
  return request({
    url: '/gcd/downloadBatch',
    method: 'get',
    params: params
  })
}
export function uploadFile (params) {
  return request({
    url: '/gcd/uploadFile',
    method: 'get',
    params: params
  })
}
export function deleteInfo (params) {
  return request({
    url: '/gcd/deleteInfo',
    method: 'get',
    params: params
  })
}
export function batchDelete (params) {
  return request({
    url: '/gcd/batchDelete',
    method: 'get',
    params: params
  })
}
export function fileIsExists (params) {
  return request({
    url: apiPath.getPath('fileIsExists'),
    method: 'post',
    data: params
  })
}
export function downloadFile (params) {
  return request({
    url: apiPath.getPath('downLoad'),
    method: 'post',
    params: params
  })
}
export function exportFile (params) {
  let _data = params.join('&')
  return request({
    url: apiPath.getPath('dataLoad'),
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    responseType: 'blob',
    data: {
      policyNos: _data
    },
    transformRequest: [function (data) {
      data = qs.stringify(data)
      return data
    }]
  })
}
export function oaConfigInit (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
  })
}
export function upGradesInitData (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
  })
}
export function infoSupply (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
  })
}
export function getOAUploadCount (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
  })
}
export function upGradesMessage (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
  })
}
export function upMidEhrNoMessage (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
  })
}
export function querygradesBymenuName (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
  })
}

export function queryTemplateId (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
    /* headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } */
  })
}
export function queryNodeNo (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
    /* headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } */
  })
}
export function queryClassCode (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
    /* headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } */
  })
}
export function dualCorePermissions (params) {
  return request({
    url: apiPath.getPath('OaAutomaticConfigurationServlet'),
    method: 'post',
    data: params
  })
}
