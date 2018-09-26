import Vue from 'vue'
import Button from './button.vue'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'

import Row from './row'
import Column from './column'

import Layout from './layout'
import Header from './header'
import Content from './content'
import Sider from './sider'
import Footer from './footer'
import Toast from './toast'
import Toastplugin from './toastPlugin'

import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'

import Popover from './popover'




Vue.component('w-popover',Popover)

Vue.component('w-tabs',Tabs)
Vue.component('w-tabs-head',TabsHead)
Vue.component('w-tabs-body',TabsBody)
Vue.component('w-tabs-item',TabsItem)
Vue.component('w-tabs-pane',TabsPane)











Vue.component('w-toast',Toast)
Vue.use(Toastplugin)


Vue.component('w-layout',Layout)
Vue.component('w-header',Header)
Vue.component('w-content',Content)
Vue.component('w-sider',Sider)
Vue.component('w-footer',Footer)


Vue.component('w-col',Column)
Vue.component('w-row',Row)

Vue.component('w-input',Input)
Vue.component('w-icon',Icon)
Vue.component('w-button',Button)
Vue.component('w-button-group',ButtonGroup)
new Vue({
  el:'#app',
  data:{
    loading1:false,
    message:''
  },
  methods:{
    changeValue(e){
      console.log(e)
    },
    changeMessage(){
      this.message="??"
    },
    showToast(position,autoClose){
      const propsData={
        position:position,
        autoClose:autoClose,
        closeButton:{
          text:'我知道了',
          callback: ()=>{
            console.log('用户知道了')
          }
        }
      }
      this.$toast(`你的智商目前为${parseInt(Math.random()*100)}`,propsData)
    },
    showtoptoast(){
      this.showToast('top',2)
    },
    showmiddletoast(){
      this.showToast('middle',false)
    },
    showdowntoast(){
      this.showToast('bottom',8)
    }
  }
})