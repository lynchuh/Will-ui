<template>
<div class="w-grid-demo">
  <h3>2. 偏移网格</h3>
  <div class="demo">
    <w-row>
      <w-col span="4" offset="6">col-4</w-col>
      <w-col span="10" offset="4">col-10</w-col>
    </w-row>
    <w-row>
      <w-col span="6" >col-6</w-col>
      <w-col span="8" offset="4">col-8</w-col>
    </w-row>
    <w-row>
      <w-col span="6" offset="3">col-6</w-col>
      <w-col span="8" offset="7">col-8</w-col>
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
