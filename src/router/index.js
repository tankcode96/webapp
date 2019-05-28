import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// import 的方式实现懒加载
// function loadView (view) {
//   return () => import(`@/components/${view}.vue`)
// }

// require 的方式实现懒加载
const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home')
const cart = r => require.ensure([], () => r(require('@/pages/cart/cart')), 'cart')
const memberInfo = r => require.ensure([], () => r(require('@/pages/member/info')), 'info')
const goodsDetail = r => require.ensure([], () => r(require('@/pages/goods/detail')), 'goodsDetail')
const helloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'helloWorld')

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'helloWorld'
    // },
    // {
    //   path: '/helloWorld',
    //   name: 'helloWorld',
    //   component: loadView('HelloWorld')
    // },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      meta: {
        index: 1
      },
      component: home
    },
    {
      path: '/cart',
      meta: {
        index: 1
      },
      component: cart
    },
    {
      path: '/info',
      meta: {
        index: 1
      },
      component: memberInfo
    },
    {
      path: '/goods/:id',
      meta: {
        index: 3
      },
      component: goodsDetail
    },
    {
      path: '/helloWorld',
      meta: {
        index: 1
      },
      component: helloWorld
    }
  ]
})
