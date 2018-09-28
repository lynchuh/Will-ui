# Popover - 气泡卡片

:beginner: 点击/鼠标移入元素，弹出气泡式的卡片浮层。

  ## 示例 :chestnut:

  <ClientOnly>
  <popover-demo-1></popover-demo-1>
  </ClientOnly>

```vue
<w-popover>
  <div slot="content">
    <h4>这是标题</h4>
    <div>这是一段内容，这是一段内容，这是一段内容，这是一段内容。</div>
  </div>
  <w-button>click 弹出</w-button>
</w-popover>
```

  <ClientOnly>
  <popover-demo-2></popover-demo-2>
  </ClientOnly>

  ```vue
<w-input placeholder="支持事件触发" 
  @change="onChange" 
  @blur="onBlur" 
  @focus="onFocus" 
  @input="onInput"
></w-input>
<script>
  export defalut{
    methods:{
      onChange($event){
        //得到change的event对象
      },
      onBlur($event){
        //得到blur的event对象
      },
      onFocus($event){
        //得到focus的event对象
      },
      onInput(value){
        //得到Input事件触发时的value值
      }
    }
  }
</script>
```


  <ClientOnly>
  <popover-demo-3></popover-demo-3>
  </ClientOnly>

  ```vue
<w-popover trigger="hover">
  <div slot="content">
    <h4>这是标题</h4>
    <div>这是一段内容。</div>
  </div>
  <w-button>hover 向上</w-button>
</w-popover>

<w-popover trigger="hover" position="bottom">
  <div slot="content">
    <h4>这是标题</h4>
    <div>这是一段内容。</div>
  </div>
  <w-button >hover 向下</w-button>
</w-popover>

<w-popover trigger="hover" position="left">
  <div slot="content">
    <h4>这是标题</h4>
    <div>这是一段内容。</div>
  </div>
  <w-button >hover 向左</w-button>
</w-popover>

<w-popover trigger="hover" position="right">
  <div slot="content">
    <h4>这是标题</h4>
    <div>这是一段内容。</div>
  </div>
  <w-button >hover 向右</w-button>
</w-popover>
  ```

  ## Attribute - 属性 :stars:

  - Popover 气泡卡片的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | position | Popover弹出的位置 | String |`top` `bottom` `left` `right`    | `top` |
  | trigger | Popover弹出的触发方式 | String |`click` `hover` | `click` |