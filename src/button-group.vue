<template>
  <div class="w-button-group">
    <slot></slot>
  </div>
</template>
<script>
import Button from './button'
export default {
  Component:{
    'w-button': Button
  },
  mounted(){
    for(let node of this.$el.children){
      if(node.nodeName.toLowerCase() !== 'button'){
        console.warn(`w-button-group的子元素应该全是w-button,但你写的是${node.nodeName.toLowerCase()},`)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    $border-radius:4px;
  .w-button-group{
    display:inline-flex;
    vertical-align:middle;
    > .w-button{
      border-radius: 0;
      &:first-child {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
      }
      &:last-child{
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
      &:not(:first-child){
        margin-left: -1px;
      }
      &:hover{
        z-index:1;
      }
    }
  }
</style>

