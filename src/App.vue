<template>
  <HomeView />
  <TabBar />
</template>
<script lang="ts">
import HomeView from './views/home/Home.vue'
import TabBar from './components/TabBar.vue'

export default {
  name: 'App',
  components: {
    HomeView,
    TabBar
  }
}
</script>
