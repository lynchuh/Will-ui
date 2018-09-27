<template>
  <div class="w-header">
    <slot></slot>
  </div>
</template>
<script >
export default {
  name:"WillHeader"
}
</script>
<style lang="scss" scoped>
  $header-height:60px;
.w-header{
  height: $header-height;
  box-sizing: border-box;
  display: flex;
  *{box-sizing: border-box;}
}
</style>
