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
