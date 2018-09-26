<template>
<div class="toast-wrapper" :class="toastClasses" >
  <div class="toast" >
    <div class="content-wrapper">
      <div class="content" v-if="!enableHtml" >
        <slot></slot>
      </div>
      <div class="content" v-html="$slots.default[0]" v-else ></div>
    </div>
    <div class="close-wrapper" v-if="!autoClose">
  <hr>
    <span class="closeTip" @click="onClickClose">{{closeButton.text}} </span>
    </div>
   
  </div>
</div>
</template>
<script>
export default {
  name: "WillToast",
  props: {
    autoClose: {
      type: [Boolean,Number],
      default: 5
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: toast => {
            toast.close();
          }
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
      },
      default: "top"
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onClickClose() {
      this.close();
      this.closeButton.callback && this.closeButton.callback(this);
    }
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      };
    },
  },
  mounted() {
    if (!!this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoClose * 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
@keyframes slide-up {
  0%{ opacity: 0;transform: translateY(100%)}
  100%{opacity: 1;transform: translateY(0%)}
}
@keyframes slide-down {
  0%{ opacity: 0;transform: translateY(-100%)}
  100%{opacity: 1;transform: translateY(0%)}
}
@keyframes fade-in {
  0%{ opacity: 0;}
  100%{opacity: 1;}
}
.toast-wrapper{
  box-sizing: border-box;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  *{box-sizing:border-box;}
  &.position-top {
    top: 0;
    .toast{
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down .5s;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .toast{
      animation: fade-in .5s;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast{
      animation: slide-up .5s;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}
.toast {
  color: white;
  font-size: $font-size;
  min-height: $toast-min-height;
  background: $toast-bg;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  display: flex;
  justify-content: flex-end;
  .content {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    flex-grow: 1;
    max-width: 250px;
    vertical-align: middle;
    padding: 8px 16px;
    height: 100%;
    
  }
  .close-wrapper {
    display: inline-flex;
    flex-direction: row;
    flex-shrink: 0;
    .closeTip {
      padding: 0 16px;
      line-height: 1.8;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    hr {
      flex-shrink: 0;
      border: none;
      width: 1px;
      background-color: white;
      transform: scaleX(0.4);
    }
  }
}
</style>
