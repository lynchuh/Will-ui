<template>
  <div>
    <h3>1. 四种Input状态</h3>
    <div class="example">
      <div>
        <p>基础用法</p>
        <w-input placeholder="请输入内容"></w-input>
      </div>
      <div>
        <p>错误提醒状态</p>
        <w-input placeholder="错误提示显示" error="我是错误提醒文字"></w-input>
      </div>
      <div>
        <p>禁用状态</p>
        <w-input placeholder="这是disabled状态" disabled></w-input>
      </div>
      <div>
        <p>只读状态</p>
        <w-input placeholder="这是readonly状态" readonly></w-input>
      </div>
    </div>
    
  </div>
</template>
<script>
import Input from "../../../src/input";
import Button from "../../../src/button";
export default {
  components: {
    "w-input": Input,
    "w-button": Button
  }
};
</script>
<style lang="scss" scoped>
p {
  font-size: 14px;
  color: rgb(68, 66, 66);
  line-height: 16px;
}
.example {
  display: flex;
  flex-wrap: wrap;
  > * {
    width: 50%;
  }
  pre {
    width: 100%;
  }
}
.model-wrapper{
  display: flex;
  flex-direction: column;
  .model{
    margin:6px 0;
    span{
    font-size: 14px;
    }
    .model-input{
      margin-right: 16px;
    }
  }
}
</style>

