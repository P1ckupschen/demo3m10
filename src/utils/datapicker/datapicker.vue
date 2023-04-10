<template >
  <div>
    <!-- //外部传入表单需要绑定的值和 单向传入的:transftime即可 -->
    <div class="block">
      <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"
      @input="changeDate">
      </el-date-picker>
      {{ value1 }}
    </div>
  </div>
</template>
<script>
export default {
  props: ['outervalue', 'transftime'],
  data() {
    return {
      value1: '',
    };
  },
  watch: {
    value1(newvalue, oldvalue) {
      this.outerdata = newvalue
    },
    transftime(newvalue,oldvalue){
      this.value1=newvalue
    }
  },
  computed: {
    outerdata: {
      get() {
        return this.outervalue
      },
      set() {
        this.$emit('input', this.value1);
      }
    }
  },
  methods:{
    changeDate(){
      this.$forceUpdate()
    }
  },
  mounted() {
    this.value1 = this.transftime
  }
}
</script>
<style lang="">
    
</style>