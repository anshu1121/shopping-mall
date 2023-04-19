<template>
  <div class="shop">
    <div class="search">
      <div class="iconfont back">&#xe8b5;</div>
      <SearchInput :placeholder="'请输入商品名称搜索'" />
    </div>
    <ShopItem :borderd="false" />
  </div>
</template>
<script lang="ts">
import SearchInput from '@/components/SearchInput.vue'
import ShopItem from '@/components/ShopItem.vue'

export default {
  name: 'Shop',
  components: { SearchInput, ShopItem }
}
</script>
<style lang="scss" scoped>
.shop{
  padding: .16rem .18rem 0;
  .search{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: .16rem;
    .iconfont{
      font-size: .21rem;
    }
  }
}

</style>
