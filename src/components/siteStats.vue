<template>
  <div class="siteStats">
      <p class="center">

        本站运行：<span class="color-red">991</span> 天
        <br/>
        本月更新：<span class="color-red">90</span> 篇
        <br/>
        共有文章： <span class="color-red">671</span> 篇
      </p>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  }
 }
</script>

<style  scoped>
.siteStats{
  width:100%;
    font-size: 16px;
    line-height: 30px;
}
.color-red{
  font-weight: 900;
  color:red;
}
</style>