<template>

  <div class="search-home">
            <v-row class="demo-row">
                <v-col class="demo-col demo-col-1" span="24">
                   <div class="newPub margin-bottom-15">
                      <v-card>
                          <p class="search-name">关于" <span class="corred">{{$route.params.id}}</span> "的搜索结果</p>
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
  
            </v-row>

  </div>

</template>

<script>
import blogList from '../common/blogList.vue'
import samllBlogList from '../common/smallBlogList'
import  commonstyle from '../common/commonStyle'

export default {
  name: 'componentCommon',
  data() { 
    return {
          current:1,
          pageArr: [],
          total:0,
          arrList:[
            {name:'申请链接',url:'siteOutLink'},
            {name:'广告位',url:'advertising'},       
         ]
    }
  },
  mounted () {
          
          this.$store.dispatch('cmmitShowLoad');
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
                keyWord:this.$route.params.id,
                curPage:obj.pageNumber,
                pageSize:obj.pageSize,
                isSearch:true           
            },   
        }).then((res)=>{
          console.log('res--data',res);
          setTimeout(() => {
              this.$store.dispatch('cmmitHideLoad');
              this.pageArr = res.data.list;
              this.total =  res.data.total;
          }, 1000);
 
         
        })
    }
  },
  watch: {
    '$route':{
      handler(val){ 
        console.log(val,'valval');
          if(val.params.id){
            this.$store.dispatch('cmmitShowLoad');
            this.getData({pageNumber: 1, pageSize: 10});
         
          }
       
      }
    }
    
  },
  components: {
    blogList,samllBlogList,commonstyle
  }
 }
</script>

<style>
.search-home .search-name{
  color:#108ee9;
  font-size: 20px;
  letter-spacing: 4px;
  text-align: center;
}
.search-home .bold{
  color:red !important;
  font-size: 16px; 
}
.search-home .corred{
  color:red;
  font-size: 20px;
  letter-spacing: 4px;
}
.search-home .ant-card:not(.ant-card-no-hovering):hover{
  -webkit-box-shadow: 0 0px 0px  rgba(0,0,0,.2);
  box-shadow: 0 0px 0px rgba(0,0,0,.2);
  border-color:#e9e9e9;

}
</style>