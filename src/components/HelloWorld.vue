<template>
  <div class="hello" style="background-color:cadetblue;">
    <el-button @click="transfermethod">
      点击触发传递事件
    </el-button>
    <el-input v-model="num"></el-input>
    <slot >{{ userdata }}</slot>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props:['value','userdata'],
  data(){
    return{
      data:{
        name:'sasa',
        age:'22'
      },
      num:5
    }
  },
  watch:{
    value(newvalue){
      this.num=newvalue
    }
  },
  computed:{
    computeddata:{
      get(){
        return this.value;
      },
      set(data){
        this.$emit('input', data)
        console.log(data);
      }
    }
  },
  methods:{
    transfermethod(){
      console.log(this.value);
      this.computeddata = this.num
      console.log(this.computeddata);
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
