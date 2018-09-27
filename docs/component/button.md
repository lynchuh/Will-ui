 # Button - 按钮
  :beginner:    常用的基础操作按钮
  ## 示例 :chestnut:
  <button-demo-1></button-demo-1>
  ## Attribute - 属性 :stars:
  通过设置 Button 的属性来产生不同的按钮样式

  - 按钮的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | icon | 选择是否使用图标 | String |     |     |
  | icon-position | 选择图标显示位置 | String | left / right | left |
  | loading | 是否显示加载(loading状态与icon不可共存) | Boolean |     | false |

  - 可选图标  
  <icon-demo></icon-demo>

     :mega:    :  Icon 也是一个组件，如需单独引用，只须引入相应组件 Icon ,使用方法如下
    ```
    <!-- 引用一个setting Icon -->
    <w-icon name="setting"></w-icon>
    ```
