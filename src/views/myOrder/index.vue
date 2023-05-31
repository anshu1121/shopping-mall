<template>
  <header>
    我的订单
  </header>
  <div class="my-order">
    <div class="shop" v-for="(shop, key) in orderData" :key="key">
      <div class="shop__title">
        {{ shop.shopName }}<span class="order-status">已取消</span>
      </div>
      <div class="shop__product">
        <div class="shop__product__img">
          <template v-for="product in shop.productData" :key="product._id">
            <img src="@/assets/imgs/ningmeng.png" />
          </template>
        </div>
        <div class="shop__product__data">
          <p>&yen;66.00</p>
          <p>共<span>4</span>件</p>
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'

const store = useStore()
const { orderData } = store.state
</script>
<style lang="scss" scoped>
header {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  padding: .11rem 0;
  margin: 0 -.18rem;
  line-height: .22rem;
  font-size: .16rem;
  text-align: center;
  background-color: #fff;
}

.my-order {
  height: calc(100% - .94rem);
  margin-top: .44rem;
  margin-bottom: .5rem;
  padding: 0 .18rem .18rem;
  overflow-y: auto;
  background-color: #F5F5F5;
  box-sizing: border-box;
}

.shop {
  margin-top: .16rem;
  padding: .16rem;
  border-radius: .04rem;
  background-color: #FFF;

  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .16rem;
    font-weight: bold;
    line-height: .22rem;

    .order-status {
      font-size: 14px;
      color: #999999;
    }
  }

  &__product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .16rem;

    &__img {
      &>img {
        width: .4rem;
        height: .4rem;
        margin-right: .12rem;
        overflow: hidden;
      }

      &>img:last-child {
        margin-right: 0;
      }
    }

    &__data {
      text-align: right;

      &>p:first-child {
        margin-bottom: .04rem;
        font-size: .14rem;
        line-height: .2rem;
        color: #E93B3B;
      }

      &>p:last-child {
        font-size: .12rem;
        line-height: .14rem;
        color: #333333;
      }
    }
  }
}
</style>
