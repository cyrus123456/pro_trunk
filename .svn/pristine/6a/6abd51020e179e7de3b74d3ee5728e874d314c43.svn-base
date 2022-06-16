export default {
    props: {
        cb: {
            type: Function,
            default () {
                return function () {
                    return false
                }
            }
        },
        value: {
            default () {
                return {}
            }
        },
        disabled: {
            type: Boolean,
            default () {
                return false
            }
        }
    },
    computed: {
        // ...mapState(['mapList'])
    },
    beforeMount () {
    },
    watch: {
      value () {
          this.val = this.value
      }
    },
    data () {
        return {
            val: this.value,
            options: []
        }
    },
    methods: {z
        change (val) {
            this.value.value = val.value
            this.value.label = val.label
            this.cb()
        }
    }
}
