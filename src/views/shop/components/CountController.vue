<template>
  <div class="controller">
    <div class="iconfont reduce" @click="number--" v-show="number !== 0">&#xe8b1;</div>
    <p v-show="number !== 0">{{ number }}</p>
    <div class="iconfont add" @click="number ++">&#xe728;</div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'CountController',
  setup () {
    const number = ref(0)
    return { number }
  }
}
</script>
<style lang="scss" scoped>
.controller {
  position: absolute;
  right: 0;
  bottom: .1rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    margin: 0 .1rem;
    font-size: .14rem;
  }

  >div {
    font-size: .2rem;
  }

  .reduce {
    color: #666;
  }

  .add {
    color: #0091FF;
  }
}
</style>
