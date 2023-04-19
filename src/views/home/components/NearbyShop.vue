<template>
  <div class="nearby">
    <p>附近店铺</p>
    <ShopItem
      v-for="item in shopList"
      :key="item._id"
      :shopInfo="item"
    />
  </div>
</template>
<script lang="ts">
import ShopItem from './ShopItem.vue'
import { ref } from 'vue'
import { get } from '@/utils/request.js'

function useShopListEffect () {
  const shopList = ref([])
  async function getShopList () {
    try {
      const res = await get('/api/shops')
      if (res?.success === 1 && res?.data?.length) {
        console.log(res)
        shopList.value = res.data || []
      }
    } catch (err) {
      console.log(err)
    }
  }
  return { shopList, getShopList }
}
export default {
  name: 'NearbyShop',
  components: {
    ShopItem
  },
  setup () {
    const { shopList, getShopList } = useShopListEffect()
    getShopList()
    return { shopList }
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
