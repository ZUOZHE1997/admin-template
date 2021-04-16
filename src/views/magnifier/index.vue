<template>
  <magnifier :box-size="500" :min-img-url="url" :max-img-url="url" />
</template>

<script>
import magnifier from './magnifier'
export default {
  name: 'Name',
  components: { magnifier },
  data() {
    return {
      url:
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', // 图片地址
    }
  },
}
</script>

<style scoped lang="scss"></style>
