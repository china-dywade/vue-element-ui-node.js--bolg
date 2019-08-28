<template>
  <div class="common-style margin-bottom-10">
          <span class="cur">
             {{ prop.name}}
          </span>
          <div class="margin-top-15">
            <component :is="prop.url"></component>
          </div>
  </div>
</template>

<script>
import siteStats  from '../components/siteStats'
import siteShare  from '../components/siteShare'
import siteOutLink  from '../components/siteOutLink'
import advertising  from '../components/advertising'
export default {
  name: 'commonshare',
  props:['prop'],
  data() { 
    return {

    }
  },
  components: {
    siteStats,siteShare,siteOutLink,advertising
  }
 }
</script>

<style  scoped>
.common-style{
  width: 100%;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
  border-radius: 5px;
  background-color: #fff;
  min-height: 60px;
  padding: 0px 10px 10px 10px;
}

.cur{
  font-size: 12px;
  padding: 3px 15px 4px;
  border-radius: 5px 0;
  color:#fff;
  margin-left: -10px;
  background-color: #108ee9;
}
</style>