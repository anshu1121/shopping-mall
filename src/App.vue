<template>
  <router-view></router-view>
  <TabBar v-if="isShow" :tabList="tabList" v-model:currentTab="currentTab" />
</template>
<script lang="ts">
// import { useRouter } from 'vue-router'
import { ref } from 'vue'
import TabBar from './components/TabBar.vue'

export default {
  name: 'App',
  components: {
    TabBar
  },
  setup () {
    const tabList = ref([
      {
        icon: '&#xe674;',
        text: '首页',
        id: 'home',
        to: '/'
      },
      {
        icon: '&#xe600;',
        text: '购物车',
        id: 'cart',
        to: '/cart'
      },
      {
        icon: '&#xe601;',
        text: '订单',
        id: 'myOrder',
        to: '/myOrder'
      },
      {
        icon: '&#xe604;',
        text: '我的',
        id: 'my',
        to: '/my'
      }
    ])
    const currentTab = ref('home')
    return { tabList, currentTab }
  },

  // 在App获取当前路由名称
  // 第一种，使用computed和this.$route.name
  computed: {
    isShow () {
      const disabledTabRoutes = ['login', 'shop', 'order']
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
