import { mapMutations, mapGetters } from 'vuex'
import {getUserName, getToken, setToken} from '@/utils/auth' // 验权
import { isvalidUsername } from '@/utils/validate'
// import tableMixin from './mixins/table.js'
// import {waterDocumentSvg} from '@/utils/index'
import {
  // oaConfigInit,
  processCodeInput,
  systemCode,
  comCode,
  gradeCode
  // querySystemPostListExportExcel,
} from '@/api/oaAuto'
const routerMap = {
  menuapplyTask: 'oaAutoMenuApply',
  ehrBandTask: 'oaAutoEhrBand',
  claimsMenuApplyTask: 'oaAutoClaimsMenuApply',
  postReplaceApplyTask: 'oaAutoPostReplaceApply',
  claimUnderwritApplyTask: 'oaAutoClaimsUnderwrit', // 总公司核赔权限申请
  branchUnderwritApplyTask: 'oaAutoBranchUnderwrit', // 分公司核赔权限申请
  JFCDSWITCHTask: 'oaAutoJFCDSWITCHTask', // 分公司核赔权限申请
  platformpostReplaceApplyTask: 'oaAutoplatformpostReplaceApplyTask', // 权限申请岗位换人
  platformupNodePermissionsTask: 'oaAutoplatformupNodePermissionsTask', // 双核权限模板权限申请
  upNodePermissionsReplaceMessageReplaceApplyTask: 'oaAutoupNodePermissionsReplaceMessageReplaceApplyTask' // 双核权限模板岗位换人
}
export default {
  // name: "system",
  components: {
  },
  props: [],
  mixins: [],
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
    // if (to.path === '/systemDetail') { // 去往详情页的时候需要缓存组件，其他情况下不需要缓存
    //   this.$store.commit('GET_CATCHE_COMPONENTS', ['system']) //注意，'home'将匹配首先检查组件自身的 name 选项（非router.js里的），如果 name 选项不可用，则匹配它的局部注册名称 (父组件 components 选项的键值)。匿名组件不能被匹配。
    // } else {
    //   this.$store.commit('GET_CATCHE_COMPONENTS', [])
    // }
    next()
  },

  created () {
    console.log('this.$router.query', this.$route.query.initData)
    // this.results = this.$route.query.initData
    this.results = getToken('oaAutoLoad')
    this.visible = true
    // let para = {
    //   'actionType': 'oaAutoLoad',
    //   'fdid': getToken('oaAuto-Token').fdid,
    //   'docCreator': getToken('oaAuto-Token').docCreator,
    // }
    // oaConfigInit(para).then(res => {
    //   console.log('oaConfigInit', res)
    //   this.results = res.codeValues
    //   this.visible = true
    // }).catch(error => {
    //   console.log('error', error)
    // })
  },
  data () {
    return {
      visible: false,
      results: []
    }
  },
  methods: {
    rowClick (row, column, event) {
      console.log('----oaAutoLoad调用rowClick方法，打印row----', JSON.stringify(row))
      console.log('----oaAutoLoad调用rowClick方法，打印column----', JSON.stringify(column))
      console.log('----oaAutoLoad调用rowClick方法，打印event----', JSON.stringify(event))
      this.visible = false
      this.$router.push({path: `/${routerMap[row.code]}`})
    },
    unloadFn () {
      // this._gap_time = new Date().getTime() - this._beforeUnload_time
      // if (this._gap_time <= 5) {
      //   // 关闭窗口
      // }
      setToken('reloadFlag', {name: 'oaAutoLoad'})
    },
    beforeunloadFn () {
      // this._beforeUnload_time = new Date().getTime()
      setToken('reloadFlag', {name: 'oaAutoLoad'})
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
