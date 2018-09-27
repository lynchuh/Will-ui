<template>
  <div class="toast-demo-3">
    <h3>自定义关闭按钮</h3>
    <p>自定义关闭按钮的文字信息及回调函数</p>
    <div class="demo">
      <w-button @click="$toast(`你的智商目前为${parseInt(Math.random()*100)}`,{autoClose:false,position:'middle',closeButton:{text:'关闭保智商',callback:()=>{toastMessage='智商终于保住了'}}})">查看智商</w-button>
      <w-button @click="$toast(`你的智商目前为${parseInt(Math.random()*100)}`,{autoClose:false,})">查看智商</w-button>
    </div>
    <div class="message">
    自定义回调结果： {{toastMessage}}
    </div>
    <pre><code>{{content}}</code></pre>
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
      content:`<style>
  .toast-wrapper{
    z-index:20
  }
</style>
<w-button @click="showToast1">查看智商</w-button>
<w-button @click="showToast2">查看智商</w-button>
<script>
import {Toastplugin} from Will
Vue.use(Toastplugin)
export default{
  methods:{
    showToast1(){
      const propData={
        autoClose:false,
        closeButton:{
          text:'关闭保智商',
          callback:()=>{
            this.toastMessage='智商终于保住了~'
          }
        }
      }
      const message = '你的智商目前为'+ parseInt(Math.random()*100)
      this.$toast(message,propData)
    },
    showToast2(){
      const propData={
        autoClose:false
      }
      const message = '你的智商目前为'+ parseInt(Math.random()*100)
      this.$toast(message,propData)
    }
  },
  data(){
    return{
      toastMessage= '智商保不住啦~'
    }
  }
}
< /script>
`,
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
