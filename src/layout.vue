<template>
  <div class="w-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script >
import Header from './header'
import Footer from './footer'
import Sider from './sider'
import Content from './content'
export default {
  name:'WillLayout',
  components:{
    'w-header':Header,
    'w-footer':Footer,
    'w-sider':Sider,
    'w-content':Content
  },
  data(){
    return{
      layoutClass:{
        hasSider:false
      }
    }
  },
  mounted(){
    this.$children.forEach((vm)=>{
      if(vm.$options.name === 'WillSider'){
        this.layoutClass.hasSider = true
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  .w-layout{
    box-sizing: border-box;
    display:flex;
    flex-grow: 1;
    flex-direction:column;
    margin:0;
    *{box-sizing: border-box;}
    &.hasSider{
      flex-direction: row;
    }
  }
</style>
