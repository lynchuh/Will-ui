<template>
<div class="w-grid-demo">
    <h3>间隙网格</h3>
  <div class="demo gutter">
    <w-row gutter="20">
      <w-col span="6" >col-6</w-col>
      <w-col span="8" >col-8</w-col>
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
  },
  mounted(){
    console.log(this.$el)
  }
}
</script>
<style lang="scss" scoped>

</style>
