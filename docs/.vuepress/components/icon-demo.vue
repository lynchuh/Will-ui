<template>
  <div>
    <ol>
      <li><w-icon name="setting" class="icon"></w-icon><span>setting</span></li>
      <li><w-icon name="share" class="icon"></w-icon><span>share</span></li>
      <li><w-icon name="edit" class="icon"></w-icon><span>edit</span></li>
      <li><w-icon name="wechat" class="icon"></w-icon><span>wechat</span></li>
      <li><w-icon name="user" class="icon"></w-icon><span>user</span></li>
      <li><w-icon name="gift" class="icon"></w-icon><span>gift</span></li>
      <li><w-icon name="siderBtn" class="icon"></w-icon><span>siderBtn</span></li>
      <li><w-icon name="error" class="icon"></w-icon><span>error</span></li>
      <li><w-icon name="info" class="icon"></w-icon><span>info</span></li>
      <li><w-icon name="loading" class="icon"></w-icon><span>loading</span></li>
      <li><w-icon name="left" class="icon"></w-icon><span>left</span></li>
      <li><w-icon name="right" class="icon"></w-icon><span>right</span></li>
      <li><w-icon name="up" class="icon"></w-icon><span>up</span></li>
      <li><w-icon name="down" class="icon"></w-icon><span>down</span></li>
      <li><w-icon name="up" class="icon"></w-icon><span>up</span></li>
      <li><w-icon name="thumbs-up" class="icon"></w-icon><span>thumbs-up</span></li>
      <li><w-icon name="download" class="icon"></w-icon><span>download</span></li>
    </ol>
    
  </div>
</template>
<script>
import Icon from  '../../../src/icon'
export default {
  components:{
    'w-icon':Icon
  }
}
</script>
<style lang="scss" scoped>
ol{
  display: flex;
  flex-wrap: wrap;
  li{
    display: inline-flex;
    justify-content: center;
    padding:.5em 0;
    align-items: center;
    &:not(:last-child){
      padding-right:2em; 
    }
    .icon{
      margin-right: .3em;
    }
  }
}
</style>

