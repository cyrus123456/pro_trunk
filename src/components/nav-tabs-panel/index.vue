<template>
  <div class="nav-container">
    <div class="navTabs-title-container">
      <slot name="navTabs-title"></slot>
    </div>
    <div class="navTabs-container" :style="{ marginLeft: -itemWidth*tabList.length/2+ 'px' }">
      <div class="navTabs-item"
           :class="{active:index == currentIndex}"
           :style="{ width: itemWidth+ 'px' }"
           v-for="(item, index) in tabList"
           @click="tabToggle(index,item)">
        <span class="navTabs-item-text">{{item.label}}</span>
        <span class="navTabs-item-tip" v-if="item.countFlag">{{item.countNumber}}</span>
      </div>
    </div>
    <div class="navTabs-description-container">
      <slot name="navTabs-description"></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: 'navTabsPanel',
  props: [
    'tabList',
    'tabItemWidth'
  ],
  data () {
    return {
      currentIndex: 0,
      itemWidth: 150
    }
  },
  methods: {
    tabToggle (index, item) {
      this.currentIndex = index
      this.$emit('update:activeName', item.name)
      this.$emit('tabClick', item)
    }
  },
  created () {
    console.log(this.tabItemWidth)
    if (this.tabItemWidth) {
      this.itemWidth = this.tabItemWidth
    }
    // var wrappers = document.querySelectorAll('.navTabs-item')[0];
    // console.log(wrappers)
    // console.log(wrappers.height)
  },
  mounted () {
    // var wrappers = document.querySelectorAll('.navTabs-item')[0];
    // console.log(wrappers)
    // console.log(wrappers.height)
  }
}
</script>
<style lang="scss" scoped>
  .nav-container{
    position: relative;
    height: 32px;
    line-height: 32px;
    margin-bottom: 20px;
    border-bottom: none;

  }
  .navTabs-title-container{
    float: left;
    padding-left: 35px;
  }
  .navTabs-description-container{
    float: right;
    padding-right: 20px;
    font-size: 14px;
    color: #E9892D;
  }
  .nav-container:before, .nav-container:after{
    display:block;clear:both;content:"";visibility:hidden;
  }
  .navTabs-container{
    float:left;
    position: absolute;
    left: 50%;
    /*border-bottom: 2px solid #e4e7ed;*/
  }
  .navTabs-container:after{
    //width: 80px;
    display:block;clear:both;content:"";visibility:hidden;
    //margin-left: -104px;
  }
  .navTabs-item{
    /*-webkit-transition: all 0.4s ease-in-out 0s;*/
    /*-moz-transition: all 0.4s ease-in-out 0s;*/
    /*-o-transition: all 0.4s ease-in-out 0s;*/
    /*-ms-transition: all 0.4s ease-in-out 0s;*/
    transition-property: border-bottom-color;
    transition-timing-function:ease-in-out;
    transition-duration: 0.9s;
    box-sizing: border-box;
    position: relative;
    float: left;
    height: 32px;
    line-height: 32px;
    padding: 0;
    margin-right: 0px;
    text-align: center;
    border: 1px solid #E9892D;
    color: #E9892D;
    font-size: 13px;
    &:last-child{
      margin-right: 0;
    }
    &:hover {
      color: #E9892D;
      cursor: pointer;
    }
    & .navTabs-item-tip{
      position: absolute;
      width: 20px;
      height: 20px;
      line-height: 20px;
      display: block;
      border-radius: 100%;
      font-size: 13px;
      right: 10px;
      top: -10px;
      color: #fff;
      background-color: #E9892D;
    }
  }
  .navTabs-item.active{
   /*border-bottom: 4px solid #E9892D;*/
    /*color: #E9892D;*/
    background-color: #E9892D;
    color: #fff;
  }
</style>
