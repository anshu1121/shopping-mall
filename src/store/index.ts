import { createStore } from 'vuex'

export default createStore({
  state: {
    // 购物车中的数据结构
    cartData: {
      // // 第一层：商店，用商店shopId标识
      // shopId: {
      //   shopName: '商店名称',
      //   productData: {
      //     // 第三层：商品，用商品的productId标识
      //     productId: {
      //       count: 1,
      //       _id: '1',
      //       name: '番茄250g/份',
      //       sales: 10,
      //       price: 33.6,
      //       oldPrice: 33.6
      //     }
      //   }
      // }
    }
  },
  getters: {},
  mutations: {
    // 增加商品
    handleIncrease (state, params) {
      const { shopId, productId, product } = params
      let shopInfo = state.cartData[shopId]
      // 如果这个shopId下没有shopInfo，就新建一个空shopInfo
      if (!shopInfo) shopInfo = {}
      let productInfo = shopInfo[productId]

      // 如果这个productId下没有productInfo,就把productInfo赋值为传进来的prodcuct，并且初始数量值设置为0
      if (!productInfo) {
        productInfo = product
        productInfo.count = 0
      }
      // 商品数量+1
      productInfo.count += 1
      // 默认商品被选中
      productInfo.checked = true
      // 为shopInfo添加productInfo
      shopInfo[productId] = productInfo
      // 为cartData添加shopInfo
      state.cartData[shopId] = shopInfo
    },
    // 减少商品
    handleSubtract (state, params) {
      const { shopId, productId } = params
      const cartData = state.cartData
      const productInfo = cartData[shopId][productId]
      productInfo.count -= 1
      if (productInfo.count === 0) {
        delete cartData[shopId][productId]
        return
      }
      cartData[shopId][productId] = productInfo
    },

    // 单个商品check
    handleCheck (state, params) {
      const { shopId, productId } = params
      const productInfo = state.cartData[shopId][productId]
      productInfo.checked = !productInfo.checked
    },

    // 全选
    checkAll (state, params) {
      const { shopId, isAllChecked } = params
      const shopInfo = state.cartData[shopId]
      for (const key in shopInfo) {
        shopInfo[key].checked = !isAllChecked
      }
      state.cartData[shopId] = shopInfo
    },

    // 清空购物车
    clearCart (state, params) {
      const { shopId } = params
      delete state.cartData[shopId]
    }
  },
  actions: {},
  modules: {}
})
