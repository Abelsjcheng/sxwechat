import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/login/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // base: '/sxwechat',
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
      component: () => import('@/components/home/info')
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
    },
    {
      path: '/home_partners',
      name: 'partners',
      component: () => import('@/components/home/partners')
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
    },
    {
      path: '/mine_dynamic',
      name: 'dynamic',
      component: () =>
        import('@/components/mine/dynamic')
    },
    {
      path: '/mine_collect',
      name: 'collect',
      component: () =>
        import('@/components/mine/collect')
    },
    {
      path: '/mine_comment',
      name: 'comment',
      component: () =>
        import('@/components/mine/comment')
    },
    {
      path: '/mine_dianzan',
      name: 'dianzan',
      component: () =>
        import('@/components/mine/dianzan')
    },
    // {
    //   path: '/mine_news',
    //   name: 'mine_news',
    //   component: () =>
    //     import('@/components/mine/news')
    // },
    {
      path: '/party_work',
      name: 'party_work',
      component: () =>
        import('@/components/party/partywork')
    },
    {
      path: '/panel_comment', // 全部评论路径
      name: 'comment',
      component: () =>
        import('@/components/Infopanel/comment')
    }
  ]
})
