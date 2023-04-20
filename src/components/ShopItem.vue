<template>
  <div class="item">
    <img src="@/assets/imgs/near.png" alt="shop" />
    <div :class="{
      'item__content': true,
      'item__content-borderd': borderd
    }">
      <div class="item__content__name">{{ shopInfo?.name }}</div>
      <div class="item__content__data">
        <span>月售{{ shopInfo?.sales }}</span>
        <span>起送{{ shopInfo?.expressLimit }}</span>
        <span>基础运费{{ shopInfo?.expressPrice }}</span>
      </div>
      <div class="item__content__preferential">
        {{ shopInfo?.preferential }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ShopItem',
  props: {
    shopInfo: Object,
    borderd: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/variable.scss';
  .item {
    display: flex;
    flex-direction: row;
    margin-top: .14rem;
    >img{
      width: .56rem;
      height: .56rem;
    }
    &__content{
      flex: 1;
      margin-left: .16rem;
      padding-bottom: .04rem;
      font-size: .13rem;
      line-height: .18rem;
      >div{
        margin-bottom: .08rem;
      }
      &__name{
        font-size: .16rem;
        line-height: .22rem;
      }
      &__data{
        span{
          display: inline-block;
          margin-right: .16rem;
        }
      }
      &__preferential{
        color: #E93B3B;
      }
    }
    &__content-borderd{
      border-bottom: $border;
    }
  }
</style>
