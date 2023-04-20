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
    <div class="product">
      <div class="product__item" v-for="product in productList" :key="product._id">
        <img src="@/assets/imgs/ningmeng.png" alt="">
        <div class="product__item__detail">
          <p class="name">{{ product.name }}</p>
          <p class="sale">月售{{ product.sales }}件</p>
          <p class="price">
            <span class="price__yen">&yen;</span>
            <span>{{ product.price }}</span>
            <span class="price__origin">&yen;{{ product.oldPrice }}</span>
          </p>
        </div>
        <NumberController />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs, watchEffect } from 'vue'
import NumberController from './NumberController.vue'
import { get } from '@/utils/request.js'
import { useRoute } from 'vue-router'

const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '新鲜水果', tab: 'fruit' }
]

// tab切换逻辑
function useCatetoriesEffect () {
  const currentTab = ref(categories[0].tab)
  function handleCategoryClick (tab) {
    currentTab.value = tab
  }
  return { currentTab, handleCategoryClick }
}

// product列表相关逻辑
function useProductListEffect (currentTab) {
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
    getProductList() // getProductList()方法中依赖的tab发生变化，自动执行
  })
  const { list } = toRefs(data)
  return { productList: list, getProductList }
}

export default {
  name: 'ShopContent',
  components: { NumberController },
  setup () {
    const { currentTab, handleCategoryClick } = useCatetoriesEffect()
    const { productList, getProductList } = useProductListEffect(currentTab)

    return { categories, currentTab, handleCategoryClick, productList, getProductList }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/variable.scss';
@import '@/assets/minxins.scss';

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

  .product {
    flex: 1;
    margin: 0 .16rem;
    overflow-y: auto;

    &__item {
      position: relative;
      display: flex;
      flex-direction: row;
      padding: .12rem 0;
      border-bottom: $border;

      img {
        width: 0.68rem;
        height: 0.68rem;
      }

      &__detail {
        flex: 1;
        margin-left: 0.16rem;
        overflow-x: hidden;

        p {
          margin-bottom: 0.06rem;

          &:last-child {
            margin-bottom: 0;
          }
        }

        .name {
          line-height: 0.2rem;
          font-size: 0.14rem;
          @include elipsis
        }

        .sale {
          line-height: 0.16rem;
          font-size: 0.12rem;
        }

        .price {
          color: #e93b3b;
          font-size: .14rem;
          line-height: .2rem;

          >span {
            display: inline-block;
          }

          &__yen {
            font-size: .1rem;
          }

          &__origin {
            display: inline-block;
            margin-left: 0.06rem;
            font-size: 0.2rem;
            transform: scale(0.5);
            transform-origin: left center;
            color: #999;
            vertical-align: sub;
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
</style>
