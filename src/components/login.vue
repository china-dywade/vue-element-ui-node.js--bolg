<template>
  <div class="login-container">
      <div class="motal-ct">

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
.login-container{
  position: fixed;
  left:0;
  top:0;
  right:0;
  bottom: 0;
  background-color: rgba(0,0,0,1);
}

.motal-ct{
  position: absolute;
  width: 600px;
  height: 600px;
  background-color: #fff;
  border-radius: 20px;
  left:50%;
  top:50%;
  transform: translate(-50% , -50%);
}
</style>