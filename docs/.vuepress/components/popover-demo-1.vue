<template>
  <div>
    <h3>基本用法</h3>
    <p>基本用法，浮层的大小由内容区域决定。</p>
    <w-popover>
      <div slot="content">
        <h4>这是标题</h4>
        <div>这是一段内容，这是一段内容，这是一段内容，这是一段内容。</div>
      </div>
      <w-button>click 弹出</w-button>
    </w-popover>
  </div>
</template>
<script>
import Popover from '../../../src/popover'
import  Button from '../../../src/button'
export default {
  components:{
    'w-popover':Popover,
    'w-button':Button
  }
}
</script>
<style lang="scss" scoped>
p {
  font-size: 14px;
  color: rgb(68, 66, 66);
}
h4{
  margin:2px 0;
}
</style>


