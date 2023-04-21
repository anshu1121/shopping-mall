import { useRoute } from 'vue-router'
import { reactive, ref, toRefs, watchEffect } from 'vue'
import { get } from '@/utils/request.js'

// 左侧categories tab切换逻辑
export function useCatetoriesEffect (tabList) {
  const currentTab = ref(tabList[0].tab)
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
  watchEffect(() => {
    // 切换category tab时，getProductList()方法中依赖的tab发生变化，自动执行
    getProductList()
  })
  const { list } = toRefs(data)
  return { productList: list, getProductList }
}
