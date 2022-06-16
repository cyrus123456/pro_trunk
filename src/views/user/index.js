import { mapMutations, mapGetters } from 'vuex'
import { isvalidUsername } from '@/utils/validate'
import tableMixin from './mixins/table.js'
import {
  getLists,
  comCode,
  userName,
  userCode,
  gradeCode,
  userPostExportExcel
} from '@/api/authority'
export default {
  name: 'user',
  components: {
  },
  props: [],
  mixins: [tableMixin],
  computed: {
  },
  watch: {

  },
  /*  beforeRouteEnter (to, from, next) {
    if (from.path === "/userDetail") {
      to.meta.keepAlive = true
    } else {
      to.meta.keepAlive = false
    }
    next()
  }, */
  beforeRouteLeave (to, from, next) { // 要在离开该组件的时候控制需要缓存的组件，否则将出现第一次不缓存的情况
    // this.busy = true
    if (to.path === '/userDetail') { // 去往详情页的时候需要缓存组件，其他情况下不需要缓存
      this.$store.commit('GET_CATCHE_COMPONENTS', ['user']) // 注意，'home'将匹配首先检查组件自身的 name 选项（非router.js里的），如果 name 选项不可用，则匹配它的局部注册名称 (父组件 components 选项的键值)。匿名组件不能被匹配。
    } else {
      this.$store.commit('GET_CATCHE_COMPONENTS', [])
    }
    next()
  },

  created () {
  },
  data () {
    return {
      options: [],
      value: [],
      optionsComCode: [],
      optionsUserName: [],
      optionsUserCode: [],
      optionsGradeCode: [],
      valueComCode: [],
      list: [],
      optionsCode: [],
      listComCode: [],
      loading: false,
      loadingComCode: false,
      loadingUserName: false,
      loadingUserCode: false,
      loadingGradeCode: false,
      utiUserGradeGradeCode: '',
      queryDisable: false,
      sels: [],
      queryform: {
      },
      queryformRules: {
      },
      results: [],
      pagination: {
        total: 0,
        pageSize: '10',
        currentPage: 1
      }
    }
  },
  methods: {
    handleQuery () {
      this.pagination.currentPage = 1
      // this.pagination.count = 0
      this.getLists()
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
    resetUserName () {
      this.queryform.userName = ''
      this.optionsUserName = []
      this.queryform.userCode = ''
      this.optionsCode = []
    },
    resetUserCode () {
      this.queryform.userCode = ''
      this.optionsCode = []
    },
    resetGradeCode () {
      // this.queryform.utiUserGradeGradeCode = ''
      // this.optionsGradeCode = []
      this.$set(this.queryform, 'utiUserGradeGradeCode', '')
      // this.$set(this.queryform,'utiUserGradeGradeCode','')
    },
    selectChange (value) {
      console.log('value', value)
      this.getLists(value)
    },
    selectChangeComCode (value) {
      // this.resetList()
      this.resetUserName()
      this.resetUserCode()
      this.resetGradeCode()
      // this.getLists(value)
    },
    selectChangeUserName (value) {
      console.log('selectChangeUserName', value)
      // this.queryform.userCode = ''
      this.optionsUserCode = [{ value: value, label: value.split('--')[0] }]
      // this.remoteMethodUserCode(value.split('--')[1])
      // this.resetList()
      this.resetGradeCode()
      if (value) {
        this.remoteMethodGradeCode('')
      }

      // this.getLists(value)
    },
    selectChangeUserCode (value) {
      console.log('selectChangeUserCode', value)
      this.optionsUserName = [{ value: value, label: value.split('--')[1] }]
      // this.resetList()
      // this.getLists(value)
      this.resetGradeCode()
      if (value) {
        this.remoteMethodGradeCode('')
      }
    },
    selectChangeGradeCode (value) {
      console.log('selectChangeGradeCode', this.queryform)
      // this.resetList()
      // this.getLists(value)
    },
    getLists (value) {
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
      /* if (!this.queryform.utiUserGradeGradeCode) {
        this.$message({
          message: '请先选择岗位代码！',
          type: 'warning',
          duration: 2 * 1000
        })
        return false
      } */
      let para = {
        pageNo: this.pagination.currentPage,
        rowsPerPage: this.pagination.pageSize,
        comCode: this.queryform.comCode,
        userCode: this.queryform.userCode ? this.queryform.userCode.split('--')[0] : '',
        utiUserGradeGradeCode: this.queryform.utiUserGradeGradeCode,
        actionType: 'queryUserPostList'
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
    remoteMethod (query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options = []
      }
    },
    remoteMethodComCode (query) {
      if (query !== '') {
        this.loadingComCode = true
        comCode({
          actionType: 'query',
          codeType: 'comCode',
          fieldValue: query,
          codeMethod: 'query',
          comCode: query
        }).then(res => {
          console.log('pageContent', res)
          this.loadingComCode = false
          if (res.codeLabels && res.codeLabels.length > 0) {
            this.optionsComCode = res.codeLabels.map(item => {
              return { value: item.split('--')[0], label: item }
            })
          } else {
            this.optionsComCode = []
          }
        }).catch(error => {
          // this.queryDisable = false
          console.log(error)
        })
      } else {
        this.optionsComCode = []
      }
    },
    remoteMethodUserName (query) {
      if (!this.queryform.comCode) {
        this.$message({
          message: '请先选择登录机构！',
          type: 'warning',
          duration: 2 * 1000
        })
        return false
      }
      // this.remoteMethodUserCode('00170002')
      if (query !== '') {
        this.loadingUserName = true
        userName({
          actionType: 'query',
          codeType: 'userNameByComCode',
          fieldValue: query,
          codeMethod: 'query',
          comCode: this.queryform.comCode
        }).then(res => {
          console.log('pageContent', res)
          this.loadingUserName = false
          if (res.codeLabels && res.codeLabels.length > 0) {
            this.optionsUserName = res.codeLabels.map(item => {
              // return { value: item, label: item }
              return { value: item, label: item.split('--')[1] }
              // return { value: {key: item.split('--')[0], name: item.split('--')[1]}, label: item.split('--')[0] }
            })
          } else {
            this.optionsUserName = []
          }
        }).catch(error => {
          // this.queryDisable = false
          console.log(error)
        })
      } else {
        this.optionsUserName = []
      }
    },
    remoteMethodUserCode (query) {
      if (!this.queryform.comCode) {
        this.$message({
          message: '请先选择登录机构！',
          type: 'warning',
          duration: 2 * 1000
        })
        return false
      }
      if (query !== '') {
        this.loadingUserCode = true
        userCode({
          actionType: 'query',
          codeType: 'userCodeByComCode',
          fieldValue: query,
          codeMethod: 'query',
          comCode: this.queryform.comCode
        }).then(res => {
          console.log('pageContent', res)
          this.loadingUserCode = false
          if (res.codeLabels && res.codeLabels.length > 0) {
            this.optionsUserCode = res.codeLabels.map(item => {
              // return { value: item.split('--')[0], label: item }
              return { value: item, label: item.split('--')[0] }
              // return { value: {key: item.split('--')[0], name: item.split('--')[1]}, label: item.split('--')[0] }
            })
          } else {
            this.optionsUserCode = []
          }
        }).catch(error => {
          // this.queryDisable = false
          console.log(error)
        })
      } else {
        this.optionsUserCode = []
      }
    },
    remoteMethodGradeCode (query) {
      console.log('query', query)
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
          message: '请先选择员工！',
          type: 'warning',
          duration: 2 * 1000
        })
        return false
      }
      /* if (query !== '') { */
      this.loadingGradeCode = true
      gradeCode({
        actionType: 'query',
        codeType: 'queryUserGradeByComCode',
        comCode: this.queryform.comCode,
        userCode: this.queryform.userCode ? this.queryform.userCode.split('--')[0] : '',
        fieldValue: query,
        codeMethod: 'query'
      }).then(res => {
        console.log('pageContent', res)
        this.loadingGradeCode = false
        if (res.codeLabels && res.codeLabels.length > 0) {
          this.optionsGradeCode = res.codeLabels.map(item => {
            return { value: item.split('--')[0], label: item }
          })
        } else {
          this.optionsGradeCode = []
        }
      }).catch(error => {
        // this.queryDisable = false
        console.log(error)
      })
      /* } else {
        this.optionsGradeCode = [];
      } */
    },
    handleDetail (index, row) {
      this.$router.push({path: 'userDetail', query: row})
    },
    listExport () {
      userPostExportExcel({
        actionType: 'userPostExportExcel',
        userCode: this.queryform.userCode ? this.queryform.userCode.split('--')[0] : '',
        comCode: this.queryform.comCode,
        utiUserGradeGradeCode: this.queryform.utiUserGradeGradeCode,
        chkComCode: this.queryform.chkComCode
      })
    }

  },
  mounted () {
  }
}
