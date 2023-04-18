<template>
  <router-view></router-view>
  <TabBar />
</template>
<script lang="ts">
import TabBar from './components/TabBar.vue'

export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>
