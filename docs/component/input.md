# Input - 输入框 
:beginner: 通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 示例 :chestnut:
<ClientOnly>
  <input-demo-1></input-demo-1>
</ClientOnly>

```vue
<w-input placeholder="请输入内容"></w-input>
<w-input placeholder="错误提示显示" error="我是错误提醒文字"></w-input>
<w-input placeholder="这是disabled状态" disabled></w-input>
<w-input placeholder="这是readonly状态" readonly></w-input>
```

<ClientOnly>
  <input-demo-2></input-demo-2>
</ClientOnly>

```vue{19,20,21}
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
  <input-demo-3></input-demo-3>
</ClientOnly>

```vue
<w-input placeholder="双向绑定value值" v-model="message"></w-input>
<span>{{message}}</span>
<w-button @click="changeMessage">点我改变</w-button>
<script>
  export default{
    data(){
      return{
        message:'这是初始value值'
      }
    },
    methods:{
      changeMessage(){
        this.message = '这是由button改编的value值'
      }
    }
  }
</script>
```


## Attribute - 属性 :stars:

  - 输入框的属性说明如下：
  
  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | value | 输入框内容 | String |     |     |
  | placeholder | 输入框占位符 | String |  |  |
  | error | 显示输入框错误状态 | String / Boolean |     | false |
  | disabled | 表示禁用状态 | Boolean |     | false |
  | readonly | 表示只读状态 | Boolean |     | false |
