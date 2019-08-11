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
    },
    {
      path: '/home_info',
      name: 'info',
      redirect: '/home_info/policy', // 登录加载home_info
      component: () => import('@/components/home/info'),
      children: [
        {
          path: 'policy', // 二级url路径
          name: 'policy',
          component: () =>
              import('@/components/panel/policy') // 路由跳转
        },
        {
          path: 'notice', // 二级url路径
          name: 'notice',
          component: () =>
              import('@/components/panel/notice')
        },
        {
          path: 'news', // 二级url路径
          name: 'news',
          component: () =>
              import('@/components/panel/news')
        }
      ]
    },
    {
      path: '/home_project', // 二级url路径
      name: 'project',
      component: () =>
          import('@/components/home/project')
    },
    {
      path: '/home_quan', // 二级url路径
      name: 'quan',
      component: () =>
          import('@/components/home/quan')
    },
    {
      path: '/home_workguide', // 二级url路径
      name: 'workguide',
      component: () =>
          import('@/components/home/workguide')
    },
    {
      path: '/home_village', // 二级url路径
      name: 'village',
      component: () =>
          import('@/components/home/village')
    },
    {
      path: '/home_tourism', // 二级url路径
      name: 'tourism',
      component: () =>
          import('@/components/home/tourism')
    }

  ]
})
