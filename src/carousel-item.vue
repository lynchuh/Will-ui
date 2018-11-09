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
    this.eventBus.$on('carouselGoing', this.carouselGoing)
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
        console.log('new',this.index)
        // copyStyle['visibility'] = 'visible'
      } else if (this.index == oldValue) {
        console.log('old',this.index)
        // copyStyle['visibility'] = 'visible'
      } else {
        console.log('others',this.index)
      }

      this.changePosition(value)
      
    },
    x(){
      console.log('transitionend')
    }
  }
}
</script>
<style lang="scss" scoped>
.w-carousel-item {
  transition: all 5s;
}
</style>
