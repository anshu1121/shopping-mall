<template>
  <div class="search-input">
    <span class="iconfont">&#xe65c;</span>
    <input type="text" :placeholder="placeholder" />
  </div>
</template>
<script lang="ts">
export default {
  name: 'SearchInput',
  props: {
    placeholder: String
  }
}
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
