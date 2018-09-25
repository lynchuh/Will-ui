const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/column'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {//BDD 行为驱动测试
  it('存在.', () => {
      expect(Col).to.exist   
  })
  it('接受span属性',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {span:2}
    }).$mount(div)
    expect(vm.$el.classList.contains('col-phone-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  }) 
  it('接受offset属性',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {offset:2}
    }).$mount(div)
    expect(vm.$el.classList.contains('offset-phone-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  }) 
  it('接受ipad属性',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        ipad:{
          offset:2,
          span:2
        }
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('offset-ipad-2')).to.eq(true)
    expect(vm.$el.classList.contains('col-ipad-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  }) 
  it('接受pc属性',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        pc:{
          offset:2,
          span:2
        }
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('offset-pc-2')).to.eq(true)
    expect(vm.$el.classList.contains('col-pc-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  }) 
  it('接受narrowPc属性',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        narrowPc:{
          offset:2,
          span:2
        }
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('offset-narrow-pc-2')).to.eq(true)
    expect(vm.$el.classList.contains('col-narrow-pc-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  }) 
  it('接受widePc属性',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        widePc:{
          offset:2,
          span:2
        }
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('offset-wide-pc-2')).to.eq(true)
    expect(vm.$el.classList.contains('col-wide-pc-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  }) 
})