<<<<<<< HEAD

import Vue from 'vue';
import $ from 'jquery';
import App from './App';
import router from './router';

import axios from 'axios';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";

Vue.use(ElementUI, { size: 'small' });


axios.defaults.baseURL = 'http://localhost:4444/';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$axios = axios;
//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    const role = localStorage.getItem('ms_username');
    document.title = to.meta.title;
    if(!role && to.path !== '/login'){
        next('/login');
    }else if(to.meta.permission){
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    }else{
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        }else{
            next();
        }
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
=======
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import axios from 'axios';
import store from './store/index'
import 'vue-beauty/package/style/vue-beauty.min.css'
import vueBeauty from 'vue-beauty'
import page from 'v-page';
Vue.use(page, {
  language: 'zh'
});
Vue.config.productionTip = false;
Vue.use(vueBeauty);
axios.defaults.baseURL = 'http://localhost:4444/';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  document.title = to.name;
  console.log(store, 'store');
  // store.state.loadding = true;

  next();
})
>>>>>>> 946b0414f8c62bd92dee18a5ee510b387cb91c3e
