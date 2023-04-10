<template>
    <div>
        <el-button type="submit" @click="commitContent">提交文章内容</el-button>
        <el-tiptap v-model="content" :extensions="extensions">
        </el-tiptap>
        {{ content }}
        <div v-html="content"></div>
    </div>

</template>
<script>
import services from '@/utils/request';
import {
    // necessary extensions
    Doc,
    Text,
    Paragraph,
    Heading,
    Bold,
    Underline,
    Italic,
    Strike,
    ListItem,
    BulletList,
    OrderedList,
} from 'element-tiptap';

export default {
    data() {
        // editor extensions
        // they will be added to menubar and bubble menu by the order you declare.
        return {
            extensions: [
                new Doc(),
                new Text(),
                new Paragraph(),
                new Heading({ level: 5 }),
                new Bold({ bubble: true }), // render command-button in bubble menu.
                new Underline({ bubble: true, menubar: false }), // render command-button in bubble menu but not in menubar.
                new Italic(),
                new Strike(),
                new ListItem(),
                new BulletList(),
                new OrderedList(),
            ],
            // editor's content
            content: 
            `<h1>Heading</h1>
            <p>This Editor is awesome!</p>`,
        };
    },
    methods:{
        commitContent(){
            services({
                url:'/commitcontent',
                method:'put',
                data:this.content
            })
        }
    },
    // computed:{
    //     contentappear:{
    //         get(){
    //             return this.content.replace('`','')
    //         },
    //     }
    // }
}
</script>

<style lang="scss" scoped></style>