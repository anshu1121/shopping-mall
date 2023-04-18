<template>
  <div class="login container">
    <img src="@/assets/imgs/user.png" alt="">
    <input type="text" placeholder="请输入手机号">
    <input type="password" name="" placeholder="请输入密码">
    <div class="login-btn" @click="loginHandler">登录</div>
    <div class="registry">
      <span>立即注册</span>
    </div>
  </div>
</template>
<script lang="ts">
// import { useRouter } from 'vue-router' // vue3使用router方式
import router from '@/router' // vue2使用router方式

export default {
  name: 'Login',
  // setup () {
  //   const router = useRouter()
  //   function loginHandler () {
  //     localStorage.isLogin = true
  //     router.push({ name: 'home' })
  //   }
  //   return {
  //     loginHandler
  //   }
  // },
  methods: {
    loginHandler () {
      localStorage.isLogin = true
      router.push({ name: 'home' })
    }
  }
}
</script>
<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.4rem .4rem 0;
  text-align: center;
  font-size: .16rem;
  img{
    width: .66rem;
    height: .66rem;
    margin-bottom: .4rem;
  }
  input{
    width: 100%;
    height: .48rem;
    margin-bottom: .16rem;
    padding: .1rem .16rem;
    line-height: .28rem;
    box-sizing: border-box;
    border: 1px solid rgba($color: #000, $alpha: .1);
    border-radius: .06rem;
    background-color: #F9F9F9;
  }
  .login-btn{
    width: 100%;
    height: .48rem;
    margin: .16rem 0;
    line-height: .48rem;
    background-color: #0091FF;
    color: #fff;
    text-align: center;
    box-shadow: 0 .04rem .08rem 0;
    border-radius: .04rem;
  }
  .registry{
    text-align: center;
    span{
      color: rgba($color: #000, $alpha: .5);
    }
  }
}
</style>
