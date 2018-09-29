# Toast - 提示弹出框
  :beginner: 用于主动操作后全局展示反馈信息。
## 组件概述
Toast组件的实现应用了Vue的插件，在Vue.prototype中添加了全局方法`$toast`,因此在`Vue.use(Toastplugin)`后即可以采用`$toast`方法。

## 示例 :chestnut:
<ClientOnly>
  <toast-demo-1></toast-demo-1>
</ClientOnly>

```vue
<style>
  .toast-wrapper{
    z-index:20
  }
</style>

<w-button @click="$toast('这是从上方弹出的信息')">上方弹出</w-button>
<w-button @click="$toast('这是从中间弹出的信息',{position:'middle'})">中间弹出</w-button>
<w-button @click="$toast('这是从底部弹出的信息',{position:'bottom'})">下方弹出</w-button>
```

<ClientOnly>
  <toast-demo-2></toast-demo-2>
</ClientOnly>

```vue
<style>
  .toast-wrapper{
    z-index:20
  }
</style>

<w-button @click="$toast('点击右边按钮关闭弹框',
  {autoClose:false,position:'middle'})"
>弹出</w-button>
<w-button @click="$toast('十秒之后再关闭弹框',
  {autoClose:10,position:'middle'})"
>十秒关闭</w-button>
```

<ClientOnly>
  <toast-demo-3></toast-demo-3>
</ClientOnly>

```vue{8,9}
<style>
  .toast-wrapper{
    z-index:20
  }
</style>
<w-button @click="onClickButton">支持HTML</w-button>
<script>
  import {Toastplugin} from Will
  Vue.use(Toastplugin)
  methods:{
    onClickButton(){
      this.$toast("<strong style='color:red;'>加粗的提示</strong>",
      {enableHtml:true})
    }
  }
</script>
```

<ClientOnly>
  <toast-demo-4></toast-demo-4>
</ClientOnly>

```vue{9,10,16,17,18,19,20}
<style>
  .toast-wrapper{
    z-index:20
  }
</style>
<w-button @click="showToast1">查看智商</w-button>
<w-button @click="showToast2">查看智商</w-button>
<script>
import {Toastplugin} from Will
Vue.use(Toastplugin)
export default{
  methods:{
    showToast1(){
      const propData={
        autoClose:false,
        closeButton:{
          text:'关闭保智商',
          callback:()=>{
            this.toastMessage='智商终于保住了~'
          }
        }
      }
      const message = '你的智商目前为'+ parseInt(Math.random()*100)
      this.$toast(message,propData)
    },
    showToast2(){
      const propData={
        autoClose:false
      }
      const message = '你的智商目前为'+ parseInt(Math.random()*100)
      this.$toast(message,propData)
    }
  },
  data(){
    return{
      toastMessage= '智商保不住啦~'
    }
  }
}
</script>
```

## 插件使用方法 :stars:

$toast接口使用方法： `$toast(message,props)`
- message
  - type类型: `String` 
  - 说明: 弹出框toast的文字信息，在开启`enableHtml`属性后可插入HTML片段

- props
  - type类型: `Object`
  - 说明：描述弹出框toast的对象，详细属性/方法（Attribute）如下：

  | 参数 | 说明 | 类型 | 默认值 |
  | ---- |:----:|:----:|:----:|
  | position | 描述toast弹出方位，可选值有:`top` `middle` `botttom` | String | top |
  | autoClose | 选择是否自动关闭或延迟关闭事件 | false,Number | 5 |
  | closeButton | 描述关闭按钮信息，当autoClose为false时，关闭按钮即出现 | Object |看下方详细信息 |
  | enableHtml | toast是否支持HTML片段 | Boolean | false |

  - closeButton 描述了关闭按钮的文字信息及click的回调函数，默认值如下：
```js
{
  text: "关闭",
  callback: toast => {
    toast.close();
  }
}
```
