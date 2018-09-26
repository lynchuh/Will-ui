<template>
  <div class="w-collapse">
    <slot></slot>  
  </div>  
</template>
<script>
import Vue from "vue";
export default {
  name: "WillCollapse",
  data() {
    return{
      eventBus: new Vue
    }
  },
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: [String, Number]
    },
    selectedArray: {
      type: Array
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    switch (this.single) {
      case true:
        this.selected && 
          this.eventBus.$emit("update:openSingleItem", this.selected);
        this.eventBus.$on("update:openSingleItem", activeIndex => {
          this.$emit("update:selected", activeIndex);
        });
        break;
      case false:
        this.selectedArray && this.eventBus.$emit('update:addOpenItem',this.selectedArray)
        this.eventBus.$on('update:addOpenItem',(selectedArray)=>{
          this.$emit('update:selectedArray',selectedArray)
        })
        this.eventBus.$on('update:removeOpenItem',(selectedArray)=>{
          this.$emit('update:selectedArray',selectedArray)
        })
        break
    }
  },
};
</script>
<style lang="scss" scoped>
.w-collapse {
  background-color: #eee;
}
</style>

