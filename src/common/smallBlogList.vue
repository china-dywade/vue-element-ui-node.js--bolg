<template>
  <div class="small">
              <v-card :title="$route.name+prop.title">
                  <div class="text-center">
                    <v-icon type="star"></v-icon>
                    <v-icon type="star"></v-icon>
                    <v-icon type="star"></v-icon>
                    <v-icon type="star"></v-icon>
                    <v-icon type="star"></v-icon>
                  </div>
                  <v-row>
                      <v-col span="24">

                          <router-link v-for="(item , index ) in prop.taglist" :key="index" :to="'/details/'+item.blgid" >
                            <div class="small-border-none">
                                <v-card :style="{ padding: 5,marginBottom:'10px' }"  >
                                  <v-row>
                                      <v-col span="8">
                                          <div class="custom-image">
                                              <img alt="example" width="100%" height="55" :src='item.bimgsrc'/>
                                          </div>                        
                                      </v-col>
                                      <v-col span="16">
                                        <div class="custom-card padding-left-5">
                                            <h2 class="bold b-discript">{{item.btitle}}</h2>
                                                <div class="b-card-bottom margin-top-40">
                                                    <span class="muted margin-right-5">
                                                        {{item.bcreattime}}
                                                    </span>
                                                    <span class="muted margin-right-5">
                                                        {{item.bnumber}}阅读
                                                    </span>

                                                  </div>
                                        </div>
                                    </v-col>
                                  </v-row>
                                </v-card>      
                            </div>
                   
                          </router-link>

                      </v-col>
                  </v-row>
              </v-card> 
  </div>
</template>

<script>
export default {
  name: '',
  props:['prop'],
  data() { 
    return {

    }
  }
 }
</script>

<style>
.small .ant-card-body{
  padding:10px;
}
.small-border-none .ant-card-bordered,.small-border-none .ant-card:not(.ant-card-no-hovering):hover{
  border:none;
}

.b-discript{
    color: #888;
    font-size: 14px;
    line-height: 18px;
	  overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
   -webkit-line-clamp:2;
   -webkit-box-orient: vertical;
}
.muted,.muted .anticon{
  color:#999;
  font-size: 12px;
}
</style>