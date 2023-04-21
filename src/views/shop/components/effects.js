import { useRoute } from 'vue-router'
import { reactive, ref, toRefs } from 'vue'
import { get } from '@/utils/request.js'

// 左侧categories tab切换逻辑
export function useCatetoriesEffect (categories) {
  const currentTab = ref(categories[0].tab)
  function handleCategoryClick (tab) {
    currentTab.value = tab
  }
  return { currentTab, handleCategoryClick }
}

// product列表相关逻辑
export function useProductListEffect (currentTab) {
  const data = reactive({
    list: []
  })
  const shopId = useRoute().params.id
  async function getProductList () {
    try {
      const res = await get(`/api/shop/${shopId}/product`, { tab: currentTab.value })
      if (res.success === 1) {
        data.list = res.data
      }
    } catch (err) {
      console.log(err)
    }
  }

  const { list } = toRefs(data)
  return { productList: list, getProductList }
}
