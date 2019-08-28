<template>
  <div class="margin-top-20">
         <a :href="item.url" target="_blank" v-for="(item ,index) in linkList" :key="index">
                  <span class="linkTag" :class="index%2 !=0 ?'linkEven':''">
                    {{item.name}}
                  </span>

         </a>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
          linkList:[
            {name:'梦影雾花个人博客',url:'http://www.mywhblog.cn/'},
            {name:'java个人博客',url:'http://www.liqinghe.com/'},
            {name:'百度',url:'http://www.baidu.com/'},
            {name:'尹华锋博客',url:'http://www.yinhuafeng.cn/'},
            {name:'Bob',url:'http://www.bobcoder.cc/'},
            {name:'晓兔个人博客',url:'http://www.loveif.com/'}           
          ]
    }
  }
 }
</script>

<style  scoped>

.linkTag{
    display:inline-block;
    width: 110px;
    height: 35px;
    border: 1px #108ee9 solid;
    line-height: 35px;
    text-align: center;
    color: #108ee9;;
    font-size: 12px;
    transition: all 0.5s;
    overflow: hidden;
    margin-bottom: 10px;
    margin-right: 20px;
    /* margin: 0px 12.5px 10px 12.5px; */
}
.linkTag.linkEven{
  margin-right: 0px;
}
.linkTag:hover{
    border-radius: 30px 0px;
    background: #108ee9;
    color: #fff!important;
}
</style>