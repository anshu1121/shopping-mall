<template>
  <div class="order">
    <div class="order__back"><span class="iconfont">&#xe8b5;</span>确认订单</div>
    <div class="order__address">
      <div class="order__address__content">
        <p class="text">收货地址</p>
        <p class="address">北京理工大学国防科技园2号楼10层</p>
        <p class="phone">张先生<span>18911024266</span></p>
      </div>
      <div class="iconfont order__address__choose">
        &#xe8b5;
      </div>
    </div>
    <div class="order__shop">
      <div class="order__shop__name">
        商店名称
      </div>
      <div class="order__shop__products">
        <div class="product">
          <img src="@/assets/imgs/ningmeng.png" alt="">
          <div class="name">
            <p>番茄250g/份</p>
            <p>33.6<span>x</span>3</p>
          </div>
          <div class="price">99.9</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import '@/assets/variable.scss';

.order{
  padding: 0 .18rem;
  &__back{
    padding: .18rem 0;
    text-align: center;
    line-height: .2rem;
    overflow: hidden;
    font-size: .16rem;
    span{
      display: block;
      float: left;
      font-size: .21rem;
      color: #000;
    }
  }
  &__address{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .16rem;
    box-sizing: border-box;
    border-radius: .04rem;
    background-color: #fff;
    &__content{
      .text{
        font-size: .16rem;
      }
      .address{
        margin-top: .14rem;
        font-size: .14rem;
      }
      .phone{
        margin-top: .06rem;
        font-size: .12rem;
        color: #666;
        span{
          display: inline-block;
          margin-left: .06rem;
        }
      }
    }
    &__choose{
      width: .16rem;
      margin-top: .16rem;
      font-size: .16rem;
      line-height: .16rem;
      color: #666;
      transform: rotate(180deg);
    }
  }
  &__shop{
    padding: .16rem;
    border-radius: .04rem;
    &__name{
      font-size: .16rem;
      line-height: .22rem;
    }
    &__products{
      .product{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        img{
          width: .46rem;
          height: .46rem;
        }
        .name{
          flex: 1;
          margin-left: .16rem;
          p:first-child{
            font-size: .14rem;
            line-height: .2rem;
          }
          p:nth-child(2) {
            margin-top: .06rem;
            color: $redColor;
            transform: scale(.875);
            transform-origin: left center;
            span{
              display: inline-block;
              margin: 0 .06rem;
            }
          }
        }
        .price{
          width: auto;
          align-self:flex-end;
          line-height: .14rem;
        }
      }
    }
  }
}
</style>
