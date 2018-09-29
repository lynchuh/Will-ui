<template>
<div class="w-grid-demo">
  <h3>响应式布局</h3>
  <div class="demo">
    <w-row>
      <w-col 
      offset="5" span="6" 
      :ipad="{offset:2,span:12}" 
      :narrow-pc="{offset:8,span:2}"
      :pc="{offset:6,span:6}"
      :wide-pc="{offset:7,span:7}"
       ><div class="col-content">col-6</div></w-col>
      <w-col 
      offset="5" span="8" 
      :ipad="{offset:8,span:2}" 
      :narrow-pc="{offset:10,span:2}"
      :pc="{offset:6,span:6}"
      :wide-pc="{offset:2,span:7}"
      ><div class="col-content">col-8</div></w-col>
    </w-row>
  </div>
</div>
</template>
<script>
import Row from '../../../src/row'
import Column from '../../../src/column'
export default {
  components:{
    'w-row':Row,
    'w-col':Column
  }
}
</script>
<style lang="scss" scoped>

</style>
