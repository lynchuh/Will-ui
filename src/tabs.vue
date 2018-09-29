<template>
  <div class="w-tabs" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "WillTabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return (["horizontal", "vertical"].indexOf(value) >= 0);
      }
    }
  },
  data() {
    return {
      eventBus: new Vue(),
      selectedTab: this.selected,
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    this.checkChildren();
    this.$nextTick(() => {
      this.eventBus && this.eventBus.$emit(
        "update:selected",
        this.selectedTab,
        this.getTabPosition()
      );
    });
  },
  created() {
    this.eventBus && this.eventBus.$on("update:selected", item => {
      this.selectedTab = item;
    });
  },
  methods: {
    getTabPosition() {
      let position;
      this.$children.forEach(children => {
        children.$options.name === "WillTabsHead" &&
          children.$children.forEach(tabItem => {
            if (tabItem.label === this.selectedTab){
              let {width, height} = tabItem.$el.getBoundingClientRect()
              position = {left:tabItem.$el.offsetLeft,top:tabItem.$el.offsetTop,width,height};
            }
          });
      });
      return position;
    },
    checkChildren() {
      let checkKey = {
        WillTabsHead: false,
        WillTabsBody: false
      };
      if (this.$children.length === 0) {
        console.warn(
          `w-tabs的子组件应为<w-tabs-head>和<w-tabs-body>,而你并没有插入子组件`
        );
        return;
      } else {
        this.$children.forEach(item => {
          item.$options.name === "WillTabsHead" &&
            Object.assign(checkKey, { WillTabsHead: true });
          item.$options.name === "WillTabsBody" &&
            Object.assign(checkKey, { WillTabsBody: true });
        });
      }
      !checkKey.WillTabsHead && console.warn('w-tabs的子组件应为<w-tabs-head>和<w-tabs-body>,而你缺少了<w-tabs-head>组件')
      !checkKey.WillTabsBody && console.warn('w-tabs的子组件应为<w-tabs-head>和<w-tabs-body>,而你缺少了<w-tabs-body>组件')
    }
  },
  computed: {
    classes() {
      return {
        [`${this.direction}`]: true
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.w-tabs {
  display: flex;
  box-sizing: border-box;
  *{box-sizing: border-box;}
  &.horizontal {
    flex-direction: column;
  }
  &.vertical {
    flex-direction: row;
    height: 100%;
  }
}
</style>
