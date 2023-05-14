<!-- 点击商店中结算按钮进入的订单页 -->
<template>
  <div class="order">
    <div class="top-bg" />
    <div class="back"><span class="iconfont" @click="goBack">&#xe8b5;</span>确认订单</div>
    <div class="address">
      <div class="address__content">
        <p class="text">收货地址</p>
        <p class="location">北京理工大学国防科技园2号楼10层</p>
        <p class="phone">张先生<span>18911024266</span></p>
      </div>
      <div class="iconfont address__choose">
        &#xe8b5;
      </div>
    </div>
    <ShopOfCart :shopName="shopName" :productData="productData" />
    <div class="submit">
      <div class="submit__price">实付金额<span>&yen;{{ totalPrice }}</span></div>
      <div class="submit__btn" @click="handleSubmit">提交订单</div>
    </div>
    <div class="mask" v-if="isShowMask">
      <div class="confirm-box">
        <p>确认支付？</p>
        <span>请尽快完成支付，否则将被取消</span>
        <div class="btn-box">
          <div class="cancel" @click="isShowMask = false">取消订单</div>
          <div class="confirm" @click="handleConfirm">确认支付</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { useGoBackEffect, toast } from '@/utils/common.js'
import ShopOfCart from '@/components/ShopOfCart.vue'

function useOrderEffect () {
  const route = useRoute()
  const { shopId } = route.params
  const store = useStore()
  const cartData = store.state.cartData
  const shopInfo = cartData?.[shopId]
  const shopName = shopInfo?.shopName
  const productData = shopInfo?.productData

  // 购物车中的商品总价number
  const totalPrice = computed(() => {
    let tp = 0
    for (const item in productData) {
      tp += productData[item].price * productData[item].count
    }
    return tp
  })
  return { shopName, shopId, productData, totalPrice }
}

export default {
  name: 'Order',
  components: { ShopOfCart },
  setup () {
    const store = useStore()
    const isShowMask = ref(false)
    const router = useRouter()
    const goBack = useGoBackEffect(router)
    const { productData, shopName, shopId, totalProductType, totalPrice } = useOrderEffect()
    const handleSubmit = () => {
      console.log('submit')
      isShowMask.value = true
    }
    const handleConfirm = () => {
      toast('支付成功')
      store.commit('clearCart', { shopId })
      setTimeout(() => {
        router.push({ name: 'home' })
      }, 500)
    }
    return { isShowMask, goBack, productData, shopName, totalProductType, totalPrice, handleSubmit, handleConfirm }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/variable.scss';

.order {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0 .18rem;
  background-color: #F5F5F5;

  >div {
    position: relative;
  }

  .top-bg {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    height: 1.59rem;
    background-image: linear-gradient(0deg, rgba(0, 145, 255, 0.00) 4%, #0091FF 50%);
  }

  .back {
    padding: .18rem 0;
    text-align: center;
    line-height: .2rem;
    overflow: hidden;
    font-size: .16rem;
    color: #FFF;

    span {
      display: block;
      float: left;
      font-size: .21rem;
    }
  }

  .address {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .16rem;
    box-sizing: border-box;
    border-radius: .04rem;
    background-color: #fff;

    &__content {
      .text {
        font-size: .16rem;
        line-height: .22rem
      }

      .location {
        margin-top: .14rem;
        font-size: .14rem;
        line-height: .2rem;
      }

      .phone {
        margin-top: .06rem;
        font-size: .12rem;
        color: #666;
        line-height: .17rem;

        span {
          display: inline-block;
          margin-left: .06rem;
        }
      }
    }

    &__choose {
      width: .16rem;
      margin-top: .16rem;
      font-size: .16rem;
      line-height: .16rem;
      color: #666;
      transform: rotate(180deg);
    }
  }

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

  .submit {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: .49rem;
    line-height: .49rem;
    display: flex;
    flex-direction: row;
    background-color: #FFF;
    font-size: .14rem;

    &__price {
      flex: 1;
      padding-left: .24rem;
      text-align: left;

      span {
        display: inline-block;
        margin-left: .05rem;
        color: #151515;
        font-size: .16rem;
        line-height: .2rem;
      }
    }

    &__btn {
      width: .98rem;
      height: .49rem;
      text-align: center;
      color: #FFF;
      background-color: #4FB0F9;
    }
  }
  .mask{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba($color: #000, $alpha: .5);
  }
  .confirm-box{
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 4px;
    padding: .24rem .52rem;
    text-align: center;
    &>p{
      font-size: .18rem;
      line-height: .25rem;
    }
    &>span{
      margin-top: .08rem;
      font-size: .14rem;
      color: #666;
    }
    .btn-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: .24rem;
      &>div {
        padding: .06rem .12rem;
        border-radius: .16rem;
        border: 1px solid #4FB0F9;
        line-height: .2rem;
        font-size: .14rem;
      }
      .cancel {
        color: #4FB0F9;
      }
      .confirm {
        background-color: #4FB0F9;
        color: #FFF;
      }
    }
  }
}
</style>
