<template>
  <div class="my">
    <div class="my__bg"></div>
    <router-link to="/editUserInfo">
      <div class="iconfont edit">&#xe607;</div>
    </router-link>
    <div class="my__info">
      <div class="my__info__basic">
        <div class="user-avater"></div>
        <p class="user-name">{{ userName }}</p>
        <p class="user-id">ID：<span>1069643013</span></p>
        <hr />
        <div class="user-wallet">
          <div class="item">
            <span class="item-type">红包</span>
            <p class="item-data">218</p>
          </div>

          <div class="item">
            <span class="item-type">优惠券</span>
            <p class="item-data">88张</p>
          </div>

          <div class="item">
            <span class="item-type">鲜豆</span>
            <p class="item-data">888</p>
          </div>

          <div class="item">
            <span class="item-type">白条</span>
            <p class="item-data">998</p>
          </div>
        </div>
      </div>
      <div class="my__info__others">
        <div class="other-item">
          <span class="iconfont icon wallet">&#xe630;</span>
          <p class="name">钱包</p>
          <span class="iconfont link-to">&#xe65f;</span>
        </div>

        <div class="other-item">
          <span class="iconfont icon address">&#xe614;</span>
          <p class="name">我的地址</p>
          <span class="iconfont link-to">&#xe65f;</span>
        </div>

        <div class="other-item">
          <span class="iconfont icon service">&#xe602;</span>
          <p class="name">客服与帮助</p>
          <span class="iconfont link-to">&#xe65f;</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'

const store = useStore()
const { userName } = store.state

</script>
<style lang="scss" scoped>
.my {
  position: relative;
  padding: 0 0.18rem;
  .edit {
    position: absolute;
    right: .18rem;
    top: -.64rem;
    font-size: .24rem;
    color: #FFF;
    cursor: pointer;
  }
  &__bg {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 2.5rem;
    background-image: linear-gradient(239deg, #3a6ff3 0%, #50c7fb 100%);
  }
  &__info {
    &__basic {
      position: relative;
      margin-top: 1.08rem;
      padding: 0.16rem 0;
      background: #ffffff;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      .user-avater {
        position: absolute;
        left: 50%;
        top: -0.47rem;
        transform: translateX(-50%);
        width: 0.94rem;
        height: 0.94rem;
        border-radius: 0.94rem;
        background-image: linear-gradient(90deg, #50c7fb 0, #3a6ff3 100%);
      }
      .user-name {
        margin-top: 0.46rem;
        font-size: 24px;
        color: #262628;
        letter-spacing: 0.19px;
        text-align: center;
        line-height: 36px;
      }
      .user-id {
        margin-top: 0.1rem;
        font-size: 14px;
        color: #c1c0c9;
        text-align: center;
      }
      & > hr {
        height: 1px;
        margin: 0;
        margin-top: 0.12rem;
        border: none;
        background-color: #f1f1f1;
      }
      .user-wallet {
        display: flex;
        justify-content: space-around;
        margin-top: 0.12rem;
      }
      .item {
        text-align: center;
        &-type {
          line-height: 0.17rem;
          font-size: 0.12rem;
          color: #c1c0c9;
          text-align: center;
        }
        &-data {
          margin-top: 0.05rem;
          line-height: 0.28rem;
          font-size: 0.2rem;
          color: #262628;
          text-align: center;
        }
      }
    }
    &__others {
      margin-top: 0.16rem;
      padding: 0.16rem 0;
      background: #ffffff;
      box-shadow: 0 0.08rem 0.16rem 0 rgba(0, 0, 0, 0.08);
      border-radius: 0.08rem;
      .other-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0.16rem;
        margin-bottom: .24rem;
        &:last-child {
          margin-bottom: 0;
        }
        .icon {
          display: inline-block;
          width: 0.22rem;
          height: 0.22rem;
          line-height: 0.22rem;
          border-radius: 8px;
          text-align: center;
          font-size: 0.12rem;
          color: #fff;
        }
        .icon.wallet {
          background: #ed4a47;
        }
        .icon.address {
          background:  #32C5FF;
        }
        .icon.service {
          background: #9013FE;
        }
        .name {
          flex: 1;
          margin-left: 0.12rem;
          font-size: 14px;
          line-height: 0.2rem;
          color: #262626;
          text-align: left;
        }
        .link-to {
          font-size: 0.07rem;
          color: #c2c4ca;
        }
      }
    }
  }
}
</style>
