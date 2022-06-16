<template>
  <div class="nav-container">
    <div class="navTabs-title-container">
      <slot name="navTabs-title"></slot>
    </div>
   <!-- <div class="navTabs-container" :style="{ marginLeft: -itemWidth*tabList.length/2+ 'px' }">-->
    <div class="navTabs-container">
      <div class="navTabs-item"
           :class="{active:index == currentIndex}"
           :style="{ width: itemWidth+ 'px' }"
           v-for="(item, index) in tabList"
           @click="tabToggle(index,item)">
        <span class="navTabs-item-text">{{item.label}}</span>
      </div>
    </div>
    <div class="navTabs-description-container">
      <slot name="navTabs-description"></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: 'navTabs',
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
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
    border-bottom: 2px solid #e4e7ed;

  }
  .navTabs-title-container{
    /*float: left;*/
    position: absolute;
    left: 0;
    top: 0;
    padding-left: 35px;
  }
  .navTabs-description-container{
   // float: right;
    position: absolute;
    right: 0;
    top: 0;
    padding-right: 20px;
    font-size: 14px;
    color: #E9892D;
  }
  .nav-container:before, .nav-container:after{
    display:block;clear:both;content:"";visibility:hidden;
  }
  .navTabs-container{
    /*float:left;*/
    position: relative;
    text-align: center;
    /*left: 50%;*/
    /*display: inline-block;*/
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
    /*float: left;*/
    height: 50px;
    display: inline-block;
    line-height: 50px;
    padding: 0;
    margin-right: 20px;
    text-align: center;
    &:last-child{
      margin-right: 0;
    }
    &:hover {
      color: #E9892D;
      cursor: pointer;
    }
  }
  .navTabs-item.active{
   border-bottom: 4px solid #E9892D;
    color: #E9892D;
  }
</style>
