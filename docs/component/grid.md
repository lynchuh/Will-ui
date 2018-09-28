# grid - 网格系统
  :beginner:  24 网格系统，可迅速渐变地搭建响应式布局（注 :mega: ：这是一个mobile frist Design）
## 组件概述 

Will 网格系统是基于行（row）和列（col）来定义信息区块的外部框架。
- 通过`<w-row>`页面创建水平线上的容器，每一个`<w-row>`嵌套一组`<w-col>`，同时`<w-col>`也可嵌套`<w-row>`。
- 页面的信息内容应当放在`<w-col>`中。
- 每一行平均分为24个格子，表示跨越的比例。一组`<w-col>`可以自由分配这24个格子。
- 如果一个`<w-row>`中的`<w-col>`格子总和超过 24，那么多余的`<w-col>`会另起一行排列。

## 示例  :chestnut:

<ClientOnly>
  <grid-demo-1></grid-demo-1>
</ClientOnly>

```vue
<w-row>
  <w-col span="24">100%</w-col>
</w-row>
<w-row>
  <w-col span="12">50%</w-col>
  <w-col span="12">50%</w-col>
</w-row>
<w-row>
  <w-col span="8">33.3%</w-col>
  <w-col span="8">33.3%</w-col>
  <w-col span="8">33.3%</w-col>
</w-row>
<w-row>
  <w-col span="6">25%</w-col>
  <w-col span="6">25%</w-col>
  <w-col span="6">25%</w-col>
  <w-col span="6">25%</w-col>
</w-row>    
<w-row>
  <w-col span="4">16.7%</w-col>
  <w-col span="4">16.7%</w-col>
  <w-col span="4">16.7%</w-col>
  <w-col span="4">16.7%</w-col>
  <w-col span="4">16.7%</w-col>
  <w-col span="4">16.7%</w-col>
</w-row>    
<w-row>
  <w-col span="3">12.5%</w-col>
  <w-col span="3">12.5%</w-col>
  <w-col span="3">12.5%</w-col>
  <w-col span="3">12.5%</w-col>
  <w-col span="3">12.5%</w-col>
  <w-col span="3">12.5%</w-col>
  <w-col span="3">12.5%</w-col>
  <w-col span="3">12.5%</w-col>
</w-row>
```

<ClientOnly>
  <grid-demo-2></grid-demo-2>
</ClientOnly>

```vue
<w-row>
  <w-col span="4" offset="6">col-6</w-col>
  <w-col span="10" offset="4">col-8</w-col>
</w-row>
<w-row>
  <w-col span="6" >col-6</w-col>
  <w-col span="8" offset="4">col-8</w-col>
</w-row>
<w-row>
  <w-col span="6" offset="3">col-6</w-col>
  <w-col span="8" offset="7">col-8</w-col>
</w-row>
```

<ClientOnly>
  <grid-demo-3></grid-demo-3>
</ClientOnly>

```vue
<w-row gutter="20">
  <w-col span="6" ><div class="col-content">col-6</div></w-col>
  <w-col span="8" ><div class="col-content">col-8</div></w-col>
</w-row>
```

> 注：:mega:  gutter的实现主要使用了`<w-col>`的`padding`属性，因此在实际应用的时候，建议在`<w-col>`里内嵌一个元素，所有CSS样式操作都在该元素上进行。

<ClientOnly>
  <grid-demo-4></grid-demo-4>
</ClientOnly>

```vue
<w-row>
  <w-col 
    offset="5" span="6" 
    :ipad="{offset:2,span:12}" 
    :narrow-pc="{offset:8,span:2}"
    :pc="{offset:6,span:6}"
    :wide-pc="{offset:7,span:7}"
  ><div class="col-content">col-6</div></w-col>
  <w-col 
    offset="5" span="8" 
    :ipad="{offset:8,span:2}" 
    :narrow-pc="{offset:10,span:2}"
    :pc="{offset:6,span:6}"
    :wide-pc="{offset:2,span:7}"
  ><div class="col-content">col-8</div></w-col>
</w-row>
```

## Atttribute - 属性  :stars:

  - `<w-row>` Attribute

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | gutter | 网格间隙 | Number |     | false |


  - `<w-col>` Attribute

  | 参数 | 说明 | 类型 | 举例子 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | span | 网格占据的宽度比例 | Number |     | 2 |
  | offset | 网格左侧偏移的宽度比例 | Number |     |  |
  | ipad | < 577px 响应式网格属性对象 | Object |{offset:2,span:4}|  |
  | narrow-pc | < 769px 响应式网格属性对象 | Object | {offset:2,span:4} |  |
  | pc | < 993px 响应式网格属性对象 | Object | {offset:2,span:4} | |
  | wide-pc | < 1200px 响应式网格属性对象 | Object | {offset:2,span:4} |  |

  > 注 :mega: ：这是一个mobile frist Design，默认span、offset为手机的样式设置。
