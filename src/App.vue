<template>
  <router-view></router-view>
  <TabBar v-if="isShow" />
</template>
<script lang="ts">
import TabBar from './components/TabBar.vue'

export default {
  name: 'App',
  components: {
    TabBar
  },
  computed: {
    isShow () {
      const disabledTabRoutes = ['login']
      return !disabledTabRoutes.includes(this.$route.name)
    }
  }
}
</script>
