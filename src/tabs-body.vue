<template>
  <div class="w-tabs-body">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'WillTabsBody',
}
</script>
<style lang="scss" scoped>
  .w-tabs-body{
    flex:1;
    box-sizing: border-box;
    *{box-sizing: border-box;}
  }
</style>

