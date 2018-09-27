<template>
  <div>
    <h2>简单用法</h2>
    <p><trong>预览</trong></p>
    <g-button>默认按钮</g-button>
    <g-button icon="setting">设置</g-button>
    <g-button :loading="true">加载中</g-button>
    <g-button icon="info" @click="loading=!loading" :loading="loading">点击加载</g-button>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Icon from  '../../../src/icon'
import Button from  '../../../src/button'
import ButtonGroup from '../../../src/button-group'
export default {
  components:{
    'w-icon':Icon,
    'w-button':Button,
    'w-button-group':ButtonGroup,
  },
  data(){
    return{
      loading:false,
      content:`
    <g-button>默认按钮</g-button>
    <g-button icon="setting">设置</g-button>
    <g-button :loading="true">加载中</g-button>
    <g-button icon="info" @click="loading=!loading" :loading="loading">点击加载</g-button>

    //script
    export default{
      data(){
        return {
          loading:false
        }
      }
    }
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>
