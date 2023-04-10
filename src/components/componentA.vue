<template>
    <div>
        <h1>A</h1> 
        <mutiselect></mutiselect>
        <el-button @click="getter">
            getter
        </el-button>
        
        
    </div>
</template>

<script>
import mutiselect from '@/utils/mutiselect/mutiSelect.vue';
import { mapGetters } from 'vuex';

export default {
        data(){
            return{
                name:'componentA'
            }
        },
        computed:{
            ...mapGetters(['age']), 
        },
        components:{
            mutiselect
        },
        methods:{
            getter(){
                console.log(this.$store.getters.age); 
                console.log(this.age);
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>