<template>
  <div class="w-carousel">
    <button type="button" class="w-carousel-arrow arrow-left" @click="ClickArrow($event,'pre')">
      <w-icon name="left"></w-icon>      
    </button>
    <div class="w-carousel-wrapper">
      <slot></slot>
    </div>
    <button type="button" class="w-carousel-arrow arrow-right" @click="ClickArrow($event,'next')">
      <w-icon name="right"></w-icon>      
    </button>
    <ul>
      <li class="w-indicator" v-if="maxCarousel" v-for= "(item , index) in maxCarousel" :key="item" @click="ClickIndicator($event,index)"></li>
    </ul>
  </div>
</template>
<script>
import Icon from './icon.vue'
import Vue from 'vue'
export default {
  components:{
    'w-icon':Icon
  },
  props:{
    defaultCarousel:{
      default:0,
      type:[Number,String]
    },
  },
  data() {
    return {
      maxCarousel:0,
      currentCarousel:0,
      eventBus:new Vue()
    };
  },
  provide(){
    return {
      eventBus:this.eventBus
      }
  },
  created(){
    this.currentCarousel = this.defaultCarousel  //init currentCarousel
  },
  mounted() {
    this.getMaxCarousel()  
  },
  methods: {
    getMaxCarousel() {
      let num = 0;
      this.$children.map(item => {
        item.$options.name === "WillCarouselItem" && num++;
      });
      this.maxCarousel = num;
    },

    ClickIndicator($event,index){
      console.log(index)
      this.currentCarousel = index
      console.log(this.currentCarousel)
    },
    ClickArrow($event,target){
      if(target === 'pre'){

        this.currentCarousel = this.currentCarousel === 0 ? this.maxCarousel : this.currentCarousel - 1

      }else if(target === 'next'){

        this.currentCarousel = this.currentCarousel === this.maxCarousel ? 0 : this.currentCarousel + 1
        
      }

    }
  },
  watch:{
    currentCarousel(newVal,oldVal){
      console.log(newVal)
      this.eventBus.$emit('carouselGoing',this.currentCarousel,this.maxCarousel)
    }
  }
};
</script>
<style lang="scss" scoped>
  .w-carousel{
    *{box-sizing: border-box}
    // min-height:250px;
    border:1px solid red;
    position:relative;
    .w-carousel-arrow{
      border:none;
      outline: none;
      margin:0;
      padding:.3em;  //去除默认样式
      border-radius: 50%;
      background-color:rgba(31,45,61,.11);
      position: absolute;
      top:50%;
      transform: translateY(-50%);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      z-index:1;
      cursor: pointer;
      svg{
        fill:white;
      }
      &.arrow-left{
        left:.5em;
      }
      &.arrow-right{
        right:.5em;
      }
    }
    .w-carousel-wrapper{
      overflow-x: hidden;
      background:grey;
      min-height:200px;
      .w-carousel-item{
        position:absolute;
        min-width:100%;
      }
    }
    ul{
      padding:0;
      margin:0;
      list-style: none;
      display: flex;
      justify-content: center;
      width:100%;
      position: absolute;
      bottom:0;
      li{
        list-style: none;
        height: 2px;
        width:10px;
        background: white;
        margin:8px 5px;
        cursor:pointer;
      }
    }
  }

</style>
