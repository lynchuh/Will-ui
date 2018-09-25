<template>
  <div class="w-col" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
import Row from './row'
let validator=(value)=>{
  let keys=Object.keys(value)
  let valid = true
  keys && keys.map((key)=>{
    if(!(['offset','span'].indexOf(key)>=0)){
      valid = false
    }
  })
  return valid
}
export default {
  name:'WillColumn',
  components:{
    'w-row':Row
  },
  props:{
    span:{
      type:[String,Number],
      default:2,
    },
    offset:{
      type:[String,Number],
      default:0,
    },
    ipad:{type:Object,validator},
    narrowPc:{type:Object,validator},
    pc:{type:Object,validator},
    widePc:{type:Object,validator},
    
  },
  computed:{
    classes(){
      let{offset,span,ipad,narrowPc,pc,widePc}=this
      let getClass=(classObj,str='phone-')=>{
        let classArray=[]
        classObj && classObj.span && classArray.push(`col-${str}${classObj.span}`)
        classObj && classObj.offset && classArray.push(`col-${str}${classObj.offset}`)
        return classArray
      }
      return[
        ...getClass({offset,span}),
        ...getClass(ipad,'ipad-'),
        ...getClass(narrowPc,'narrow-pc-'),
        ...getClass(pc,'pc-'),
        ...getClass(widePc,'wide-pc-'),
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .w-col{
    border:1px solid blue;
    min-height: 100px;
    min-width: 40px;
    display: inline-flex;
  }
</style>


