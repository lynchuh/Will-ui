# Layout - 布局

  :beginner: 用于进行页面级整体布局的容器组件，快速搭建页面的基本结构。

## 组件概述
  - `<w-layout>` : 布局容器，可嵌套`<w-header>`，`<w-sider>`，`<w-content>`，`<w-footer>`或`<w-layout>`本身，可以放在任何父容器中。
  - `<w-header>` : 顶部导航容器，默认高度为60px。建议父级元素为`<w-layout>`
  - `<w-sider>` : 侧边栏容器。建议父级元素为`<w-layout>`
  - `<w-content>` : 内容布局容器，默认高度为120px。建议父级元素为`<w-layout>`
  - `<w-footer>` : 底部布局容器，默认高度为60px。建议父级元素为`<w-layout>`
> 注： 此布局使用flex 布局实现，请查看[can I use](https://caniuse.com/#search=flex)了解浏览器兼容性问题
## 示例 :chestnut:

<ClientOnly>
  <layout-demo-1></layout-demo-1>
</ClientOnly>

## Sider Attribute  :stars:

  - 侧边栏 sider 的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | needhide | 侧边栏是否可隐藏 | Boolean |     | false |

 - 使用 needhide属性隐藏侧边栏

  <ClientOnly>
  <layout-demo-2></layout-demo-2>
</ClientOnly>