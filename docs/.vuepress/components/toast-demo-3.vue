<template>
  <div class="toast-demo-3">
    <h3>3. 支持Html片段</h3>
    <p>默认不支持HTML片段，因为容易受到XSS攻击。但当开启 enableHtml 后，toast接受HTML片段</p>
    <div class="demo">
      <w-button @click="$toast(`<strong style='color:red;'>加粗的提示</strong>`,{enableHtml:true})">支持HTML</w-button>
    </div>
  </div>
</template>
<script>
import Toast from '../../../src/toast'
import Button from '../../../src/button'
import Toastplugin from '../../../src/toastPlugin'
import Vue from 'vue'
Vue.use(Toastplugin)
export default {
  components:{
    'w-button':Button,
  }

}
</script>
<style lang="scss">
  .toast-wrapper{
    z-index:20;
    strong{
      margin-top:0 !important
    }
  }
  .toast-demo-3{

    .message{
      font-size: 14px;
      margin:2em 0;
    }
  }
</style>
