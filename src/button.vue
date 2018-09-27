<template>
  <button class="w-button" :class="classes" @click="$emit('click')" >
    <div class="buttonContent"><slot></slot></div>
    <w-icon v-if="icon && !loading" :name="icon " class="icon"></w-icon>
    <w-icon name="loading"  v-if="loading" class="loading icon"></w-icon>
  </button>
</template>
<script>
import Icon from "./icon";
export default {
  name: "WillButton",
  components: {
    "w-icon": Icon
  },
  data(){
    return{
      iconOnly:false
    }
  },
  props: {
    icon: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    }
  },
  mounted(){
    if(!this.$slots.default){
      this.iconOnly = true
    }
  },
  computed:{
    classes(){
      return{
        [`icon-${this.iconPosition}`]:true,
        [`iconOnly`]:this.iconOnly
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
$box-shaodow-color: rgba(0, 0, 0, 0.2);

*{box-sizing: border-box}
.w-button {
  font-size: $font-size;
  line-height: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
    box-shadow: inset 0 1px 3px $box-shaodow-color;
  }
  > .icon {
    height: 1em;
    width: 1em;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: .3em;
    }
    > .buttonContent {
      order: 1;
    }
  }
  &.icon-left {
    > .icon {
      order: 1;
      margin-right: .3em;
    }
    > .buttonContent {
      order: 2;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
  &.iconOnly{
    .icon{
      margin:0
    }
  }
}
</style>


