<template>
  <el-dialog :title="dialogData.title"  :visible.sync="dialogData.visible" :close-on-click-modal="false" class="import-dialog" width="800px">
    <div class="dialog-content">
      <div class="upload-complex-container">
        <div class="upload-complex-item upload-complex-select">
          <el-select v-model="select" placeholder="请选择导入格式" class="upload-complex-select-inner">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
        </div>
        <div class="upload-complex-item upload-complex-content">
          <div class="upload-complex-content-inner"></div>
        </div>
        <div class="upload-complex-item upload-complex-operate">
          <el-upload
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"

            :auto-upload="false">
            <el-button slot="trigger" size="medium" class="upload-complex-button" type="primary">浏览</el-button>
            <el-button style="margin-left: 10px;" size="medium" class="upload-complex-button upload-complex-importButton"  type="success" @click="submitUpload">导入</el-button>
            <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
          </el-upload>
        </div>
      </div>
    </div>
    <!--<div slot="footer" class="dialog-footer">
      <div class="dialog-footer-finish">
        <el-button type="primary" @click="finish">完成</el-button>
      </div>
    </div>-->
  </el-dialog>
</template>

<script>
export default {
  props: ['dialogData'],
  created () {
  },
  mounted () {
  },
  data: function () {
    return {
      select: ''
    }
  },
  methods: {
    submitUpload () {
      this.$emit('closeDialog', {})
    },
    handleTouchmove (e) {
      e.preventDefault()
    },
    closePopup () {
      this.$emit('closeDialog')
    },
    haldleConfirm () {
      this.$emit('commitDialog')
    },
    finish () {
      console.log(this.$parent.$refs.detailDialog)
      this.$emit('closeDialog', true, {type: 'upload', returnData: ''})
    }
  },
  computed: {},
  watch: {
  },
  components: {}
}
</script>
<style lang="scss" scoped>
  .dialog-footer{
    .dialog-footer-finish .el-button{
      &,&:hover,&:active,&:focus{
        color: #fff;
        background-color: #E9892D;
        border-color: #E9892D;
      }
    }
  }
  .upload-complex>*{
    display: inline-block;
  }
  .upload-complex-container{
    position: relative;
    display: block;
    .upload-complex-item{
      /*display: inline-block;*/
      float: left;
    }
    &:before, &:after{
      display:block;clear:both;content:"";visibility:hidden;
    }
    .upload-complex-select{
      width: 150px;
    }
    .upload-complex-content{
      width: 450px;
      border: 1px solid #dcdfe6;
      height: 40px;
      line-height: 40px;
    }
    .upload-complex-operate{
      /*width: 300px;*/
      .upload-complex-button{
        border: 1px solid #E9892D;
        height: 41px;
        border-radius: 0;
        padding: 0 20px;
        background-color: #fff;
        color: #E9892D;
      }
      /*width: 300px;*/
      .upload-complex-importButton{

        background-color: #E9892D;
        color: #FFF;
        margin-left: 14px
      }
    }
    .el-upload-list{
      position: absolute;
      left: 0;
    }
  }
  .upload-complex-select-inner .el-input__inner {
    /*border-radius: 0;*/
    /*background-color: #F6F6F7;*/
    color: red!important;
  }

</style>
