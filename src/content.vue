<template>
  <div class="w-content">
    <slot></slot>
  </div>
</template>
<script >
export default{
  name:"WillContent",
}
</script>
<style lang="scss" scoped>
  $content-height:120px;
  .w-content{
    display: flex;
    height: $content-height;
    box-sizing: border-box;
    *{box-sizing: border-box}
    flex:1;
  }
</style>
