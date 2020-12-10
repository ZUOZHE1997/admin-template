drag-wrap.vue
<template>
  <div ref="wrap" @dragenter.prevent @dragover.prevent>
    <!--  阻止浏览器默认行为，不然会显示一个叉叉，不好看 -->
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DragWrap', // 组件名，很重要！
  created() {
    this.toDom = '' // 拖拽时进入的元素
    this.fromDom = '' // 拖拽起始的元素
    this.children = [] // 存放所有子组件元素的集合，之后说明用途
    this.$on('dragstart', this.onDragstart) // 子组件会$emit触发dragstart，所以要先注册
    this.$on('dragenter', this.onDragenter) // 子组件会$emit触发dragenter，所以要先注册
    this.$on('dragend', this.onDragend) // 子组件会$emit触发dragend，所以要先注册
    this.$on('putChild', child => { // 这里的child对应的是子组件的this.$el
      this.children.push(child) // 将所有的子组件的Dom元素收集起来
    })
  },
  methods: {
    onDragstart(el) {
      this.fromDom = el // 记录拖拽时开始的元素
    },
    onDragenter(el) {
      this.toDom = el
      if (this.fromDom === this.toDom) {
        return
      }
      if (this.isPrevNode(this.fromDom, this.toDom)) { // 判断进入节点是否在起始节点的前面
        this.$refs['wrap'].insertBefore(this.fromDom, this.toDom)
        // 将起始节点插入到进入节点的前面
      } else { // 否则就是在之后
        this.$refs['wrap'].insertBefore(this.fromDom, this.toDom.nextSibling)
        // 将起始节点插入到进入节点下一个兄弟节点的前面
      }
    },
    isPrevNode(from, to) { // to是否在from的前面
      while (from.previousSibling !== null) {
        if (from.previousSibling === to) {
          return true
        }
        from = from.previousSibling
      }
    },
    onDragend() {
      console.log(this.data)
      // if (!this.data.length) return
      // const realDomOrder = [...this.$el.children].filter(child => // 获取真实的Dom树
      //   child.classList.contains('__drag_item')
      // )
      // this.getDataOrder(realDomOrder, this.children) // 对比两颗树
    },
    getDataOrder(realList, dragAfterList) {
      const order = realList.map(realItem => { // 拿到打乱Dom树对应的序号
        return dragAfterList.findIndex(dragItem => realItem === dragItem)
      })
      const newData = []
      order.forEach((item, i) => { // 将原数组的数据按照打乱的序号赋值给新数组
        newData[i] = this.data[item]
      })
      this.$emit('watchData', newData) // 新数组的顺序就对应打乱Dom的序号，派发出去
    }

  }
}
</script>
