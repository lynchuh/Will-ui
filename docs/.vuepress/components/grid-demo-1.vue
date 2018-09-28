<template>
<div>
  <h3>基础网格</h3>
  <div class="demo">
    <w-row>
      <w-col span="24">100%</w-col>
    </w-row>
    <w-row>
      <w-col span="12">50%</w-col>
      <w-col span="12">50%</w-col>
    </w-row>
    <w-row>
      <w-col span="8">33.3%</w-col>
      <w-col span="8">33.3%</w-col>
      <w-col span="8">33.3%</w-col>
    </w-row>
    <w-row>
      <w-col span="6">25%</w-col>
      <w-col span="6">25%</w-col>
      <w-col span="6">25%</w-col>
      <w-col span="6">25%</w-col>
    </w-row>    
    <w-row>
      <w-col span="4">16.7%</w-col>
      <w-col span="4">16.7%</w-col>
      <w-col span="4">16.7%</w-col>
      <w-col span="4">16.7%</w-col>
      <w-col span="4">16.7%</w-col>
      <w-col span="4">16.7%</w-col>
    </w-row>    
    <w-row>
      <w-col span="3">12.5%</w-col>
      <w-col span="3">12.5%</w-col>
      <w-col span="3">12.5%</w-col>
      <w-col span="3">12.5%</w-col>
      <w-col span="3">12.5%</w-col>
      <w-col span="3">12.5%</w-col>
      <w-col span="3">12.5%</w-col>
      <w-col span="3">12.5%</w-col>
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
  h3{
    margin:26px 0;
  }
  .demo{
    box-shadow: 0 0 46px 0px rgba(0, 0, 0, 0.1);
  }
  .w-col{
    padding:.5em 0;
    background: #9bc1bc;
    border: 1px solid #e6ebe0 ;
    display:flex;
    justify-content: center;
    align-items: center;
    color:#e6ebe0;
    border-radius: 4px;
    font-size: 14px;
  }
  .gutter {
    .w-col{
      background: inherit;
      padding-top:0;
      padding-bottom:0;
      border: none;
      .col-content{
        background: #9bc1bc;
        display: flex;
        align-items: center;
      }
    }
  }
</style>
