import Mock from 'mockjs'
import {param2Obj} from '@/utils'
const permission = {
  'company': {
    'code': '200',
    'msg': '用户页签获取成功',
    'data': ['gsjjupload', 'gsjjdownload']
  },
  'proposal': {
    'code': '200',
    'msg': '用户页签获取成功',
    'data': ['cbjydownload', 'cbjyupload']
  },
  'claim': {
    'code': '200',
    'msg': '用户页签获取成功',
    'data': ['lpjyupload', 'lpjydownload']
  },
  'underwrite': {
    'code': '200',
    'msg': '用户页签获取成功',
    'data': ['hbzyupload', 'hbzydownload']
  },
  'templates': {
    'code': '200',
    'msg': '用户页签获取成功',
    'data': ['mbxzupload', 'mbxzdownload', 'mbxzpz']
  },
  'demand': {
    'code': '200',
    'msg': '用户页签获取成功',
    'data': ['anxdzxjxq', 'anxdzdbrw', 'anxdzrwcx', 'anxdzwhpz']
  },
  'demandMain': {
    'code': '200',
    'msg': '用户页签获取成功',
    'data': ['anxdzxjxq', 'anxdzdbrw', 'anxdzrwcx', 'anxdzwhpz']
  },
  'shop': {
    'code': '200',
    'msg': '用户页签获取成功',
    'data': ['fwscxmfu', 'fwscwddd', 'fwscddgl', 'fwscpz']
  },
  'shopMain': {
    'code': '200',
    'msg': '用户页签获取成功',
    'data': ['fwscxmfu', 'fwscwddd', 'fwscddgl', 'fwscpz']
  },
  'enquiry': {
    'code': '200',
    'msg': '用户页签获取成功',
    'data': ['zxxjfqxj', 'zxxjdbxj', 'zxxjxjcx', 'zxxjxjfx']
  },
  'enquiryMain': {
    'code': '200',
    'msg': '用户页签获取成功',
    'data': ['zxxjfqxj', 'zxxjdbxj', 'zxxjxjcx', 'zxxjxjfx']
  },
  'blacklist': {
    'code': '200',
    'msg': '用户页签获取成功',
    'data': ['hmdupload', 'hmddownload']
  }
}

export default {
  uploadyun: config => {
    return {
      'state': true,
      'code': '200',
      'data': {
        'url': 'http://10.196.27.112:8003/SunTRM/servlet/GetImage?ZGF0ZT0yMDEzMDgxNSZmaWxlX25hbWU9L2NwaWMvc3lkL3N1bnlhcmQvaW1nL1VXQy8yMDEzLzA4LzE0LzI1LzkvNTgvY2E0MWIyODFmMWM5MzRmNjkyMmIzMjA1MjFkMmQxYTBfMS82ZDRhNWIxMy0wMzA0LTQ5OGQtOGI4My0wMjRiZjE2MTM0OTYuanBn'
      },
      'msg': '请求成功！'
    }
  },

  downyun: config => {
    return {
      'state': true,
      'code': '200',
      'data': {
        'date': '2019-08-30',
        'info': [
          {
            'date': '2019-08-30 09:52:50',
            'name': '核保指引导入模板.xlsx',
            'id': '074d33e0-ffb7-4145-874b-f36cf6a03700',
            'url': 'http://img0.imgtn.bdimg.com/it/u=3357786243,3135716437&fm=26&gp=0.jpg'
          },
          {
            'date': '2019-08-30 09:52:50',
            'name': '权限认证v0.1.doc',
            'id': 'a9e311b5-da29-4e78-8d92-0bbcf4f70b6b',
            'url': 'http://p154oss.oss-cn-szfinance.aliyuncs.com/SCAN/GCDMBXZ/2465c71973843358a3f4b96c87ad93e5/a9e311b5-da29-4e78-8d92-0bbcf4f70b6b.doc?Expires=1569233195&OSSAccessKeyId=LTAIjkNGjBjw2aKn&Signature=MmxDm1BMdtnpU5KnsjaSkN4WfQU%3D'
          }
        ]
      },
      'msg': '请求成功！'
    }
  },

  downPackage: config => {
    return {
      'state': true,
      'code': '200',
      'data': [{
        'name': '核保指引导入模板.xlsx',
        'id': '074d33e0-ffb7-4145-874b-f36cf6a03700',
        'url': 'http://p154oss.oss-cn-szfinance.aliyuncs.com/SCAN/GCDMBXZ/2465c71973843358a3f4b96c87ad93e5/074d33e0-ffb7-4145-874b-f36cf6a03700.xlsx?Expires=1567133593&OSSAccessKeyId=LTAIjkNGjBjw2aKn&Signature=4Zo3GuXD%2FeGe5FTqn%2B%2FahVhmWbE%3D'
      }, {
        'name': '权限认证v0.1.doc',
        'id': 'a9e311b5-da29-4e78-8d92-0bbcf4f70b6b',
        'url': 'http://p154oss.oss-cn-szfinance.aliyuncs.com/SCAN/GCDMBXZ/2465c71973843358a3f4b96c87ad93e5/a9e311b5-da29-4e78-8d92-0bbcf4f70b6b.doc?Expires=1567133593&OSSAccessKeyId=LTAIjkNGjBjw2aKn&Signature=B0fuCyM1XSgD3jE%2FS31EUEzMptU%3D'
      }],
      'msg': '请求成功！'
    }
  },

  getPermission: config => {
    console.log(config)
    let menuName = config.url.split('=')[1]
    return permission[menuName]
  }
}
