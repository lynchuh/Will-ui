<template>
  <div>
    <h3>3. 按钮组</h3>
    <p>以按钮组的方式出现，常用于多项类似操作。</p>
    <div class="groupButton">
      <w-button-group class="groupItem">
        <w-button icon="left">上一页</w-button>
        <w-button icon="right" icon-position="right">下一页</w-button>
      </w-button-group>
      <w-button-group>
        <w-button icon="share"></w-button>
        <w-button icon="edit"></w-button>
        <w-button icon="delete"></w-button>
      </w-button-group>
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
