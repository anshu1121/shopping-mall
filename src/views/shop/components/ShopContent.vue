<template>
  <div class="content">
    <ul class="category">
      <li
        :class="{ 'category__item--active': currentTab === item.tab}"
        v-for="item in categories"
        :key="item.tab"
        @click="() => handleCategoryClick(item.tab)"
      >
        {{ item.name }}
      </li>
    </ul>
    <Products :products="productList"/>
  </div>
</template>
<script lang="ts">
import { watchEffect } from 'vue'
import Products from './Products.vue'
import { useCatetoriesEffect, useProductListEffect } from './effects.js'

export const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '新鲜水果', tab: 'fruit' }
]

export default {
  name: 'ShopContent',
  components: { Products },
  setup () {
    const { currentTab, handleCategoryClick } = useCatetoriesEffect(categories)
    const { productList, getProductList } = useProductListEffect(currentTab)
    watchEffect(() => {
      // 切换category tab时，getProductList()方法中依赖的tab发生变化，自动执行
      getProductList()
    })
    return {
      categories, // 商品种类
      currentTab, // 当前选中的商品种类tab
      handleCategoryClick, // 商品种类tab点击事件
      productList // 商品列表数据
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;

  .category {
    width: .76rem;
    //height: 100%;
    overflow-y: auto;
    font-size: .14rem;
    background-color: #F5F5F5;

    li {
      height: .4rem;
      line-height: .4rem;
      text-align: center;
      border-radius: .02rem;
    }

    &__item--active {
      background-color: #fff;
    }
  }
}
</style>
