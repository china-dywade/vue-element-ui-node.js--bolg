import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    loadding: false, 
    isNavActive: '网站首页',
    navList: [
      {
        name: '首页',
        url: '/mainHome',
        level: 1
      },
      {
        name: '博客',
        url: '/blog',
        level: 1
      },
      {
        name: '学习',
        url: '/study',
        level: 1
      },
      {
        name: '生活',
        url: '/life',
        level: 1
      },
      {
        name: '娱乐',
        url: '/happy',
        level: 1
      },
      {
        name: '留言',
        url: '/work',
        level: 1
      },
      {
        name: '注册',
        url: '/login',
        level: 1
      },
      {
        name: '登录',
        url: '/login',
        level: 1
      }
    ],
    bloglist: [],
    searchlist: []
  },
  getters: {
    getLoadding (state) {
      return state.loadding ; 
    },
    getNavList (state) {
      return state.navList ;
    },
    getBlogList (state) {
      return state.bloglist;
    },
    getSearchList (state) {
      return  state.searchlist;  
    }
  },
  mutations: {
    showLoad (state) {
      state.loadding = true ;
    },
    hideLoad (state) {
      state.loadding = false;
    },
    changeBlogList (state,value) {

      state.bloglist = value ; 
    },
    changeSearchList(state, value) {

        state.searchlist = value;
    }

  },
  actions: {
    cmmitShowLoad (content) {
      content.commit('showLoad');
    },
    cmmitHideLoad (content) {
      content.commit('hideLoad');
    },
    cmmitChangeBlogList(content) {

      content.commit('changeBlogList');

    },
    cmmitChangeSearchList(content) {

      content.commit('changeSearchList');

    }
  }

})

export default store;
