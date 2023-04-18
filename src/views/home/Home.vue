<template>
  <div class="home container">
    <ShoppingType />
    <NearbyShop />
  </div>
</template>

<script lang="ts">
import ShoppingType from './components/ShoppingType.vue'
import NearbyShop from './components/NearbyShop.vue'

export default {
  name: 'HomeView',
  components: {
    ShoppingType,
    NearbyShop
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
  overflow-y: auto;
  box-sizing: border-box;
}
</style>
