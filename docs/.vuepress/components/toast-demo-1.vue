<template>
  <div>
    <h3>基础用法</h3>
    <p>基础有三个位置选择：top、middle、bottom。默认方位为top</p>
    <div class="demo">
      <w-button @click="$toast('这是从上方弹出的信息')">上方弹出</w-button>
      <w-button @click="$toast('这是从中间弹出的信息',{position:'middle'})">中间弹出</w-button>
      <w-button @click="$toast('这是从底部弹出的信息',{position:'bottom'})">下方弹出</w-button>
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

<w-button @click="$toast('这是从上方弹出的信息')">上方弹出</w-button>
<w-button @click="$toast('这是从中间弹出的信息',{position:'middle'})">中间弹出</w-button>
<w-button @click="$toast('这是从底部弹出的信息',{position:'bottom'})">下方弹出</w-button>`
    }
  }
}
</script>
<style lang="scss">
  .toast-wrapper{
    z-index:20
  }
</style>
