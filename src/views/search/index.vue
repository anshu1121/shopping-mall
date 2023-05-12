<template>
  <div class="container">
    <div class="search">
      <SearchInput :placeholder="1111" />
      <span>取消</span>
    </div>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.container {
  padding: .16rem .18rem;
  .search {
    display: flex;
    justify-content: space-between;
    span {
      font-size: .16rem;
      color: #333333;
      line-height: .16rem;
    }
  }
}
</style>
