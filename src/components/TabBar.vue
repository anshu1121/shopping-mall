<template>
  <div class="docker">
    <div
      v-for="(tab, index) in tabList"
      :key="tab.id"
      :class="{
        'docker__item': true,
        'docker__item--active': index === 0 && true
      }"
     >
      <router-link to="/">
        <div class="iconfont" v-html="tab.icon"></div>
        <div class="title">{{ tab.text }}</div>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'TabBar',
  setup () {
    const tabList = ref([
      {
        icon: '&#xe674;',
        text: '首页',
        id: '/'
      },
      {
        icon: '&#xe600;',
        text: '购物车',
        id: 'cart'
      },
      {
        icon: '&#xe601;',
        text: '订单',
        id: 'order'
      },
      {
        icon: '&#xe604;',
        text: '我的',
        id: 'my'
      }
    ])
    return { tabList }
  }
}
</script>
<style lang="scss" scoped>
.docker {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 0.5rem;
  padding: 0 0.18rem;
  box-sizing: border-box;
  border-top: 0.01rem solid #f1f1f1;
  background-color: #fff;
  &__item {
    flex: 1;
    text-align: center;
    font-size: 0.2rem;
    color: #000;
    a{
      color: #000;
      text-decoration: none;
    }
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
    }
    .title {
      transform: scale(0.5, 0.5);
      transform-origin: center top;
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
