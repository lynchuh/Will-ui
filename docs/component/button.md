 # Button - 按钮
  :beginner:    常用的基础操作按钮
  ## 示例 :chestnut:
  <ClientOnly>
  <button-demo-1></button-demo-1>
  </ClientOnly>

```vue
<w-button>默认按钮</w-button>
<w-button icon="setting">设置</w-button>
<w-button :loading="true">加载中</w-button>
<w-button icon="info" 
  @click="loading=!loading" 
  :loading="loading"
>点击加载</w-button>
<script>
  export default{
    data(){
      return {
        loading:false
      }
    }
  }
</script>

```

  <ClientOnly>
  <button-demo-2></button-demo-2>
  </ClientOnly>

```vue
<w-button icon="setting"></w-button>
<w-button icon="info"></w-button>
<w-button icon="loading"></w-button>
<w-button icon="error"></w-button>
<w-button icon="thumbs-up"></w-button>
<w-button icon="download"></w-button>
<w-button icon="wechat"></w-button>
<w-button icon="setting" 
  :loading="loading" 
  @click="loading = !loading"
></w-button>

<script>
  export default{
    data(){
      return {
        loading:false
      }
    }
  }
</script>
```

  <ClientOnly>
  <button-demo-3></button-demo-3>
  </ClientOnly>

```vue
<w-button-group class="groupItem">
  <w-button icon="left">上一页</w-button>
  <w-button icon="right" icon-position="right">下一页</w-button>
</w-button-group>
<w-button-group>
  <w-button icon="share"></w-button>
  <w-button icon="edit"></w-button>
  <w-button icon="delete"></w-button>
</w-button-group>
```


  ## Attribute - 属性 :stars:

  通过设置 Button 的属性来产生不同的按钮样式

  - 按钮的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | icon | 选择是否使用图标 | String |     |     |
  | icon-position | 选择图标显示位置 | String | left / right | left |
  | loading | 是否显示加载(loading状态与icon不可共存) | Boolean |     | false |

  - 可选图标  
  
  <ClientOnly>
  <icon-demo></icon-demo>
  </ClientOnly>

  - Icon 组件使用方法：

  ```(html)
  <w-icon name="setting"></w-icon>  //引用一个setting Icon
  ```