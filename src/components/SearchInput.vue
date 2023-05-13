<template>
  <div class="search-input">
    <span class="iconfont">&#xe65c;</span>
    <input
      ref="inputRef"
      type="text"
      v-model="searchContent"
      :placeholder="placeholder"
      @keyup.enter="handleSearch"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </div>
</template>
<script lang="ts" setup name="SearchInput">
import { onMounted, ref, unref } from 'vue'
import { useRouter } from 'vue-router'
const route = useRouter()

const props = defineProps({
  placeholder: String
})
const emits = defineEmits(['update:focused', 'onSearch'])

const inputRef = ref()
const searchContent = ref()

const handleFocus = () => {
  emits('update:focused', true)
}
const handleBlur = () => {
  emits('update:focused', false)
}

const handleSearch = () => {
  emits('onSearch', unref(searchContent))
}

onMounted(() => {
  const currentRouteName = route.currentRoute.value.name
  if (currentRouteName === 'search') unref(inputRef).focus()
})

</script>
<style lang="scss" scoped>
.search-input {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 0.32rem;
  padding: 0 0.16rem;
  border-radius: 0.16rem;
  background-color: #f5f5f5;

  .iconfont {
    font-size: 0.16rem;
    color: #b7b7b7;
  }

  input {
    flex: 1;
    margin-left: 0.12rem;
    padding: 0;
    font-size: 0.14rem;
    border: none;
    background: none;
    &:focus {
      border: none;
      outline: none;
    }
    &::placeholder {
      color: #333;
    }
  }
}</style>
