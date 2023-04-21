import { createStore } from 'vuex'

export default createStore({
  state: {
    // 购物车中的数据结构
    cartData: {
      // // 第一层：商店，用商店shopId标识
      // shopId: {
      //   // 第二层：商品，用商品的productId标识
      //   productId: {
      //     count: 1,
      //     _id: '1',
      //     name: '番茄250g/份',
      //     sales: 10,
      //     price: 33.6,
      //     oldPrice: 33.6
      //   }
      // }
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})
