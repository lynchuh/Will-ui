# Tabs - 标签页

:beginner: 选项卡切换组件，常用于分隔内容上有关联但属于不同类别的数据集合。

  ## 示例 :chestnut:

  <ClientOnly>
  <tabs-demo-1></tabs-demo-1>
  </ClientOnly>

```vue
<w-tabs selected="first-tab" >
  <w-tabs-head>
    <w-tabs-item label="first-tab">Tab 1</w-tabs-item>
    <w-tabs-item label="2">Tab 2</w-tabs-item>
    <w-tabs-item label="third-tab">Tab 3</w-tabs-item>
  </w-tabs-head>
  <w-tabs-body>
    <w-tabs-pane name="first-tab">content of Tab 1</w-tabs-pane>
    <w-tabs-pane name="2">content of Tab 2</w-tabs-pane>
    <w-tabs-pane name="third-tab">content of Tab 3</w-tabs-pane>
  </w-tabs-body>
</w-tabs>
```

  <ClientOnly>
  <tabs-demo-2></tabs-demo-2>
  </ClientOnly>

```vue{4}
<w-tabs selected="first-tab" >
  <w-tabs-head>
    <w-tabs-item label="first-tab">Tab 1</w-tabs-item>
    <w-tabs-item label="2" disabled>Tab 2</w-tabs-item>
    <w-tabs-item label="third-tab">Tab 3</w-tabs-item>
  </w-tabs-head>
  <w-tabs-body>
    <w-tabs-pane name="first-tab">content of Tab 1</w-tabs-pane>
    <w-tabs-pane name="2">content of Tab 2</w-tabs-pane>
    <w-tabs-pane name="third-tab">content of Tab 3</w-tabs-pane>
  </w-tabs-body>
</w-tabs>
```

  <ClientOnly>
  <tabs-demo-3></tabs-demo-3>
  </ClientOnly>

```vue{1}
<w-tabs selected="first-tab" direction="vertical" >
  <w-tabs-head>
    <w-tabs-item label="first-tab">Tab 1</w-tabs-item>
    <w-tabs-item label="2" >Tab 2</w-tabs-item>
    <w-tabs-item label="third-tab">Tab 3</w-tabs-item>
  </w-tabs-head>
  <w-tabs-body>
    <w-tabs-pane name="first-tab">content of Tab 1</w-tabs-pane>
    <w-tabs-pane name="2">content of Tab 2</w-tabs-pane>
    <w-tabs-pane name="third-tab">content of Tab 3</w-tabs-pane>
  </w-tabs-body>
</w-tabs>
```

  <ClientOnly>
  <tabs-demo-4></tabs-demo-4>
  </ClientOnly>

```vue{3,4,5}
<w-tabs selected="first-tab">
  <w-tabs-head>
    <w-tabs-item label="first-tab" icon="setting">Tab 1</w-tabs-item>
    <w-tabs-item label="2" icon="edit">Tab 2</w-tabs-item>
    <w-tabs-item label="third-tab" icon="info">Tab 3</w-tabs-item>
  </w-tabs-head>
  <w-tabs-body>
    <w-tabs-pane name="first-tab">content of Tab 1</w-tabs-pane>
    <w-tabs-pane name="2">content of Tab 2</w-tabs-pane>
    <w-tabs-pane name="third-tab">content of Tab 3</w-tabs-pane>
  </w-tabs-body>
</w-tabs>
```

  <ClientOnly>
  <tabs-demo-5></tabs-demo-5>
  </ClientOnly>

```vue{6,7,8}
<w-tabs selected="first-tab">
  <w-tabs-head>
    <w-tabs-item label="first-tab" >Tab 1</w-tabs-item>
    <w-tabs-item label="2" >Tab 2</w-tabs-item>
    <w-tabs-item label="third-tab">Tab 3</w-tabs-item>
    <div slot="action">
      <w-button>action</w-button>
    </div>
  </w-tabs-head>
  <w-tabs-body>
    <w-tabs-pane name="first-tab">content of Tab 1</w-tabs-pane>
    <w-tabs-pane name="2">content of Tab 2</w-tabs-pane>
    <w-tabs-pane name="third-tab">content of Tab 3</w-tabs-pane>
  </w-tabs-body>
</w-tabs>
```


  ## Attribute - 属性 :stars:

  - `<w-tabs>` 属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | selected | 表示初始选中的tab `label`值(requried 必需项)| String |  |  |
  | direction | 表示tabs的方向（垂直或水平）| String |`horizontal` `vertical` | `horizontal` |

  - `<w-tabs-item>` 属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | label | 表tab的唯一标记，与`<w-tabs-pane>`的`name`属性相对应(requried 必需项)| String |  |  |
  | icon | 是否需要[Icon](./button.html#可选图标)| String | |  |
  | disabled | 是否禁用该`tab-item`| Boolean | |false |

  - `<w-tabs-pane>` 属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | name | 与`<w-tabs-item>`的`label`属性相对应(requried 必需项)| String |  |  |
 