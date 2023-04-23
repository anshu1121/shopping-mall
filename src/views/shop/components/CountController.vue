<template>
  <div class="controller" :style="controStyle">
    <div class="iconfont reduce" @click="handleSubtract" v-show="count">&#xe8b1;</div>
    <p v-show="count">{{ count }}</p>
    <div class="iconfont add" @click="handleIncrease">&#xe728;</div>
  </div>
</template>
<script>
import { reactive, computed, toRefs, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

// 添加/减少商品相关的逻辑
function useCountEffect (product) {
  const route = useRoute()
  const store = useStore()
  const { cartData } = reactive(store.state)
  const shopId = route.params.shopId
  const productId = product._id
  // 商品数量
  const count = computed(() => cartData?.[shopId]?.[productId]?.count)

  // 添加商品
  function handleIncrease () {
    store.commit('handleIncrease', {
      shopId, productId, product
    })
  }
  // 减少商品
  function handleSubtract () {
    store.commit('handleSubtract', {
      shopId, productId
    })
  }

  return { count, handleIncrease, handleSubtract }
}

export default {
  name: 'CountController',
  props: ['product', 'controStyle'],
  setup (props) {
    const { product } = reactive(props)
    const { count, handleIncrease, handleSubtract } = useCountEffect(product)
    return { count, handleIncrease, handleSubtract }
  }
}
</script>
<style lang="scss" scoped>
.controller {
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
