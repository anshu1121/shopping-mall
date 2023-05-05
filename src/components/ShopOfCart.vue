<template>
  <div class="shop">
    <div class="shop__name">
      {{ shopName }}
    </div>
    <div class="shop__products">
      <template v-for="(product, id, index) in productData" :key="id">
        <div class="product" v-show="showMore(index)">
          <img src="@/assets/imgs/ningmeng.png" alt="">
          <div class="name">
            <p>{{ product.name }}</p>
            <p>{{ product.price }}<span>x</span>{{ product.count }}</p>
          </div>
          <div class="price">{{ product.price * product.count }}</div>
        </div>
      </template>
    </div>
    <div class="shop__more" @click="showAllProducts" v-if="totalProductType > 2">
      共计{{ totalProductType }}件<span class="iconfont">&#xe8b5;</span>
    </div>
  </div>
</template>
<script>

import { computed, ref } from 'vue'

// 购物车中数据逻辑
function useOrderEffect (productData) {
  // 购物车中的商品种类number
  const totalProductType = computed(() => {
    const productLen = Object.keys(productData)?.length
    return productLen
  })
  return { totalProductType }
}

// 展示更多相关逻辑
function useToggleEffect () {
  const isShow = ref(false)
  // 控制是否展示
  function showMore (index) {
    return index < 2 || isShow.value
  }
  // 展开全部商品
  function showAllProducts () {
    isShow.value = !isShow.value
  }
  return { showMore, showAllProducts }
}

export default {
  name: 'ShopOfCart',
  props: ['shopName', 'productData'],
  setup (props) {
    const { totalProductType } = useOrderEffect(props.productData)
    const { showAllProducts, showMore } = useToggleEffect()
    return { showAllProducts, totalProductType, showMore }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/variable.scss';
.shop {
  margin-top: .16rem;
  padding: .16rem;
  border-radius: .04rem;
  background-color: #FFF;

  &__name {
    font-size: .16rem;
    line-height: .22rem;
  }

  &__products {
    margin-top: .16rem;

    .product {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: .16rem;

      img {
        width: .46rem;
        height: .46rem;
      }

      .name {
        flex: 1;
        margin-left: .16rem;

        p:first-child {
          font-size: .14rem;
          line-height: .2rem;
        }

        p:nth-child(2) {
          margin-top: .06rem;
          color: $redColor;
          transform: scale(.875);
          transform-origin: left center;

          span {
            display: inline-block;
            margin: 0 .06rem;
          }
        }
      }

      .price {
        width: auto;
        align-self: flex-end;
        line-height: .14rem;
      }
    }
  }

  &__more {
    height: .28rem;
    line-height: .28rem;
    text-align: center;
    font-size: .14rem;
    color: #999;
    background-color: #F5F5F5;

    span {
      display: inline-block;
      margin-left: .08rem;
      font-size: .14rem;
      line-height: normal;
      vertical-align: text-top;
      transform: rotate(270deg);
      transform-origin: center center;
    }
  }
}
</style>
