<template>
  <div class="w-carousel-item"> 

  </div>
</template>
<script>
export default {
  name:"WillCarouselItem",
  props:{
    index:{
      required:true,
      type:[Number,String]
    }
  },
  inject:['eventBus'],
  mounted(){
    this.eventBus.$on('carouselGoing',this.x)
  },
  created(){

  },
  methods :{
    x(currentItem,maxItem){
      switch(currentItem){
        case currentItem === 0:
          
          break;
        case currentItem === maxItem :

          break;
        default :

          break;
      }
      console.log(currentItem === this.index)

    }
  }
}
</script>
<style lang="scss" scoped>

</style>
