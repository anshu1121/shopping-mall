import { createStore } from 'vuex'

function setLocalCartData (state) {
  const { cartData } = state
  window.localStorage.localCartData = JSON.stringify(cartData)
}
function getLocalCartData () {
  const localCartData = window.localStorage.localCartData ? JSON.parse(window.localStorage.localCartData) : {}
  return localCartData
}

function setLocalOrderData (state) {
  const { orderData } = state
  window.localStorage.localOrderData = JSON.stringify(orderData)
}
function getLocalOrderData () {
  let localOrderData = {}
  if (window.localStorage.localOrderData) {
    localOrderData = JSON.parse(window.localStorage?.localOrderData)
  }
  return localOrderData
}

export default createStore({
  state: {
    userName: '热心市民',
    cartData: getLocalCartData(),
    // 购物车中的数据结构
    // cartData: {
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
    // }
    orderData: getLocalOrderData() // 和购物车数据结构一致
  },
  getters: {},
  mutations: {
    // 增加商品
    handleIncrease (state, params) {
      const { shopId, shopName, productId, product } = params
      let shopInfo = state.cartData[shopId]
      // 如果这个shopId下没有shopInfo，就新建一个空shopInfo
      if (!shopInfo) shopInfo = {}
      shopInfo.shopName = shopName
      let productData = shopInfo?.productData
      if (!productData) productData = {}
      let productInfo = productData?.[productId]

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
      productData[productId] = productInfo
      shopInfo.productData = productData
      // 为cartData添加shopInfo
      state.cartData[shopId] = shopInfo
      setLocalCartData(state)
    },
    // 减少商品
    handleSubtract (state, params) {
      const { shopId, productId } = params
      const cartData = state.cartData
      const productInfo = cartData[shopId]?.productData[productId]
      productInfo.count -= 1
      if (productInfo.count === 0) {
        delete cartData[shopId]?.productData[productId]
      } else {
        cartData[shopId].productData[productId] = productInfo
      }
      setLocalCartData(state)
    },

    // 单个商品check
    handleCheck (state, params) {
      const { shopId, productId } = params
      const productInfo = state.cartData[shopId]?.productData[productId]
      productInfo.checked = !productInfo.checked
      setLocalCartData(state)
    },

    // 全选
    checkAll (state, params) {
      const { shopId, isAllChecked } = params
      const productData = state.cartData[shopId]?.productData
      for (const key in productData) {
        productData[key].checked = !isAllChecked
      }
      state.cartData[shopId].productData = productData
      setLocalCartData(state)
    },

    // 清空购物车
    clearCart (state, params) {
      const { shopId } = params
      delete state.cartData[shopId]
      setLocalCartData(state)
    },

    // 修改用户名
    changeUserName (state, val) {
      state.userName = val
    },

    // 付款后加入到订单列表数据
    addToOrderData (state, params) {
      const { shopId } = params
      console.log(state.orderData)
      state.orderData[shopId] = state.cartData[shopId]
      delete state.cartData[shopId]
      setLocalOrderData(state)
    }
  },
  actions: {},
  modules: {}
})
