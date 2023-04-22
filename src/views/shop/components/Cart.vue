<template>
  <div class="cart">
    <div class="settlement">
      <div class="iconfont settlement__count">
        &#xe6ca;
        <span v-show="totalCount">{{ totalCount }}</span>
      </div>
      <div class="settlement__total" v-show="totalCount">
        总计：<span>&yen;{{ totalPrice }}</span>
      </div>
      <div class="settlement__empty" v-show="!totalCount">购物车是空的</div>
      <div class="settlement__pay">去结算</div>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// 购物车相关逻辑
function useCartEffect () {
  const store = useStore()
  const route = useRoute()
  const shopId = route.params.shopId // 商店id string
  const cartData = store.state.cartData // 购物车中的数据 object
  // 购物车中的商品总数
  const totalCount = computed(() => {
    const productList = cartData[shopId] // 商品数据object
    let count = 0
    for (const key in productList) {
      count += productList[key].count
    }
    return count
  })

  // 购物车中的商品总价
  const totalPrice = computed(() => {
    const productList = cartData[shopId] // 当前商店下商品的数据object
    let price = 0
    for (const key in productList) {
      const productPrice = +productList[key].price
      const productCocunt = +productList[key].count
      price += productPrice * productCocunt
    }
    return price.toFixed(2)
  })
  return { totalCount, totalPrice }
}

export default {
  name: 'Cart',
  setup () {
    const { totalCount, totalPrice } = useCartEffect()
    return { totalCount, totalPrice }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/variable.scss';
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: .49rem;
}
.settlement {
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
  }
}
</style>
