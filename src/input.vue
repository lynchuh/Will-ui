<template>
  <div class="input-wrapper">
    <input type="text" :value=value :placeholder="placeholder">
    <span class="wraning" v-if="error">

    </span>
  </div>  
</template>
<script>
import Icon from './icon'
export default {
  name:'WillInput',
  components:{
    'w-icon':Icon,
  },
  props:{
    value:{
      type:String
    },
    placeholder:{
      type:String
    },
    error:{
      type:[String,Boolean],
      default:false
    }

  },

}
</script>
<style lang="scss" scoped>
  $height:32px;
  $border-color:#999;
  $border-color-hover: #666;
  $border-radius:4px;
  $font-size:12px;
  $box-shadow-color:rgba(0,0,0,0.2);
  
  *{box-sizing: border-box;}
  .input-wrapper{
    font-size:$font-size;display:inline-block;

    >input{
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding:0 8px;
      font-size:inherit;
    }
  }
</style>
