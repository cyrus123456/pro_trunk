import { mapMutations, mapGetters } from 'vuex'
import {getUserName, getToken, setToken} from '@/utils/auth' // 验权
import { isvalidUsername } from '@/utils/validate'
import { dateformarter } from '@/utils'
import tableMixin from './mixins/table.js'
import nxUploadExcelComponent from '@/components/nx-upload-excel'
import {
  getLists,
  processCodeInput,
  comCode,
  comName,
  userName,
  userCode,
  usermessageByComCode,
  gradeCode,
  queryUserGrade,
  upGradesInitData,
  infoSupply,
  upGradesMessage,
  querySystemPostListExportExcel,
  getOAUploadCount,
  queryClassCode
} from '@/api/oaAuto'
import {
  getTemplatefiles
} from '@/api/common'
// import {waterDocumentSvg} from '@/utils/index'
require('script-loader!file-saver')
export default {
  components: {
    nxUploadExcelComponent
  },
  props: [],
  mixins: [tableMixin],
  computed: {

  },
  watch: {

  },
  /* beforeRouteEnter (to, from, next) {
    if (from.path === "/systemDetail") {
      to.meta.keepAlive = true
    } else {
      to.meta.keepAlive = false
    }
    next()
  }, */
  activated () {
    console.log('activated this.$route.meta.keepAlive', this.$route.meta.keepAlive)
    // if (!this.$route.meta.keepAlive) {
    //   this.handleClear('queryForm');/*清空查询条件*/
    // }else{
    //   this.$route.meta.isBack = false;
    //   this.getBorrowList();/*列表重新加载*/
    // }
  },
  // 监听,当路由发生变化的时候执行
  /*  watch:{
    $route(to,from){
      console.log('watch',to.path);
    }
  }, */
  beforeRouteLeave (to, from, next) { // 要在离开该组件的时候控制需要缓存的组件，否则将出现第一次不缓存的情况
    // this.busy = true
    // if (to.path === '/systemDetail') { // 去往详情页的时候需要缓存组件，其他情况下不需要缓存
    //   this.$store.commit('GET_CATCHE_COMPONENTS', ['system']) //注意，'home'将匹配首先检查组件自身的 name 选项（非router.js里的），如果 name 选项不可用，则匹配它的局部注册名称 (父组件 components 选项的键值)。匿名组件不能被匹配。
    // } else {
    //   this.$store.commit('GET_CATCHE_COMPONENTS', [])
    // }
    next()
  },

  created () {
    console.log('created this.$router.query', this.$route.query.initData)
    if (getToken('oaAuto-Token').docStatus === '1') {
      this.docStatus = true
    } else {
      this.docStatus = false
    }
    getOAUploadCount({
      actionType: 'oaUploadCount',
      queryParam: 'JFCD_SWITCH_OApageCount'
    }).then(res => {
      console.log('-----请求前端导入条数接口返回结果-----', JSON.stringify(res))
      if (res.flag == '1') {
        this.oaPageUploadCount = res.uploadCount
      }
    }).catch(error => {
      // this.queryDisable = false
      console.log('-----请求前端导入条数接口返回结果报错-----' + error)
    })
    this.initPage()
  },
  data () {
    let that = this
    return {
      showloading: false,
      docStatus: true,
      pageContent: '',
      checked: false,
      chkComCode: false,
      options: [],
      value: [],
      valueComCode: [],
      optionsComCode: [],
      optionsUserName: [],
      optionsUserCode: [],
      optionsGradeCode: [],
      optionsGradeName: [],
      list: [],
      optionsCode: [],
      listComCode: [],
      loading: false,
      loadingComCode: false,
      loadingUserName: false,
      loadingUserCode: false,
      loadingGradeCode: false,
      loadingGradeName: false,
      sels: [],
      queryform: {
      },
      queryformRules: {
      },
      results: [

      ],
      pagination: {
        total: 0,
        pageSize: '10',
        currentPage: 1
      },
      oaPageUploadCount: 30,
      disabledDate (time) {
        let origindate = new Date()
        // origindate.getDate
        origindate.setHours(origindate.getHours() + 1, 0, 0)
        return ((time.getTime() < origindate.getTime() - 24 * 60 * 60 * 1000)) || (time.getTime() > origindate.setDate(origindate.getDate() + 7))
        // return ((time.getTime() < origindate)) || (time.getTime() > origindate.setDate(origindate.getDate() + 7))
      },
      origindateOptions: {
        disabledDate (time) {
          let origindate = new Date()
          origindate.setHours(origindate.getHours() + 1, 0, 0)
          return ((time.getTime() < origindate.getTime() - 24 * 60 * 60 * 1000)) || (time.getTime() > origindate.setDate(origindate.getDate() + 7))
          // return ((time.getTime() < origindate)) || (time.getDate() == origindate.getDate() && time.getHours() > origindate.getHours()) || (time.getTime() > origindate.setDate(origindate.getDate() + 7))
          // return ((time.getTime() < Date.now()))
        },
        selectableRange: (new Date().getHours() + 1).toString() + ':00:00 - 23:59:59'
      },
      enddateOptions: {
        disabledDate (time) {
          // let enddate = new Date()
          // enddate.setHours(enddate.getHours() + 1, 0, 0)
          // return time.getTime() <= new Date(that.currentTableData.row.origindate)
          // that.$nextTick(() => {
          //   return time.getTime() <= new Date(that.currentTableData.row.origindate)
          // })
          // setTimeout(() => {
          // return time.getTime() <= new Date(that.currentTableData.row.origindate)
          // }, 3000 * Math.random());
        }
        // selectableRange: (new Date().getHours() + 1).toString() + ':00:00 - 23:59:59'
        // selectableRange: ('00:00:00 - 23:59:59')
      },
      currentTableData: {
        index: 0,
        row: {}
      }
    }
  },
  methods: {
    focusEnddate (value, index, row) {
      console.log(value)
      console.log(index)
      console.log(row)
      // this.currentTableData.index = index
      // this.currentTableData.row = row
      let that = this
      this.$nextTick(() => {
        that.currentTableData.index = index
        that.currentTableData.row = row
      })
    },
    changeOrigindate (value, index, row) {
      console.log(value)
      console.log(index)
      console.log(row)
      // this.currentTableData.index = index
      // this.currentTableData.row = row
      // let that = this
      //  this.$nextTick(() => {
      //   that.currentTableData.index = index
      //   that.currentTableData.row = row
      //     })
      row.enddate = ''
      // if (!row.origindate) {

      //   this.$message({
      //     message: '请先选择开始时间！',
      //     type: 'warning'
      //   })

      //   return false
      // }
    },
    changeEnddate (value, index, row) {
      console.log(value)
      console.log(index)
      console.log(row)
      // this.currentTableData.index = index
      // this.currentTableData.row = row
      // let that = this
      //  this.$nextTick(() => {
      //   that.currentTableData.index = index
      //   that.currentTableData.row = row
      //     })
      if (!row.origindate) {
        row.enddate = ''
        this.$message({
          message: '请先选择开始时间！',
          type: 'warning'
        })

        return false
      }
      let origindate = new Date(row.origindate + ':')
      let enddate = new Date(row.enddate + ':')
      // let enddate = new Date(row.enddate + ':').getDate()
      if (enddate.getTime() <= origindate.getTime()) {
        row.enddate = ''
        this.$message({
          message: '结束时间必须大于开始时间！',
          type: 'warning'
        })
        return false
      }
      if (enddate.getTime() - origindate.getTime() > 1000 * 60 * 60 * 24 * 30) {
        row.enddate = ''
        this.$message({
          message: '结束时间与开始时间间隔不能超过30天！',
          type: 'warning'
        })
        return false
      }
    },
    initPage (callback) {
      /* const initPageList = [this.initData()]
      Promise.all(initPageList).then((responseMaps) => {
        callback && callback()
        // Indicator.close();
      }) */
      let result = []
      // if (this.$route.query.initData) {
      //   JSON.parse(this.$route.query.initData).forEach(item => {
      if (getToken('oaAutoJFCDSWITCHTask') && getToken('oaAutoJFCDSWITCHTask').length > 0) {
        getToken('oaAutoJFCDSWITCHTask').forEach(item => {
          // return { value: item.split('--')[0], label: item }
          let innerData = {}
          innerData = Object.assign(innerData, item, {
            optionsComCode: [],
            optionsComName: [],
            optionsUserName: [],
            optionsUserCode: [],
            // optionsGradeCode: [],
            // optionsGradeName: [],
            optionsRiskCName: [],
            loadingComCode: false,
            loadingComName: false,
            loadingUserName: false,
            loadingUserCode: false,
            // loadingGradeCode: false,
            // loadingGradeName: false,
            loadingRiskCName: false,
            riskcname: item.riskcode + '--' + item.riskcname
          })
          result.push(innerData)
        })
      }
      this.results = result
    },
    initData () {
      upGradesInitData({
        actionType: 'query',
        codeType: 'upGradesInitData'
      }).then(res => {
        console.log('pageContent', res)
        let result = []
        if (res.codeValues && res.codeValues.length > 0) {
          res.codeValues.forEach(item => {
            // return { value: item.split('--')[0], label: item }
            let innerData = {}
            innerData = Object.assign(innerData, item, {
              optionsComCode: [],
              optionsComName: [],
              optionsUserName: [],
              optionsUserCode: [],
              optionsGradeCode: [],
              optionsGradeName: [],
              loadingComCode: false,
              loadingComName: false,
              loadingUserName: false,
              loadingUserCode: false,
              loadingGradeCode: false,
              loadingGradeName: false
              // riskcname: item.riskcode + '--' + item.riskcname,
            })
            innerData.riskcname = item.riskcode + '--' + item.riskcname
            result.push(innerData)
          })
        }
        this.results = result
      }).catch(error => {
        // this.queryDisable = false
        console.log(error)
      })
    },
    handleAdd () {
      let origindate = new Date()
      origindate.setHours(origindate.getHours() + 1, 0, 0)
      let enddate = new Date(origindate)
      enddate.setDate(origindate.getDate() + 30)
      let rowData = {
        comcode: '',
        comcname: '',
        usercode: '',
        usercname: '',
        // gradecode: '',
        // gradename: '',
        riskcode: '',
        riskcname: '',
        // origindate: dateformarter(origindate),
        // enddate: dateformarter(enddate),
        origindate: origindate,
        enddate: '',
        optionsComCode: [],
        optionsComName: [],
        optionsUserName: [],
        optionsUserCode: [],
        optionsGradeCode: [],
        optionsGradeName: [],
        optionsClassCode: [],
        optionsRiskCName: [],
        loadingComCode: false,
        loadingComName: false,
        loadingUserName: false,
        loadingUserCode: false,
        loadingGradeCode: false,
        loadingGradeName: false,
        loadingRiskCName: false
        // docStatus: true,
      }
      this.results.push(rowData)
    },
    handleDelete (index, row) {
      this.$delete(this.results, index)
      console.log('this.results', this.results)
    },
    handleCopy (index, row) {
      let copyData = JSON.parse(JSON.stringify(row))
      // this.results.push(copyData)
      this.results.splice(index + 1, 0, copyData)
    },
    // 导入模板下载
    handleTemplateDownload () {
      // 前端生成模板
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['出单团队代码', '出单人员代码', '险种', '开始时间(格式必须为:2022-03-06 15)', '结束时间(格式必须为:2022-03-06 15)']
        const filterVal = ['comcode', 'usercode', 'riskcode', 'origindate', 'enddate']
        const list = [
          {
            'comcode': '00160000',
            'usercode': '00160021',
            'riskcode': '1501',
            'origindate': '2022-03-26 16',
            'enddate': '2022-03-27 10'
          },
          {
            'comcode': '00160000',
            'usercode': '00160021',
            'riskcode': '1501',
            'origindate': '2022-03-26 16',
            'enddate': '2022-03-27 10'
          },
          {
            'comcode': '00160000',
            'usercode': '00160021',
            'riskcode': '1501',
            'origindate': '2022-03-26 16',
            'enddate': '2022-03-28 10'
          }
        ]
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: '非见费出单申请',
          headerStyle: {color: '000000', fgColor: 'BDD7EE', column: ['A1', 'B1', 'C1', 'D1', 'E1']}
        })
      })
      // getTemplatefiles('目标客户作战图.xlsx')
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
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
    handleSuccess ({ results, header }) {
      console.log('results', results)
      console.log(header)
      this.tableData = results
      this.tableHeader = header
      let postData = []
      let checkFlag = true
      if (results.length === 0) {
        this.$message({
          message: '请至少导入一条数据！',
          type: 'warning'
        })
        checkFlag = false
        return false
      }
      if (results.length > 0) {
        if (results.length > this.oaPageUploadCount) {
          this.$message({
            message: '每次最多可导入' + this.oaPageUploadCount + '条数据！',
            type: 'warning'
          })
          return false
        }
        if (results.length + this.results.length > this.oaPageUploadCount) {
          this.$message({
            message: '每次最多可申请' + this.oaPageUploadCount + '条数据！',
            type: 'warning'
          })
          return false
        }
        results.map((item) => { // item为数组的元素
          Object.keys(item).forEach(function (key) {
            console.log(key, item[key])
            console.log(key, typeof item[key])
            item[key] = item[key].toString().trim()
          })
          // console.log(item)
          return item// 返回一个处理过的新数组[2, 4, 6]
        })
        results.every((item, index) => {
          console.log('index', index)
          console.log(item)
          if (!item['出单团队代码']) {
            this.$message({
              message: `导入数据中第${index + 1}条出单团队代码不能为空！`,
              type: 'warning'
            })
            checkFlag = false
            return false
          }
          // if (item['出单团队代码'] && index !=0) {
          //   for (let i = 0; i < index; i++) {
          //     if (item['出单团队代码'] == results[i]['出单团队代码']) {
          //       this.$message({
          //         message: `导入数据中第${index + 1}条企业名称与第${i + 1}条企业名称不能重复！`,
          //         type: 'warning'
          //       })
          //       checkFlag = false
          //       return false
          //     }
          //   }
          // }
          if (!item['出单人员代码']) {
            this.$message({
              message: `导入数据中第${index + 1}条出单人员代码不能为空！`,
              type: 'warning'
            })
            checkFlag = false
            return false
          }
          if (!item['险种']) {
            this.$message({
              message: `导入数据中第${index + 1}条险种不能为空！`,
              type: 'warning'
            })
            checkFlag = false
            return false
          }
          if (!item['开始时间(格式必须为:2022-03-06 15)']) {
            this.$message({
              message: `导入数据中第${index + 1}条开始时间不能为空！`,
              type: 'warning'
            })
            checkFlag = false
            return false
          }
          if (!item['结束时间(格式必须为:2022-03-06 15)']) {
            this.$message({
              message: `导入数据中第${index + 1}条结束时间不能为空！`,
              type: 'warning'
            })
            checkFlag = false
            return false
          }
          if (item['出单团队代码'] && index != 0) {
            for (let i = 0; i < index; i++) {
              if ((item['出单团队代码'] == results[i]['出单团队代码']) && (item['险种'] == results[i]['险种'])) {
                this.$message({
                  message: `导入数据中第${index + 1}条与第${i + 1}条出单团队代码、险种至少要有一项不同！`,
                  type: 'warning'
                })
                checkFlag = false
                return false
              }
            }
          }
          postData.push(
            {
              'comcode': item['出单团队代码'],
              // 'comcname': item['机构名称'],
              'usercode': item['出单人员代码'],
              // 'usercname': item['姓名'],
              'riskcode': item['险种'],
              'origindate': item['开始时间(格式必须为:2022-03-06 15)'],
              'enddate': item['结束时间(格式必须为:2022-03-06 15)']
              // 'gradename': item['岗位名称'],
            }
          )
          return true
        })
        if (!checkFlag) {
          // this.showloading = false
          return false
        }
        this.showloading = true
        infoSupply({
          actionType: 'infoSupply',
          fieldValue: 'uploadJfcdSwitchMessage', // 待修改
          // docCreator: '王杰',
          info: postData
        }).then(res => {
          console.log(res)
          this.showloading = false
          let result = []
          if (res.codeValues && res.codeValues.length > 0) {
            res.codeValues.forEach(item => {
              // return { value: item.split('--')[0], label: item }
              let innerData = {}
              innerData = Object.assign(innerData, item, {
                optionsComCode: [],
                optionsComName: [],
                optionsUserName: [],
                optionsUserCode: [],
                // optionsGradeCode: [],
                optionsRiskCName: [],
                loadingComCode: false,
                loadingComName: false,
                loadingUserName: false,
                loadingUserCode: false,
                // loadingGradeCode: false,
                // loadingGradeName: false,
                loadingRiskCName: false,
                riskcname: item.riskcode + '--' + item.riskcname
                // origindate: '', //  待
                // enddate: '',
              })
              this.results.push(innerData)
            })
          }
        }).catch(error => {
          this.showloading = false
          console.log(error)
        })
      }
    },
    validateUpload (item, index) {

    },
    commitData () {
      // this.showloading = true
      console.log('commitData', this.results)
      let postData = []
      let checkFlag = true
      if (this.results.length === 0) {
        this.$message({
          message: '请至少录入一条数据！',
          type: 'warning'
        })
        checkFlag = false
        return false
      }
      if (this.results.length > this.oaPageUploadCount) {
        this.$message({
          message: '每次最多申请' + this.oaPageUploadCount + '条数据！',
          type: 'warning'
        })
        checkFlag = false
        return false
      }
      this.results.every((item, index) => {
        let postDataItem = JSON.parse(JSON.stringify(item))
        /* postData.push({
          comcode: postDataItem.comcode.indexOf('--')!== -1 ? postDataItem.comcode.split('--')[0] : postDataItem.comcode,
          comcname: postDataItem.comcname.indexOf('--')!== -1 ? postDataItem.comcname.split('--')[1] : postDataItem.comcname,
          usercode: postDataItem.usercode.indexOf('--')!== -1 ? postDataItem.usercode.split('--')[0] : postDataItem.usercode,
          usercname: postDataItem.usercname.indexOf('--')!== -1 ? postDataItem.usercname.split('--')[1] : postDataItem.usercname,
          gradecode: postDataItem.gradecode.indexOf('--')!== -1 ? postDataItem.gradecode.split('--')[0] : postDataItem.gradecode,
          gradename: postDataItem.gradename.indexOf('--')!== -1 ? postDataItem.gradename.split('--')[1] : postDataItem.gradename,
        }) */
        if (!item.comcode) {
          this.$message({
            message: `第${index + 1}条出单团队代码不能为空！`,
            type: 'warning'
          })
          checkFlag = false
          return false
        }
        if (!item.comcname) {
          this.$message({
            message: `第${index + 1}条出单团队代码不能为空！`,
            type: 'warning'
          })
          checkFlag = false
          return false
        }
        if (!item.usercode) {
          this.$message({
            message: `第${index + 1}条出单人员代码不能为空！`,
            type: 'warning'
          })
          checkFlag = false
          return false
        }
        if (!item.usercname) {
          this.$message({
            message: `第${index + 1}条人员名称不能为空！`,
            type: 'warning'
          })
          checkFlag = false
          return false
        }
        // if (!item.gradecode) {
        //   this.$message({
        //     message: `第${index + 1}条岗位代码不能为空！`,
        //     type: 'warning'
        //   })
        //   checkFlag = false
        //   return false
        // }
        if (!item.riskcname) {
          this.$message({
            message: `第${index + 1}条险种不能为空！`,
            type: 'warning'
          })
          checkFlag = false
          return false
        }
        if (!item.origindate) {
          this.$message({
            message: `第${index + 1}条开始时间不能为空！`,
            type: 'warning'
          })
          checkFlag = false
          return false
        }
        if (!item.enddate) {
          this.$message({
            message: `第${index + 1}条结束时间不能为空！`,
            type: 'warning'
          })
          checkFlag = false
          return false
        }
        if (new Date(item.origindate + ':').getTime() > new Date(item.enddate + ':').getTime()) {
          this.$message({
            message: `第${index + 1}条开始时间不能大于结束时间！`,
            type: 'warning'
          })
          checkFlag = false
          return false
        }
        if (item.comcode && index != 0) {
          for (let i = 0; i < index; i++) {
            if ((item.comcode == this.results[i]['comcode']) && (item['riskcname'] == this.results[i]['riskcname'])) {
              this.$message({
                message: `提交数据中第${index + 1}条与第${i + 1}条出单团队代码、险种至少要有一项不同！`,
                type: 'warning'
              })
              checkFlag = false
              return false
            }
          }
        }
        postData.push({
          comcode: postDataItem.comcode,
          comcname: postDataItem.comcname,
          usercode: postDataItem.usercode,
          usercname: postDataItem.usercname.indexOf('--') !== -1 ? postDataItem.usercname.split('--')[1] : postDataItem.usercname,
          riskcode: postDataItem.riskcode,
          riskcname: postDataItem.riskcname.indexOf('--') !== -1 ? postDataItem.riskcname.split('--')[1] : postDataItem.riskcname,
          // origindate: postDataItem.origindate + ':00:00',
          // enddate: postDataItem.enddate + ':00:00',
          origindate: postDataItem.origindate,
          enddate: postDataItem.enddate
        })
        return true
      })
      console.log('校验', checkFlag)
      if (!checkFlag) {
        this.showloading = false
        return false
      }
      console.log('正式踢几脚啦')
      upGradesMessage({
        actionType: 'upJfcdSwitchMessage',
        fdid: getToken('oaAuto-Token').fdid,
        docCreator: getToken('oaAuto-Token').docCreator,
        info: postData
      }).then(res => {
        console.log(res)
        this.showloading = false
        this.$message({
          message: '非见费出单申请数据提交成功！',
          type: 'warning',
          duration: 2 * 1000
        })
        let that = this
        setTimeout(function () {
          // window.close()
          that.closePage()
        }, 2000)
      }).catch(error => {
        this.showloading = false
        console.log(error)
      })
    },
    resetList () {
      this.pagination.currentPage = 1
      this.pagination.count = 0
    },
    checkUserCode () {
      if (!this.queryform.comCode) {
        this.$message({
          message: '请先选择登录机构！',
          type: 'warning',
          duration: 2 * 1000
        })
        return false
      }
      if (!this.queryform.userCode) {
        this.$message({
          message: '请先选择工号！',
          type: 'warning',
          duration: 2 * 1000
        })
        return false
      }
    },
    resetUserName (index, row) {
      // row.usercode = ''
      // row.optionsUserCode = []
      row.usercname = ''
      row.optionsUserName = []
    },
    resetUserCode (index, row) {
      row.usercode = ''
      row.optionsUserCode = []
    },
    resetGradeCode () {
      // this.queryform.utiUserGradeGradeCode = ''
      // this.optionsGradeCode = []
      this.$set(this.queryform, 'utiUserGradeGradeCode', '')
      // this.$set(this.queryform,'utiUserGradeGradeCode','')
    },
    resetGradeName () {
      // this.queryform.utiUserGradeGradeCode = ''
      // this.optionsGradeCode = []
      this.$set(this.queryform, 'utiUserGradeGradeCode', '')
      // this.$set(this.queryform,'utiUserGradeGradeCode','')
    },
    selectChange (value) {
      console.log('value', value)
      this.getLists(value)
    },
    selectChangeComCode (value, index, row) {
      console.log('selectChangeUserCode', value)
      // this.resetUserName(index, row)
      // this.resetUserCode(index, row)
      for (let i = 0; i < row.optionsComCode.length; i++) {
        if (row.optionsComCode[i].value === value) {
          row.comcname = row.optionsComCode[i].attachData.split('--')[1]
          row.optionsComName = [{ value: row.optionsComCode[i].attachData.split('--')[1], label: row.optionsComCode[i].attachData.split('--')[1] }]
          return false
        }
      }
    },
    selectChangeComName (value, index, row) {
      console.log('selectChangeUserName', value)
      // this.resetUserName(index, row)
      // this.resetUserCode(index, row)
      for (let i = 0; i < row.optionsComName.length; i++) {
        if (row.optionsComName[i].value === value) {
          row.comcode = row.optionsComName[i].attachData.split('--')[0]
          row.optionsComCode = [{ value: row.optionsComName[i].attachData.split('--')[0], label: row.optionsComName[i].attachData.split('--')[0] }]
          return false
        }
      }
    },
    selectChangeUserCode (value, index, row) {
      // row.usercname = value
      // row.optionsUserName = [{ value: value, label: value.split('--')[1] }]
      for (let i = 0; i < row.optionsUserCode.length; i++) {
        if (row.optionsUserCode[i].value === value) {
          // row.usercname = row.optionsUserCode[i].attachData.split('--')[1]
          // row.optionsUserName = [{ value: row.optionsUserCode[i].attachData.split('--')[1], label: row.optionsUserCode[i].attachData.split('--')[1] }]
          row.usercname = row.optionsUserCode[i].attachData
          row.optionsUserName = [{ value: row.optionsUserCode[i].attachData, label: row.optionsUserCode[i].attachData.split('--')[1] }]
          return false
        }
      }
    },
    selectChangeUserName (value, index, row) {
      // row.usercode = value
      // row.optionsUserCode = [{ value: value, label: value.split('--')[0] }]
      for (let i = 0; i < row.optionsUserName.length; i++) {
        if (row.optionsUserName[i].value === value) {
          row.usercode = row.optionsUserName[i].attachData.split('--')[0]
          row.optionsUserCode = [{ value: row.optionsUserName[i].attachData.split('--')[0], label: row.optionsUserName[i].attachData.split('--')[0] }]
          return false
        }
      }
    },
    selectChangeGradeCode (value, index, row) {
      // row.gradename = value
      // row.optionsGradeName = [{ value: value, label: value.split('--')[1] }]
      for (let i = 0; i < row.optionsGradeCode.length; i++) {
        if (row.optionsGradeCode[i].value === value) {
          row.gradename = row.optionsGradeCode[i].attachData.split('--')[1]
          row.optionsGradeName = [{ value: row.optionsGradeCode[i].attachData.split('--')[1], label: row.optionsGradeCode[i].attachData.split('--')[1] }]
          return false
        }
      }
    },
    selectChangeGradeName (value, index, row) {
      // row.gradecode = value
      // row.optionsGradeCode = [{ value: value, label: value.split('--')[0] }]
      for (let i = 0; i < row.optionsGradeName.length; i++) {
        if (row.optionsGradeName[i].value === value) {
          row.gradecode = row.optionsGradeName[i].attachData.split('--')[0]
          row.optionsGradeCode = [{ value: row.optionsGradeName[i].attachData.split('--')[0], label: row.optionsGradeName[i].attachData.split('--')[0] }]
          return false
        }
      }
    },
    selectChangeRiskCName (value, index, row) {
      // row.usercode = value
      // row.optionsUserCode = [{ value: value, label: value.split('--')[0] }]
      for (let i = 0; i < row.optionsRiskCName.length; i++) {
        if (row.optionsRiskCName[i].value === value) {
          row.riskcode = row.optionsRiskCName[i].attachData.split('--')[0]
          // row.optionsUserCode = [{ value: row.optionsRiskCName[i].attachData.split('--')[0], label: row.optionsRiskCName[i].attachData.split('--')[0] }]
          return false
        }
      }
    },
    getLists (value) {
      if (!this.queryform.systemCode) {
        this.$message({
          message: '请先选择系统！',
          type: 'warning',
          duration: 2 * 1000
        })
        return false
      }
      let para = {
        pageNo: this.pagination.currentPage,
        rowsPerPage: this.pagination.pageSize,
        systemCode: this.queryform.systemCode,
        comCode: this.queryform.comCode,
        chkComCode: this.queryform.chkComCode,
        utiUserGradeGradeCode: this.queryform.utiUserGradeGradeCode,
        actionType: 'querySystemPostList'
      }
      getLists(para).then(res => {
        console.log('querySystemPostList', res)
        this.queryDisable = false
        this.pagination.total = res.count
        this.results = res.userPostList
        if (!this.results.length) {
          this.$message.error('当前查询条件下暂无数据')
        }
      }).catch(error => {
        // this.queryDisable = false
        console.log(error)
      })
    },
    /* remoteMethodComCode (query, index, row) {
      if (query !== '') {
        row.loadingComCode = true
        comCode({
          actionType: 'query',
          codeType: 'comCode',
          fieldValue: query
        }).then(res => {
          console.log('pageContent', res)
          row.loadingComCode = false
          if (res.codeLabels && res.codeLabels.length > 0) {
            row.optionsComCode = res.codeLabels.map(item => {
              // return { value: item.split('--')[0], label: item }
              return { value: item, label: item.split('--')[0] }
            })
          } else {
            row.optionsComCode = []
          }
        }).catch(error => {
          // this.queryDisable = false
          console.log(error)
        })
      } else {
        row.optionsComCode = [];
      }
    },
    remoteMethodComName (query, index, row) {
      if (query !== '') {
        row.loadingComName = true;
        comName({
          actionType: 'query',
          codeType: 'comCode',
          fieldValue: query
        }).then(res => {
          console.log('pageContent', res)
          row.loadingComName = false
          if (res.codeLabels && res.codeLabels.length > 0) {
            row.optionsComName = res.codeLabels.map(item => {
              // return { value: item.split('--')[0], label: item }
              return { value: item, label: item.split('--')[1] }
            })
          } else{
            row.optionsComName = []
          }
        }).catch(error => {
          // this.queryDisable = false
          console.log(error)
        })
      } else {
        row.optionsComName = [];
      }
    }, */
    remoteMethodComCode (query, index, row) {
      /* if (!row.comcode){
        this.$message({
          message: '请先选择登录机构！',
          type: 'warning',
          duration: 2 * 1000
        })
        return false
      } */
      if (query !== '') {
        row.loadingComCode = true
        comCode({
          actionType: 'query',
          codeType: 'queryJFCDSWITCHComCode',
          fieldValue: query
        }).then(res => {
          console.log('pageContent', res)
          row.loadingComCode = false
          if (res.codeLabels && res.codeLabels.length > 0) {
            row.optionsComCode = res.codeLabels.map(item => {
              // return { value: item.split('--')[0], label: item }
              return { value: item.split('--')[0], label: item.split('--')[0], attachData: item }
              // return { value: item, label: item.split('--')[0] }
              // return { value: {key: item.split('--')[0], name: item.split('--')[1]}, label: item.split('--')[0] }
            })
          } else {
            row.optionsComCode = []
          }
        }).catch(error => {
          // this.queryDisable = false
          console.log(error)
        })
      } else {
        row.optionsComCode = []
      }
    },
    remoteMethodComName (query, index, row) {
      /* if (!row.comcode){
        this.$message({
          message: '请先选择登录机构！',
          type: 'warning',
          duration: 2 * 1000
        })
        return false
      } */
      // this.remoteMethodUserCode('00170002')
      if (query !== '') {
        row.loadingComName = true
        comCode({
          actionType: 'query',
          codeType: 'queryJFCDSWITCHComCode',
          fieldValue: query
        }).then(res => {
          console.log('pageContent', res)
          row.loadingComName = false
          if (res.codeLabels && res.codeLabels.length > 0) {
            row.optionsComName = res.codeLabels.map(item => {
              // return { value: item, label: item }
              return { value: item.split('--')[1], label: item.split('--')[1], attachData: item }
              // return { value: item, label: item.split('--')[1] }
              // return { value: {key: item.split('--')[0], name: item.split('--')[1]}, label: item.split('--')[0] }
            })
          } else {
            row.optionsComName = []
          }
        }).catch(error => {
          // this.queryDisable = false
          console.log(error)
        })
      } else {
        row.optionsComName = []
      }
    },
    remoteMethodUserCode (query, index, row) {
      // if (!row.comcode) {
      //   this.$message({
      //     message: '请先选择登录机构！',
      //     type: 'warning',
      //     duration: 2 * 1000
      //   })
      //   return false
      // }
      if (query !== '') {
        row.loadingUserCode = true
        usermessageByComCode({
          actionType: 'query',
          codeType: 'userCode',
          fieldValue: query
          // comCode: row.comcode.split('--')[0]
        }).then(res => {
          console.log('pageContent', res)
          row.loadingUserCode = false
          if (res.codeLabels && res.codeLabels.length > 0) {
            row.optionsUserCode = res.codeLabels.map(item => {
              // return { value: item.split('--')[0], label: item }
              return { value: item.split('--')[0], label: item.split('--')[0], attachData: item }
              // return { value: item, label: item.split('--')[0] }
              // return { value: {key: item.split('--')[0], name: item.split('--')[1]}, label: item.split('--')[0] }
            })
          } else {
            row.optionsUserCode = []
          }
        }).catch(error => {
          // this.queryDisable = false
          console.log(error)
        })
      } else {
        row.optionsUserCode = []
      }
    },
    remoteMethodUserName (query, index, row) {
      // if (!row.comcode) {
      //   this.$message({
      //     message: '请先选择登录机构！',
      //     type: 'warning',
      //     duration: 2 * 1000
      //   })
      //   return false
      // }
      // this.remoteMethodUserCode('00170002')
      if (query !== '') {
        row.loadingUserName = true
        usermessageByComCode({
          actionType: 'query',
          codeType: 'userCode',
          fieldValue: query
          // comCode: row.comcode.split('--')[0]
        }).then(res => {
          console.log('pageContent', res)
          row.loadingUserName = false
          if (res.codeLabels && res.codeLabels.length > 0) {
            row.optionsUserName = res.codeLabels.map(item => {
              // return { value: item.split('--')[1], label: item.split('--')[1], attachData: item } //原始
              return { value: item, label: item.split('--')[1], attachData: item }
            })
          } else {
            row.optionsUserName = []
          }
        }).catch(error => {
          // this.queryDisable = false
          console.log(error)
        })
      } else {
        row.optionsUserName = []
      }
    },
    remoteMethodGradeCode (query, index, row) {
      console.log('query', query)
      /* if (!this.queryform.comCode){
        this.$message({
          message: '请先选择登录机构！',
          type: 'warning',
          duration: 2 * 1000
        })
        return false
      }
      if (!this.queryform.userCode) {
        this.$message({
          message: '请先选择员工！',
          type: 'warning',
          duration: 2 * 1000
        })
        return false
      } */
      /* if (query !== '') { */
      row.loadingGradeCode = true
      queryUserGrade({
        actionType: 'query',
        codeType: 'queryUserGrade',
        fieldValue: query
      }).then(res => {
        console.log('pageContent', res)
        row.loadingGradeCode = false
        if (res.codeLabels && res.codeLabels.length > 0) {
          row.optionsGradeCode = res.codeLabels.map(item => {
            return { value: item.split('--')[0], label: item.split('--')[0], attachData: item }
            // return { value: item, label: item.split('--')[0] }
            // return { value: item.split('--')[0], label: item }
          })
        } else {
          row.optionsGradeCode = []
        }
      }).catch(error => {
        // this.queryDisable = false
        console.log(error)
      })
      /* } else {
        this.optionsGradeCode = [];
      } */
    },
    remoteMethodGradeName (query, index, row) {
      console.log('query', query)
      /* if (!this.queryform.comCode){
        this.$message({
          message: '请先选择登录机构！',
          type: 'warning',
          duration: 2 * 1000
        })
        return false
      }
      if (!this.queryform.userCode) {
        this.$message({
          message: '请先选择员工！',
          type: 'warning',
          duration: 2 * 1000
        })
        return false
      } */
      /* if (query !== '') { */
      row.loadingGradeName = true
      queryUserGrade({
        actionType: 'query',
        codeType: 'queryUserGrade',
        fieldValue: query
      }).then(res => {
        console.log('pageContent', res)
        row.loadingGradeName = false
        if (res.codeLabels && res.codeLabels.length > 0) {
          row.optionsGradeName = res.codeLabels.map(item => {
            return { value: item.split('--')[1], label: item.split('--')[1], attachData: item }
            // return { value: item, label: item.split('--')[1] }
            // return { value: item.split('--')[0], label: item }
          })
        } else {
          row.optionsGradeName = []
        }
      }).catch(error => {
        // this.queryDisable = false
        console.log(error)
      })
      /* } else {
        this.optionsGradeCode = [];
      } */
    },
    remoteMethodRiskCName (query, index, row) {
      // if (!row.comcode) {
      //   this.$message({
      //     message: '请先选择登录机构！',
      //     type: 'warning',
      //     duration: 2 * 1000
      //   })
      //   return false
      // }
      // this.remoteMethodUserCode('00170002')
      if (query !== '') {
        row.loadingRiskCName = true
        usermessageByComCode({
          actionType: 'query',
          codeType: 'queryJFCDSWITCHRisk',
          fieldValue: query
          // comCode: row.comcode.split('--')[0]
        }).then(res => {
          console.log('pageContent', res)
          row.loadingRiskCName = false
          if (res.codeLabels && res.codeLabels.length > 0) {
            row.optionsRiskCName = res.codeLabels.map(item => {
              // return { value: item.split('--')[1], label: item.split('--')[1], attachData: item } //原始
              return { value: item, label: item.split('--')[1], attachData: item }
            })
          } else {
            row.optionsRiskCName = []
          }
        }).catch(error => {
          // this.queryDisable = false
          console.log(error)
        })
      } else {
        row.optionsRiskCName = []
      }
    },

    querygradesBymenuName () {
      let href = this.$router.resolve({path: '/oaAutoGradesMenu'})
      window.open(href.href, '_blank')
    },

    listExport () {
      querySystemPostListExportExcel({
        actionType: 'querySystemPostListExportExcel',
        systemCode: this.queryform.systemCode,
        comCode: this.queryform.comCode,
        utiUserGradeGradeCode: this.queryform.utiUserGradeGradeCode,
        chkComCode: this.queryform.chkComCode
      })
    },
    closePage () {
      // window.close()
      window.open('about:blank', '_top').close()
    },
    unloadFn () {
      // this._gap_time = new Date().getTime() - this._beforeUnload_time
      // if (this._gap_time <= 5) {
      //   // 关闭窗口
      // }
      setToken('reloadFlag', {name: 'oaAutoMenuApply'})
    },
    beforeunloadFn () {
      // this._beforeUnload_time = new Date().getTime()
      setToken('reloadFlag', {name: 'oaAutoMenuApply'})
    }
  },
  mounted () {
    window.addEventListener('beforeunload', e => this.beforeunloadFn())
    window.addEventListener('unload', e => this.unloadFn())
  },
  destroyed () {
    window.removeEventListener('beforeunload', e => this.beforeunloadFn())
    window.removeEventListener('unload', e => this.unload())
  }
}
