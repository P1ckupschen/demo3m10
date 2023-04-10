<template>
    <div>
        C
        <verifycode ></verifycode>
        <uploadpic></uploadpic>
    </div>
</template>

<script>
import verifycode from '@/utils/verifycode/verifycode.vue';
import uploadpic from '../components/upload.vue'
export default {
    data() {
        return {
            verifyinfo: ''
        }
    },
    components:{
        verifycode,
        uploadpic
    },
    methods: {
       
    },


}
</script>

<style scoped></style>