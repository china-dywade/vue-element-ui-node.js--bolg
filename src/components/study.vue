<template>
  <div class="">
    <comonCompont :contentList="$store.state.bloglist" :rightList="samllHotTag" />
  </div>
</template>

<script>
import comonCompont from '../common/componentCommon'
export default {
  name: '',
  data() { 
    return {
        samllHotTag:{
          title:"频道点击排行",
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
        bloglist:[
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
        ],
    }
  },

  components: {
    comonCompont
  }
 }
</script>

<style  scoped>
</style>