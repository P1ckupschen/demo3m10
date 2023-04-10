<template>
  <div>     
    <!-- ///卡顿？？  关闭动画过渡-->
    <el-upload action="/dev-api/test/uploadpic" list-type="picture-card" :on-success="uploadsuccess"
      :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :file-list="images">
      <i class="el-icon-plus"></i>
    </el-upload>
    

  </div>
</template>

<script>

export default {
  data() {
    return {
      images:[],
      dialogImageUrl: '',
    };
  },
  methods: {
    // handleRemove(file, fileList) {
    //   //发送删除图片的请求
    //   services({
    //     url:'/dev-api/test/deletepic',
    //     method:'delele',
    //     // params:
    //   })
    //   console.log(file, fileList);
    // },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
    },
    uploadsuccess(res,file,fileList){
      console.log(file);
      console.log(fileList);
      console.log(this.images);
    }
  }
}
</script>

<style lang="scss" scoped></style>