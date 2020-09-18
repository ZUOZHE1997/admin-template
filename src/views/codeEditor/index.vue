<template>
  <div class="dashboard-container">
    <h2>编辑器</h2>
    <editor />
  </div>
</template>

<script>
import editor from '@/components/MonacoEditor/index'
export default {
  name: 'Dashboard',
  components: { editor }
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
