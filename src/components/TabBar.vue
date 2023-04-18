<template>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe674;</div>
      <div class="title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe600;</div>
      <div class="title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe601;</div>
      <div class="title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe604;</div>
      <div class="title">我的</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.docker {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 0.5rem;
  padding: 0 0.18rem;
  box-sizing: border-box;
  border-top: 0.01rem solid #f1f1f1;
  &__item {
    flex: 1;
    text-align: center;
    color: #000;
    .iconfont {
      font-size: 0.2rem;
      margin: 0.07rem 0 0.02rem 0;
    }
    .title {
      font-size: 0.2rem;
      transform: scale(0.5, 0.5);
      transform-origin: center top;
      a {
        text-decoration: none;
      }
    }
    &--active {
      color: #1fa4fc;
      a {
        color: #1fa4fc;
      }
    }
  }
}
</style>
