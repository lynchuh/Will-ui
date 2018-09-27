<template>
  <div class="w-footer">
    <slot></slot>
  </div>
</template>
<script >
export default {
  name:"WillFooter"
  
}
</script>
<style lang="scss" scoped>
$footer-height:60px;
.w-footer{
  display: flex;
  height: $footer-height;
  box-sizing: border-box;
  *{box-sizing: border-box;}
}
</style>
