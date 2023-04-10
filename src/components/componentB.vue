<template>
    <div>
        B
        <el-form :model="formdata">
            <el-form-item label="name">
                <el-input v-model="formdata.name"></el-input>
            </el-form-item>
            <el-form-item label="time">
                <datapicker v-model="formdata.time" :transftime="formdata.time"></datapicker>                
            </el-form-item>
            <el-form-item label="rangetime">
                <daterange v-model="formdata.rangetime" :transftime="formdata.rangetime" @pick="transfpick($event)"></daterange>                
            </el-form-item>
            <el-form-item>
                <el-button @click="commit(formdata)">提 交</el-button>
            </el-form-item>
        </el-form>
        <el-button @click="sendmsg">sendmsg</el-button>
        <el-button @click="receiverangetime">receiverangetime</el-button>
    </div>
</template>

<script>
import services from '@/utils/request';
import datapicker from '../utils/datapicker/datapicker.vue';
import daterange from '../utils/datapicker/daterange.vue'
export default {
    components: {
        datapicker,
        daterange
    },
    data(){
        return{
            formdata:{
                name:'jack',
                time:'',
                rangetime:[]
            }
        }
    },
    watch:{
        'formdata.rangetime'(newvalue,oldvalue){
            this.formdata.rangetime = newvalue
            console.log(newvalue);
        }
    },
    methods:{
        async sendmsg(){
            const response =await services({
                url:'/test',
                method:'get'
            })
            console.log(response.data.time); 
            this.formdata.time = response.data.time

        },
        commit(formdata){
            services({
                url:'/test/formdata',
                method:'post',
                data:formdata
            })
        },
        async receiverangetime(){
            const response = await services({
                url:'/test/formdata/rangetime',
                method:'get'
            })
            console.log(response.data);
            this.formdata.rangetime = response.data.rangetime;
            // this.$set(this.formdata,this.formdata.rangetime,response.data.rangetime);
        },
        transfpick(data){
            console.log(data);

        }
    }
}
</script>

<style lang="scss" scoped></style>