<template>
  <div class="cart">
    <div class="settlement">
      <div class="iconfont settlement__number">
        &#xe6ca;
        <span>1</span>
      </div>
      <div class="settlement__total">
        总计：<span>&yen;128</span>
      </div>
      <div class="settlement__pay">去结算</div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Cart'
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

  &__number {
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
