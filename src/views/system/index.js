import { mapMutations, mapGetters } from 'vuex'
import {getUserName} from '@/utils/auth' // 验权
import { isvalidUsername } from '@/utils/validate'
import tableMixin from './mixins/table.js'
import {waterDocumentSvg} from '@/utils/index'
import {
  getLists,
  processCodeInput,
  systemCode,
  comCode,
  gradeCode,
  querySystemPostListExportExcel
} from '@/api/authority'
export default {
  name: 'system',
  components: {
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
    if (to.path === '/systemDetail') { // 去往详情页的时候需要缓存组件，其他情况下不需要缓存
      this.$store.commit('GET_CATCHE_COMPONENTS', ['system']) // 注意，'home'将匹配首先检查组件自身的 name 选项（非router.js里的），如果 name 选项不可用，则匹配它的局部注册名称 (父组件 components 选项的键值)。匿名组件不能被匹配。
    } else {
      this.$store.commit('GET_CATCHE_COMPONENTS', [])
    }
    next()
  },

  created () {
  },
  data () {
    return {
      pageContent: '',
      checked: false,
      chkComCode: false,
      options: [],
      value: [],
      optionsComCode: [],
      optionsGradeCode: [],
      valueComCode: [],
      list: [],
      optionsCode: [],
      listComCode: [],
      loading: false,
      loadingComCode: false,
      loadingGradeCode: false,
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
    initPage (callback) {
      // const initPageList = [getCodes(this.codeMap, this.codes), this.getLists()]
      const initPageList = [this.systemCode()]
      Promise.all(initPageList).then((responseMaps) => {
        callback && callback()
        // Indicator.close();
      })
    },
    resetList () {
      this.pagination.currentPage = 1
      this.pagination.count = 0
    },
    selectChange (value) {
      console.log('value', value)
      this.resetList()
      this.getLists(value)
    },
    selectChangeComCode (value) {
      console.log('value', value)
      this.resetList()
      this.getLists(value)
    },
    selectChangeGradeCode (value) {
      console.log('value', value)
      this.resetList()
      this.getLists(value)
    },
    retateChkComCode () {
      console.log('queryform.chkComCode', this.queryform.chkComCode)
      if (this.chkComCode) {
        this.queryform.chkComCode = '1'
      } else {
        this.queryform.chkComCode = '0'
      }
      this.resetList()
      this.getLists()
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
    systemCode (query) {
      if (query !== '') {
        this.loading = true
        systemCode({
          actionType: 'query',
          codeType: 'systemCode',
          fieldValue: query,
          codeMethod: 'query'
        }).then(res => {
          console.log('pageContent', res)
          this.loading = false
          if (res.codeLabels && res.codeLabels.length > 0) {
            this.options = res.codeLabels.map(item => {
              return { value: item.split('--')[0], label: item }
            })
          }
        }).catch(error => {
          // this.queryDisable = false
          console.log(error)
        })
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
          }
        }).catch(error => {
          // this.queryDisable = false
          console.log(error)
        })
      } else {
        this.optionsComCode = []
      }
    },
    gradeCode (query) {
      if (query !== '') {
        this.loadingGradeCode = true
        gradeCode({
          actionType: 'query',
          codeType: 'gradeCodeByLevel',
          fieldValue: query,
          codeMethod: 'query'
        }).then(res => {
          console.log('pageContent', res)
          this.loadingGradeCode = false
          if (res.codeLabels && res.codeLabels.length > 0) {
            this.optionsGradeCode = res.codeLabels.map(item => {
              return { value: item.split('--')[0], label: item }
            })
          }
        }).catch(error => {
          // this.queryDisable = false
          console.log(error)
        })
      } else {
        this.optionsGradeCode = []
      }
    },
    handleDetail (index, row) {
      this.$router.push({path: 'systemDetail', query: row})
    },

    listExport () {
      querySystemPostListExportExcel({
        actionType: 'querySystemPostListExportExcel',
        systemCode: this.queryform.systemCode,
        comCode: this.queryform.comCode,
        utiUserGradeGradeCode: this.queryform.utiUserGradeGradeCode,
        chkComCode: this.queryform.chkComCode
      })
    }

  },
  mounted () {
  }
}
