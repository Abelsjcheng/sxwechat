import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/login/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  // base:'/dist', // tomcat配置
  routes: [
    {
      path: '/', // 一级路由
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
      path: '/home_info', // 一级url路径
      name: 'info',
      component: () =>
          import('@/components/home/info')
    },
    {
      path: '/home_project', // 一级url路径
      name: 'project',
      component: () =>
          import('@/components/home/project')
    },
    {
      path: '/home_quan', // 一级url路径
      name: 'quan',
      component: () =>
          import('@/components/home/quan')
    },
    {
      path: '/home_workguide', // 一级url路径
      name: 'workguide',
      component: () =>
          import('@/components/home/workguide')
    },
    {
      path: '/home_village', // 一级url路径
      name: 'village',
      component: () =>
          import('@/components/home/village')
    },
    {
      path: '/home_tourism', // 一级url路径
      name: 'tourism',
      component: () =>
          import('@/components/home/tourism')
    },
    {
      path: '/party_helppoor', // 一级url路径
      name: 'helppoor',
      component: () =>
          import('@/components/party/helppoor')
    },
    {
      path: '/party_partyactivity', // 一级url路径
      name: 'partyactivity',
      component: () =>
          import('@/components/party/partyactivity')
    },
    {
      path: '/party_partynews', // 一级url路径
      name: 'partynews',
      component: () =>
          import('@/components/party/partynews')
    },
    {
      path: '/party_shishizhenshi', // 一级url路径
      name: 'shishizhenshi',
      component: () =>
          import('@/components/party/shishizhenshi')
    }
  ]
})
