<template>
  <div class="toast-demo-3">
    <h3>自定义关闭按钮</h3>
    <p>自定义关闭按钮的文字信息及回调函数</p>
    <div class="demo">
      <w-button @click="$toast(`你的智商目前为${parseInt(Math.random()*100)}`,{autoClose:false,})">默认关闭</w-button>
      <w-button @click="$toast(`你的智商目前为${parseInt(Math.random()*100)}`,{autoClose:false,position:'middle',closeButton:{text:'关闭保智商',callback:()=>{toastMessage='智商终于保住了'}}})">自定义关闭</w-button>
    </div>
    <div class="message">
    自定义回调结果： {{toastMessage}}
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
    'w-button':Button
  },
  data(){
    return{
    toastMessage:'智商保不住啦~'
    }
  }
}
</script>
<style lang="scss">
  .toast-wrapper{
    z-index:20
  }
  .toast-demo-3{

    .message{
      font-size: 14px;
      margin:2em 0;
    }
  }
</style>
