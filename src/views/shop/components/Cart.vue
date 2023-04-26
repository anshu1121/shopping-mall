<template>
  <div class="mask"
    v-show="totalCount && showProduct"
    @click="toggleShowProduct"
  />
  <div class="cart">
    <!-- 全选 -->
    <div class="check-all" v-show="totalCount && showProduct">
      <div
        :class="{
          iconfont: true ,
          'check-all__checked': isAllChecked
        }"
        @click="handleCheckAll"
      >
        &#xe656;
      </div>
      <div class="check-all__text">全选</div>
      <div class="check-all__clear" @click="handleClearCart">清空购物车</div>
    </div>

    <!-- 商品 -->
    <div class="product" v-show="totalCount && showProduct">
      <div
        class="product__item"
        v-for="product in products"
        :key="product._id"
      >
        <div
          :class="{
            iconfont: true,
            product__item__checked: product.checked
          }"
          @click="() => handleCheck(product._id)"
        >
          &#xe656;
        </div>
        <img src="@/assets/imgs/ningmeng.png" alt="">
        <div class="product__item__detail">
          <p class="name">{{ product.name }}</p>
          <!-- <p class="sale">月售{{ product.sales }}件</p> -->
          <p class="price">
            <span class="price__yen">&yen;</span>
            <span>{{ product.price }}</span>
            <span class="price__origin">&yen;{{ product.oldPrice }}</span>
          </p>
        </div>
        <CountController :product="product" />
      </div>
    </div>

    <!-- 结算 -->
    <div class="settlement">
      <div class="iconfont settlement__count" @click="toggleShowProduct">
        &#xe6ca;
        <span v-show="totalCount">{{ totalCount }}</span>
      </div>
      <div class="settlement__total" v-show="totalCount">
        总计：<span>&yen;{{ totalPrice }}</span>
      </div>
      <div class="settlement__empty" v-show="!totalCount">购物车是空的</div>
      <div class="settlement__pay">
        <router-link to="/">
          去结算
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import CountController from './CountController'

// 购物车相关逻辑
function useCartEffect () {
  const store = useStore()
  const route = useRoute()
  const shopId = route.params.shopId // 商店id string
  const cartData = store.state.cartData // 购物车中的数据 object

  // 总数 购物车中的商品总数
  const totalCount = computed(() => {
    const productList = cartData[shopId]?.productData // 当前商店下商品数据object
    let count = 0
    for (const key in productList) {
      count += productList[key].count
    }
    return count
  })

  // 总价 购物车中的商品总价
  const totalPrice = computed(() => {
    const productList = cartData[shopId]?.productData // 当前商店下商品的数据object
    let price = 0
    for (const key in productList) {
      const productPrice = +productList[key].price
      const productCocunt = +productList[key].count
      if (productList[key].checked) {
        price += productPrice * productCocunt
      }
    }
    return price.toFixed(2)
  })

  // 购物车中的商品
  const products = computed(() => {
    const productList = cartData[shopId]?.productData || [] // 当前商店下商品的数据object
    return productList
  })

  // check点击事件
  function handleCheck (productId) {
    store.commit('handleCheck', {
      shopId, productId
    })
  }

  // 全选
  function handleCheckAll () {
    store.commit('checkAll', { shopId, isAllChecked: isAllChecked.value })
  }

  // 清空购物车
  function handleClearCart () {
    store.commit('clearCart', { shopId })
  }

  // 是否全选
  const isAllChecked = computed(() => {
    const productList = cartData[shopId]?.productData // 当前商店下商品数据object
    let allChecked = true
    for (const key in productList) {
      if (!productList[key].checked) {
        allChecked = false
        break
      }
    }
    return allChecked
  })

  return { totalCount, totalPrice, products, handleCheck, handleClearCart, handleCheckAll, isAllChecked }
}

// 显示/隐藏购物车的逻辑
function useToggleCartEffect (totalCount) {
  const showProduct = ref(false)
  function toggleShowProduct () {
    showProduct.value = !showProduct.value
  }
  watch(totalCount, (newVal) => {
    if (!newVal) {
      showProduct.value = false
    }
  })
  return { showProduct, toggleShowProduct }
}

export default {
  name: 'Cart',
  components: { CountController },
  setup () {
    const { totalCount, totalPrice, products, handleCheck, handleClearCart, handleCheckAll, isAllChecked } = useCartEffect()
    const { showProduct, toggleShowProduct } = useToggleCartEffect(totalCount)
    return { showProduct, toggleShowProduct, totalCount, totalPrice, products, handleCheck, handleClearCart, handleCheckAll, isAllChecked }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/variable.scss';
@import '@/assets/minxins.scss';

.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba($color: #000, $alpha: .5);
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}

.product {
  flex: 1;
  margin: 0 .18rem;
  overflow-y: auto;

  &__item {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .12rem 0;
    .iconfont {
      margin-right: .164rem;
      font-size: .19rem;
      color: #999;
    }
    &__checked {
      color: #0091FF!important;
    }
    img {
      width: 0.46rem;
      height: 0.46rem;
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

.settlement {
  height: .49rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -1px 1px 0 #F1F1F1;

  &__count {
    position: relative;
    margin-left: .24rem;
    width: .28rem;
    font-size: .28rem;
    color: #0091FF;

    span {
      position: absolute;
      left: .23rem;
      top: 0;
      min-width: .2rem;
      height: .2rem;
      padding: 0 .05rem;
      box-sizing: border-box;
      line-height: .2rem;
      border-radius: .1rem;
      background-color: $redColor;
      font-size: .16rem;
      color: #fff;
      text-align: center;
      transform: scale(.5);
      transform-origin: left top;
    }
  }

  &__total {
    flex: 1;
    height: .49rem;
    margin-left: .32rem;
    display: flex;
    align-items: center;

    span {
      font-size: .18rem;
      color: $redColor;
    }
  }

  &__empty {
    flex: 1;
    margin-left: .32rem
  }

  &__pay {
    width: .98rem;
    height: .49rem;
    line-height: .49rem;
    text-align: center;
    color: #fff;
    font-size: .14rem;
    background-color: #4FB0F9;
    a {
      display: block;
      color: #FFF;
    }
  }
}
.check-all {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: .52rem;
  line-height: .52rem;
  padding: 0 .18rem;
  border-bottom: $border;
  font-size: .14rem;
  .iconfont {
    margin-right: .08rem;
    font-size: .19rem;
    color: #999;
  }
  &__checked {
    color: #0091FF!important;
  }
  &__text{
    flex: 1;
  }
}
</style>
