import Vue from 'vue'
import Button from './button.vue'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'




Vue.component('w-input',Input)
Vue.component('w-icon',Icon)
Vue.component('w-button',Button)
Vue.component('w-button-group',ButtonGroup)
new Vue({
  el:'#app',
  data:{
    loading1:false
  }
})