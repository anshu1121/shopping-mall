<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { reactive } from 'vue'

export default {
  name: 'Toast'
}
export function useToastEffect () {
  const toastInfo = reactive({
    isToastShow: false,
    toastMsg: ''
  })
  function toast (message: string) {
    toastInfo.isToastShow = true
    toastInfo.toastMsg = message
    setTimeout(() => {
      toastInfo.isToastShow = false
      toastInfo.toastMsg = ''
    }, 2000)
  }
  return { toastInfo, toast }
}
</script>
<style lang="scss" scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: .1rem;
  background-color: rgba($color: #000, $alpha: .3);
  border-radius: .05rem;
  color: #fff;
  font-size: .14rem;
}
</style>
