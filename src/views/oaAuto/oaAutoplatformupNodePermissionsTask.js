import { dualCorePermissions } from '@/api/oaAuto.js'
import { getToken } from '@/utils/auth' // 验权

export default {
  name: 'oaAutoplatformupNodePermissionsTask',
  components: {},
  props: [],
  data () {
    return {
      requiredRules: [
        { required: true, message: '不能为空', trigger: ['blur', 'change'] }
      ],
      // 每行险种查询
      cloRisk: {
        queryqycxbx: [], // 企业财产保险（0101-0112、0116-0117、0119、0121、0198、0199）
        querygcx: [], // 工程险（列明责任）（0701、0702、0711）
        querygcyqx: [], // 工程一切险（0801-0806、0898-0899）
        querytsbdbx: [], // 特殊标的保险（0201、0202、0205、0207-0211、0222）
        querytszhx: [], // 特殊综合险（2303-2309、2311）
        querysybx: [], // 石油保险（1213-1221、1299）
        queryhthkbx: [], // 航空航天保险（1302-1306、1396-1399）
        queryhnybx: [], // 核能源保险（1401-1406、1498-1499）
        queryzrxgzzrbx: [], // 公众责任保险（1501、1503、1505、1508、1509、1511-1515、1519、1520、1526-1530、1532-1537、1539-1541、1599）
        queryzrxguzhuzrbx: [], // 雇主责任保险（1701、1703-1713、1719-1721、1798）
        queryzrxcpzrbx: [], // 产品责任保险（1601-1605、1698）
        queryzyzrbx: [], // 职业责任保险（1801、1803-1819、1812-1822）
        queryqtzrbx: [], // 其他责任保险（1901、1903-1912、1915-1917、1919、1924-1927、1930、1932、1935-1937、1941-1942）
        queryxybx: [], // 信用保险（2101-2102）
        querybzbx: [], // 保证保险（2201、2202、2213、2227-2232、2235、2237、2239-2241）
        querygnhwysbx: [], // 国内货物运输保险（0901、0903-0910、0912、0913、0915、0916、0918、0999）
        queryhyyyxybx: [], // 货运预约协议保险（YAB0）
        queryjzx: [], // 集装箱（2001）
        queryjckhy: [], // 进出口货运（1001、1002、1099）
        querycbbx: [], // 船舶保险（1102、1103、1106、1107、1109-1113、1115-1117、1119、1196-1199）
        querygcgzptjcbx: [], // 普通家财保险 0301 0302 0303  0304 0305 0306 0307 0308 0309 0310 0312 0313
        querygcgztsjcbx: [], // 特殊家财保险 0401
        querygcgzgrccbx: [], // 个人财产保险0601 0602 0604 0605 0606 0607 0608 0609 0610 0611 0612
        querygcgzgzzrbx: [], // 公众责任保险1510 1517 1518 1521 1522 1523 1524 1525 1531 1535 1538 1544
        querygcgzzyzrbx: [], // 职业责任保险 1820
        querygcgzqtzrbx: [] // 其它责任保险1918 1923 1931 1938 1939 1940
      },
      showloading: false,
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
          numName: 'YAB0',
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
      gcgz: [], // 双核模板
      businessPropertyInsurance_checkList: [], // 企业财产保险险种多选框
      businessPropertyInsurance_Options: ['0101-0112', '0116-0117', '0119', '0121', '0198', '0199']
    }
  },
  setup () {
    return {}
  },
  methods: {
    queryLevel (row) {
      this.$refs.resultsForm.validate(valid => {
        if (valid) {
          dualCorePermissions({
            'usercode': row.workNumber,
            'comcode': row.comcode,
            'codeType': 'queryOriginalpermissions',
            'actionType': 'query'
          }).then(async res => {
            for (const key in res.codeLabels[0]) {
              if (Object.hasOwnProperty.call(res.codeLabels[0], key)) {
                const element = res.codeLabels[0][key]
                let lev = key.split('--')[2]
                if (!row[element].includes(lev)) {
                  row[element].push(lev)
                }
                // row[element] = [...new Set([...row[element], lev])]// 去重
              }
            }
          })
        }
      })
    },
    handleSuccess () {

    },
    beforeUpload () {

    },
    handleAdd () {
      this.results.push({
        comcode: '',
        comname: '',
        nameUnderwriter: '',
        workNumber: '',
        businessPropertyInsurance: [],
        specifyingLiability: [],
        engineeringAllRisks: [],
        specialSubject: [],
        specialComprehensive: [],
        oil: [],
        aviation: [],
        nuclearEnergy: [],
        publicLiability: [],
        employerLiability: [],
        productLiability: [],
        professionalResponsibility: [],
        otherResponsibilities: [],
        credit: [],
        ensure: [],
        transportGoods: [],
        cargoBooking: [],
        container: [],
        importExport: [],
        ship: [],
        familyProperty: [],
        specialProperty: [],
        personalProperty: [],
        publicResponsibility: [],
        profession: [],
        other: []
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
    businessPropertyInsurance_treeCheck (data) {
      console.log(data)
      debugger
    },
    commitData () {
      this.$refs.resultsForm.validate(valid => {
        if (valid) {
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
                for (const iterator of element) {
                  let str = `${this.colNameMap[key].numName}-${iterator || '0'}`
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
            }
            return {
              comcode: object.comcode || '',
              comcodename: object.comname || '',
              usercode: object.workNumber || '',
              usercname: object.nameUnderwriter || '',
              qgt: this.qgt.length ? this.qgt.join(',') : '',
              qgtrisk: qgtrisk.length ? qgtrisk.join(',') : '',
              zrx: this.zrx.length ? this.zrx.join(',') : '',
              zrxrisk: zrxrisk.length ? zrxrisk.join(',') : '',
              xyxybzx: this.xyxybzx.length ? this.xyxybzx.join(',') : '',
              xyxybzxrisk: xyxybzxrisk.length ? xyxybzxrisk.join(',') : '',
              sx: this.sx.length ? this.sx.join(',') : '',
              sxrisk: sxrisk.length ? sxrisk.join(',') : '',
              gcgz: this.gcgz.length ? this.gcgz.join(',') : '',
              gcgzrisk: gcgzrisk.length ? gcgzrisk.join(',') : ''

              // zb: '146',
              // zbrisk: '15-16,16-16,17-16,18-16,19-16,21-16,22-16,36-16,34-16',
              // hyx: '106',
              // hyxrisk: '10-16',
              // yjx: '21',
              // yjxrisk: '27-6'
            }
          })
          // 提交申请
          dualCorePermissions({
            // actionType: 'upJfcdSwitchMessage',
            // fdid: getToken('oaAuto-Token').fdid,
            // docCreator: getToken('oaAuto-Token').docCreator,
            actionType: 'upNodePermissions',
            docCreator: getToken('oaAuto-Token').fdid,
            fdid: getToken('oaAuto-Token').docCreator,
            info: parmaData
          })
        }
      })
    }
  },
  computed: {

  },
  watch: {},
  // 声明周期函数
  beforeCreate () { },
  created () { },
  beforeMount () { },
  async mounted () {
    for (const key in this.cloRisk) {
      if (Object.hasOwnProperty.call(this.cloRisk, key)) {
        let resQueryRisk = await dualCorePermissions({
          'fieldValue': key,
          'codeType': 'queryRisk',
          'actionType': 'query'
        })
        // .then(resQueryRisk => {
        // this.cloRisk[key] = resQueryRisk.codeLabels
        this.$set(this.cloRisk, key, resQueryRisk.codeLabels.join('\r\n'))
        // })
      }
    }
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
