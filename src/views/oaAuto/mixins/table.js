import {util} from '@/utils/index.js'
require('script-loader!file-saver')
var tableMixin = {
  data () {
    return {
      filters: {
        name: ''
      }
    }
  },
  methods: {
    validateForm () {
      if ((this.queryform.amountStart && isNaN(this.queryform.amountStart)) ||
            (this.queryform.amountEnd && isNaN(this.queryform.amountEnd))) {
        this.$message({
          message: '保险金额必须为数字！',
          type: 'warning',
          duration: 2 * 1000
        })
        return false
      }
      if (this.queryform.amountStart && this.queryform.amountEnd && this.lodash.toNumber(this.queryform.amountStart) >= this.lodash.toNumber(this.queryform.amountEnd)) {
        this.$message({
          message: '保险金额起始值必须小于终止值！',
          type: 'warning',
          duration: 2 * 1000
        })
        return false
      }
      if ((this.queryform.premiumStart && isNaN(this.queryform.premiumStart)) ||
            (this.queryform.premiumEnd && isNaN(this.queryform.premiumEnd))) {
        this.$message({
          message: '保费收入必须为数字！',
          type: 'warning',
          duration: 2 * 1000
        })
        return false
      }
      if (this.queryform.premiumStart && this.queryform.premiumEnd && this.lodash.toNumber(this.queryform.premiumStart) >= this.lodash.toNumber(this.queryform.premiumEnd)) {
        this.$message({
          message: '保费收入起始值必须小于终止值！',
          type: 'warning',
          duration: 2 * 1000
        })
        return false
      }
      if (!this.queryform.riskcode && !this.queryform.risktype) {
        this.$message({
          message: '请选择险种！',
          type: 'warning',
          duration: 1500
        })
        return false
      }
      return true
    },
    sortdesc ({ column, prop, order }) {
      console.log(column, prop, order)
      // 如果是保额
      if (column.property === 'msumamount') {
        if (column.order === 'ascending') {
          this.queryform.order = '2'
          this.getLists()
        } else if (column.order === 'descending') {
          this.queryform.order = '3'
          this.getLists()
        } else {
          this.queryform.order = '1'
        }
      }
      // 如果是保费
      if (column.property === 'msumpremium') {
        if (column.order === 'ascending') {
          this.queryform.order = '4'
          this.getLists()
        } else if (column.order === 'descending') {
          this.queryform.order = '5'
          this.getLists()
        } else {
          this.queryform.order = '1'
        }
      }
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pagination.rowsPerPage = val
      this.pagination.pageNo = 1
      this.getLists()
    },
    handleCurrentChange (val) {
      this.pagination.pageNo = val
      this.getLists()
    },
    // 全选单选多选
    selsChange (sels) {
      console.log(sels)
      this.sels = sels
    }
  }
}
export default tableMixin
