<template>
  <div>
    <h3>2. 同时显示多个面板</h3>
    <w-collapse  :selected-array.sync="selectedArray" >
      <w-collapse-item title="标题一" :index="1">
        <div>
          内容一
        </div>
      </w-collapse-item>
      <w-collapse-item title="标题二" index=2 >
        <div>
          内容二
        </div>
      </w-collapse-item>
      <w-collapse-item title="标题三" index=3 >
        <div>
          内容三
        </div>
      </w-collapse-item>
    </w-collapse>
      <div style="margin:15px 0;font-size:14px;">
        选中的折叠面板 index :{{selectedArray}}
      </div>
  </div>
</template>
<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'
export default {
  components:{
    'w-collapse': Collapse,
    'w-collapse-item':CollapseItem
  },
  data(){
    return{
      selectedArray: [1,3]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

