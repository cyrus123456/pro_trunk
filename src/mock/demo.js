import Mock from 'mockjs'
import { param2Obj } from '@/utils'

let List = []
const count = 60
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: Mock.Random.guid(),
    comCode: Mock.Random.cname() + '机构',
    industry: Mock.Random.cname() + '行业',
    riskType: '交强险',
    applicant: '山西复联制药有限公司',
    policyNo: '110111891111114567',
    insuranceAmount: '3000',
    premium: '50000',
    startDate: '2018-12-17',
    endDate: '2019-12-17',
    coinFlag: Math.ceil(Math.random() * 10),
    ourShare: '44',
    insuredName: ['山东复联制药有限公司', '山东复联制药有限公司1', '山东复联制药有限公司2', '山东复联制药有限公司3'],

    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }))
}

export default {
  getLists: config => {
    console.log('模拟数据', config)
    const { name, page = 1, limit = 20 } = param2Obj(config.url)

    const mockList = List.filter(user => {
      if (name && user.name.indexOf(name) === -1) return false
      return true
    })

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      code: 0,
      data: {
        total: mockList.length,
        users: pageList
      }
    }
  },
  createUser: config => {
    const { id, name, addr, age, birth, sex } = param2Obj(config.url)
    console.log('66')
    List.push({
      id: id,
      name: name,
      addr: addr,
      age: age,
      birth: birth,
      sex: sex
    })
    return {
      code: 0,
      data: {
        message: '添加成功'
      }
    }
  },
  deleteInfo: config => {
    const { id } = param2Obj(config.url)
    List = List.filter(u => u.id !== id)
    return {
      code: 0,
      data: {
        message: '删除成功'
      }
    }
  },
  batchDelete: config => {
    let { ids } = param2Obj(config.url)
    ids = ids.split(',')
    List = List.filter(u => !ids.includes(u.id))
    return {
      code: 0,
      data: {
        message: '批量删除成功'
      }
    }
  },
  updateUser: config => {
    const { id, name, addr, age, birth, sex } = param2Obj(config.url)
    const sex_num = parseInt(sex)
    List.some(u => {
      if (u.id === id) {
        u.name = name
        u.addr = addr
        u.age = age
        u.birth = birth
        u.sex = sex_num
        return true
      }
    })
    return {
      code: 0,
      data: {
        message: '编辑成功'
      }
    }
  }
}
