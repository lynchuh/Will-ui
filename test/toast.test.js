const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {//BDD 行为驱动测试
  it('存在.', () => {
      expect(Toast).to.exist   
  })
  describe('props',()=>{
    it('接受autoClose',(done)=>{
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData:{
          autoClose: false,
        }
      }).$mount(div)
      const vm2 = new Constructor({
        propsData:{
          autoClose: 1
        }
      }).$mount(div)
      setTimeout(()=>{
        expect(document.body.contains(vm.$el)).to.eq(true)
        expect(document.body.contains(vm2.$el)).to.eq(false)
        div.remove()
        vm.$destroy()
        vm2.$destroy()
        done()
      },1500)

    })
    it('接受closeButton',()=>{
      const Constructor= Vue.extend(Toast)
      const callback = sinon.fake()
      const vm = new Constructor({
        propsData:{
          autoClose:false,
          closeButton:{//依赖autoClose
            text:'close',
            callback
          }
        }
      }).$mount()
      let closeBtn = vm.$el.querySelector('.closeTip')
      expect(closeBtn.textContent.trim()).to.eq('close')
      closeBtn.click()
      expect(callback).to.have.been.called
    })
    it('接受enableHtml',()=>{
      const Constructor=Vue.extend(Toast)
      const vm = new Constructor({
        propsData:{
          enableHtml:true
        }
      })
      vm.$slots.default = ['<h1 id="text">123</h1>']
      vm.$mount()
      let closeTip = vm.$el.querySelector('#text')
      expect(closeTip).to.exist
    })
    it('接受position',()=>{
      const Constructor= Vue.extend(Toast)
      const vm = new Constructor({
        propsData:{
          position:'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
  })
})