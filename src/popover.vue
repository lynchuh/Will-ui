<template>
  <div class="w-popover"  >
    <div class="content-wrapper" ref="contentElement" v-if="visitable" :class="classes" >
      <slot name="content" :close="closePopover"></slot>
    </div>
    <div class="trigger-wrapper" ref="triggerElement" >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "WillPopover",
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      visitable: false
    };
  },
  methods: {
    onClick(e) {
      const { target } = e;
      const { triggerElement, contentElement } = this.$refs;
      this.ClickToToggle(target, triggerElement, contentElement);
      this.visitable && this.$nextTick(this.showPopover);
    },
    ClickToToggle(target, triggerElement, contentElement) {
      if (contentElement && contentElement.contains(target)) {
        this.visitable = true;
      } else if (triggerElement && triggerElement.contains(target)) {
        this.visitable = !this.visitable;
      } else {
        this.visitable = false;
      }
    },
    activePopover(e) {
      this.visitable = true;
      this.$nextTick(this.showPopover);
    },
    closePopover(e) {
      this.visitable = false;
      this.trigger === "click" &&
        document.removeEventListener("click", this.onClick);
    },
    showPopover() {
      const { contentElement } = this.$refs;
      contentElement && document.body.appendChild(contentElement);
      let popoverPosition = this.getPopoverPosition(this.$refs);
      contentElement.style.top = `${popoverPosition.top}px`;
      contentElement.style.left = `${popoverPosition.left}px`;
    },
    getPopoverPosition({ contentElement, triggerElement }) {
      const {
        width,
        height,
        top,
        left
      } = triggerElement.getBoundingClientRect();
      const { height: contentHeight } = contentElement.getBoundingClientRect();
      let popoverPosition = {};
      switch (this.position) {
        case "top":
          popoverPosition.top = top + window.scrollY;
          popoverPosition.left = left + window.scrollX;
          break;
        case "bottom":
          popoverPosition.top = top + height + window.scrollY;
          popoverPosition.left = left + window.scrollX;
          break;
        case "left":
          popoverPosition.top =
            top + window.scrollY + (height - contentHeight) / 2;
          popoverPosition.left = left + window.scrollX;
          break;
        case "right":
          popoverPosition.top =
            top + window.scrollY + (height - contentHeight) / 2;
          popoverPosition.left = left + width + window.scrollX;
          break;
      }
      return popoverPosition;
    }
  },
  computed: {
    classes() {
      return {
        [`position-${this.position}`]: true
      };
    }
  },
  destroyed() {
    this.trigger === "click" &&
      document.removeEventListener("click", this.clickToggle);
    this.trigger === "hover" &&
      this.$refs.popover &&
      this.$refs.popover.removeEventListener("mouseenter", this.activePopover);
    this.trigger === "hover" &&
      this.$refs.popover &&
      this.$refs.popover.removeEventListener("mouseleave", this.closePopover);
  },
  mounted() {
    this.trigger === "click" &&
      document.addEventListener("click", this.onClick);
    this.trigger === "hover" &&
      this.$el.addEventListener("mouseenter", this.activePopover);
    this.trigger === "hover" &&
      this.$el.addEventListener("mouseleave", this.closePopover);
  },
  updated() {
    this.trigger === "click" &&
      document.addEventListener("click", this.onClick);
  }
};
</script>
<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
$box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.5);
$popover-font-size: 14px;
$nagative-popover-gutter: -8px;
$popover-gutter: 8px;
$popover-background: white;
.w-popover {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  .trigger-wrapper {
    display: inline-flex;
    align-items: center;
  }
}
.content-wrapper {
  display: inline-block;
  position: absolute;
  background: $popover-background;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  padding: 0.5em 1em;
  font-size: $popover-font-size;
  &::before,
  &::after {
    display: block;
    content: "";
    border: 8px solid transparent;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%); 
    margin-top: $nagative-popover-gutter;
    &::before,
    &::after {
      border-bottom: none;
      top: 100%;
      left: 10px;
    }
    &::before {
      border-top-color: $border-color;
    }
    &::after {
      border-top-color: $popover-background;
      margin-top: -1px;
    }
  }
  &.position-left {
    transform: translateX(-100%); 
    margin-left: $nagative-popover-gutter;
    &::before,
    &::after {
      left: 100%;
      top: 50%;
      margin-top: -6px;
      border-right: none;
    }
    &::before {
      border-left-color: $border-color;
    }
    &::after {
      border-left-color: $popover-background;
      margin-left: -1px;
    }
  }
  &.position-right {
    margin-left: $popover-gutter;
    &::before,
    &::after {
      right: 100%;
      top: 50%;
      margin-top: -6px;
      border-left: none;
    }
    &::before {
      border-right-color: $border-color;
    }
    &::after {
      border-right-color: $popover-background;
      margin-right: -1px;
    }
  }
  &.position-bottom {
    margin-top: $popover-gutter;
    &::before,
    &::after {
      border-top: none;
      bottom: 100%;
    }
    &::before {
      border-bottom-color: $border-color;
    }
    &::after {
      border-bottom-color: $popover-background;
      margin-bottom: -1px;
    }
  }
}
</style>
