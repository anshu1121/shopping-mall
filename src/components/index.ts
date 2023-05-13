// 注册全局组件
import SearchInputVue from './SearchInput.vue'
import ShopItem from './ShopItem.vue'

export default {
  install (Vue) {
    Vue.component('SearchInput', SearchInputVue)
    Vue.component('ShopItem', ShopItem)
  }
}
