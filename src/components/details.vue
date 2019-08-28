<template>
  <div class="detail-home">
            <v-row class="demo-row">
                <v-col class="demo-col demo-col-1" span="18">
                <div class="blog-title">
                  <p>{{detailObj.b_title}}</p>
                  <div class="b-card-bottom  margin-top-10">
                      <span class="muted margin-right-20">
                          <v-icon type="user"></v-icon>
                          {{detailObj.b_operator}}
                      </span>
                      <span class="muted margin-right-20">
                          <v-icon type="calendar"></v-icon>
                           {{detailObj.b_creat_time}}
                      </span>
                      <span class="muted margin-right-20">
                          <v-icon type="eye-o"></v-icon>
                           {{detailObj.b_read_number}}
                      </span>
                      <span class="muted margin-right-20">
                          <v-icon type="message"></v-icon>
                          [{{ detailObj.b_category }}]({{ detailObj.b_type }})
                      </span>
                  </div>
                </div>
                <article class="article-content">
                  <!-- 摘要 -->
                    <div class="article-content-blockquote">
                        <strong>摘要：</strong>
                        <span>
                          {{detailObj.b_discript}}
                        </span>
                    </div>
                  <div v-html="detailObj.b_content">
  
                  </div>
                </article>                
                </v-col>
                <v-col class="demo-col demo-col-3" span="6">
                    <div  class="margin-left-13">
                        <!-- 推荐文章 -->
                        <div>
                          <samllBlogList :prop="samllHotTag"/>
                        </div>
                      </div>
                </v-col>     
            </v-row>

  </div>
</template>

<script>

import samllBlogList from '../common/smallBlogList'
export default {
  name: '',
  data() { 
    return {
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
        },
        detailObj:{

        }       
    }
  },
  components: {
    samllBlogList
  },
  mounted () {
    console.log(this.$route,'detaills')
  },
  created() {
        var  _this = this ;
        this.$axios({
          method:'get',
          url:'/searchBlog',
          params:{
                id:this.$route.params.id,         
            },   
        }).then((res)=>{
          console.log('res--data',res);
          this.detailObj =res.data.list[0];
        })
  },
 }
</script>

<style>
.article-content{
    position: relative;
    padding: 10px 20px 20px 20px;
    background-color: #fff;
    word-wrap: break-word;
    font-size: 14px;
    line-height: 25px;
    word-break: break-all;
    min-height: 800px;
}
.article-content-blockquote {
    margin: 5px auto;
    padding: 10px 15px 5px;
    border: 1px solid #D6E9C6;
    background-color: #fafff8;
    font-size: 12px;
    line-height: 20px;
    border-left-width: 3px;
}
.detail-home{
  width: 100%;
}
.margin-left-13{
  margin-left: 13px;
  width:95%;
}
.margin-left-13>div{
  margin-bottom: 10px;
}
 .detail-home pre.ql-syntax {
    background-color: #23241f;
    color: #f8f8f2;
    overflow: visible;
}
.detail-home pre {
    white-space: pre-wrap;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 5px 10px;
    border-radius: 3px;
}
.blog-title{
    padding: 8px 10px 12px;
    background: #e9e9e9;
}
.blog-title p{
  font-size: 20px;
}







</style>