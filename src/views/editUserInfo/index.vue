<template>
  <div class="user">
    <input placeholder="请输入新昵称" v-model="userName" />
    <button @click="changeUserName">提交</button>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from '@/utils/common.js'

const router = useRouter()
const store = useStore()
const userName = ref(store.state.userName)

const changeUserName = () => {
  store.commit('changeUserName', userName.value)
  toast('修改成功')
  setTimeout(() => {
    router.back()
  }, 1000)
}

</script>
<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: .3rem .16rem;
  padding-top: .1rem;
  >*{
    margin-top: .2rem;
  }
  input {
    padding: .05rem .1rem;
    line-height: .2rem;
    border: 1px solid #C2C4CA;
    border-radius: .05rem;
  }
  button {
    padding: .1rem 0;
    background: #3A6FF3;
    border-radius: .05rem;
    border: none;
    text-align: center;
    color: #FFF;
  }
}
</style>
