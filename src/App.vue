<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld  :receivenum.sync="receivenum"></HelloWorld> -->
    <!-- 插槽的作用域实在父级渲染的 -->
    <HelloWorld v-model="receivenum" :userdata="user">
      {{ user.name }}
    </HelloWorld>
    {{ receivenum }}
    <el-input v-model="receivenum"></el-input>
    <button @click="childrenref">childrenref</button>
    <div>
      <el-row>
        <el-col>
          <!-- <KeepAlive>
            <componentA ref="compA" v-if="testflag"></componentA>
            <componentB v-else></componentB>
          </KeepAlive> -->
        </el-col>
      </el-row>
    </div>

    <el-button @click="redirectA">跳转A组件</el-button>
    <el-button @click="redirectB">跳转B组件</el-button>
    <el-button @click="redirectC">跳转C组件</el-button>
    <el-button @click="redirectD">跳转D组件</el-button>
    <el-button @click="test">测试</el-button>
    <div style="background-color: aqua;">
      <router-view />
    </div>
    <!-- // -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import componentA from './components/componentA.vue'
import componentB from './components/componentB.vue'
import componentD from './components/componentD.vue'
import { asyncRoutes } from './router'
import { recursionRouter } from './utils/recursionRouter/recurisonRouter'
export default {
  name: 'App',
  watch: {
    receivenum(newvalue, oldvalue) {
      console.log(newvalue);
      console.log(oldvalue);
    }
  },
  data() {
    return {
      receive: { name: 'jack', age: '10' },
      receivenum: 3,
      url: '/sds/sdds',
      user: { name: 'j', age: '10' },
      testflag: false
    }
  },
  components: {
    HelloWorld,
    componentA,
    componentB,
    componentD,
  },
  methods: {
    test() {
      const userrouter = [
        {
          path: '/system/user-auth',
          hidden: true,
          permissions: ['system:user:edit'],
          name: '系统管理' ,
          children: [
            {
              path: 'role/:userId(\\d+)',
              name: '分配角色' ,
            }
          ]
        },
        {
          path: '/system/role-auth',
          hidden: true,
          permissions: ['system:role:edit'],
          name: '用户管理' ,
          children: [
            {
              path: 'index/:dictId(\\d+)',
              name: '字典数据' ,
              children: [
                {
                  path: 'index/:jobId(\\d+)',
                  name: '调度日志' ,
                }
              ]
            },
          ]
        },
      ]
      const result = recursionRouter(userrouter, asyncRoutes);
      console.log(result);
    },
    receivemethod(data) {
      this.receive = data
    },
    childrenref() {
      // console.log(this.$refs.compA.name);
      // of 取得key值
      for (const field of Object.keys(this.receive)) {
        console.log(field);
      }
    },
    redirectA() {
      this.$router.push('/test/test1')
    },
    redirectB() {
      this.$router.push('/test/test2')
    },
    redirectC(){
      this.$router.push('/test/test3')
    },
    redirectD(){
      this.$router.push('/test/test4')
    }
  }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
