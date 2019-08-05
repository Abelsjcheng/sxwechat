import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/login/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home', // 登录加载mainview
      component: index,
      children: [
        {
          path: 'home', // 二级url路径
          name: 'home',
          component: () =>
              import('@/views/home/homePage') // 路由跳转
        },
        {
          path: 'party', // 二级url路径
          name: 'party',
          component: () =>
              import('@/views/party/partyPage')
        },
        {
          path: 'mine', // 二级url路径
          name: 'mine',
          component: () =>
              import('@/views/mine/minePage')
        }
      ]
    }
  ]
})
