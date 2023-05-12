// 注册全局组件
import SearchInputVue from './SearchInput.vue'

export default {
  install (Vue) {
    Vue.component('SearchInput', SearchInputVue)
  }
}
