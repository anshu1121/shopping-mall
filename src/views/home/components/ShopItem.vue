<template>
  <div class="shop">
    <img src="@/assets/imgs/near.png" alt="shop">
    <div class="shop__content">
      <div class="shop__content__name">沃尔玛</div>
      <div class="shop__content__data">
        <span>月售1万+</span>
        <span>起送¥0</span>
        <span>基础运费¥5</span>
      </div>
      <div class="shop__content__preferential">
        VIP尊享满89元减4元运费券（每月3张）
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ShopItem'
}
</script>
<style lang="scss" scoped>
  @import '@/assets/variable.scss';
  .shop {
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
      // color: $font-color;
      border-bottom: 1px solid #F1F1F1;
      >div{
        margin-bottom: .08rem;
      }
      &__name{
        font-size: .16rem;
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
  }
</style>
