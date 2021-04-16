<template>
  <div class="app-container">
    <el-button-group>
      <el-button plain>放大镜</el-button>
      <el-button plain>更多</el-button>
    </el-button-group>
    <div class="content">
      <magnifier :preview-img="imgUrl" />
    </div>
  </div>
</template>

<script>
// import x from ''
import magnifier from '@/views/magnifier/index'
export default {
  name: 'Name',
  components: { magnifier },
  props: {},
  data() {
    return {
      imgUrl:
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
    }
  },
  computed: {},
  watch: {},
  beforeMount() {},
  mounted() {},
  activated() {},
  methods: {},
}
</script>

<style scoped lang="scss">
.content {
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  width: 100%;
  min-height: 500px;
  border: 1px solid #dcdfe6;
}
</style>
