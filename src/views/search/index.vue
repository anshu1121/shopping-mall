<template>
  <div class="container">
    <div class="search">
      <SearchInput v-model:focused="isFocused" @onSearch="onSearch" />
      <div class="search__cancel" @click="router.back()">取消</div>
    </div>
    <div class="words" v-if="isFocused">
      <div class="history">
        <div class="title">
          <p>搜索历史</p>
          <span>清除搜索历史</span>
        </div>
        <ul>
          <li>尖椒肉丝</li>
          <li>鲜花</li>
          <li>山姆会员商店</li>
          <li>新鲜水果</li>
          <li>生日鲜花</li>
          <li>香槟玫瑰</li>
          <li>酸奶</li>
          <li>牛奶</li>
        </ul>
      </div>

      <div class="hot">
        <div class="title">
          <p>热门搜索</p>
        </div>
        <ul>
          <li>尖椒肉丝</li>
          <li>鲜花</li>
          <li>山姆会员商店</li>
          <li>新鲜水果</li>
          <li>生日鲜花</li>
          <li>香槟玫瑰</li>
          <li>酸奶</li>
          <li>牛奶</li>
        </ul>
      </div>
    </div>
    <div class="result" v-else>
      <template v-for="item of searchResult" :key="item._id">
        <ShopItem :shopInfo="item" />
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { get } from '@/utils/request'

const router = useRouter()
const isFocused = ref(true)
const state = reactive({
  searchResult: Object
})

const { searchResult } = toRefs(state)

const onSearch = async (val) => {
  try {
    const res = await get('/api/search', { query: val })
    if (res?.success === 1 && res?.data) {
      console.log(res.data)
      state.searchResult = res.data
      isFocused.value = false
    }
  } catch (err) {
    throw new Error(err)
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: .16rem .18rem;

  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__cancel {
      width: .4rem;
      margin-left: .12rem;
      font-size: .16rem;
      line-height: .16rem;
    }
  }

  .history,
  .hot {
    margin-top: .24rem;

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &>p {
        font-size: .16rem;
        line-height: .22rem;
      }
    }

    &>ul {
      overflow: hidden;

      li {
        float: left;
        margin-right: .1rem;
        margin-top: .12rem;
        padding: .08rem .1rem;
        line-height: .16rem;
        background: #F5F5F5;
        border-radius: 2px;
        color: #666666;
      }
    }
  }
}
</style>
