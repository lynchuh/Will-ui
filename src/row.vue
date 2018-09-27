<template>
<div class="row-wrapper">
  <div class="w-row" :style="rowStyle">
    <slot></slot>
  </div>
</div>
</template>
<script>
import Col from "./column";
export default {
  name: "WillRow",
  components: {
    "w-col": Col
  },
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  computed: {
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: "-" + gutter / 2 + "px",
        marginRight: "-" + gutter / 2 + "px"
      };
    }
  },
  mounted(){
    this.$children.forEach((vm)=>{
      vm.gutter = this.gutter?this.gutter:vm.gutter
    })
  }
};
</script>
<style lang="scss" scoped>
.row-wrapper{
  box-sizing: border-box;
  *{box-sizing: border-box;}
  overflow: hidden;
  .w-row{
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    min-height: 30px;
  }
}

</style>
