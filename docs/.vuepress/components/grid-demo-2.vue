<template>
<div>
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
  <pre><code>{{gutterContent}}</code></pre>
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
  data(){
    return{
    gutterContent:`<w-row>
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
</w-row>`
    }
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
