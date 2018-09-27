<template>
  <div>
    <h3>简单用法</h3>
    <p>基础的按钮用法。</p>
    <div class="basicbutton">
      <w-button>默认按钮</w-button>
      <w-button icon="setting">设置</w-button>
      <w-button :loading="true">加载中</w-button>
      <w-button icon="info" @click="loading=!loading" :loading="loading">点击加载</w-button>
      <pre><code>{{basicbutton}}</code></pre>
    </div>
    <h3>图标按钮</h3>
    <p>带图标的无文字按钮可节省空间。</p>
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
      <pre><code>{{iconButton}}</code></pre>
    </div>
    <h3>按钮组</h3>
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
      <pre><code>{{groupButton}}</code></pre>
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
  data() {
    return {
      loading: false,
      iconloading: false,
      basicbutton: `<w-button>默认按钮</w-button>
<w-button icon="setting">设置</w-button>
<w-button :loading="true">加载中</w-button>
<w-button icon="info" @click="loading=!loading" :loading="loading">点击加载</w-button>
/**script**/
export default{
  data(){
    return {
      loading:false
    }
  }
}`,
      groupButton: `<w-button-group class="groupItem">
  <w-button icon="left">上一页</w-button>
  <w-button icon="right" icon-position="right">下一页</w-button>
</w-button-group>
<w-button-group>
  <w-button icon="share"></w-button>
  <w-button icon="edit"></w-button>
  <w-button icon="delete"></w-button>
</w-button-group>`,
      iconButton: `<w-button icon="setting"></w-button>
<w-button icon="info"></w-button>
<w-button icon="loading"></w-button>
<w-button icon="error"></w-button>
<w-button icon="thumbs-up"></w-button>
<w-button icon="download"></w-button>
<w-button icon="wechat"></w-button>
<w-button icon="setting" :loading="loading" @click="loading = !loading"></w-button>

export default{
  data(){
    return {
      loading:false
    }
  }`
    };
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
