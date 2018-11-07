<template>
  <div class="w-carousel-item" 
    :style="itemStyle"
    v-show="isOthers"
   > 
  <slot></slot>
  </div>
</template>
<script>
export default {
  name: "WillCarouselItem",
  props: {
    index: {
      required: true,
      type: [Number, String]
    }
  },
  data() {
    return {
      itemStyle:{
      },
      width:0,
      isOthers:true
    };
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("carouselGoing", this.x);
    this.width = this.$el.clientWidth
  },
  created() {
  },
  methods: {
    x(currentItem, maxItem) {
      this.itemStyle = (currentItem === maxItem -1 && this.index ===0) ? {
        transform: `translateX(${this.width}px)`
      } : {
        transform: `translateX(${this.width *(this.index - currentItem)}px)`
      }
      if(currentItem === 0){

      } else if(currentItem === maxItem -1){
        this.isOthers = (this.index === currentItem || this.index === 0 ) ? true :false
      } else{
        this.isOthers = ( (this.index === currentItem || this.index === 0 ) )
      } 
    }
  }
};
</script>
<style lang="scss" scoped>
.w-carousel-item {
  transition: all 0.5s;

}
</style>
