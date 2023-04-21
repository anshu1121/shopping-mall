<template>
  <div class="nearby">
    <p>附近店铺</p>
    <router-link
      v-for="item in shopList"
      :key="item._id"
      :to="`/shop/${item._id}`"
    >
      <ShopItem
        :shopInfo="item"
      />
    </router-link>
  </div>
</template>
<script lang="ts">
import ShopItem from '@/components/ShopItem.vue'
import { ref } from 'vue'
import { get } from '@/utils/request.js'

function useShopListEffect () {
  const shopList = ref([])
  async function getShopList () {
    try {
      const res = await get('/api/shops')
      if (res?.success === 1 && res?.data?.length) {
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
  p {
    font-size: 18px;
  }
  a{
    text-decoration: none;
  }
}
</style>
