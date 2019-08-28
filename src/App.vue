<template>
  <div id="app"> 
    <loadding v-if="getLoadding" />
    <div class="blog-content">
       <router-view/>
    </div>
    <foot></foot>    
  </div>
</template>

<script>
import foot  from './common/foot.vue';
import { mapState,mapGetters,mapActions} from 'vuex'
import  loadding from './common/loadding.vue'
export default {
  name: 'App',
  data(){
      return {

      }
  },
  mounted() {
    this.$store.dispatch('cmmitHideLoad');
  },
  computed:{
      ...mapGetters(['getLoadding'])
  },
  components: {
    loadding,foot
  }
}
</script>

<style scoped>
  #app{
    width: 100%;
    min-height: 100%;
    background: #f6f6f6;
    line-height: 1.5;
    color:#555;
  
  }

  .blog-content{
    width: 1100px;
    margin: auto;
  }
</style>
