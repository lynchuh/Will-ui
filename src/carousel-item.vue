<template>
  <div class="w-carousel-item" 
    :class= "[{'current':index===currentCarousel}]"
    :style="itemStyle"
    v-show="itemStyle"
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
      currentCarousel: 0
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
    changeCurrent(currentCarousel) {
      this.currentCarousel = currentCarousel
    },
    carouselGoing(value, oldValue) {
      let copyStyle = {}
      let multiple
      if (this.index == value) {
        console.log('new',this.index)
        copyStyle['visibility'] = 'visible'
      } else if (this.index == oldValue) {
        console.log('old',this.index)
        copyStyle['visibility'] = 'visible'
      } else {
        console.log('others',this.index)
      }


      switch (value) {
        case 0:
          if (this.index === 1) {
            multiple = 1
          } else if (this.index === 0) {
            multiple = 0
          } else {
            multiple = this.index - this.maxCarousel
          }
          break
        case this.maxCarousel - 1:
          multiple = this.index === 0 ? 1 : this.index - value
          break
        default:
          if (this.index === value + 1) {
            multiple = 1
          } else {
            multiple =
              this.index > value
                ? this.index - value - this.maxCarousel
                : this.index - value
          }
          break
      }
      // console.log('index:',this.index,'倍数', multiple)
      copyStyle.transform = ` translateX(${this.width * multiple}px)`
      this.itemStyle = copyStyle
    }
  },
  watch: {
    currentCarousel(value, oldValue) {
      this.carouselGoing(value, oldValue)
    }
  }
}
</script>
<style lang="scss" scoped>
.w-carousel-item {
  transition: all 0.5s;
  visibility: hidden;
}
</style>
