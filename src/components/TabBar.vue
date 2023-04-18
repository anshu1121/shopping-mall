<template>
  <div class="docker">
    <div
      v-for="tab of tabList"
      :key="tab.id"
      class="docker__item"
     >
      <div class="iconfont" v-html="tab.icon"></div>
      <div class="title">{{ tab.text }}</div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'TabBar',
  data () {
    return {
      tabList: [
        {
          icon: '&#xe674;',
          text: '首页',
          id: '1001'
        },
        {
          icon: '&#xe600;',
          text: '购物车',
          id: '1002'
        },
        {
          icon: '&#xe601;',
          text: '订单',
          id: '1003'
        },
        {
          icon: '&#xe604;',
          text: '我的',
          id: '1004'
        }
      ]
    }
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
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
    }
    .title {
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
