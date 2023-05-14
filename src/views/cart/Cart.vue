<template>
  <header>
    我的购物车（2）
  </header>
  <div class="cart">
    <template v-for="shop, key of cartData" :key="key">
      <ShopOfCart :shop-name="shop.shopName" :productData="shop.productData" @click="handleRoute(key)" />
    </template>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ShopOfCart from '@/components/ShopOfCart.vue'

const store = useStore()
const cartData = store.state.cartData
const router = useRouter()

const handleRoute = (shopId) => {
  router.push(`/shop/${shopId}`)
}
</script>
<style lang="scss" scoped>
header {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  padding: .11rem 0;
  margin: 0 -.18rem;
  line-height: .22rem;
  font-size: .16rem;
  text-align: center;
  background-color: #fff;
}

.cart {
  height: calc(100% - .94rem);
  margin-top: .44rem;
  margin-bottom: .5rem;
  padding: 0 .18rem .18rem;
  overflow-y: auto;
  background-color: #F5F5F5;
  box-sizing: border-box;
}
</style>
