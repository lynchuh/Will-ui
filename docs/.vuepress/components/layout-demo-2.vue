<template>
      <div class="demo">
        <w-layout>
          <w-sider class="w-sider">Sider</w-sider>
          <w-layout class="w-layout">
            <w-header class="w-header">Header</w-header>
            <w-content class="w-content">Content</w-content>
            <w-footer class="w-footer">Footer</w-footer>
          </w-layout>
        </w-layout>
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


