import { dualCorePermissions } from '@/api/oaAuto.js'
export default {
  name: 'oaAutoupNodePermissionsReplaceMessageReplaceApplyTask',
  components: {},
  props: [],
  data () {
    return {
      results: [], // 表格数据
      docStatus: true, // 展示按按钮
      comcodeOtpions: [], // 机构代码下拉值
      workNumberOtpions: [], // 工号下拉值
      qgtOtpions: [], // 企工特下拉值
      zrxOtpions: [], // 责任险下拉值
      xyxhbzxOtpions: [], // 信用险和保证险模板下拉值
      sxOtpions: [], // 水险下拉值
      gcgzOtpions: [] // 个财个责模板下拉值
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
        personalProperty: ''
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
