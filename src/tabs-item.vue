<template>
  <div class="w-tabs-item" :class="classes" @click="onClick" :data-label="label">
    <w-icon v-if="icon" :name="icon" class="icon"></w-icon>
    <slot></slot>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  name: "WillTabsItem",
  components: {
    "w-icon": Icon
  },
  inject: ["eventBus"],
  data() {
    return {
      active: false,
      itemPosition: {}
    };
  },
  props: {
    label: {
      type: [String, Number]
    },
    icon: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeSelected() {
      let {width,height}= this.$el.getBoundingClientRect()
      this.itemPosition = {left:this.$el.offsetLeft,top:this.$el.offsetTop,width,height}
      this.eventBus &&
        this.eventBus.$emit("update:selected", this.label, this.itemPosition);
    },
    onClick() {
      if (!!this.disabled) {
        return;
      }
      this.changeSelected();
      this.$emit("click", this);
    }
  },
  created() {
    this.eventBus &&
      this.eventBus.$on("update:selected", (itemName, itemPosition) => {
        this.active = itemName === this.label ? true : false;
      });
  },
  mounted() {},
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.w-tabs-item {
  $active-color: #409ee1;
  $disable-color: rgba(0, 0, 0, 0.25);
  padding: 0.5em 1em;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  .icon {
    margin-right: 0.3em;
  }
  &.active {
    color: $active-color;
    font-weight: bold;
    .icon {
      fill: $active-color;
    }
  }
  &.disabled {
    color: $disable-color;
    .icon {
      fill: $disable-color;
    }
  }
}
</style>
