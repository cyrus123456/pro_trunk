import Mock from 'mockjs'
import { param2Obj } from '@/utils'
export default {
  getData: config => {
    return {
      'state': true,
      'code': '200',
      'data': {
        'riskCode': ['0312'], // key: "0312"
        'riskCodeName': ['安心购票保障保险']
      },
      'msg': '请求成功！'
    }
  }
}
