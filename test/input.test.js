const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {//BDD 行为驱动测试
  it('存在.', () => {
      expect(Input).to.exist   
  })
  describe('props',()=>{
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(()=>{
      vm.$destroy()
    })
    it('接受value',()=>{
      vm = new Constructor({
        propsData:{
          value:'1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.eq('1234')
    })
    it('接受disabled',()=>{
      vm = new Constructor({
        propsData:{
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.eq(true)
      vm.$destroy()
    })
    it('接受readonly',()=>{
      vm = new Constructor({
        propsData:{
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.eq(true)
      vm.$destroy()
    })
    it('接受placeholder',()=>{
      vm = new Constructor({
        propsData:{
          placeholder: '我是placeholder'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.placeholder).to.eq('我是placeholder')
      vm.$destroy()
    })
    it('接受error',()=>{
      vm = new Constructor({
        propsData:{
          error: '你错了'
        }
      }).$mount()
      const useElements = vm.$el.querySelectorAll('use')
      expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-error')
      const spanElement = vm.$el.querySelector('span')
      expect(spanElement.innerText.trim()).to.eq('你错了')
      vm.$destroy()
    })
  })
  describe('事件',()=>{
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(()=>{
      vm.$destroy()
    })

    it('支持change事件',()=>{
      vm=new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('change',callback)
      var event = new Event('change')
      let inputElement= vm.$el.querySelector('input')

      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })
    it('支持input事件',()=>{
      vm=new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('input',callback)
      var event = new Event('input')
      let inputElement= vm.$el.querySelector('input')
      Object.defineProperty(event,'target',{
        value:{value:'hi'},enumerable:true
      })
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith('hi')
    })
    it('支持blur事件',()=>{
      vm=new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('blur',callback)
      var event = new Event('blur')
      let inputElement= vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })
    it('支持focus事件',()=>{
      vm=new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('focus',callback)
      var event = new Event('focus')
      let inputElement= vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
      
    })
  })

})