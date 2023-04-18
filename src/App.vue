<template>
  <div class="container">
    container
  </div>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe674;</div>
      <div class="title">
        首页
      </div>
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
  .container{
    position: absolute;
    top: 0;
    left: 0;
    bottom: .5rem;
    width: 100%;
    box-sizing: border-box;
    background-color: #F1F1F1;
  }
  .docker{
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    height: .5rem;
    padding: 0 .18rem;
    box-sizing: border-box;
    border-top: .01rem solid #F1F1F1 ;
    &__item{
      flex: 1;
      text-align: center;
      color: #000;
      .iconfont{
        font-size: .2rem;
        margin: .07rem 0 .02rem 0;
      }
      .title{
        font-size: .2rem;
        transform: scale(.5, .5);
        transform-origin: center top;
        a{
          text-decoration: none;
        }
      }
      &--active{
        color: #1FA4FC;
        a{
          color: #1FA4FC;
        }
      }
    }
  }
</style>
