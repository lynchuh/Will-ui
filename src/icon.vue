
<template>
  <svg class="g-icon" @click="$emit('click')">
    <use :xlink:href="`#i-${name}`" ></use>
  </svg>
</template>
<script>
import * as svg from './iconSvg.js'

export default {
  name:'GuluIcon',
  props:{
    name:{}
  }
}
</script>
<style lang="scss" scoped>
  .g-icon{
    width: 1em;
    height: 1em;
  }
</style>

