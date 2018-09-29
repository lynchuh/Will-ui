# Collapse - 折叠面板
  :beginner: 可以折叠或展开内容区。

## 示例 :chestnut:

  <ClientOnly>
  <collapse-demo-1></collapse-demo-1>
  </ClientOnly>

```vue{1,12}
<w-collapse  :selected.sync="selectedItem" single>
  <w-collapse-item title="标题一" :index="1">
    <div>内容一</div>
  </w-collapse-item>
  <w-collapse-item title="标题二" index=2 >
    <div>内容二</div>
  </w-collapse-item>
  <w-collapse-item title="标题三" index=3 >
    <div>内容三</div>
  </w-collapse-item>
</w-collapse>
{{selectedItem}}
<script>
data(){
  return{
    selectedItem:1
  }
}
</script>
```

  <ClientOnly>
  <collapse-demo-2></collapse-demo-2>
  </ClientOnly>

```vue{1,12}
<w-collapse  :selected-array.sync="selectedArray" >
  <w-collapse-item title="标题一" :index="1">
    <div>内容一</div>
  </w-collapse-item>
  <w-collapse-item title="标题二" index=2 >
    <div>内容二</div>
  </w-collapse-item>
  <w-collapse-item title="标题三" index=3 >
    <div>内容三</div>
  </w-collapse-item>
</w-collapse>
{{selectedArray}}
<script>
data(){
  return{
    selectedArray: [1,3]
  }
}
</script>
```

## Attribute - 属性 :stars:

- `w-ollapse` 的属性说明如下：

  | 参数 | 说明 | 类型 | 举例 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | single | 选择是否只显示单个内容区 | Boolean |  | `false` |
  | selected | 当single为true时，selcted表示单个初始展示面板的`index` | Number | :selected="1" |  |
  | selected-array | 当single为false时，selcted-array表示多个初始展示面板的`index` | Array | :selected-array="[1,2]"|  |

- `w-collapse-item` 的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | title | 表示展示面板的标题 | String |  |   |
  | index | 表示面板的唯一标识 | Number | |  |