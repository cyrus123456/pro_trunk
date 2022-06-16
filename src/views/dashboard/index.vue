<template>
  <div class="app-container">
    团体客户管理与拓展支持平台
    <button class="" @click="claimsGradesMenu">理赔菜单用户查询</button>
    <button class="" @click="oaAutoClaimsMenuApply">非车理赔岗位权限申请</button>
    <button class="" @click="oaAutoPostReplaceApply">非车理赔岗位换人申请</button>
    <button class="" @click="oaAutoClaimsUnderwrit">总公司核赔权限申请</button>
    <button class="" @click="oaAutoBranchUnderwrit">分公司核赔权限申请</button>
    <button class="" @click="handle">demo</button>
    <button class="" @click="menu">demo</button>
    <button class="" @click="oaAutoLoad">初始化菜单</button>
    <button class="" @click="oaAutoMenuApply">权限申请</button>
    <button class="" @click="oaAutoMenuApply1">权限申请只读</button>
    <button class="" @click="oaAutoEhrBand">EHR工号绑定</button>
    <button class="" @click="oaAutoJFCDSWITCHTask">非见费出单申请</button>
    <button class="" @click="oaAutoJFCDSWITCHTask1">非见费出单申请只读</button>
    <button class="" @click="oaAutoplatformpostReplaceApplyTask">权限申请岗位换人申请</button>
    <button class="" @click="oaAutoplatformpostReplaceApplyTask1">权限申请岗位换人只读</button>
    <button class="" @click="oaAutoplatformupNodePermissionsTask">双核权限模板权限申请</button>
    <button class="" @click="oaAutoplatformupNodePermissionsTask1">双核权限模板权限申请只读</button>
    <button class="" @click="oaAutoupNodePermissionsReplaceMessageReplaceApplyTask">双核权限模板岗位换人申请</button>
    <button class="" @click="oaAutoupNodePermissionsReplaceMessageReplaceApplyTask1">双核权限模板岗位换人只读</button>
    <button class="" @click="oaAutoJFCDSWITCHTask2">非见费出单申请</button>
    <button class="" @click="oaAutoJFCDSWITCHTask21">非见费出单申请只读</button>
  </div>
</template>

<script>

import nxDataDisplay from '@/components/nx-data-display/nx-data-display'
import nxDataCard from '@/components/nx-data-card/nx-data-card'
import nxDataTabs from '@/components/nx-data-tabs/nx-data-tabs'
import nxDataIcons from '@/components/nx-data-icons/nx-data-icons'
import nxGithubCorner from '@/components/nx-github-corner'
export default {
  name: 'report',
  components: {
    nxDataDisplay,
    nxDataCard,
    nxDataTabs,
    nxDataIcons,
    nxGithubCorner
  },
  data () {
    return {
      option: {
        span: 8,
        color: '#15A0FF',
        data: [
          {
            count: 1000,
            title: '日活跃数'
          },
          {
            count: 3000,
            title: '月活跃数'
          },
          {
            count: 20000,
            title: '年活跃数'
          }
        ]
      },
      easyDataOption: {
        span: 6,
        data: [
          {
            title: '分类统计',
            subtitle: '实时',
            count: 7993,
            allcount: 10222,
            text: '当前分类总记录数',
            color: 'rgb(49, 180, 141)',
            key: '类'
          },
          {
            title: '附件统计',
            subtitle: '实时',
            count: 3112,
            allcount: 10222,
            text: '当前上传的附件数',
            color: 'rgb(56, 161, 242)',
            key: '附'
          },
          {
            title: '文章统计',
            subtitle: '实时',
            count: 908,
            allcount: 10222,
            text: '评论次数',
            color: 'rgb(117, 56, 199)',
            key: '评'
          },
          {
            title: '新闻统计',
            subtitle: '实时',
            count: 908,
            allcount: 10222,
            text: '评论次数',
            color: 'rgb(59, 103, 164)',
            key: '新'
          }
        ]
      },
      easyDataOption0: {
        span: 6,
        borderColor: '#fff',
        data: [
          {
            name: '姓名1',
            src: 'static/img/mock/card/card-1.jpg',
            text: '介绍1'
          },
          {
            name: '姓名2',
            src: 'static/img/mock/card/card-2.jpg',
            text: '介绍2'
          },
          {
            name: '姓名3',
            src: 'static/img/mock/card/card-3.jpg',
            text: '介绍3'
          },
          {
            name: '姓名4',
            src: 'static/img/mock/card/card-4.jpg',
            text: '介绍4'
          }
        ]
      },
      easyDataOption1: {
        color: 'rgb(63, 161, 255)',
        span: 4,
        data: [
          {
            title: '今日注册',
            count: 12678,
            icon: 'icon-cuowu'
          },
          {
            title: '今日登录',
            count: 22139,
            icon: 'icon-shujuzhanshi2'
          },
          {
            title: '今日订阅',
            count: 35623,
            icon: 'icon-jiaoseguanli'
          },
          {
            title: '今日评论',
            count: 16826,
            icon: 'icon-caidanguanli'
          },
          {
            title: '今日评论',
            count: 16826,
            icon: 'icon-caidanguanli'
          },
          {
            title: '今日评论',
            count: 16826,
            icon: 'icon-caidanguanli'
          }
        ]
      },
      easyDataOption2: {
        color: 'rgb(63, 161, 255)',
        span: 4,
        discount: true,
        data: [
          {
            title: '错误日志',
            count: 12678,
            icon: 'icon-cuowu'
          },
          {
            title: '数据展示',
            count: 12678,
            icon: 'icon-shujuzhanshi2'
          },
          {
            title: '权限管理',
            count: 12678,
            icon: 'icon-jiaoseguanli'
          },
          {
            title: '菜单管理',
            count: 12678,
            icon: 'icon-caidanguanli'
          },
          {
            title: '权限测试',
            count: 12678,
            icon: 'icon-caidanguanli'
          },
          {
            title: '错误页面',
            count: 12678,
            icon: 'icon-caidanguanli'
          }
        ]
      }
    }
  },
  methods: {
    claimsGradesMenu () {
      this.$router.push({ name: 'claimsGradesMenu' })
    },
    oaAutoClaimsMenuApply () {
      console.log('----------点击非车理赔岗位权限申请按钮----------')
      let href = this.$router.resolve({ path: '/oaAuto', query: { fdid: 'A000000000000002', docCreator: '王杰', docStatus: '1', pageName: 'claimsMenuApplyTask' } })
      window.open(href.href, '_blank')
    },
    oaAutoPostReplaceApply () {
      console.log('----------点击非车理赔岗位换人申请按钮----------')
      let href = this.$router.resolve({ path: '/oaAuto', query: { fdid: 'A000000000000002', docCreator: '王杰', docStatus: '1', pageName: 'postReplaceApplyTask' } })
      window.open(href.href, '_blank')
    },
    oaAutoClaimsUnderwrit () {
      // this.$router.push({path: '/oaAuto', query: {fdid: 'A000000000000002', docCreator: '王杰', pageName: 'oaAutoMenuApply'}})
      let href = this.$router.resolve({ path: '/oaAuto', query: { fdid: 'A000000000000002', docCreator: '王杰', docStatus: '1', pageName: 'claimUnderwritApplyTask' } })
      window.open(href.href, '_blank')
    },
    oaAutoBranchUnderwrit () {
      // this.$router.push({path: '/oaAuto', query: {fdid: 'A000000000000002', docCreator: '王杰', pageName: 'oaAutoMenuApply'}})
      let href = this.$router.resolve({ path: '/oaAuto', query: { fdid: 'A000000000000002', docCreator: '王杰', docStatus: '1', pageName: 'branchUnderwritApplyTask' } })
      window.open(href.href, '_blank')
    },
    handle () {
      this.$router.push({ name: 'user' })
    },
    menu () {
      this.$router.push({ name: 'system' })
    },
    oaAutoLoad () {
      // fdid=17d2690351b0d59d54fb83d4e61848bc&docStatus=10&docCreator=moli-ghq
      //   this.$router.push({path: '/oaAuto', query: {fdid: '17d2690351b0d59d54fb83d4e61848bc', docCreator: 'moli-ghq',docStatus: '10', pageName: 'oaAutoLoad'}})
      // let href = this.$router.resolve({path: '/oaAuto', query: {fdid: '17fbbf6f8a68735b721405a4d6ea4037', docCreator: 'fangyaozu-phq', docStatus: '10', pageName: 'firstLoad'}})
      this.$router.push({ path: '/oaAuto', query: { fdid: '17fbbf6f8a68735b721405a4d6ea4037', docCreator: 'fangyaozu-phq', docStatus: '10', pageName: 'firstLoad' } })
      // console.log(href)
      // window.open(href.href, '')
      //   window.open('http://localhost:9528/', '_blank')
    },
    oaAutoMenuApply () {
      // this.$router.push({path: '/oaAuto', query: {fdid: 'A000000000000002', docCreator: '王杰', pageName: 'oaAutoMenuApply'}})
      let href = this.$router.resolve({ path: '/oaAuto', query: { fdid: '17fbbf6f8a68735b721405a4d6ea4037', docCreator: 'fangyaozu-phq', docStatus: '10', pageName: 'menuapplyTask' } })
      window.open(href.href, '_blank')
    },
    oaAutoMenuApply1 () {
      // this.$router.push({path: '/oaAuto', query: {fdid: 'A000000000000002', docCreator: '王杰', pageName: 'oaAutoMenuApply'}})
      let href = this.$router.resolve({ path: '/oaAuto', query: { fdid: 'A000000000000002', docCreator: '王杰', docStatus: '0', pageName: 'menuapplyTask' } })
      window.open(href.href, '_blank')
    },
    oaAutoEhrBand () {
      // this.$router.push({path: '/oaAuto', query: {fdid: 'A000000000000003', docCreator: '王杰', pageName: 'oaAutoEhrBand'}})
      let href = this.$router.resolve({ path: '/oaAuto', query: { fdid: 'A000000000000003', docCreator: '王杰', docStatus: '1', pageName: 'ehrBandTask' } })
      window.open(href.href, '_blank')
    },
    oaAutoJFCDSWITCHTask () {
      // this.$router.push({path: '/oaAuto', query: {fdid: 'A000000000000002', docCreator: '王杰', pageName: 'oaAutoMenuApply'}})
      let href = this.$router.resolve({ path: '/oaAuto', query: { fdid: 'A000000000000002', docCreator: '王杰', docStatus: '1', pageName: 'JFCDSWITCHTask' } })
      window.open(href.href, '_blank')
    },
    oaAutoJFCDSWITCHTask1 () {
      // this.$router.push({path: '/oaAuto', query: {fdid: 'A000000000000002', docCreator: '王杰', pageName: 'oaAutoMenuApply'}})
      let href = this.$router.resolve({ path: '/oaAuto', query: { fdid: '17fbbf6f8a68735b721405a4d6ea4037', docCreator: 'fangyaozu-phq', docStatus: '0', pageName: 'JFCDSWITCHTask' } })
      window.open(href.href, '_blank')
    },
    oaAutoplatformpostReplaceApplyTask () {
      // this.$router.push({path: '/oaAuto', query: {fdid: 'A000000000000002', docCreator: '王杰', pageName: 'oaAutoMenuApply'}})
      let href = this.$router.resolve({ path: '/oaAuto', query: { fdid: 'A000000000000002', docCreator: '王杰', docStatus: '1', pageName: 'platformpostReplaceApplyTask' } })
      window.open(href.href, '_blank')
    },
    oaAutoplatformpostReplaceApplyTask1 () {
      // this.$router.push({path: '/oaAuto', query: {fdid: 'A000000000000002', docCreator: '王杰', pageName: 'oaAutoMenuApply'}})
      let href = this.$router.resolve({ path: '/oaAuto', query: { fdid: '17fbbf6f8a68735b721405a4d6ea4037', docCreator: 'fangyaozu-phq', docStatus: '0', pageName: 'platformpostReplaceApplyTask' } })
      window.open(href.href, '_blank')
    },
    oaAutoplatformupNodePermissionsTask () {
      // this.$router.push({path: '/oaAuto', query: {fdid: 'A000000000000002', docCreator: '王杰', pageName: 'oaAutoMenuApply'}})
      let href = this.$router.resolve({ path: '/oaAuto', query: { fdid: 'A000000000000002', docCreator: '王杰', docStatus: '1', pageName: 'platformupNodePermissionsTask' } })
      window.open(href.href, '_blank')
    },
    oaAutoplatformupNodePermissionsTask1 () {
      // this.$router.push({path: '/oaAuto', query: {fdid: 'A000000000000002', docCreator: '王杰', pageName: 'oaAutoMenuApply'}})
      let href = this.$router.resolve({ path: '/oaAuto', query: { fdid: '17fbbf6f8a68735b721405a4d6ea4037', docCreator: 'fangyaozu-phq', docStatus: '0', pageName: 'platformupNodePermissionsTask' } })
      window.open(href.href, '_blank')
    },
    oaAutoupNodePermissionsReplaceMessageReplaceApplyTask () {
      // this.$router.push({path: '/oaAuto', query: {fdid: 'A000000000000002', docCreator: '王杰', pageName: 'oaAutoMenuApply'}})
      let href = this.$router.resolve({ path: '/oaAuto', query: { fdid: 'A000000000000002', docCreator: '王杰', docStatus: '1', pageName: 'upNodePermissionsReplaceMessageReplaceApplyTask' } })
      window.open(href.href, '_blank')
    },
    oaAutoupNodePermissionsReplaceMessageReplaceApplyTask1 () {
      // this.$router.push({path: '/oaAuto', query: {fdid: 'A000000000000002', docCreator: '王杰', pageName: 'oaAutoMenuApply'}})
      let href = this.$router.resolve({ path: '/oaAuto', query: { fdid: '17fbbf6f8a68735b721405a4d6ea4037', docCreator: 'fangyaozu-phq', docStatus: '0', pageName: 'upNodePermissionsReplaceMessageReplaceApplyTask' } })
      window.open(href.href, '_blank')
    },
    oaAutoJFCDSWITCHTask2 () {
      // this.$router.push({path: '/oaAuto', query: {fdid: 'A000000000000002', docCreator: '王杰', pageName: 'oaAutoMenuApply'}})
      let href = this.$router.resolve({ path: '/oaAuto', query: { fdid: 'A000000000000002', docCreator: '王杰', docStatus: '1', pageName: 'JFCDSWITCHTask1' } })
      window.open(href.href, '_blank')
    },
    oaAutoJFCDSWITCHTask21 () {
      // this.$router.push({path: '/oaAuto', query: {fdid: 'A000000000000002', docCreator: '王杰', pageName: 'oaAutoMenuApply'}})
      let href = this.$router.resolve({ path: '/oaAuto', query: { fdid: '17fbbf6f8a68735b721405a4d6ea4037', docCreator: 'fangyaozu-phq', docStatus: '0', pageName: 'JFCDSWITCHTask1' } })
      window.open(href.href, '_blank')
    }
  },
  created () {
    console.log('------dashboard文件夹下的index.vue的dwindow------', window)
    console.log('------dashboard文件夹下的index.vue的top', top)
  },
  watch: {},
  mounted () { },
  computed: {}
}
</script>

<style scoped>
.item {
  margin-bottom: 16px;
}
</style>
<style lang ="scss">
@import '@/assets/style/data-card.scss';
@import '@/assets/style/data-display.scss';
@import '@/assets/style/data-icons.scss';
@import '@/assets/style/data-tabs.scss';
</style>
