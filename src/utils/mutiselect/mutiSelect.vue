<template>
    <div>
        <el-tree :data="data" ref="tree" show-checkbox node-key="id" :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]" :props="defaultProps">
        </el-tree>
        <el-button @click="getcheckednodes"> 所选节点</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }],
            //label控制选项标签名
            defaultProps: {
                children: 'children',
                label: 'id'
            }
        };
    },
    methods: {
        getcheckednodes() {
            //获取勾选的节点数组
            console.log(this.$refs.tree.getCheckedNodes())
            //直接按照所选节点传给后端 赋值数据库？
            console.log(this.$refs.tree.getCheckedKeys());
        }
    }

};
</script>

<style scoped></style>