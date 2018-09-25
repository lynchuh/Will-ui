
<template>
  <svg class="w-icon" @click="$emit('click')">
    <use :xlink:href="`#i-${name}`" ></use>
  </svg>
</template>
<script>
import * as svg from './iconSvg.js'

export default {
  name:'WillIcon',
  props:{
    name:{}
  }
}
</script>
<style lang="scss" scoped>
  *{box-sizing: border-box}
  .w-icon{
    width: 1em;
    height: 1em;
  }
</style>

