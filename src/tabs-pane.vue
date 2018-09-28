<template>
  <div class="w-tabs-pane" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "WillTabsPane",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  props: {
    name: {
      type: [String, Number],
      required:true

    }
  },
  created() {
    this.eventBus.$on("update:selected", itemName => {
      this.active = itemName === this.name ? true : false;
    });
  },
  mounted() {},
  computed: {}
};
</script>
<style lang="scss" scoped>
.w-tabs-pane{
  box-sizing: border-box;
  *{box-sizing: border-box;}
}
</style>

