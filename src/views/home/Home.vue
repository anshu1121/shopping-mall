<template>
  <div class="home container">
    <ShoppingType />
  </div>
</template>

<script lang="ts">
import ShoppingType from './components/ShoppingType.vue'

export default {
  name: 'HomeView',
  components: {
    ShoppingType
  }
}
</script>
<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0.5rem;
  width: 100%;
  padding: 0 0.18rem;
  box-sizing: border-box;
}
</style>
