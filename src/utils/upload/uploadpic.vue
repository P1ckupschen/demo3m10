<template>
    <div>
        <!-- //修改actionurl 和 img的src -->
            <el-upload ref="uploadpic" :action="actionUrl" list-type="picture-card" :before-upload="beforeUpload"
            :on-success="uploadSuccess" :file-list="filelist" :show-file-list="true">
            <div slot="file" slot-scope="{file}">
                <img class="el-upload-list__item-thumbnail" :src="baseurl+file.url" alt="">
                <span class="el-upload-list__item-actions">
                    <span class="el-upload-list__item-delete" @click="handleRemove(file)">
                        <i class="el-icon-delete"></i>
                    </span>
                </span>
            </div>
            <i class="el-icon-plus"></i>
        </el-upload>
    </div>
  </template>
  
  <script>
  import service from '@/utils/request';
  export default {
    props: ['value'],
    data() {
        return {
            responsedata:'',
            baseurl:process.env.VUE_APP_BASE_API
        }
    },
    methods: {
        beforeUpload(file) {
            console.log(file);
            const isJPG =
                file.type === "image/jpg" ||
                file.type === "image/jpeg" ||
                file.type === "image/png";
            const isLt4M = file.size / 1024 / 1024 < 4;
            if (!isJPG) {
                this.$message.error("仅支持jpg，png格式的图片！");
                return false;
            }
            if (!isLt4M) {
                this.$message.error("上传图片大小不能超过 4MB!");
                return false;
            }
        },
        uploadSuccess(response, file, fileList) {
            // this.images =fileList
            //回显的时候把回显的数据也保存下来
            console.log(response);
            let newList = this.filelist
            newList.push({ url: response })
            
            this.computedImagesUrl = newList.map(item => {
                return {
                    url: item.url
                }
            })
        },
        handleRemove(file) {
            console.log(file)
  
            service({
                url:'index.php/common/deletepic',
                method:'delete',
                params:{
                    path:file.url
                }
            })
  
            console.log('delete uid', file.uid, 'file:', file, 'filelist', this.filelist)
  
            let newList = this.filelist.filter(item => item.uid !== file.uid)
  
            this.computedImagesUrl = newList.map(item => {
                return {
                    url: item.url
                }
            })
        }
    },
    computed: {
        computedImagesUrl: {
            get() {
                console.log('get computedImagesUrl to :')
                // this.images = this.value
                if (!this.value) {
                    return []
                }
                // return this.imagesurl
                return this.value
            },
            set(v) {
                console.log('set computedImagesUrl to :', v)
                this.$emit('input', v)
            }
        },
        filelist () {
                return this.computedImagesUrl.map(v => {
                    return {
                        status: 'success',
                        uid: null,
                        url: v.url
                    }
                })
        },
        actionUrl:{
            get(){
                return process.env.VUE_APP_BASE_API +'/index.php/common/uploadpic'
         
       }
        }
    },
    //发生在computed的后面
    mounted() {
        console.log('uploadpic mounted');
    }
  }
  
  
  </script>
  
  <style  scoped>
  ::v-deep .el-upload-list__item {
  transition: none !important;
  }
  </style>