<template>
  <div class="blog-home">

            <header>
                <div class="blog-nav-fixed">
                    <v-header>
                        <div class="blog-nav-container">
                              <v-row>
                                <v-col span="12">
                                      <span class="logo">
                                        <v-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></v-avatar>
                                      </span>
                                      <span class="name">
                                        <router-link to="/">韦德牌男人的博客</router-link>
                                      </span>
                                      <input class="search-input"  ref ="searchInput" placeholder ="请输入您的搜索内容" type="input" @change.enter="seachVal($event)">
                                </v-col>
                                <v-col span="12">    
                                      <v-row>
                                            <v-col span="3" v-for="(item,index) in  $store.state.navList" :key="index"><router-link :to="item.url">{{item.name}}</router-link></v-col>
                                      </v-row>
                                </v-col>
                              </v-row>
                        </div>
                      </v-header>
                  </div>
            </header> 
            <main class="margin-top-20">           
                  
                    <router-view></router-view>
                            
            </main> 
          
  </div>
</template>

<script>
import heads from '../common/head.vue';
import {mapGetters} from 'VUEX'
export default {
  name: '',
  data() { 
    return {

    }
  },
  components: {
      heads
  },
  methods: {
    goBack(){
      this.$router.push('/')
    },
    seachVal(e){
      console.log(e.target.value,'eeee');
      if(e.target.value ==""){
        return false;            
      }else{
        this.$router.push({ name: 'search', params: { id: e.target.value}} );
        this.$refs.searchInput.value ="";
 
      }
    }
    
  }
 }
</script>

<style>
.search-input{
      outline: none;
      padding-left: 10px;
      padding-right: 10px;
      margin-top:17px;
      width: 275px;
      border: 1px solid #108ee9;
     
      border-radius: 30px;
      height: 30px;
      color: #bbb;
      float:right;
}
input.search-input:hover {
    border-color: #108ee9;
     opacity: .8;
    border-radius: 5px;
    border-radius: 30px;
    color: #444;
}
.blog-home{
  position: relative;
  width: 100%;
}
.blog-home .ant-col-3{
  text-align:right;
}
header{
  height: 64px;
}

main{
    min-height: 850px;
}
.blog-nav-fixed{
  position: fixed;
  left:0;
  width:100%;
  height: 64px;
  z-index: 100;
  box-shadow: #dcdcdc 1px 1px 2px;
}

.blog-nav-fixed .ant-layout-header{
  background-color: #fff;
  padding: 0;
}
.blog-nav-container{
  width: 1100px;
  margin: auto;
}

.blog-nav-container .logo{
  display: inline-block;
  position: relative;
  top:8px;
  padding-right: 5px;
} 

.name a{
  color:#3e3e3e;
  font-size: 22px;
}
.blog-nav-container .ant-col-4{
  text-align: right;
}
.blog-nav-container a{
    color:#3e3e3e;
}
.blog-nav-container .router-link-active{
  color:#108ee9;
}

</style>