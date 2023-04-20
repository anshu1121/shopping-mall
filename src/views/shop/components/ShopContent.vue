<template>
  <div class="content">
    <ul class="category">
      <li class="category__item--active">全部商品</li>
      <li>秒杀</li>
      <li>新鲜水果</li>
      <li>休闲食品</li>
      <li>时令蔬菜</li>
      <li>肉蛋家禽</li>
    </ul>
    <div class="product">
      <div class="product__item">
        <img src="@/assets/imgs/ningmeng.png" alt="">
        <div class="product__item__detail">
          <p class="name">番茄250g/份</p>
          <p class="sale">月售10件</p>
          <p class="price">
            <span class="price__yen">&yen;</span>
            <span>33.6</span>
            <span class="price__origin">¥33.6</span>
          </p>
        </div>
        <NumberController />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import NumberController from './NumberController.vue'

export default {
  name: 'ShopContent',
  components: { NumberController }
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
          >span{
            display: inline-block;
          }
          &__yen{
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
}</style>
