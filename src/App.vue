<template>
  <router-view></router-view>
  <TabBar v-if="isShow" />
</template>
<script lang="ts">
// import { useRouter } from 'vue-router'
import TabBar from './components/TabBar.vue'

export default {
  name: 'App',
  components: {
    TabBar
  },
  // data () {
  //   return {
  //     tabShow: true
  //   }
  // },
  // 第一种，使用computed和this.$route.name
  computed: {
    isShow () {
      const disabledTabRoutes = ['login']
      return !disabledTabRoutes.includes(this.$route.name)
    }
  }
  // 第二种，使用mounted和window.location
  // mounted () {
  //   const path = window.location.hash
  //   this.tabShow = !(path.indexOf('login') > 0)
  // }
  // 第三种，使用watch监听$route
  // watch: {
  //   // 写法1
  //   // $route: {
  //   //   handler (newValue, oldValue) {
  //   //     console.log(newValue, oldValue)
  //   //     console.log(this.$route.name)
  //   //   }
  //   // },
  //   // 写法2
  //   '$route' (newValue, oldValue) {
  //     const name = newValue.name
  //     console.log(name)
  //   }
  // }
}
</script>
