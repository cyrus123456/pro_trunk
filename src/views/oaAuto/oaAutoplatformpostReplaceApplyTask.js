import { dualCorePermissions } from '@/api/oaAuto.js'
import { getToken } from '@/utils/auth' // 验权
import nxUploadExcelComponent from '@/components/nx-upload-excel'

export default {
  name: 'oaAutoplatformpostReplaceApplyTask',
  components: {nxUploadExcelComponent},
  props: [],
  data () {
    return {
      oaPageUploadCount: 30, // 上传最大行数
      results: [], // 表格数据
      docStatus: true, // 展示按按钮
      comcodeOtpions: [], // 机构代码下拉值
      workNumberOtpions: [], // 工号下拉值
      old_workNumberOtpions: [], // 工号下拉值
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
    closePage () {
      window.open('about:blank', '_top').close()
    },
    // 导入前处理
    beforeUpload (file) {
      // this.showloading = true
      let filename = file.name
      let _index = filename.lastIndexOf('.')
      let suffix = filename.substr(_index + 1)
      let fileType = suffix
      if (fileType !== 'xlsx' && fileType !== 'xls') {
        this.$message({
          message: '请选择excel文件进行上传！',
          type: 'warning'
        })
        // this.showloading = false
        return false
      }
      return true // 直接返回没有处理文件大小限制 后期有需要将此处注掉，下面代码放开即可
      /* const isLt2M = file.size / 1024 / 1024 < 1
      if (isLt2M) {
        return true
      }
      this.$message({
        message: 'Please do not upload files larger than 2m in size.',
        type: 'warning'
      })
      return false */
    },
    // 导入成功处理
    handleSuccess ({ results }) {
      if (results.length > 0) {
        dualCorePermissions({
          actionType: 'infoSupply',
          fieldValue: 'supplyPlatformPostReplaceMessage',
          info: results.map(item => {
            return {
              'comcode': item['机构代码'],
              'beforeusercode': item['原岗位人员工号'],
              'usercode': item['换岗后人员工号']
            }
          })
        }).then(res => {
          this.results = res.codeValues.map(item => {
            return {
              comcode: item.comcode,
              comname: item.comcodename,
              old_workNumber: item.beforeusercode,
              old_nameUnderwriter: item.beforeUserName,
              workNumber: item.usercode,
              nameUnderwriter: item.usercname
            }
          })
        })
      }
    },
    // 导入模板下载
    handleTemplateDownload () {
          // 前端生成模板
          import('@/vendor/Export2Excel').then(excel => {
            const tHeader = ['机构代码', '原岗位人员工号', '换岗后人员工号']
            const filterVal = ['comcode', 'beforeusercode', 'usercode']
            const list = [
              {
                'comcode': '00160000',
                'beforeusercode': '00160021',
                'usercode': '00160024'
              },
              {
                'comcode': '00160000',
                'beforeusercode': '00160021',
                'usercode': '00160024'
              },
              {
                'comcode': '00160000',
                'beforeusercode': '00160021',
                'usercode': '00160024'
              }
            ]
            const data = this.formatJson(filterVal, list)
            excel.export_json_to_excel({
              header: tHeader,
              data,
              filename: '权限申请岗位换人模板',
              headerStyle: { color: '000000', fgColor: 'BDD7EE', column: ['A1', 'B1', 'C1'] }
            })
          })
          // getTemplatefiles('目标客户作战图.xlsx')
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    commitData () {
      debugger
      let parmaData = this.results.map(item => {
        return {
          'comcode': item.comcode,
          'comcodename': item.comname,
          'beforeUserCode': item.old_workNumber,
          'beforeUserName': item.old_nameUnderwriter,
          'usercode': item.workNumber,
          'usercname': item.nameUnderwriter
        }
      })
      // 提交申请
      debugger
      dualCorePermissions({
        actionType: 'platformReplaceMessage',
        docCreator: getToken('oaAuto-Token').fdid,
        fdid: getToken('oaAuto-Token').docCreator,
        info: parmaData
      })
    },
    handleAdd () {
      this.results.push({
        comcode: '',
        comname: '',
        old_nameUnderwriter: '',
        old_workNumber: '',
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
    old_workNumberRemoteMethod (query) {
      if (query !== '') {
        debugger
        dualCorePermissions({
          'fieldValue': query,
          'codeType': 'userCode',
          'actionType': 'query'
        }).then(async res => {
          this.old_workNumberOtpions = res.codeLabels.map(item => {
            let tempArr = item.split('--')
            return { label: tempArr[1], value: tempArr[0] }
          })
        })
      }
    },
    old_workNumberChange (row) {
      if (row.old_workNumber !== '') {
        row.old_nameUnderwriter = this.old_workNumberOtpions.find(item => item.value === row.old_workNumber).label
      }
    },
    old_nameUnderwriterChange (row) {
      if (row.old_nameUnderwriter !== '') {
        row.old_workNumber = this.old_workNumberOtpions.find(item => item.label === row.old_nameUnderwriter).value
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
