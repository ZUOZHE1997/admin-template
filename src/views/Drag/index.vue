<template>
  <div>
    <div
      v-for="i in 5"
      :key="i"
      class="drag"
      draggable="true"
      @click="handleClick"
    >
      {{ i }}
    </div>
    <div class="box">this is box</div>
  </div>
</template>
<script>
let dragDom = ''
let boxDom = ''
export default {
  name: 'Name',
  components: {},
  props: {},
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  computed: {},
  watch: {},
  beforeMount() {},
  mounted() {
    dragDom = document.getElementsByClassName('drag')[0]
    boxDom = document.getElementsByClassName('box')[0]
    console.log(dragDom, '打印drag')
    this.handleClick()
    this.handleDrag()
  },
  activated() {},
  methods: {
    handleClick() {
      dragDom.ondragstart = e => {
        this.x = e.clientX
        this.y = e.clientY
        console.log('start ', this.x, this.y)
      }
      dragDom.ondrag = e => {
        console.log('on drag')
      }
      dragDom.ondragend = e => {
        const x1 = e.clientX - this.x
        const y1 = e.clientY - this.y
        console.log(x1, y1)
        dragDom.style.left = dragDom.offsetLeft + x1 + 'px'
        dragDom.style.top = dragDom.offsetTop + y1 + 'px'
        console.log('end drag')
      }
    },
    handleDrag() {
      boxDom.ondragenter = e => {
        console.log('enter')
      }
      boxDom.ondragover = e => {
        console.log('over')
      }
      boxDom.ondragleave = () => {
        console.log('leave')
      }
      boxDom.ondrop = () => {
        console.log('drop')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  width: 300px;
  height: 400px;
  border: 1px solid #000;
  position: absolute;
  top: 200px;
  left: 300px;
}
.drag {
  position: absolute;
  display: block;
  width: 100px;
  height: 20px;
  background: red;
  margin: 5px;
}
</style>
