<template>
  <div class="login container">
    <img src="@/assets/imgs/user.png" alt="">
    <input type="text" placeholder="请输入用户名" v-model="userInfo.username">
    <input type="password" placeholder="请输入密码"  v-model="userInfo.password">
    <div class="login-btn" @click="loginHandler">登录</div>
    <div class="registry">
      <span>立即注册</span>
    </div>
  </div>
  <Toast v-show="showToast">{{ toastMsg }}</Toast>
</template>
<script lang="ts">
// import { useRouter } from 'vue-router' // vue3使用router方式
import router from '@/router' // vue2使用router方式
import { post } from '@/utils/request.js'
import Toast from '@/components/Toast.vue'

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
  components: { Toast },
  data () {
    return {
      userInfo: {
        username: '',
        password: ''
      },
      showToast: false,
      toastMsg: ''
    }
  },
  methods: {
    toast (message: string) {
      this.showToast = true
      this.toastMsg = message
      setTimeout(() => {
        this.showToast = false
        this.toastMsg = ''
      }, 2000)
    },
    async loginHandler () {
      try {
        const res = await post('/api/login', this.userInfo)
        if (res.success === 1) {
          localStorage.isLogin = true
          router.push({ name: 'home' })
        } else {
          this.toast('登录失败')
        }
      } catch (err) {
        this.toast('请求失败')
      }
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
