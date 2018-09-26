<template>
  <div class="w-tabs-head" :class="classes" >
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="action-wrapper">
      <slot name="action" v-if="this.position==='horizontal'"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "WillTabsHead",
  inject: ["eventBus"],
  data() {
    return {
      position: ""
    };
  },
  mounted() {
    this.$parent && this.$parent.$el.classList.forEach(classitem => {
      this.position =
        classitem === "vertical" || classitem === "horizontal" ? classitem : "";
    });
    this.eventBus && this.eventBus.$on("update:selected", (itemName, itemPosition) => {
      let { width, height, left, top, y, x } = itemPosition;
      switch (this.position) {
        case "vertical":
          this.$refs.line.style.height = `${height}px`;
          this.$refs.line.style.marginTop = `${top - x}px`;
          break;
        case "horizontal":
          this.$refs.line.style.width = `${width}px`;
          this.$refs.line.style.marginLeft = `${left - y}px`;
          break;
      }
    });
  },
  computed: {
    classes() {
      return {
        [`${this.position}`]: true
      };
    }
  }
};
</script>
<style lang="scss" scoped>
$tab-height: 40px;
$tab-size: 14px;
$active-color: #409ee1;
$line-height: 2px;
.w-tabs-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  font-size: 14px;
  cursor: pointer;
  .line {
    background: $active-color;
    position: absolute;
    transition: all 0.5s;
  }
  .action-wrapper{
    flex:1;
    display: inline-flex;
    justify-content: flex-end;
    margin-right: 15px;
  }
  &.horizontal {
    border-bottom: $line-height solid #eee;
    height: $tab-height;
    flex-direction: row;
    margin-bottom: 15px;
    .line {
      bottom: -2px;
      height: $line-height;
    }
  }
  &.vertical {
    flex-direction: column;
    border-right: $line-height solid #eee;
    margin-right: 15px;
    > * {
      width: 100%;
    }
    .line {
      right: -2px;
      width: $line-height;
    }
  }
}
</style>
