<template>
  <section class="app-main">
    <!--<transition name="fade" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"></router-view>
      </keep-alive>
    </transition>-->
    <!--<keep-alive>
      <router-view :key="key"></router-view>
    </keep-alive>-->
   <!-- <keep-alive>
      <router-view :key="key" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view :key="key" v-if="!$route.meta.keepAlive"></router-view>-->
    <keep-alive :include="catch_components">
      <router-view></router-view>
    </keep-alive>
  </section>
</template>
<style lang="scss" src="@/assets/style/app.scss"></style>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppMain',
  computed: {
    catch_components () {
      return this.$store.state.app.catch_components
    },
    cachedViews () {
      return this.$store.state.tagsView.cachedViews
    },
    key () {
      console.log('this.$route.fullPath', this.$route.fullPath)
      return this.$route.fullPath
    }
  },
  data () {
    return {
      keepAlive: false
    }
  },
  created () {

  },
  watch: {
    // 监听路由去判断是否为缓存页面
    /* $route (to, from) {
      // console.log('cachedViews',this.cachedViews)
      // console.log('$route.meta.keepAlive',this.$route.meta.keepAlive)
      console.log('to',to)
      console.log('from',from)
      if (to.path === "/system" && from.path === "/systemDetail") {
        this.keepAlive = true
      } else {
        this.keepAlive = false
      }
    } */
  }
}
</script>
