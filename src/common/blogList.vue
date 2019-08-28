<template>
  <div class="blg-list">

        <v-row>
            <v-col span="24">

                 <router-link v-for="(item , index ) in prop" :key="index" :to="'/details/'+item.b_id">

                 <v-card :style="{ padding: 5,marginBottom:'15px' }"  >
                    <v-row>
                        <v-col span="8">
                            <div class="custom-image">
                                <img alt="example" width="100%" height="150" :src='item.b_img_src'/>
                            </div>                        
                        </v-col>
                        <v-col span="16">
                          <div class="custom-card padding-left-25">
                              <h2 class="bold"  :title="item.b_title" >{{item.b_title}}</h2>
                              <p class="b-discript"  :title="item.b_discript" >{{item.b_discript}}</p>
                              <div class="b-card-bottom margin-top-40">
                                  <span class="muted margin-right-20">
                                      <v-icon type="user"></v-icon>
                                      {{item.b_operator}}
                                  </span>
                                  <span class="muted margin-right-20">
                                      <v-icon type="calendar"></v-icon>
                                      {{item.b_creat_time}}
                                  </span>
                                  <span class="muted margin-right-20">
                                      <v-icon type="eye-o"></v-icon>
                                      {{item.b_read_number}}阅读
                                  </span>
                                  <span class="muted margin-right-20">
                                      <v-icon type="message"></v-icon>
                                      [{{ item.b_category }}]({{ item.b_type }})
                                  </span>
                              </div>
                          </div>
                      </v-col>
                    </v-row>
                  </v-card>

                    
                  </router-link>

            </v-col>
        </v-row>
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

<style  scoped>
.blg-list{
  width: 100%;
}
.ant-card:not(.ant-card-no-hovering):hover {
  -webkit-box-shadow: 0 1px 1px #fafff8;
  box-shadow: 0 1px 1px #fafff8;
  border-color: #fafff8;
  background-color: #fafff8;
  border-color: #D6E9C6;

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
.b-card-bottom{
  margin-top:60px;
}
.bold{
  font-weight: 900;
}
.muted,.muted .anticon{
  color:#999;
  font-size: 12px;
}

</style>