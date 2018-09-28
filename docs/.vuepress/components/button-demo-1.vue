<template>
  <div>
    <h3>简单用法</h3>
    <p>基础的按钮用法。</p>
    <div class="basicbutton">
      <w-button>默认按钮</w-button>
      <w-button icon="setting">设置</w-button>
      <w-button :loading="true">加载中</w-button>
      <w-button icon="info" @click="loading=!loading" :loading="loading">点击加载</w-button>
    </div>
  </div>
</template>
<script>
import Button from "../../../src/button";
import ButtonGroup from "../../../src/button-group";
export default {
  components: {
    "w-button": Button,
    "w-button-group": ButtonGroup,
  }
};
</script>
<style lang="scss" scoped>
p {
  font-size: 14px;
  color: rgb(68, 66, 66);
}
.groupItem {
  margin-right: 10px;
}
</style>
