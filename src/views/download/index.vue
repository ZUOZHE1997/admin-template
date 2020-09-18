<template>
  <div class="app-container">
    <el-card shadow="hover">
      <el-button plain @click="downloadImg">base64图片下载</el-button>
      <el-collapse v-model="activeNames" style="margin-top: 20px">
        <el-collapse-item title="示例图片的base64编码" name="1">
          <div style="word-wrap: break-word; height: 200px; overflow: auto">
            {{ img }}
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
import { download } from '@/views/download/base64imgDownload'
import { url } from '@/views/download/img'

export default {
  name: 'Index',
  data() {
    return {
      activeNames: '',
      img: url
    }
  },
  methods: {
    downloadImg() {
      // 调用是传入两个参数,一个是 下载的图片的名称,带着文件格式,一个是base64格式的编码
      download('示例.png', this.img)
    }
  }
}
</script>

<style scoped></style>
