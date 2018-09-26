const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'



Vue.config.productionTip = false
Vue.config.devtools = false


describe('TabsItem', () => { //BDD 行为驱动测试
  Vue.component('w-tabs', Tabs)
  Vue.component('w-tabs-head', TabsHead)
  Vue.component('w-tabs-body', TabsBody)
  Vue.component('w-tabs-item', TabsItem)
  Vue.component('w-tabs-pane', TabsPane)
  it('存在.', () => {
    expect(TabsItem).to.exist
  })
  describe('接受props', () => {
    it('接受 disabled 属性', () => {
      const Constructor = Vue.extend(TabsItem)
      const vm = new Constructor({
        propsData:{
          disabled: true
        }
      }).$mount()
      expect(vm.$el.classList.contains('disabled')).to.be.true
      const callback = sinon.fake()
      vm.$on('click',callback)
      vm.$el.click()
      expect(callback).to.have.not.been.called
      vm.$destroy()
    })
    it('接受label属性',()=>{
      const Constructor = Vue.extend(TabsItem)
      const vm = new Constructor({
        propsData:{
          label:'xxx'
        }
      }).$mount()
      expect(vm.$el.getAttribute('data-label')).to.eq('xxx')
      vm.$destroy()
    })
    it('接受icon属性',()=>{
      const Constructor = Vue.extend(TabsItem)
      const vm = new Constructor({
        propsData:{
          icon:'setting'
        }
      }).$mount()
      const Iconelement = vm.$el.querySelector('use')
      expect(Iconelement.getAttribute('xlink:href')).to.eq('#i-setting')
      vm.$destroy()
    })
  })
})
