<template>
  <div class="input-wrapper" :class="{error}">
    <input type="text" :value=value :placeholder="placeholder" :disabled="disabled" :readonly="readonly"
    @change="$emit('change',$event)"
    @blur="$emit('blur',$event)"
    @focus="$emit('focus',$event)"
    @input="$emit('input',$event.target.value)"
    >
    <span class="error-wrapper" v-if="error">
      <w-icon name="error"></w-icon>
      <span >{{error}}</span>
    </span>
  </div>  
</template>
<script>
import Icon from "./icon";
export default {
  name: "WillInput",
  components: {
    "w-icon": Icon
  },
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    error: {
      type: [String, Boolean],
      default: false
    },
    disabled: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    }
  }
};
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.2);
$error-color: darkred;
* {
  box-sizing: border-box;
}
.input-wrapper {
  font-size: $font-size;
  display: inline-block;
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border: 1px solid $border-color-hover;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }
    &[disabled],
    &[readonly] {
      border-color: #aaa;
      color: #aaa;
    }
    &[disabled] {
      cursor: not-allowed;
    }
    &[readonly] {
      cursor: default;
    }
  }
  &.error {
    input {
      border: 1px solid $error-color;
      box-shadow: inset 0 1px 3px rgba(225, 0, 0, 0.4);
    }
    .error-wrapper {
      margin-left: 4px;
      vertical-align: middle;
      color: $error-color;
      .w-icon {
        fill: $error-color;
      }
    }
  }
}
</style>
