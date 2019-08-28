<template>
  <div class="">
  <div class="blogs-home">
            <v-row class="demo-row">
                <v-col class="demo-col demo-col-1" span="18">
                   <div class="newPub margin-bottom-15">
                      <v-card>
                          <p class="blog-name">{{$route.name}}</p>
                      </v-card>
                  </div>
                  <!-- 最新发博客列表 -->
                  <blogList  :prop="pageArr" />
                  <div class="margin-bottom-15" v-if="total > 10">
                        <v-page 
                               :total-row="total" 
                                align="center"
                                v-model="current"
                                @page-change="pagePhotoChange"></v-page>
                  </div>
                  <div style="textAlign:center;fontSize:16px;color:#333;" v-show="total == 0">
                     无数据
                  </div>
                </v-col>
                <v-col class="demo-col demo-col-3" span="6">
                    <div  class="margin-left-13">
                        <!-- 推荐文章 -->
                        <div>
                          <samllBlogList :prop="rightList"/>
                        </div>
                    </div>

                    <div  class="margin-left-13 margin-top-10">                    
                      <div>
                          <commonstyle  v-for=" (item , index) in arrList" :prop="item" :key="index"/>
                      </div>
                    </div>
                        
                </v-col>     
            </v-row>

  </div>
  </div>
</template>

<script>
import blogList from '../common/blogList.vue'
import samllBlogList from '../common/smallBlogList'
import  commonstyle from './commonStyle.vue'

export default {
  name: 'componentCommon',
  props:['contentList','rightList'],
  data() { 
    return {
          current:1,
          total:0,
          pageArr: [],
          arrList:[
            {name:'申请链接',url:'siteOutLink'},
            {name:'广告位',url:'advertising'},       
         ]
    }
  },
  mounted() {
    this.getData({pageNumber: 1, pageSize: 10});
  },
  methods: {
    pagePhotoChange(pInfo){
       this.getData(pInfo);
    },
    getData(obj){
        var  _this = this ;
        this.$axios({
          method:'get',
          url:'/searchBlog',
          params:{
                keyWord:this.$route.name,
                category:true,
                curPage:obj.pageNumber,
                pageSize:obj.pageSize             
            },   
        }).then((res)=>{
          console.log('res--data',res);
          this.pageArr = res.data.list;
          this.total =  res.data.total;
        })
    }
  },
  components: {
    blogList,samllBlogList,commonstyle
  }
 }
</script>

<style  scoped>
.blog-name{
  color:#108ee9;
  font-weight: 900;
}
</style>