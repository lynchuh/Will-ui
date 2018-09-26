
const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from '../src/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('collapse', () => {//BDD 行为驱动测试
    it('存在.', () => {
        expect(Collapse).to.be.ok   //falsy值之外
    })
    describe('接受props',()=>{
      it('接受title属性',()=>{
        const Constructor = Vue.extend(CollapseItem)
        const vm = new Constructor({
          propsData:{
            title:'标题一'
          }
        }).$mount()
        expect(vm.$el.querySelector('.title-wrapper').innerText).to.eq('标题一')
      })
    })
    it('接受index属性',()=>{
      const Constructor = Vue.extend(CollapseItem)
      const vm = new Constructor({
        propsData:{
          index: 1
        }
      }).$mount()
      expect(vm.$el.getAttribute('data-index')).to.eq('1')
    })
})