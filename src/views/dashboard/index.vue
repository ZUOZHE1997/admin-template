<template>
  <div class="dashboard-container">
    <h1>首页</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import editor from '@/components/MonacoEditor/index'
export default {
  name: 'Dashboard',
  // components: { editor },
  computed: {
    ...mapGetters(['name'])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
