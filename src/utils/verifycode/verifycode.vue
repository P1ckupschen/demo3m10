<template>
    <div>
        <el-row style="margin-left: 30%;">
            <el-col :span="4">
                验证码：
            </el-col>
            <el-col :span="8">
                <input type="text" name="verifyCode" v-model="verifyinfo" />
            </el-col>
            <el-col :span="8">
                <img id="verifyCodeImg" alt="点击显示" src="" title="点击更换" @click="change1()" style="width: 70px;height: 40px;">
            </el-col>
        </el-row>
        <el-button type="warning" @click="commit()">提交</el-button>
    </div>
</template>

<script>
import services from '../request';
export default {
    data() {
        return {
            verifyinfo: ''
        }
    },
    components:{
        services
    },
    methods: {
        change1() {
            // console.log('更换');
            var verifyCode = document.getElementById("verifyCodeImg");
            // console.log(verifyCode);
            verifyCode.src = "http://localhost:8888/test/getVerifyCodeImg?time=" + Math.random(1000);
        },
        async commit() {
            const response = await services({
                url: '/test/compareVerifyCode',
                method: 'get',
                params: {
                    code: this.verifyinfo
                }
            })
            console.log(response);
        }
    }

}
</script>

<style lang="scss" scoped></style>