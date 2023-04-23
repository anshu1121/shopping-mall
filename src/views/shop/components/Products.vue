<template>
  <div class="product">
    <div class="product__item" v-for="product in products" :key="product._id">
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
      <CountController :product="product" />
    </div>
  </div>
</template>
<script>
import CountController from './CountController.vue'

export default {
  name: 'Products',
  components: { CountController },
  props: ['products']
}
</script>
<style lang="scss" scoped>
@import '@/assets/variable.scss';
@import '@/assets/minxins.scss';
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
</style>
