<template>
  <div class="nearby">
    <p>附近店铺</p>
    <ShopItem />
    <ShopItem />
    <ShopItem />
    <ShopItem />
    <ShopItem />
    <ShopItem />
    <ShopItem />
    <ShopItem />
    <ShopItem />
  </div>
</template>
<script lang="ts">
import ShopItem from './ShopItem.vue'

export default {
  name: 'NearbyShop',
  components: {
    ShopItem
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/variable.scss';
.nearby {
  margin-top: .16rem;
  color: $font-color;
  p {
    font-family: PingFangSC-Medium;
    font-size: 18px;
  }
}
</style>
