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
  <grid-demo></grid-demo>
</ClientOnly>

## Atttribute - 属性  :stars:

  - `<w-row>` Attribute





  - `<w-col>` Attribute