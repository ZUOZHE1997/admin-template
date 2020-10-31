<template>
  <div id="demo" ref="demo">
    <div id="small-box" ref="small">
      <div
        id="mark"
        ref="mark"
        @mouseover="markMouseOver"
        @mouseout="markMouseOut"
        @mousemove="markMouseMove"
      />
      <div id="float-box" ref="float" />
      <img :src="url" alt="" style="width: 300px; height: 200px">
    </div>
    <div id="big-box" ref="big">
      <img id="big-img" ref="bigImg" :src="url" alt="">
    </div>
  </div>
</template>

<script>
// import x from ''
export default {
  name: 'Name',
  components: {},
  props: {},
  data() {
    return {
      url:
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', // 图片地址
      bigBox: '', // 大盒子
      smallBox: '', // 小盒子
      floatBox: '', // 浮动的盒子
      mark: '', // 蒙版
      demo: '', // 最外层 的盒子
      bigBoxImg: '' // 大图片
    }
  },
  computed: {},
  watch: {},
  beforeMount() {},
  mounted() {
    this.$nextTick(() => {
      this.demo = document.getElementById('demo') // 获取dom
      this.smallBox = document.getElementById('small-box')
      this.floatBox = document.getElementById('float-box')
      this.mark = document.getElementById('mark')
      this.bigBox = document.getElementById('big-box')
      this.bigBoxImg = document.getElementById('big-img')
    })
  },
  activated() {},
  methods: {
    init() {
      this.demo = this.$refs['demo']
      this.smallBox = this.$refs['small']
      this.floatBox = this.$refs['float']
      this.mark = this.$refs['mark']
      this.bigBox = this.$refs['big']
      this.bigBoxImg = this.$refs['bigImg']
    },
    // 鼠标经过蒙版显示大图和浮动的盒子
    markMouseOver() {
      this.floatBox.style.display = 'block'
      this.bigBox.style.display = 'block'
    },
    markMouseOut() {
      this.floatBox.style.display = 'none'
      this.bigBox.style.display = 'none'
    },
    markMouseMove(ev) {
      this.init()
      const _event = ev || window.event
      let left =
        _event.clientX -
        this.demo.offsetLeft -
        this.smallBox.offsetLeft -
        this.floatBox.offsetWidth / 2
      console.log(left)
      let top =
        _event.clientY -
        this.demo.offsetTop -
        this.smallBox.offsetTop -
        this.floatBox.offsetHeight / 2

      if (left < 0) {
        left = 0
      } else if (left > this.mark.offsetWidth - this.floatBox.offsetWidth) {
        left = this.mark.offsetWidth - this.floatBox.offsetWidth
      }
      if (top < 0) {
        top = 0
      } else if (top > this.mark.offsetHeight - this.floatBox.offsetHeight) {
        top = this.mark.offsetHeight - this.floatBox.offsetHeight
      }

      this.floatBox.style.left = left + 'px'
      this.floatBox.style.top = top + 'px'
      const percentX =
        left / (this.mark.offsetWidth - this.floatBox.offsetWidth)
      const percentY =
        top / (this.mark.offsetHeight - this.floatBox.offsetHeight)
      this.bigBoxImg.style.left =
        -percentX * (this.bigBoxImg.offsetWidth - this.bigBox.offsetWidth) +
        'px'
      this.bigBoxImg.style.top =
        -percentY * (this.bigBoxImg.offsetHeight - this.bigBox.offsetHeight) +
        'px'
    }
  }
}
</script>

<style scoped lang="scss">
#demo {
  width: 300px;
  height: 200px;
  position: relative;
}
#small-box {
  position: relative;
  z-index: 1;
}
#float-box {
  display: none;
  width: 120px;
  height: 90px;
  position: absolute;
  background: #99a9bf;
  opacity: 0.4;
  filter: alpha(opacity=40);
}
#mark {
  position: absolute;
  display: block;
  width: 300px;
  height: 200px;
  background: #ffffff;
  opacity: 0;
  filter: alpha(opacity=0);
  z-index: 10;
}
#big-box {
  display: none;
  position: absolute;
  top: 0;
  left: 400px;
  width: 600px;
  height: 500px;
  overflow: hidden;
  z-index: 1;
  img {
    position: absolute;
    z-index: 5;
  }
}
</style>
