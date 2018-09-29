<template>
  <div>
    <h3>1. 显示单个面板</h3>
    <w-collapse  :selected.sync="selectedItem" single>
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
      <div style="margin:10px 0;font-size:14px;">
        选中的折叠面板 index :{{selectedItem}}
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
      selectedItem: 1 
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

