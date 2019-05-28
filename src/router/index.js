import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// import 的方式实现懒加载
// function loadView (view) {
//   return () => import(`@/components/${view}.vue`)
// }

// require 的方式实现懒加载
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
      name: 'HelloWorld',
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
