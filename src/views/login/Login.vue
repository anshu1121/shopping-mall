<template>
  <div class="login container">
    <img src="@/assets/imgs/user.png" alt="">
    <input type="text" placeholder="请输入用户名" v-model="username">
    <input type="password" placeholder="请输入密码"  v-model="password">
    <div class="login-btn" @click="loginHandler">登录</div>
    <div class="registry">
      <span>立即注册</span>
    </div>
  </div>
  <Toast v-show="toastInfo.isToastShow">{{ toastInfo.toastMsg }}</Toast>
</template>
<script lang="ts">
import { useRouter } from 'vue-router' // vue3使用router方式
import { post } from '@/utils/request.js'
import Toast, { useToastEffect } from '@/components/Toast.vue'
import { reactive, toRefs } from 'vue'

export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const router = useRouter()
    const userInfo = reactive({
      username: '',
      password: ''
    })
    const { toastInfo, toast } = useToastEffect()
    async function loginHandler () {
      try {
        const res = await post('/api/login', userInfo)
        if (res.success === 1) {
          localStorage.isLogin = true
          router.push({ name: 'home' })
        } else {
          toast('登录失败')
        }
      } catch (err) {
        toast('请求失败')
      }
    }
    const { username, password } = toRefs(userInfo)
    return { toastInfo, username, password, loginHandler }
  }
}
</script>
<style lang="scss" scoped>
.container{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 .4rem;
  text-align: center;
  font-size: .16rem;
  img{
    width: .66rem;
    height: .66rem;
    margin-top: 1rem;
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
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);;
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
