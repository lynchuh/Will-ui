<template>
  <div class="w-col" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
import Row from "./row";
let validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys &&
    keys.map(key => {
      if (!(["offset", "span"].indexOf(key) >= 0)) {
        valid = false;
      }
    });
  return valid;
};
export default {
  name: "WillColumn",
  components: {
    "w-row": Row
  },
  props: {
    span: {
      type: [String, Number],
      default: 2
    },
    offset: {
      type: [String, Number],
      default: 0
    },
    ipad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    pc: { type: Object, validator },
    widePc: { type: Object, validator }
  },
  computed: {
    classes() {
      let { offset, span, ipad, narrowPc, pc, widePc } = this;
      let getClass = (classObj, str = "phone-") => {
        let classArray = [];
        classObj &&
          classObj.span &&
          classArray.push(`col-${str}${classObj.span}`);
        classObj &&
          classObj.offset &&
          classArray.push(`col-${str}${classObj.offset}`);
        return classArray;
      };
      return [
        ...getClass({ offset, span }),
        ...getClass(ipad, "ipad-"),
        ...getClass(narrowPc, "narrow-pc-"),
        ...getClass(pc, "pc-"),
        ...getClass(widePc, "wide-pc-")
      ];
    }
  }
};
</script>
<style lang="scss" scoped>
$class-width-prefix: "col-phone-";
$class-offset-prefix: "offset-phone-";

$class-ipad-width-prefix: "col-ipad-";
$class-ipad-offset-prefix: "offset-ipad-";

$class-narrow-pc-width-prefix: "col-narrow-pc-";
$class-narrow-pc-offset-prefix: "offset-narrow-pc-";

$class-pc-width-prefix: "col-pc-";
$class-pc-offset-prefix: "offset-pc-";

$class-wide-pc-width-prefix: "col-wide-pc-";
$class-wide-pc-offset-prefix: "offset-wide-pc-";

.w-col {
  border:1px solid #999;
  min-height: 30px;
  display: flex;
  flex-direction: column;
  background: #ddd;
  transition: all 0.3s;
  @for $n from 1 through 24 {
    &.#{$class-width-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  @for $n from 1 through 24 {
    &.#{$class-offset-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  //ipad
  .w-col {
    transition: all 0.3s;
    border: 1px solid red;
    @for $n from 1 through 24 {
      &.#{$class-ipad-width-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.#{$class-ipad-offset-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
}
@media (min-width: 769px) {
  //narrow-pc
  .w-col {
    transition: all 0.3s;
    border: 1px solid blue;
    @for $n from 1 through 24 {
      &.#{$class-narrow-pc-width-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.#{$class-narrow-pc-offset-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
}
@media (min-width: 993px) {
  //pc
  .w-col {
    transition: all 0.3s;
    border: 1px solid yellow;
    @for $n from 1 through 24 {
      &.#{$class-pc-width-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.#{$class-pc-offset-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
}
@media (min-width: 1200px) {
  //wide-pc
  .w-col {
    transition: all 0.3s;
    border: 1px solid green;
    @for $n from 1 through 24 {
      &.#{$class-wide-pc-width-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.#{$class-wide-pc-offset-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
}
</style>


