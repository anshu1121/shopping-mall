<template>
  <!-- 位置 -->
  <div class="position">
    <span class="iconfont">&#xe6c0;</span>
    <p>北京理工大学国防科技园2号楼10层</p>
    <span class="iconfont">&#xe64a;</span>
  </div>
  <!-- 搜索框 -->
  <SearchInput :placeholder="'山姆会员商店优惠商品'" />
  <!-- banner -->
  <div class="banner">
    <img src="@/assets/imgs/banner.jpg" alt="banner" />
  </div>
  <!-- 购物分类 -->
  <div class="shopping-type">
    <div class="shopping-type__item">
      <img src="@/assets/imgs/supermarket.png" />
      <p>超市便利</p>
    </div>
    <div class="shopping-type__item">
      <img src="@/assets/imgs/foodmarket.png" />
      <p>菜市场</p>
    </div>
    <div class="shopping-type__item">
      <img src="@/assets/imgs/fruit.png" />
      <p>水果店</p>
    </div>
    <div class="shopping-type__item">
      <img src="@/assets/imgs/flower.png" />
      <p>鲜花绿植</p>
    </div>
    <div class="shopping-type__item">
      <img src="@/assets/imgs/medicine.png" />
      <p>医药健康</p>
    </div>
    <div class="shopping-type__item">
      <img src="@/assets/imgs/homefurnishing.png" />
      <p>家居时尚</p>
    </div>
    <div class="shopping-type__item">
      <img src="@/assets/imgs/cake.png" />
      <p>烘培蛋糕</p>
    </div>
    <div class="shopping-type__item">
      <img src="@/assets/imgs/signin.png" />
      <p>签到</p>
    </div>
    <div class="shopping-type__item">
      <img src="@/assets/imgs/majorsuit.png" />
      <p>大牌免运</p>
    </div>
    <div class="shopping-type__item">
      <img src="@/assets/imgs/redenvelope.png" />
      <p>红包套餐</p>
    </div>
  </div>
  <div class="gap"></div>
</template>
<script lang="ts">
import SearchInput from '@/components/SearchInput.vue'

export default {
  components: { SearchInput }
}
</script>
<style lang="scss" scoped>
.position {
  display: flex;
  flex-direction: row;
  height: 0.22rem;
  line-height: 0.22rem;
  padding: 0.16rem 0;
  > p {
    flex: 1;
    margin-left: 0.085rem;
    font-size: 0.16rem;
  }
  .iconfont {
    font-size: 0.19rem;
  }
}
.banner {
  width: 100%;
  height: 0.86rem;
  margin-top: 0.12rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.shopping-type {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  &__item {
    width: 20%;
    margin-top: 0.16rem;
    text-align: center;
    img {
      width: 0.4rem;
      height: 0.4rem;
      margin-bottom: 0.06rem;
    }
  }
}
.gap {
  height: 0.1rem;
  margin: auto -0.18rem;
  margin-top: 0.16rem;
  background-color: #f1f1f1;
}
</style>
