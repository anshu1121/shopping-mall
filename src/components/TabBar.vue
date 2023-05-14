<template>
  <div class="docker">
    <div
      v-for="tab in tabList"
      :key="tab.id"
      :class="{
        'docker__item': true,
        'docker__item--active': tab.id === currentTab
      }"
     >
      <div @click="routeTo(tab.id)">
        <div class="iconfont" v-html="tab.icon" />
        <div class="title">{{ tab.text }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useRouter } from 'vue-router'

function useRouteEffect (emit) {
  const router = useRouter()
  function routeTo (tabId) {
    emit('update:currentTab', tabId)
    router.push({ name: tabId })
  }
  return routeTo
}
export default {
  name: 'TabBar',
  props: ['tabList', 'currentTab'],
  setup (props, { emit }) {
    const routeTo = useRouteEffect(emit)
    return { routeTo }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/variable.scss';
.docker {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 0.5rem;
  padding: 0 0.18rem;
  box-sizing: border-box;
  border-top: $border;
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
