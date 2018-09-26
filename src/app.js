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
    }
  }
})