<template>
  <div>
    <h3>3. 四种方位选择</h3>
    <p>top bottom left right</p>
    <w-popover trigger="hover">
      <div slot="content">
        <h4>这是标题</h4>
        <div>这是一段内容。</div>
      </div>
      <w-button>hover 向上</w-button>
    </w-popover>
    <w-popover trigger="hover" position="bottom">
      <div slot="content">
        <h4>这是标题</h4>
        <div>这是一段内容。</div>
      </div>
      <w-button >hover 向下</w-button>
    </w-popover>
    <w-popover trigger="hover" position="left">
      <div slot="content">
        <h4>这是标题</h4>
        <div>这是一段内容。</div>
      </div>
      <w-button >hover 向左</w-button>
    </w-popover>
    <w-popover trigger="hover" position="right">
      <div slot="content">
        <h4>这是标题</h4>
        <div>这是一段内容。</div>
      </div>
      <w-button >hover 向右</w-button>
    </w-popover>
  </div>
</template>
<script>
import Popover from "../../../src/popover";
import Button from "../../../src/button";
export default {
  components: {
    "w-popover": Popover,
    "w-button": Button
  }
};
</script>
<style lang="scss" scoped>
p {
  font-size: 14px;
  color: rgb(68, 66, 66);
}
h4 {
  margin: 2px 0;
}
</style>


