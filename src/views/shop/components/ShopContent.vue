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
        <CountController :product="product" :controStyle="controStyle"  />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { watchEffect } from 'vue'
import CountController from './CountController.vue'
import { useCatetoriesEffect, useProductListEffect } from './effects.js'

export const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '新鲜水果', tab: 'fruit' }
]

export default {
  name: 'ShopContent',
  components: { CountController },
  setup () {
    const { currentTab, handleCategoryClick } = useCatetoriesEffect(categories)
    const { productList, getProductList } = useProductListEffect(currentTab)
    watchEffect(() => {
      // 切换category tab时，getProductList()方法中依赖的tab发生变化，自动执行
      getProductList()
    })
    const controStyle = {
      position: 'absolute',
      right: 0,
      bottom: '.1rem'
    }
    return {
      categories, // 商品种类
      currentTab, // 当前选中的商品种类tab
      handleCategoryClick, // 商品种类tab点击事件
      productList, // 商品列表数据
      controStyle
    }
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
          color: $redColor;
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
