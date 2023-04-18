import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/Home.vue')
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

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('isLogin')
  if (!isLogin && to.name !== 'login') {
    // 如果没登陆并且访问的不是login，就跳转到login
    next({ name: 'login' })
  } else {
    // 如果登录了或者访问的时login，就跳转
    next()
    // 此处的问题是，如果登录了还继续访问的login需要跳转到首页
    // 这个问题在route login的beforeEnter中解决
  }
})
export default router
