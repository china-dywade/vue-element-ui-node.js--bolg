<template>
  <div class="hot-tag">
              <v-card :title="prop.title">
                  <div class="text-center">
                    <v-icon type="star"></v-icon>
                    <v-icon type="star"></v-icon>
                    <v-icon type="star"></v-icon>
                    <v-icon type="star"></v-icon>
                    <v-icon type="star"></v-icon>
                  </div>
                   <span class="padding-right-5 margin-bottom-15" v-for="(item, index) in prop.taglist"  :key="index">
                      <v-button size="large" type="ghost" @click="search(item)">{{item.name}}</v-button>
                   </span>
              </v-card>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  },
  props:['prop'],
  methods: {
    search(ite){
      // 点击跳转 search页
      console.log(ite,'人们标签');
      this.$router.push({ name: 'search', params: { id: ite.name}} );
    }
  }

 }
</script>

<style>
.hot-tag .ant-card-body{
  padding:10px;
}
.padding-right-5{
  display: inline-block;
}
</style>