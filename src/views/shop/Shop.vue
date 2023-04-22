<template>
  <div class="shop">
    <div class="shop__search">
      <div class="iconfont back" @click="goBack">&#xe8b5;</div>
      <SearchInput :placeholder="'请输入商品名称搜索'" />
    </div>
    <ShopItem :shop-info="shopInfo" :borderd="false" v-show="shopInfo.name" />
    <ShopContent />
    <Cart />
  </div>
</template>
<script>
import SearchInput from '@/components/SearchInput.vue'
import ShopItem from '@/components/ShopItem.vue'
import ShopContent from './components/ShopContent.vue'
import Cart from './components/Cart.vue'

import { reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { get } from '@/utils/request.js'

// 返回
function useGoBackEffect () {
  const router = useRouter()
  function goBack () {
    router.back()
  }
  return goBack
}

// 获取商店数据
function useShopInfoEffect () {
  const data = reactive({
    shopInfo: {}
  })
  const route = useRoute()
  async function getShopInfo () {
    try {
      const shopId = route.params.shopId
      const res = await get(`/api/shop/${shopId}`)
      if (res.success === 1) {
        data.shopInfo = res.data
      }
    } catch (err) {
      console.log(err)
    }
  }
  const { shopInfo } = toRefs(data)
  return { shopInfo, getShopInfo }
}

export default {
  name: 'Shop',
  components: { SearchInput, ShopItem, ShopContent, Cart },
  setup () {
    const goBack = useGoBackEffect()
    const { shopInfo, getShopInfo } = useShopInfoEffect()
    getShopInfo()
    return { shopInfo, goBack }
  }
}
</script>
<style lang="scss" scoped>
.shop{
  padding: .16rem .18rem 0;
  &__search{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: .16rem;
    .iconfont{
      font-size: .27rem;
      color: #b6b6b6;
    }
  }
}

</style>
