<template>
  <div class="w-col" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
import Row from './row'
export default {
  name:'WillColumn',
  components:{
    'w-row':Row
  },
  props:{
    span:{
      type:[String,Number],
      default:2,
    },
    offset:{
      type:[String,Number],
      default:0,
    }
  },
  computed:{
    classes(){
      return{
        [`span-${this.span}`]:this.span,
        [`offset-${this.offset}`]:this.offset !== 0 
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .w-col{
    border:1px solid blue;
    min-height: 100px;
    min-width: 40px;
    display: inline-flex;
  }
</style>


