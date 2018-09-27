<template>
  <transition name="fade">
  <div class="w-sider" v-if="visible">
    <slot></slot>
    <w-icon v-if="needhide" class="siderBtn" name="siderBtn" @click="visible= false"></w-icon>
  </div>
  </transition>
</template>
<script >
import Icon from './icon'
export default {
  name:'WillSider',
  components:{
    'w-icon':Icon
  },
  props:{
    needhide:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      visible:true
    }
  }
}
</script>
<style lang="scss" scoped>

  .w-sider{
    display: flex;
    box-sizing: border-box;
    position:relative;
    width:100px;
    *{box-sizing: border-box;}
    > .siderBtn{
      position:absolute;
      right:10px;
      top:10px;
      cursor: pointer;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-to {
    margin-left: -200px;
  }
</style>
