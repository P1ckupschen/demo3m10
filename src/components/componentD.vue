<template>
    <div>
        D
        <div id="computed_props">
            千米 : <input type="text" v-model="kilometers">
            米 : <input type="text" v-model="meters">
        </div>
        <p id="info"></p>
        <!-- <tiptap></tiptap> -->
        <tinymce v-model="content"></tinymce>
    </div>
</template>

<script>
// import tiptap from '../utils/Rich Text Format/tiptap.vue'
import tinymce from '@/utils/Rich Text Format/tinymce.vue'
export default {
    data() {
        return {
            kilometers: 0,
            meters: 0,
            content:`<h1>Heading</h1>
            <p>This Editor is awesome!</p>`
        }
    },
    components:{
        // tiptap,
        tinymce
    },
    created(){
        // this.$watch('kilometers', function (newValue, oldValue) {
        // console.log('实例方法$watch')
        // // 这个回调将在 vm.kilometers 改变后调用
        // document.getElementById("info").innerHTML = "修改前值为: " + oldValue + "，修改后值为: " + newValue;
        // })
    },
    watch: {
        kilometers: function (newValue, oldValue) {
            console.log('kilometers  newValue:' + newValue + ', oldValue:' + oldValue)
            // this.kilometers = newValue;
            this.meters = this.kilometers * 1000
        },
        meters: function (newValue, oldValue) {
            console.log('meters newValue:' + newValue + ', oldValue:' + oldValue)
            this.kilometers = newValue / 1000;
            // this.meters = newValue;
            
        }
    }

}

</script>

<style lang="scss" scoped></style>