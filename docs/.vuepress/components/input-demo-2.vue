<template>
  <div>
    <h3>支持Input事件</h3>
    <p>支持Input事件触发：change、blur、focus、input</p>
      <div>
        <w-input placeholder="支持事件触发" ></w-input>
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

