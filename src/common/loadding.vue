<template>
  <div class="motal-bg">

    <div >
      <v-spin size="large"></v-spin>
    </div>
      
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
.motal-bg{
  position: fixed;
  left:0;
  top:0;
  right:0;
  bottom:0;
  background-color: rgba(0,0,0,.6);
  z-index: 100000;
}
.motal-bg>div{
      position:absolute;
      left:50%;
      top:50%;
      transform:translateX(-50%,-50%);
  }
</style>