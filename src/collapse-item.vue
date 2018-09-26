<template>
  <div class="w-collapse-item" :data-index="index">
    <div class="title-wrapper" @click="toggleStatus" >{{title}}</div>
    <div class="content-wrapper" v-if="open">
      <slot></slot>
    </div>
  </div>  
</template>
<script>
import CollapseItem from './collapse-item'
export default {
  name: "WillCollapseItem",
  components:{
    'w-collapse-item':CollapseItem
  },
  props: {
    title: {
      type: String,
      required: true
    },
    index: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      open: false,
      openArray: []
    };
  },
  inject: ["eventBus"],
  methods: {
    toggleStatus() {
      const { single } = this.$parent.single ? this.$parent : { single:false }
      const openArray = JSON.parse(JSON.stringify(this.openArray));
      switch (single) {
        case true:
          this.eventBus && this.eventBus.$emit("update:openSingleItem", this.index);
          break;
        case false:
          if (this.open) {
            this.emitAddItem(openArray);
          } else {
            this.emitRemoveItem(openArray);
          }
          break;
      }
    },
    emitAddItem(openArray) {
      openArray.includes(parseInt(this.index)) &&
        openArray.splice(openArray.indexOf(parseInt(this.index)), 1);
      this.eventBus && this.eventBus.$emit("update:removeOpenItem", openArray);
    },
    emitRemoveItem(openArray) {
      !openArray.includes(parseInt(this.index)) &&
        openArray.push(parseInt(this.index));
      this.eventBus && this.eventBus.$emit("update:addOpenItem", openArray);
    }
  },
  mounted() {
    const { single } = this.$parent.single ? this.$parent : { single:false }
    switch (single) {
      case true:
        this.eventBus && this.eventBus.$on("update:openSingleItem", activeIndex => {
          this.open = this.index == activeIndex ? true : false;
        });
        break;
      case false:
        this.eventBus && this.eventBus.$on("update:addOpenItem", arr => {
          this.openArray = arr;
          this.open = arr.includes(parseInt(this.index)) ? true : this.open;
        });
        this.eventBus && this.eventBus.$on("update:removeOpenItem", arr => {
          this.openArray = arr;
          this.open = !arr.includes(parseInt(this.index)) ? false : this.open;
        });
        break;
    }
  },
};
</script>
<style lang="scss" scoped>
$default-font-size: 14px;
.w-collapse-item {
  font-size: $default-font-size;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  &:not(:first-child) {
    margin-top: -1px;
  }
  .title-wrapper {
    background: #fafafa;
    padding: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
  }
  .content-wrapper {
    background: white;
    padding: 0.5em 1em;
    color: rgba(0, 0, 0, 0.65);
  }
}
</style>


