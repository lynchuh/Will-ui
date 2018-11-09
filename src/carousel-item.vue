<template>
  <div class="w-carousel-item" 
    :class= "{isShow}"
    :style="itemStyle"
    v-show="itemStyle"
    @transitionend = x
   > 
  <slot></slot>
  </div>

</template>
<script>
export default {
  name: 'WillCarouselItem',
  props: {
    index: {
      required: true,
      type: [Number, String]
    }
  },
  data() {
    return {
      itemStyle: null,
      width: 0,
      maxCarousel: 0,
      currentCarousel: 0,
      isShow: false
    }
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('carouselGoing', this.changeCurrent)
  },
  created() {
    this.eventBus.$on('initData', (maxCarousel, currentCarousel, width) => {
      this.maxCarousel = maxCarousel
      this.currentCarousel = currentCarousel
      this.width = width
      this.carouselGoing(this.currentCarousel)
    })
  },
  methods: {
    changeCurrent(currentCarousel){
      this.currentCarousel = currentCarousel
    },
    changePosition(value){
      let copyStyle = {}
      let multiple
      const index = this.index,maxCarousel = this.maxCarousel
      switch (value) {
        case 0:
          if (index === 1) {
            multiple = 1
          } else if (index === 0) {
            multiple = 0
          } else {
            multiple = index - maxCarousel
          }
          break
        case maxCarousel - 1:
          multiple = index === 0 ? 1 : index - value
          break
        default:
          if (index === value + 1) {
            multiple = 1
          } else {
            multiple =
              index > value
                ? index - value - maxCarousel
                : index - value
          }
          break
      }
      // console.log('index:',this.index,'倍数', multiple)
      copyStyle.transform = ` translateX(${this.width * multiple}px)`
      this.itemStyle = copyStyle
    },
    carouselGoing(value, oldValue) {
      if (this.index == value) {
        this.isShow = true
      } else if (this.index == oldValue) {
        this.isShow = true
      } else {
        this.isShow = false
      }
      this.changePosition(value)
    },
    x(){
      console.log('transitionend')
      this.isShow = this.index === this.currentCarousel ? true :false
    }
  },
  watch:{
    currentCarousel(value,oldValue){
      this.carouselGoing(value,oldValue)
    }
  }
}
</script>
<style lang="scss" scoped>
.w-carousel-item {
  transition: all 5s;
  visibility: hidden;
  &.isShow{
    visibility: visible;
  }
}
</style>
