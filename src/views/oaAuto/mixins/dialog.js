import { mapMutations, mapGetters } from 'vuex'
import { isvalidUsername } from '@/utils/validate'
import {
  queryTaskMenu,
  queryDisplayRisk,
  exportSystemPostTaskMenuExcle
} from '@/api/oaAuto'
let id = 1000
export default {
  components: {
  },
  props: [
    'dialogData'
  ],
  mixins: [],
  computed: {
  },
  watch: {

  },
  created () {
    console.log('this.$route.query', this.$route.query)
    queryTaskMenu({
      actionType: 'query',
      codeType: 'queryTaskMenu',
      fieldValue: this.dialogData.info.gradecode
    }).then(res => {
      console.log('queryTaskMenu', res)
      if (res.userlist.length === 0) {
        this.emptyText = '暂无数据'
      }
      this.data = res.userlist
    }).catch(error => {
      // this.queryDisable = false
      console.log(error)
    })
    // this.userInfo = this.USERINFO
    // 页面初始化
  },
  data () {
    return {
      emptyText: '正在查询中...',
      data: [],
      /* data: [
        {
          id: 0,
          label: '平台配置系统',
          riskList:[
            {
              visbleClass: '01,02,03',
              visbleRisk: '0528',
              unvisbleClass: '19,30',
              unvisbleRisk: '1911',
            },
            {
              visbleClass: '01,02,03',
              visbleRisk: '0528',
              unvisbleClass: '19,30',
              unvisbleRisk: '1911',
            },
            {
              visbleClass: '01,02,03',
              visbleRisk: '0528',
              unvisbleClass: '19,30',
              unvisbleRisk: '1911',
            },
            {
              visbleClass: '01,02,03',
              visbleRisk: '0528',
              unvisbleClass: '19,30',
              unvisbleRisk: '1911',
            },
            {
              visbleClass: '01,02,03',
              visbleRisk: '0528',
              unvisbleClass: '19,30',
              unvisbleRisk: '1911',
            }
          ],
          children: [
            {
              id: 1,
              label: '人员管理',
              riskList:[
                {
                  visbleClass: '01,02,03',
                  visbleRisk: '0528',
                  unvisbleClass: '19,30',
                  unvisbleRisk: '1911',
                },
                {
                  visbleClass: '01,02,03',
                  visbleRisk: '0528',
                  unvisbleClass: '19,30',
                  unvisbleRisk: '1911',
                },
                {
                  visbleClass: '01,02,03',
                  visbleRisk: '0528',
                  unvisbleClass: '19,30',
                  unvisbleRisk: '1911',
                },
                {
                  visbleClass: '01,02,03',
                  visbleRisk: '0528',
                  unvisbleClass: '19,30',
                  unvisbleRisk: '1911',
                },
                {
                  visbleClass: '01,02,03',
                  visbleRisk: '0528',
                  unvisbleClass: '19,30',
                  unvisbleRisk: '1911',
                }
              ],
              /!* children: [{
                 id: 4,
                 label: '二级 1-1',
                 children: [{
                   id: 9,
                   label: '三级 1-1-1'
                 }, {
                   id: 10,
                   label: '三级 1-1-2'
                 }]
               }]*!/
            }, {
              id: 2,
              label: '代码管理',
              children: [{
                id: 5,
                label: '生命表配置管理',
                disabled: true
              }, {
                id: 6,
                label: '通用代码',
                disabled: true
              }, {
                id: 7,
                label: '业务层级信息',
                disabled: true
              }, {
                id: 8,
                label: '业务代码',
                children: [{
                  id: 81,
                  label: '协议关联维护',
                  disabled: true
                },{
                  id: 82,
                  label: '金融客户维护专员',
                  disabled: true
                },{
                  id: 83,
                  label: '特约配置管理',
                  disabled: true
                },{
                  id: 84,
                  label: '政府保费补贴配置',
                  disabled: true
                },{
                  id: 85,
                  label: '电销业务模式配置',
                  disabled: true
                }]
              }, {
                id: 11,
                label: '财务代码'
              }, {
                id: 12,
                label: '再保代码'
              }]
            }, {
              id: 3,
              label: '车商规则'
            }, {
              id: 4,
              label: '网销渠道配置'
            }
          ]
        }
      ], */
      defaultProps: {
        children: 'childList',
        label: 'taskName'
      },
      seen: false,
      x: 0,
      y: 0,
      positionStyle: {top: '20px', left: '20px'},
      riskList: []
    }
  },
  methods: {
    back () {
      // this.$router.go(-1)
      this.$router.push({name: 'system'})
    },
    append (data) {
      const newChild = { id: id++, label: 'testtest', children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },

    remove (node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },

    renderContent (h, { node, data, store }) {
      console.log('h', h)
      console.log('node', node)
      return (
        <span class="custom-tree-node"
        >
          <span on-mouseenter={ () => this.enter(data) }
            on-mouseleave={ () => this.leave() }
            on-mousemove={ () => this.updateXY }
          >{node.label}</span>
        </span>)
    },
    setCheckedKeys () {
      this.$refs.tree.setCheckedKeys([3])
    },
    getCheckedNodes (i) {
      console.log('getCheckedNodes', i)
    },
    enter (item) {
      console.log('data', item)
      console.log('enter')
      queryDisplayRisk({
        actionType: 'query',
        codeType: 'queryDisplayRisk',
        fieldValue: item.taskCode
      }).then(res => {
        console.log('querySystemPostList', res)
        this.riskList = res.codeValues
        this.seen = true
      }).catch(error => {
        // this.queryDisable = false
        console.log(error)
      })
      /* if(item.riskList){
        this.riskList=JSON.parse(JSON.stringify(item.riskList))
      }else{
        this.riskList=[]
      }
      this.seen = true */
    },
    leave (event, w) {
      console.log('leave')
      console.log('leave', w)
      this.riskList = []
      this.seen = false
    },
    updateXY (event) {
      console.log('event', event)
      // this.x=event.pageX;
      // this.y=event.pageY;
      // this.x=event.layerX;
      // this.y=event.layerY;
      this.x = event.screenX
      this.y = event.screenY
      this.positionStyle = {top: this.y - 100 + 'px', left: this.x + 50 + 'px'}
      // this.positionStyle={top: window.screen.height/2-200 + 'px',left: this.x + 1 + 'px'};
      // this.positionStyle={top: 200 + 'px',left: 400 + 'px'};
    },
    mouseLeave (event) {
      // console.log('mouseLeave',mouseLeave)
    },
    mousemove1 (event) {
      console.log('mousemove', 'mousemove')
    },
    finish () {
      this.dialogData.visible = false
      this.$emit('closeDialog', {'reload': false})
    },
    exporMenu () {
      exportSystemPostTaskMenuExcle({
        systemCode: this.$route.query.systemCode,
        comCode: this.$route.query.comCode,
        userCode: this.$route.query.userCode,
        utiUserGradeGradeCode: this.$route.query.gradecode,
        actionType: 'exportSystemPostTaskMenuExcle'
      })
    }
  },
  mounted () {
  }
}
