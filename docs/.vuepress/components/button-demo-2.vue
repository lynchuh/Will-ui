<template>
  <div>
    <h3>图标按钮</h3>
    <p>带图标的无文字按钮，可节省空间。</p>
    <div class="iconButton">
      <w-button icon="setting"></w-button>
      <w-button icon="info"></w-button>
      <w-button icon="loading"></w-button>
      <w-button icon="error"></w-button>
      <w-button icon="thumbs-up"></w-button>
      <w-button icon="download"></w-button>
      <w-button icon="wechat"></w-button>
      <w-popover position="top" trigger="hover">
        <div slot="content">
          点我出现加载
        </div>
        <w-button icon="setting" :loading="iconloading" @click="iconloading = !iconloading"></w-button>
      </w-popover>
    </div>
      </div>
</template>
<script>
import Button from "../../../src/button";
import ButtonGroup from "../../../src/button-group";
import Popover from "../../../src/popover";
export default {
  components: {
    "w-button": Button,
    "w-button-group": ButtonGroup,
    "w-popover": Popover
  },
  data(){
    return{
      iconloading:false
    }
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
