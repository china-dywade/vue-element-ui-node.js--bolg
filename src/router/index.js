<<<<<<< HEAD
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/manageBlog',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: { title: '博客管理' }
                },
                {
                    path: '/pubBlog',
                    component: resolve => require(['../components/page/pubBlog.vue'], resolve),
                    meta: {
                        title: '发布博客'
                    }
                },
                {
                    path: '/updataPubBlog',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    name: 'blogs',
                    meta: {
                        title: '编辑博客'
                    }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
=======
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
>>>>>>> 946b0414f8c62bd92dee18a5ee510b387cb91c3e
})
