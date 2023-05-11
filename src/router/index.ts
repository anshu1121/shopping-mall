import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/Login.vue'
import Shop from '@/views/shop/Shop.vue'
import Order from '@/views/order/Order.vue'
import Cart from '@/views/cart/Cart.vue'

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
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/shop/:shopId',
    name: 'shop',
    component: Shop
  },
  {
    path: '/order/:shopId',
    name: 'order',
    component: Order
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/myOrder',
    name: 'myOrder',
    component: () => import('@/views/myOrder/index.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/my/index.vue')
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
