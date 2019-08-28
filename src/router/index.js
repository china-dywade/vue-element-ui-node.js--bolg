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
})
