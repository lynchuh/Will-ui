<template>
  <div>
      <div class="demo">
        <w-layout>
            <w-header class="w-header">Header</w-header>
          <w-layout class="w-layout">
            <w-sider needhide class="w-sider">Sider</w-sider>
            <w-content class="w-content">Content</w-content>
          </w-layout>
            <w-footer class="w-footer">Footer</w-footer>
        </w-layout>
        <pre><code>{{demo1}}</code></pre>
      </div>
  </div>
</template>
<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Content from "../../../src/content";
import Sider from "../../../src/sider";
import Footer from "../../../src/footer";

export default {
  components: {
    "w-layout": Layout,
    "w-header": Header,
    "w-content": Content,
    "w-sider": Sider,
    "w-footer": Footer
  },
  data() {
    return {
      demo1: `<w-layout>
  <w-sider needhide >Sider</w-sider>
  <w-layout>
    <w-header>Header</w-header>
    <w-content>Content</w-content>
    <w-footer>Footer</w-footer>
  </w-layout>
</w-layout>`
    };
  }
};
</script>
<style lang="scss" scoped>
.header {
  height: 60px;
}
.demo {
  margin: 16px 0;
}
.w-layout {
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  .w-header {
    background: #f4f1bb;
    height: 60px;
    justify-content: center;
    align-items: center;
  }
  .w-content {
    align-items: center;
    justify-content: center;
    background: #e6ebe0;
  }
  .w-footer {
    justify-content: center;
    align-items: center;
    background: #9bc1bc;
  }
  .w-sider {
    justify-content: center;
    align-items: center;
    background: #36c9c6;
  }
}
</style>


