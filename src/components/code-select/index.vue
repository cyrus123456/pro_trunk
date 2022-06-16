<template>
  <el-select v-model="val" filterable placeholder="请选择" @change="change">
    <!--<el-select v-model="queryform.riskType" filterable placeholder="请选择" @change="changeRiskType">-->
    <el-option
      v-for="(item,index) in codeList"
      :key="index"
      :label="item.value + '-' + item.label"
      :value="item">
    </el-option>
  </el-select>
</template>
<script>
export default {
  props: ['codeList', 'codeCode', 'codeName'],
  computed: {
    // ...mapState(['mapList'])
  },
  beforeMount () {
  },
  watch: {
    // codeCode () {
    //   this.val = this.value
    // }
  },
  data () {
    return {
      val: {
        value: this.codeCode,
        label: this.codeName
      },
      options: []
    }
  },
  /* watch: {
    codeCode () {
      this.val.value = this.codeCode
      this.val.label = this.codeName
    }
  }, */
  methods: {
    cb () {
      return false
    },
    change (val) {
      this.$emit('update:codeCode', val.value)
      this.$emit('update:codeName', val.label)
      // this.codeCode = val.value
      // this.codeName = val.label
      // this.cb()
      this.$emit('codeChange', val)
    }
  }
}
</script>
