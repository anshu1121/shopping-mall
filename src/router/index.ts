import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/Login.vue'
import Home from '@/views/home/Home.vue'
import Cart from '@/views/cart/Cart.vue'
import MyOrder from '@/views/myOrder/index.vue'
import My from '@/views/my/index.vue'
import Search from '@/views/search/index.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/:pathMath(.*)',
  //   redirect: '/404'
  // },
  // {
  //   path: '/404',
  //   name: 'NotFound',
  //   meta: {
  //     title: 'Page Not Found'
  //   },
  //   component: () => import('@/views/login/Login.vue')
  // },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/shop/:shopId',
    name: 'shop',
    component: () => import('@/views/shop/Shop.vue')
  },
  {
    path: '/order/:shopId',
    name: 'order',
    component: () => import('@/views/order/Order.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/myOrder',
    name: 'myOrder',
    component: MyOrder
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },
  {
    path: '/editUserInfo',
    name: 'editUserInfo',
    component: () => import('@/views/editUserInfo/index.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.getItem('isLogin')
      isLogin ? next({ name: 'home' }) : next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  const isLogin = localStorage.getItem('isLogin')
  if (!isLogin && to.name !== 'login') {
    // 如果没登陆并且访问的不是login，就跳转到login
    return { name: 'login' }
  } else {
    // 如果登录了或者访问的时login，就跳转
    return true
    // 此处的问题是，如果登录了还继续访问的login需要跳转到首页
    // 这个问题在route login的beforeEnter中解决
  }
})
export default router
