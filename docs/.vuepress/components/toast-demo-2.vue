<template>
  <div>
    <h3>2. 可关闭</h3>
    <p>可以添加关闭按钮，或自主选择关闭时间，默认5秒消失</p>
    <div class="demo">
      <w-button @click="$toast('点击右边按钮关闭弹框',{autoClose:false,position:'middle'})">出现关闭按钮</w-button>
      <w-button @click="$toast('十秒之后再关闭弹框',{autoClose:10,position:'middle'})">十秒关闭</w-button>
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
  }
}
</script>
<style lang="scss">
  .toast-wrapper{
    z-index:20
  }
</style>
