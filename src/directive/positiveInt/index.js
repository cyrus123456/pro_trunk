import Vue from 'vue'
// 只对input生效
const trigger = (el, type) => {
  const e = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}
export default function (el) {
  const input = el.getElementsByTagName('input')[0]
  input.onkeyup = function (e) {
    if (input.value.length === 1) {
      input.value = input.value.replace(/[^0-9]/g, '')
    } else if (input.value.length === 2) {
      input.value = input.value.replace(/[^\d]/g, '')
    } else {
      input.value = input.value.slice(0, 2)
    }
    trigger(input, 'input')
  }
  input.onblur = function (e) {
    if (input.value.length === 1) {
      input.value = input.value.replace(/[^0-9]/g, '')
    } else if (input.value.length === 2) {
      input.value = input.value.replace(/[^\d]/g, '')
    } else {
      input.value = input.value.slice(0, 2)
    }
    trigger(input, 'input')
  }

  /* let  flag = new RegExp("^[0-9]([0-9])*$").test(e.target.value);

        console.log(flag);
        let length = (e.target.value && e.target.value.length > 0 )? e.target.value.length : 0

        if (!flag || length > 2) {

                //   this.$message({

                //             showClose: true,

                //             message: "请输入正整数",

                //             type: "warning"

                //   });
                e.target.value = ''
                row.otherno = ''

        } */
}
