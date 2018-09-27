# Toast - 提示弹出框
  :beginner: 用于主动操作后全局展示反馈信息。
## 组件概述
Toast组件的实现应用了Vue的插件，在Vue.prototype中添加了全局方法`$toast`,因此在`Vue.use(Toastplugin)`后即可以采用`$toast`方法。

## 示例 :chestnut:
<ClientOnly>
  <toast-demo-1></toast-demo-1>
</ClientOnly>
<ClientOnly>
  <toast-demo-2></toast-demo-2>
</ClientOnly>
<ClientOnly>
  <toast-demo-3></toast-demo-3>
</ClientOnly>
<ClientOnly>
  <toast-demo-4></toast-demo-4>
</ClientOnly>

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
```
{
  text: "关闭",
  callback: toast => {
    toast.close();
  }
}
```
