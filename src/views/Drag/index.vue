<template>
  <div>
    <drag-warp class="wrap" :data="list" @watchData="watchData">
      <drag-item v-for="(item, index) in list" :key="index" class="item">
        <template #drag>
          <div>拖拽Dom</div>
        </template>
        <div>{{ item }}</div>
      </drag-item>
    </drag-warp></div>
</template>

<script>

import dragItem from './drag-item'
import dragWarp from './drag-warp'
// import x from ''
export default {
  name: 'Name',
  components: {
    'drag-item': dragItem,
    'drag-warp': dragWarp
  },
  props: {},
  data() {
    return {
      list: [111, 222, 333, 444, 555, 666, 777, 888, 999]
    }
  },
  computed: {},
  watch: {},
  beforeMount() { },
  mounted() { },
  activated() { },
  methods: {
    watchData(newList) {
      console.log('newList', newList)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
