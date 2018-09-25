import Vue from 'vue'
import Button from './button.vue'
import ButtonGroup from './button-group'

Vue.component('w-button',Button)
Vue.component('w-button-group',ButtonGroup)
new Vue({
  el:'#app',
  data:{
    loading1:false
  }
})