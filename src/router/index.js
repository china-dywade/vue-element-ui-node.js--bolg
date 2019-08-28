import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import mainHome from '@/components/mainHome'
import blog from '@/components/blog'
import happy from '@/components/happy'
import study from '@/components/study'
import life from '@/components/life'
import work from '@/components/work'
import search from '@/components/search'
import details from '@/components/details'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/mainHome'
    },
    // 主页
    {
      path: '/',
      name: 'homepage',
      component: homepage,
      children: [
        // 首页
        {
          path: '/mainHome',
          name: '主页',
          component: mainHome
        }, 

        // 博客
        {
          path: '/blog',
          name: '博客',
          component: blog
        },

        // yule
        {
          path: '/happy',
          name: '娱乐',
          component: happy
        },

        // 学习
        {
          path: '/study',
          name: '学习',
          component: study
        },

        // 生活
        {
          path: '/life',
          name: '生活',
          component: life
        },

        // 留言
        {
          path: '/work',
          name: '留言',
          component: work
        },

        // 搜索页
        {
          path: '/search/:id',
          name: 'search',
          component: search
        },

        // 博客详情页
        {
          path: '/details/:id',
          name: '博客详情页',
          component: details
        }

      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }

  ]
})
