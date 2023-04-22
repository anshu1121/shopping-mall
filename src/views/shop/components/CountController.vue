<template>
  <div class="controller">
    <div class="iconfont reduce" @click="handleSubtract" v-show="true">&#xe8b1;</div>
    <p v-show="true">{{ count || 0 }}</p>
    <div class="iconfont add" @click="handleIncrease">&#xe728;</div>
  </div>
</template>
<script>
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore, mapState } from 'vuex'

function useCountEffect (product) {
  const route = useRoute()
  const store = useStore()
  const cartData = store.state.cartData
  const shopId = route.params.shopId
  const productId = product._id

  const count = computed(() => cartData?.[shopId]?.[productId]?.count)
  function handleIncrease () {
    store.commit('handleIncrease', {
      shopId, productId, product
    })
  }
  function handleSubtract () {
    console.log('subtract')
  }
  return { count, handleIncrease, handleSubtract }
}

export default {
  name: 'CountController',
  props: ['product'],
  setup (props) {
    const product = reactive(props.product)
    const { count, handleIncrease, handleSubtract } = useCountEffect(product)
    return { count, handleIncrease, handleSubtract }
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
