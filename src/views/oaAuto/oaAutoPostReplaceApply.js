import { mapMutations, mapGetters } from 'vuex'
import {getUserName, getToken, setToken} from '@/utils/auth' // 验权
import { isvalidUsername } from '@/utils/validate'
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
  getOAUploadCount
} from '@/api/oaAuto'
import {
  getTemplatefiles
} from '@/api/common'
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

  // 要在离开该组件的时候控制需要缓存的组件，否则将出现第一次不缓存的情况
  beforeRouteLeave (to, from, next) {
    // this.busy = true
    // if (to.path === '/systemDetail') { // 去往详情页的时候需要缓存组件，其他情况下不需要缓存
    //   this.$store.commit('GET_CATCHE_COMPONENTS', ['system']) //注意，'home'将匹配首先检查组件自身的 name 选项（非router.js里的），如果 name 选项不可用，则匹配它的局部注册名称 (父组件 components 选项的键值)。匿名组件不能被匹配。
    // } else {
    //   this.$store.commit('GET_CATCHE_COMPONENTS', [])
    // }
    next()
  },

  created () {
    console.log('----非车理赔岗位换人申请页面加载----')
    if (getToken('oaAuto-Token').docStatus === '1') {
      this.docStatus = true
    } else {
      this.docStatus = false
    }
    getOAUploadCount({
      actionType: 'oaUploadCount',
      queryParam: 'SWT_BIZ_OApageCount'
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
      optionsBeforeUserCode: [],
      optionsBeforeUserName: [],
      list: [],
      optionsCode: [],
      listComCode: [],
      loading: false,
      loadingBeforeUserCode: false,
      loadingBeforeUserName: false,
      loadingUserCode: false,
      loadingUserName: false,
      loadingGradeCode: false,
      loadingGradeName: false,
      sels: [],
      queryform: {
      },
      queryformRules: {
      },
      results: [],
      // 理赔系统编码
      optionsClaimsSystemCode: [
        {
          value: 'claim',
          label: 'claim--理赔工作流系统'
        }
      ],
      pagination: {
        total: 0,
        pageSize: '10',
        currentPage: 1
      },
      oaPageUploadCount: 30
    }
  },
  methods: {
    initPage (callback) {
      let result = []
      if (getToken('oaAutoPostReplaceApply') && getToken('oaAutoPostReplaceApply').length > 0) {
        getToken('oaAutoPostReplaceApply').forEach(item => {
          let innerData = {}
          innerData = Object.assign(innerData, item, {
            optionsBeforeUserCode: [],
            optionsBeforeUserName: [],
            optionsUserName: [],
            optionsUserCode: [],
            loadingBeforeUserCode: false,
            loadingBeforeUserName: false,
            loadingUserName: false,
            loadingUserCode: false
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
            let innerData = {}
            innerData = Object.assign(innerData, item, {
              optionsBeforeUserCode: [],
              optionsBeforeUserName: [],
              optionsUserName: [],
              optionsUserCode: [],
              loadingBeforeUserCode: false,
              loadingBeforeUserName: false,
              loadingUserName: false,
              loadingUserCode: false
            })
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
      let rowData = {
        beforeUserCode: '',
        beforeUserName: '',
        usercode: '',
        usercname: '',
        optionsBeforeUserCode: [],
        optionsBeforeUserName: [],
        optionsUserName: [],
        optionsUserCode: [],
        loadingBeforeUserCode: false,
        loadingBeforeUserName: false,
        loadingUserName: false,
        loadingUserCode: false
      }
      this.results.push(rowData)
    },
    handleDelete (index, row) {
      this.$delete(this.results, index)
      console.log('this.results', this.results)
    },
    handleCopy (index, row) {
      let copyData = JSON.parse(JSON.stringify(row))
      this.results.splice(index + 1, 0, copyData)
    },
    // 导入模板下载
    handleTemplateDownload () {
      // 前端生成模板
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['原岗位人员工号', '换岗后人员工号']
        const filterVal = ['beforeUserCode', 'usercode']
        const list = [
          {
            'beforeUserCode': '00000001',
            'usercode': '02080027'
          },
          {
            'beforeUserCode': '00000002',
            'usercode': '02010002'
          },
          {
            'beforeUserCode': '00000003',
            'usercode': '02010004'
          }
        ]
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: '非车理赔岗位换人申请',
          headerStyle: {color: '000000', fgColor: 'BDD7EE', column: ['A1', 'B1']}
        })
      })
      // getTemplatefiles('目标客户作战图.xlsx')
    },
    // josn数据格式化
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
            item[key] = item[key].toString().trim()
          })
          return item// 返回一个处理过的新数组[2, 4, 6]
        })
        results.every((item, index) => {
          /* if (!item['企业名称']) {
            this.$message({
              message: `导入数据中第${index + 1}条企业名称不能为空！`,
              type: 'warning'
            })
            checkFlag = false
            return false
          }
          if (item['企业名称'] && index !=0) {
            for (let i = 0; i < index; i++) {
              if (item['企业名称'] == results[i]['企业名称']) {
                this.$message({
                  message: `导入数据中第${index + 1}条企业名称与第${i + 1}条企业名称不能重复！`,
                  type: 'warning'
                })
                checkFlag = false
                return false
              }
            }
          }
          if (!item['归属机构']) {
            this.$message({
              message: `导入数据中第${index + 1}条归属机构不能为空！`,
              type: 'warning'
            })
            checkFlag = false
            return false
          } */
          postData.push(
            {
              'beforeUserCode': item['原岗位人员工号'],
              'usercode': item['换岗后人员工号']
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
          fieldValue: 'upPostReplaceMessage',
          info: postData
        }).then(res => {
          this.showloading = false
          let result = []
          if (res.codeValues && res.codeValues.length > 0) {
            res.codeValues.forEach(item => {
              let innerData = {}
              innerData = Object.assign(innerData, item, {
                optionsBeforeUserCode: [],
                optionsBeforeUserName: [],
                optionsUserCode: [],
                optionsUserName: [],
                loadingBeforeUserCode: false,
                loadingBeforeUserName: false,
                loadingUserCode: false,
                loadingUserName: false
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
    // 文件下载
    frontDownload () {
      var a = document.createElement('a') // 创建一个<a></a>标签
      a.href = '/static/localfile/一起走开通步骤.pdf' // 给a标签的href属性值加上地址，注意，这里是绝对路径，不用加点.
      a.download = 'EHR工号申请手册.pdf' // 设置下载文件文件名，这里加上.xlsx指定文件类型，pdf文件就指定.fpd即可
      a.style.display = 'none' // 障眼法藏起来a标签
      document.body.appendChild(a) // 将a标签追加到文档对象中
      a.click() // 模拟点击了a标签，会触发a标签的href的读取，浏览器就会自动下载了
      a.remove() // 一次性的，用完就删除a标签
    },
    selectChangeSystemCode (value) {
      console.log('----所选择系统所对应的value值----', value)
      this.optionsCode.splice(0, this.optionsCode.length)
      this.optionsCode.push(value)
    },
    // 提交数据
    commitData () {
      let _this = this // 重新定义this
      // this.showloading = true
      console.log('------进入非车理赔岗位换人提交数据方法----', JSON.stringify(this.results))
      let postData = []
      let checkFlag = true
      if (this.optionsCode.length === 0) {
        this.$message({
          message: '请先选择需要申请的系统！',
          type: 'warning'
        })
        checkFlag = false
        return false
      }
      let submitSystomCode = this.optionsCode[0]
      if (submitSystomCode != 'claim') {
        this.$message({
          message: '请选择非车理赔系统！',
          type: 'warning'
        })
        checkFlag = false
        return false
      }
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
        // 转成json对象
        let postDataItem = JSON.parse(JSON.stringify(item))
        if (!item.beforeUserCode) {
          this.$message({
            message: `第${index + 1}条数据的原岗位人员工号不能为空！`,
            type: 'warning'
          })
          checkFlag = false
          return false
        }
        if (!item.beforeUserName) {
          this.$message({
            message: `第${index + 1}条数据的原岗位人员姓名不能为空！`,
            type: 'warning'
          })
          checkFlag = false
          return false
        }
        if (!item.usercode) {
          this.$message({
            message: `第${index + 1}条数据的换岗后人员工号不能为空！`,
            type: 'warning'
          })
          checkFlag = false
          return false
        }
        if (!item.usercname) {
          this.$message({
            message: `第${index + 1}条数据的换岗后人员姓名不能为空！`,
            type: 'warning'
          })
          checkFlag = false
          return false
        }
        postData.push({
          beforeUserCode: postDataItem.beforeUserCode,
          beforeUserName: postDataItem.beforeUserName.indexOf('--') !== -1 ? postDataItem.beforeUserName.split('--')[1] : postDataItem.beforeUserName,
          usercode: postDataItem.usercode,
          usercname: postDataItem.usercname.indexOf('--') !== -1 ? postDataItem.usercname.split('--')[1] : postDataItem.usercname
        })
        return true
      })
      if (!checkFlag) {
        this.showloading = false
        return false
      }
      let request_data = {
        actionType: 'upPostReplaceMessage',
        fdid: getToken('oaAuto-Token').fdid,
        docCreator: getToken('oaAuto-Token').docCreator,
        systemCode: submitSystomCode,
        info: postData
      }
      upGradesMessage(request_data).then(res => {
        console.log('----请求非车理赔权限申请后台接口返回数据----', JSON.stringify(res))
        this.showloading = false
        this.$message({
          message: '权限申请数据提交成功！',
          type: 'warning',
          duration: 5 * 1000
        })
        let that = this
        setTimeout(function () {
          // window.close()
          that.closePage()
        }, 2000)
      }).catch(error => {
        this.showloading = false
        console.log('----请求非车理赔权限申请后台接口报错----', error)
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
      // row.comcname = value
      // row.optionsComName = [{ value: value, label: value.split('--')[1] }]
      /* row.optionsComCode.forEach(item => {
        if (item.value === value) {
          row.comcname = item.attachData.split('--')[1]
          row.optionsComName = [{ value: item.attachData.split('--')[1], label: item.attachData.split('--')[1] }]
          return false
        }
      }) */
      this.resetUserName(index, row)
      this.resetUserCode(index, row)
      for (let i = 0; i < row.optionsComCode.length; i++) {
        if (row.optionsComCode[i].value === value) {
          row.comcname = row.optionsComCode[i].attachData.split('--')[1]
          row.optionsComName = [{ value: row.optionsComCode[i].attachData.split('--')[1], label: row.optionsComCode[i].attachData.split('--')[1] }]
          return false
        }
      }
    },
    selectChangeComName (value, index, row) {
      // row.comcode = value
      // row.optionsComCode = [{ value: value, label: value.split('--')[0] }]
      /* row.optionsComName.forEach(item => {
        if (item.value === value) {
          row.comcode = item.attachData.split('--')[0]
          row.optionsComCode = [{ value: item.attachData.split('--')[0], label: item.attachData.split('--')[0] }]
          return false
        }
      }) */
      this.resetUserName(index, row)
      this.resetUserCode(index, row)
      for (let i = 0; i < row.optionsComName.length; i++) {
        if (row.optionsComName[i].value === value) {
          row.comcode = row.optionsComName[i].attachData.split('--')[0]
          row.optionsComCode = [{ value: row.optionsComName[i].attachData.split('--')[0], label: row.optionsComName[i].attachData.split('--')[0] }]
          return false
        }
      }
    },
    selectChangeBeforeUserCode (value, index, row) {
      for (let i = 0; i < row.optionsBeforeUserCode.length; i++) {
        if (row.optionsBeforeUserCode[i].value === value) {
          row.beforeUserName = row.optionsBeforeUserCode[i].attachData
          row.optionsBeforeUserName = [{ value: row.optionsBeforeUserCode[i].attachData, label: row.optionsBeforeUserCode[i].attachData.split('--')[1], attachData: row.optionsBeforeUserCode[i].attachData }]
          return false
        }
      }
    },
    selectChangeBeforeUserName (value, index, row) {
      for (let i = 0; i < row.optionsBeforeUserName.length; i++) {
        if (row.optionsBeforeUserName[i].value === value) {
          row.beforeUserCode = row.optionsBeforeUserName[i].attachData.split('--')[0]
          row.optionsBeforeUserCode = [{ value: row.optionsBeforeUserName[i].attachData.split('--')[0], label: row.optionsBeforeUserName[i].attachData.split('--')[0], attachData: row.optionsBeforeUserName[i].attachData }]
          return false
        }
      }
    },
    selectChangeUserCode (value, index, row) {
      for (let i = 0; i < row.optionsUserCode.length; i++) {
        if (row.optionsUserCode[i].value === value) {
          row.usercname = row.optionsUserCode[i].attachData
          row.optionsUserName = [{ value: row.optionsUserCode[i].attachData, label: row.optionsUserCode[i].attachData.split('--')[1], attachData: row.optionsUserCode[i].attachData }]
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
          row.optionsUserCode = [{ value: row.optionsUserName[i].attachData.split('--')[0], label: row.optionsUserName[i].attachData.split('--')[0], attachData: row.optionsUserName[i].attachData }]
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
    /*
    * 获取原岗位人员工号方法
    */
    remoteMethodBeforeUserCode (query, index, row) {
      if (query !== '') {
        row.loadingBeforeUserCode = true
        userCode({
          actionType: 'query',
          codeType: 'userCode',
          fieldValue: query
        }).then(res => {
          row.loadingBeforeUserCode = false
          if (res.codeLabels && res.codeLabels.length > 0) {
            row.optionsBeforeUserCode = res.codeLabels.map(item => {
              return { value: item.split('--')[0], label: item.split('--')[0], attachData: item }
            })
          } else {
            row.optionsBeforeUserCode = []
          }
        }).catch(error => {
          // this.queryDisable = false
          console.log(error)
        })
      } else {
        row.optionsBeforeUserCode = []
      }
    },
    /*
    * 获取原岗位人员姓名方法
    */
    remoteMethodBeforeUserName (query, index, row) {
      if (query !== '') {
        row.loadingBeforeUserName = true
        userCode({
          actionType: 'query',
          codeType: 'userCode',
          fieldValue: query
        }).then(res => {
          row.loadingBeforeUserName = false
          if (res.codeLabels && res.codeLabels.length > 0) {
            row.optionsBeforeUserName = res.codeLabels.map(item => {
              return { value: item.split('--')[1], label: item.split('--')[1], attachData: item }
            })
          } else {
            row.optionsBeforeUserName = []
          }
        }).catch(error => {
          // this.queryDisable = false
          console.log(error)
        })
      } else {
        row.optionsBeforeUserName = []
      }
    },
    remoteMethodUserCode (query, index, row) {
      if (query !== '') {
        row.loadingUserCode = true
        userCode({
          actionType: 'query',
          codeType: 'userCode',
          fieldValue: query
        }).then(res => {
          row.loadingUserCode = false
          if (res.codeLabels && res.codeLabels.length > 0) {
            row.optionsUserCode = res.codeLabels.map(item => {
              return { value: item.split('--')[0], label: item.split('--')[0], attachData: item }
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
      if (query !== '') {
        row.loadingUserName = true
        userCode({
          actionType: 'query',
          codeType: 'userCode',
          fieldValue: query
        }).then(res => {
          row.loadingUserName = false
          if (res.codeLabels && res.codeLabels.length > 0) {
            row.optionsUserName = res.codeLabels.map(item => {
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

    querygradesBymenuName () {
      let href = this.$router.resolve({path: '/oaAutoClaimsGradesMenu'})
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
      setToken('reloadFlag', {name: 'oaAutoClaimsMenuApply'})
    },
    beforeunloadFn () {
      // this._beforeUnload_time = new Date().getTime()
      setToken('reloadFlag', {name: 'oaAutoClaimsMenuApply'})
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
