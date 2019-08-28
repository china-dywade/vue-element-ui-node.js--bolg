<template>
  <div class="main-home">
    <!-- 轮播图 -->
    <div class="main-home-carousel">
        <v-carousel   
          v-model="value"
          :height="280"
          :autoplay="setting.autoplay"
          :autoplay-speed="setting.autoplaySpeed"
          :dots="setting.dots"
          :trigger="setting.trigger"
          :arrow="setting.arrow"
        >     
            <v-carousel-item>
                <div class="demo-carousel">
                  <img src='../assets/banner_2.jpg'/>
                </div>
            </v-carousel-item>
            <v-carousel-item>
                <div class="demo-carousel">
                  <img src='../assets/banner_1.jpg'/>
                </div>
            </v-carousel-item>
            <v-carousel-item>
                <div class="demo-carousel">
                  <img src='../assets/banner_3.jpg'/>
                </div>
            </v-carousel-item>
         </v-carousel>
    </div>
    <!-- 内容区域 -->
    <div class="main-2-content padding-top-20">
            <v-row class="demo-row">
                <v-col class="demo-col demo-col-1" span="18">
                  <!-- <p class="margin-bottom-10">最新发布</p> -->
                  <div class="newPub margin-bottom-15">
                      <v-card>
                          <p class="">最新发布</p>
                      </v-card>
                  </div>
                  <!-- 最新发博客列表 -->

                  <blogList  :prop="bloglist" />

                </v-col>
                <v-col class="demo-col demo-col-3" span="6">
                  <div  class="margin-left-13">
                    <!-- 热门动态 -->

                    <div>
                        <hotTag :prop="hotTagProp"/>
                    </div>

                    <!-- 推荐文章 -->

                    <div>
                      <samllBlogList :prop="samllHotTag"/>
                    </div>

                    <!--网站统计  -->
                    
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
import hotTag from '../common/hotSlide.vue'
import samllBlogList from '../common/smallBlogList'
import  commonstyle from '../common/commonStyle'
export default {
  name: '',
  data() { 
    return {
        value: 0 ,
        cur_page: 1,
        pageSize:5,
        setting: {
            autoplay: true,
            autoplaySpeed: 2000,
            dots: 'inside',
            trigger: 'click',
            arrow: 'always'
        },
        arrList:[
            {name:'网站统计',url:'siteStats'},
            {name:'网站分享',url:'siteShare'},
            {name:'申请链接',url:'siteOutLink'},
            {name:'广告位',url:'advertising'},       
        ],
        bloglist:[

        ],
        hotTagProp:{
          title:"热门动态",
          taglist:this.$store.state.navList
        },
        samllHotTag:{
          title:"推荐文章",
          taglist:[
                {
                  blgid:'HMAMSDGAGA123',
                  btitle:'用SVG画出拼图块，并实现拼图功能，请收下我的膝盖',
                  bdescript:'如需看代码学习，如需看代码学习，请加Q群：169101712如需看代码学习，请加Q群：169101712如需看代码学习，请加Q群：169101712如需看代码学习，请加Q群：169101712如需看代码学习，请加Q群：169101712如需看代码学习，请加Q群：169101712如需看代码学习，请加Q群：169101712如需看代码学习，请加Q群：169101712如需看代码学习，请加Q群：169101712请加Q群：169101712如需看代码学习，请加Q群：169101712如需看代码学习，请加Q群：169101712',
                  bname:"韦德",
                  bimgsrc:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                  bcreattime:'2019-6-05',
                  bnumber:'656',
                  bcategory:"娱乐"
                },
                {
                  blgid:'HMAMSD666',
                  btitle:'用SVG画出拼图块，并实现拼图功能，请收下我的膝盖',
                  bdescript:'如需看代码学习，请加Q群：169101712',
                  bname:"韦德",
                  bimgsrc:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                  bcreattime:'2019-6-05',
                  bcategory:"生活",
                  bnumber:'6568888',
                }
          ]
        }

    }
  },
  components: {
    blogList,hotTag,samllBlogList,commonstyle
  },
  created() {
    var  _this = this ;
    this.$axios({
      method:'get',
      url:'/searchBlog',
      params:{
            keyWord:'',
            category:false,
            curPage:_this.cur_page,
            pageSize:_this.pageSize             
        },   
    }).then((res)=>{
      console.log('res--data',res);
      this.bloglist = res.data.list;
    })
  },
 }
</script>

<style>
.main-home{
  width: 100%;
}
.demo-carousel img{
  width:100%;
  height:100%;
}
.main-home-carousel{
 height:280px;
 width: 100%;
}
.margin-left-13{
  margin-left: 13px;
  width:95%;
}
.margin-left-13>div{
  margin-bottom: 10px;
}
.newPub .ant-card-body{
  padding:10px;
}


</style>