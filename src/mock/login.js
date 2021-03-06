import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    code: 200,
    msg: '菜单获取成功',
    roles: [
      // 报表(工作台首页)
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: { title: '工作台', icon: 'dashboard' },
        children: [
          {
            path: 'dashboard',
            name: 'dashboard',
            meta: { title: '工作台', icon: 'dashboard' }
          }
        ]
      },
      // 公司简介
      {
        path: '/company',
        name: 'company',
        meta: { title: '公司简介', icon: 'introduction' },
        children: [
          {
            path: 'company',
            name: 'company',
            meta: { title: '公司简介', icon: 'introduction' }
          }
        ]
      },
      // 承保经验
      {
        path: '/proposal',
        name: 'proposal',
        meta: { title: '承保经验', icon: 'introduction' },
        children: [
          {
            path: 'proposal',
            name: 'proposal',
            meta: { title: '承保经验', icon: 'introduction' }
          }
        ]
      },
      // 理赔经验
      {
        path: '/claim',
        name: 'claim',
        meta: { title: '理赔经验', icon: 'introduction' },
        children: [
          {
            path: 'claim',
            name: 'claim',
            meta: { title: '理赔经验', icon: 'introduction' }
          }
        ]
      },
      // 核保指引
      {
        path: '/underwrite',
        name: 'underwrite',
        meta: { title: '核保指引', icon: 'introduction' },
        children: [
          {
            path: 'underwrite',
            name: 'underwrite',
            meta: { title: '核保指引', icon: 'introduction' }
          }
        ]
      },
      // 模板下载
      {
        path: '/templates',
        name: 'templates',
        meta: { title: '模版下载', icon: 'introduction' },
        children: [
          {
            path: 'templates',
            name: 'templates',
            meta: { title: '模版下载', icon: 'introduction' }
          }
        ]
      },
      // 按需定制
      {
        path: '/demand',
        name: 'demand',
        meta: { title: '按需定制', icon: 'introduction' },
        children: [
          {
            path: 'demand',
            name: 'demand',
            meta: { title: '按需定制', icon: 'introduction' }
          }
        ]
      },
      // 服务商场
      {
        path: '/shop',
        name: 'shop',
        meta: { title: '服务商场', icon: 'introduction' },
        children: [
          {
            path: 'shop',
            name: 'shop',
            meta: { title: '服务商场', icon: 'introduction' }
          }
        ]
      },
      // 在线询价
      {
        path: '/enquiry',
        name: 'enquiry',
        meta: { title: '在线询价', icon: 'introduction' },
        children: [
          {
            path: 'enquiry',
            name: 'enquiry',
            meta: { title: '在线询价', icon: 'introduction' }
          }
        ]
      },
      // 按钮权限
      {
        path: '/permission',
        name: 'permission',
        meta: { title: '按钮权限', icon: 'introduction' },
        children: [
          {
            path: 'permission',
            name: 'permission',
            meta: { title: '按钮权限', icon: 'introduction' }
          }
        ]
      }

    ],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://raw.githubusercontent.com/mgbq/nx-admin/master/src/assets/img/home/logo.png',
    name: 'Super Admin'
  },
  editor: {
    code: 200,
    roles: [
      // 报表(工作台首页)
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: { title: '工作台', icon: 'dashboard' },
        children: [
          {
            path: 'dashboard',
            name: 'dashboard',
            meta: { title: '工作台', icon: 'dashboard' }
          }
        ]
      },
      // 公司简介
      {
        path: '/company',
        name: 'company',
        meta: { title: '公司简介', icon: 'introduction' },
        children: [
          {
            path: 'company',
            name: 'company',
            meta: { title: '公司简介', icon: 'introduction' }
          }
        ]
      },
      // 承保经验
      {
        path: '/proposal',
        name: 'proposal',
        meta: { title: '承保经验', icon: 'introduction' },
        children: [
          {
            path: 'proposal',
            name: 'proposal',
            meta: { title: '承保经验', icon: 'introduction' }
          }
        ]
      },
      // 理赔经验
      {
        path: '/claim',
        name: 'claim',
        meta: { title: '理赔经验', icon: 'introduction' },
        children: [
          {
            path: 'claim',
            name: 'claim',
            meta: { title: '理赔经验', icon: 'introduction' }
          }
        ]
      },
      // 核保指引
      {
        path: '/underwrite',
        name: 'underwrite',
        meta: { title: '核保指引', icon: 'introduction' },
        children: [
          {
            path: 'underwrite',
            name: 'underwrite',
            meta: { title: '核保指引', icon: 'introduction' }
          }
        ]
      },
      // 模板下载
      {
        path: '/templates',
        name: 'templates',
        meta: { title: '模板下载', icon: 'introduction' },
        children: [
          {
            path: 'templates',
            name: 'templates',
            meta: { title: '模板下载', icon: 'introduction' }
          }
        ]
      },
      // 按需定制
      {
        path: '/demand',
        name: 'demand',
        meta: { title: '按需定制', icon: 'introduction' },
        children: [
          {
            path: 'demand',
            name: 'demand',
            meta: { title: '按需定制', icon: 'introduction' }
          }
        ]
      },
      // 服务商场
      {
        path: '/shop',
        name: 'shop',
        meta: { title: '服务商场', icon: 'introduction' },
        children: [
          {
            path: 'shop',
            name: 'shop',
            meta: { title: '服务商场', icon: 'introduction' }
          }
        ]
      }
      // 在线询价
      /* {
        path: '/enquiry',
        name: 'enquiry',
        meta: { title: '在线询价', icon: 'introduction' },
        children: [
          {
            path: 'enquiry',
            name: 'enquiry',
            meta: { title: '在线询价', icon: 'introduction' }
          }
        ]
      } */

    ],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  },
  test: {
    'code': '200',
    'msg': 'gcdtest login.',
    'data': {
      // "token": "gcdtokenmock",
      'token': 'eyJleHBpcmF0aW9uIjoiMTU2NzQxMTE5NzYwNiIsInVzZXJjb2RlIjoiYWRtaW4iLCJrZXkiOiI0ODA2ZTc1NjU5NzNlMDEyMmM0YTIzMmMzM2IzYzM2MjAxODAzYmE3YjQyOTMyZjY4ZmUxNzRiNGZjZGY5YTY4ODBhNjdlMjIxMTY2YmZjYzYwZjJlOGMzNTRlYjY5OTZlZDgzYTNlNGRiNzQyNmJmODA0ODRiZjhmYzQzNjQzMjhmZDQzMmQxMjFiYjJjY2NhOWI4MGIxMjZiODNmZTkzODJmODg4OTQ4ZWJhYTFlMDM4MjExYWVmMDk5YjhhMjFmNjZiODM3MmVkOTE4ZThkYWI1ZjhmMzFiNDQ5NTg0ODk1ZjIwMTBiMDcyYmY2NDFiMGZkYzQ1ZDNlMjlkNTI2NWQ3YjQ3MjBjNjQ5Mjk4ZGUzMzI1MDJlYzkzNWZiNjMxMGY5NTQyNTlmM2UzNjQ5ZTM5NmNkMDU5MjA2YzBjYzA4ZWJlZjFkOTZmZWE1NzBhNDUyNGUzZjJiZjA2MzliZGZhZDhhMDNkYjRkYjA4ZWNiYjU0MDVmOTg0NTQ1MDdmNGE1NTQ3M2U4ZmEwMWJmMTY1MGYwZDRkYzFhNzY3MmM2NzQ3MWY2MDc3NTJlZDgyYzg1MWYyNjA0NWVkOGU4MGQ5NmMyMzJhYWJlZDQwNzE5MWQ5ZTNkN2FkOGE5NjlmNzZjNWY3NjE3NGM1YTAwYzQ3MWZkNzY3MDA3ODhjNyIsImNvbWNvZGUiOiIwMDAwMDAwMCIsInRva2VuIjoiOTUzN2E5ZmZiYmMwZTJiN2UzYzc2YzQ0NTc3NGZlOTViOTg1ZGMwNWE1Nzc0NThkMzk0NGFjMDE4OTFjMTUyM2JmMDU4MDI4ZDFiMjZiMzE3NTQ3YWEzMmZkZjQ1NmFhNTA2MzRmZDI4MDI5NGRiOSY2MCJ9',
      // "token": "",
      'userCode': 'admin',
      'comCode': '00000000'
    }
  }
}

export default {
  login: config => {
    // const { username } = JSON.parse(config.body)
    // return userMap[username]
    return userMap['test']
  },
  getMenu: config => {
    // const { token } = JSON.parse(config.body)
    // console.log(token)
    // console.log(userMap[token])
    // return userMap[token]
    return userMap['admin']
  },
  getUserInfo: config => {
    console.log(config)
    /* const { token } = JSON.parse(config.body)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    } */
    return userMap['admin']
  },
  logout: () => {
    return {
      code: 200,
      Message: 'success'
    }
  },
  loginNew: () => {
    return {
      'code': '200',
      'msg': 'gcdtest login.',
      'data': {
        // "token": "gcdtokenmock",
        'token': 'eyJleHBpcmF0aW9uIjoiMTU2NzQxMTE5NzYwNiIsInVzZXJjb2RlIjoiYWRtaW4iLCJrZXkiOiI0ODA2ZTc1NjU5NzNlMDEyMmM0YTIzMmMzM2IzYzM2MjAxODAzYmE3YjQyOTMyZjY4ZmUxNzRiNGZjZGY5YTY4ODBhNjdlMjIxMTY2YmZjYzYwZjJlOGMzNTRlYjY5OTZlZDgzYTNlNGRiNzQyNmJmODA0ODRiZjhmYzQzNjQzMjhmZDQzMmQxMjFiYjJjY2NhOWI4MGIxMjZiODNmZTkzODJmODg4OTQ4ZWJhYTFlMDM4MjExYWVmMDk5YjhhMjFmNjZiODM3MmVkOTE4ZThkYWI1ZjhmMzFiNDQ5NTg0ODk1ZjIwMTBiMDcyYmY2NDFiMGZkYzQ1ZDNlMjlkNTI2NWQ3YjQ3MjBjNjQ5Mjk4ZGUzMzI1MDJlYzkzNWZiNjMxMGY5NTQyNTlmM2UzNjQ5ZTM5NmNkMDU5MjA2YzBjYzA4ZWJlZjFkOTZmZWE1NzBhNDUyNGUzZjJiZjA2MzliZGZhZDhhMDNkYjRkYjA4ZWNiYjU0MDVmOTg0NTQ1MDdmNGE1NTQ3M2U4ZmEwMWJmMTY1MGYwZDRkYzFhNzY3MmM2NzQ3MWY2MDc3NTJlZDgyYzg1MWYyNjA0NWVkOGU4MGQ5NmMyMzJhYWJlZDQwNzE5MWQ5ZTNkN2FkOGE5NjlmNzZjNWY3NjE3NGM1YTAwYzQ3MWZkNzY3MDA3ODhjNyIsImNvbWNvZGUiOiIwMDAwMDAwMCIsInRva2VuIjoiOTUzN2E5ZmZiYmMwZTJiN2UzYzc2YzQ0NTc3NGZlOTViOTg1ZGMwNWE1Nzc0NThkMzk0NGFjMDE4OTFjMTUyM2JmMDU4MDI4ZDFiMjZiMzE3NTQ3YWEzMmZkZjQ1NmFhNTA2MzRmZDI4MDI5NGRiOSY2MCJ9',
        // "token": "",
        'userCode': 'admin',
        'comCode': '00000000'
      }
    }
  }
}
