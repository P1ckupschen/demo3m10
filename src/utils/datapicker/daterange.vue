<template>
    <!-- //传入一个transftime 并且在后端需要跟数据库list转varchar的属性上使用typehandler的自定义handler处理 -->
    <!-- pick?????/ -->
    <div class="block">
        <el-date-picker v-model="value2" type="datetimerange" :picker-options="pickerOptions" range-separator="至"
            start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd HH:mm:ss" align="right">
        </el-date-picker>
    </div>
</template>

<script>
export default {
    props: ['outervalue', 'transftime'],
    data() {
        return {
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value2: ''
        }
    },
    watch: {
        value2(newvalue, oldvalue) {
            this.trandfrangedatetime = newvalue
            console.log(newvalue);
        },
        transftime(newvalue,oldvalue){
            this.value2 = newvalue
            console.log(newvalue);
        }
    },
    computed: {
        trandfrangedatetime: {
            get() {
                return this.outervalue
            },
            set() {
                this.$emit('input', this.value2)
            }
        }

    },
    mounted(){
        this.value2=this.transftime
    }
};
</script>

<style scoped></style>