import { dualCorePermissions } from '@/api/oaAuto.js'
export default {
  name: 'oaAutoplatformupNodePermissionsTask',
  components: {},
  props: [],
  data () {
    return {
      colNameMap: {
        comcode: {
          numName: '',
          father: ''
        },
        comname: {
          numName: '',
          father: ''
        },
        nameUnderwriter: {
          numName: '',
          father: ''
        },
        workNumber: {
          numName: '',
          father: ''
        },
        businessPropertyInsurance: {
          numName: '01',
          father: 'qgt'
        },
        specifyingLiability: {
          numName: '07',
          father: 'qgt'
        },
        engineeringAllRisks: {
          numName: '08',
          father: 'qgt'
        },
        specialSubject: {
          numName: '02',
          father: 'qgt'
        },
        specialComprehensive: {
          numName: '23',
          father: 'qgt'
        },
        oil: {
          numName: '12',
          father: 'qgt'
        },
        aviation: {
          numName: '13',
          father: 'qgt'
        },
        nuclearEnergy: {
          numName: '14',
          father: 'qgt'
        },
        publicLiability: {
          numName: '15',
          father: 'zrx'
        },
        employerLiability: {
          numName: '17',
          father: 'zrx'
        },
        productLiability: {
          numName: '16',
          father: 'zrx'
        },
        professionalResponsibility: {
          numName: '18',
          father: 'zrx'
        },
        otherResponsibilities: {
          numName: '19',
          father: 'zrx'
        },
        credit: {
          numName: '21',
          father: 'xyxybzx'
        },
        ensure: {
          numName: '22',
          father: 'xyxybzx'
        },
        transportGoods: {
          numName: '09',
          father: 'sx'
        },
        cargoBooking: {
          numName: 'YA',
          father: 'sx'
        },
        container: {
          numName: '20',
          father: 'sx'
        },
        importExport: {
          numName: '10',
          father: 'sx'
        },
        ship: {
          numName: '11',
          father: 'sx'
        },
        familyProperty: {
          numName: '03',
          father: 'gcgz'
        },
        specialProperty: {
          numName: '04',
          father: 'gcgz'
        },
        personalProperty: {
          numName: '06',
          father: 'gcgz'
        },
        publicResponsibility: {
          numName: '15',
          father: 'gcgz'
        },
        profession: {
          numName: '18',
          father: 'gcgz'
        },
        other: {
          numName: '19',
          father: 'gcgz'
        }
      },
      results: [], // 表格数据
      docStatus: true, // 展示按按钮
      comcodeOtpions: [], // 机构代码下拉值
      workNumberOtpions: [], // 工号下拉值
      qgtOtpions: [], // 企工特下拉值
      zrxOtpions: [], // 责任险下拉值
      xyxhbzxOtpions: [], // 信用险和保证险模板下拉值
      sxOtpions: [], // 水险下拉值
      gcgzOtpions: [], // 个财个责模板下拉值,
      qgt: [], // 双核模板
      zrx: [], // 双核模板
      xyxybzx: [], // 双核模板
      sx: [], // 双核模板
      gcgz: []// 双核模板
    }
  },
  setup () {
    return {}
  },
  methods: {
    handleAdd () {
      this.results.push({
        comcode: '',
        comname: '',
        nameUnderwriter: '',
        workNumber: '',
        businessPropertyInsurance: '',
        specifyingLiability: '',
        engineeringAllRisks: '',
        specialSubject: '',
        specialComprehensive: '',
        oil: '',
        aviation: '',
        nuclearEnergy: '',
        publicLiability: '',
        employerLiability: '',
        productLiability: '',
        professionalResponsibility: '',
        otherResponsibilities: '',
        credit: '',
        ensure: '',
        transportGoods: '',
        cargoBooking: '',
        container: '',
        importExport: '',
        ship: '',
        familyProperty: '',
        specialProperty: '',
        personalProperty: '',
        publicResponsibility: '',
        profession: '',
        other: ''
      })
    },
    handleDelete (index, row) {
      this.$delete(this.results, index)
    },
    handleCopy (index, row) {
      this.results.splice(index + 1, 0, { ...row })
    },
    workNumberRemoteMethod (query) {
      if (query !== '') {
        dualCorePermissions({
          'fieldValue': query,
          'codeType': 'userCode',
          'actionType': 'query'
        }).then(async res => {
          this.workNumberOtpions = res.codeLabels.map(item => {
            let tempArr = item.split('--')
            return { label: tempArr[1], value: tempArr[0] }
          })
        })
      }
    },
    workNumberChange (row) {
      if (row.workNumber !== '') {
        row.nameUnderwriter = this.workNumberOtpions.find(item => item.value === row.workNumber).label
      }
    },
    nameUnderwriterChange (row) {
      if (row.nameUnderwriter !== '') {
        row.workNumber = this.workNumberOtpions.find(item => item.label === row.nameUnderwriter).value
      }
    },
    comcodeRemoteMethod (query) {
      if (query !== '') {
        dualCorePermissions({
          'fieldValue': query,
          'codeType': 'comCode',
          'actionType': 'query'
        }).then(async res => {
          this.comcodeOtpions = res.codeLabels.map(item => {
            let tempArr = item.split('--')
            return { label: tempArr[1], value: tempArr[0] }
          })
        })
      }
    },
    comcodeChange (row) {
      if (row.comcode !== '') {
        row.comname = this.comcodeOtpions.find(item => item.value === row.comcode).label
      }
    },
    comnameChange (row) {
      if (row.comname !== '') {
        row.comcode = this.comcodeOtpions.find(item => item.label === row.comname).value
      }
    },
    businessPropertyInsurance_treeCheck (data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    },
    commitData () {
      let parmaData = this.results.map(object => {
        let qgtrisk = []
        let zrxrisk = []
        let xyxybzxrisk = []
        let sxrisk = []
        let gcgzrisk = []
        for (const key in object) {
          if (Object.hasOwnProperty.call(object, key)) {
            if (!this.colNameMap[key].numName) continue
            const element = object[key]
            let str = `${this.colNameMap[key].numName}-${element || '0'}`
            switch (this.colNameMap[key].father) {
              case 'qgt':
                qgtrisk.push(str)
                break
              case 'zrx':
                zrxrisk.push(str)
                break
              case 'xyxybzx':
                xyxybzxrisk.push(str)
                break
              case 'sx':
                sxrisk.push(str)
                break
              case 'gcgz':
                gcgzrisk.push(str)
                break
              default:
                break
            }
          }
        }
        return {
          comcode: object.comcode || '0',
          comcodename: object.comname || '0',
          usercode: object.workNumber || '0',
          usercname: object.nameUnderwriter || '0',
          qgt: this.qgt.length ? this.qgt.join(',') : [],
          qgtrisk: qgtrisk.length ? qgtrisk.join(',') : [],
          zrx: this.zrx.length ? this.zrx.join(',') : [],
          zrxrisk: zrxrisk.length ? zrxrisk.join(',') : [],
          xyxybzx: this.xyxybzx.length ? this.xyxybzx.join(',') : [],
          xyxybzxrisk: xyxybzxrisk.length ? xyxybzxrisk.join(',') : [],
          sx: this.sx.length ? this.sx.join(',') : [],
          sxrisk: sxrisk.length ? sxrisk.join(',') : [],
          gcgz: this.gcgz.length ? this.gcgz.join(',') : [],
          gcgzrisk: gcgzrisk.length ? gcgzrisk.join(',') : []

          // zb: '146',
          // zbrisk: '15-16,16-16,17-16,18-16,19-16,21-16,22-16,36-16,34-16',
          // hyx: '106',
          // hyxrisk: '10-16',
          // yjx: '21',
          // yjxrisk: '27-6'
        }
      })
      console.log(parmaData)
      debugger
    }
  },
  computed: {},
  watch: {},
  // 声明周期函数
  beforeCreate () { },
  created () { },
  beforeMount () { },
  async mounted () {
    // 企工特模板
    dualCorePermissions({
      'fieldValue': 'qgt',
      'codeType': 'queryModel',
      'actionType': 'query'
    }).then(async res => {
      let resQueryModelNodeArr = []
      this.qgt = res.codeLabels
      for (const element of res.codeLabels) {
        // 级别
        let resQueryModelNode = await dualCorePermissions({
          'fieldValue': element,
          'codeType': 'queryModelNode',
          'actionType': 'query'
        })
        resQueryModelNodeArr.push(...resQueryModelNode.codeLabels)
      }
      this.qgtOtpions = resQueryModelNodeArr.map(item => {
        let tempArr = item.split('--')
        return { label: tempArr[1], value: tempArr[0] }
      })
    })
    // 责任险模板
    dualCorePermissions({
      'fieldValue': 'zrx',
      'codeType': 'queryModel',
      'actionType': 'query'
    }).then(async res => {
      let resQueryModelNodeArr = []
      this.zrx = res.codeLabels
      for (const element of res.codeLabels) {
        // 级别
        let resQueryModelNode = await dualCorePermissions({
          'fieldValue': element,
          'codeType': 'queryModelNode',
          'actionType': 'query'
        })
        resQueryModelNodeArr.push(...resQueryModelNode.codeLabels)
      }
      this.zrxOtpions = resQueryModelNodeArr.map(item => {
        let tempArr = item.split('--')
        return { label: tempArr[1], value: tempArr[0] }
      })
    })
    // 信用险和保证险模板
    dualCorePermissions({
      'fieldValue': 'xyxybzx',
      'codeType': 'queryModel',
      'actionType': 'query'
    }).then(async res => {
      let resQueryModelNodeArr = []
      this.xyxybzx = res.codeLabels
      for (const element of res.codeLabels) {
        // 级别
        let resQueryModelNode = await dualCorePermissions({
          'fieldValue': element,
          'codeType': 'queryModelNode',
          'actionType': 'query'
        })
        resQueryModelNodeArr.push(...resQueryModelNode.codeLabels)
      }
      this.xyxhbzxOtpions = resQueryModelNodeArr.map(item => {
        let tempArr = item.split('--')
        return { label: tempArr[1], value: tempArr[0] }
      })
    })
    // 水险模板
    dualCorePermissions({
      'fieldValue': 'sx',
      'codeType': 'queryModel',
      'actionType': 'query'
    }).then(async res => {
      let resQueryModelNodeArr = []
      this.sx = res.codeLabels
      for (const element of res.codeLabels) {
        // 级别
        let resQueryModelNode = await dualCorePermissions({
          'fieldValue': element,
          'codeType': 'queryModelNode',
          'actionType': 'query'
        })
        resQueryModelNodeArr.push(...resQueryModelNode.codeLabels)
      }
      this.sxOtpions = resQueryModelNodeArr.map(item => {
        let tempArr = item.split('--')
        return { label: tempArr[1], value: tempArr[0] }
      })
    })
    // 个财个责模板
    dualCorePermissions({
      'fieldValue': 'gcgz',
      'codeType': 'queryModel',
      'actionType': 'query'
    }).then(async res => {
      let resQueryModelNodeArr = []
      this.gcgz = res.codeLabels
      for (const element of res.codeLabels) {
        // 级别
        let resQueryModelNode = await dualCorePermissions({
          'fieldValue': element,
          'codeType': 'queryModelNode',
          'actionType': 'query'
        })
        resQueryModelNodeArr.push(...resQueryModelNode.codeLabels)
      }
      this.gcgzOtpions = resQueryModelNodeArr.map(item => {
        let tempArr = item.split('--')
        return { label: tempArr[1], value: tempArr[0] }
      })
    })
  },
  beforeUpdate () { },
  updated () { },
  beforeUnmount () { },
  unmounted () { },
  // 使用keep-alive生效
  activated () { },
  deactivated () { }
}
