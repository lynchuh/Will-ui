const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => { //BDD 行为驱动测试
  it('存在.', () => {
    expect(Popover).to.exist
  })
  describe('props', () => {
    Vue.component('w-popover', Popover)
    it('接受position', (done) => {
      const div = document.createElement('div')
      div.innerHTML = `
        <w-popover ref="a" position="left">
          <div slot="content" >popover内容</div>
          <button>点击</button>
        </w-popover>
      `
      document.body.appendChild(div)
      const vm = new Vue({
        el: div
      })
      vm.$el.querySelector('button').click()
      vm.$nextTick(() => {
        const {
          contentElement
        } = vm.$refs.a.$refs
        expect(contentElement.classList.contains('position-left')).to.eq(true)
        div.remove()
        vm.$destroy()
        done()
      })
    })
    it('接受 trigger',(done)=>{
      const div = document.createElement('div')
      div.innerHTML = `
        <w-popover trigger="hover" ref="popover">
          <div slot="content" >popover内容</div>
          <button>点击</button>
        </w-popover>
      `
      document.body.appendChild(div)
      const vm = new Vue({
        el: div
      })
        var event = new Event('mouseenter')
        vm.$el.querySelector('.w-popover').dispatchEvent(event)
        vm.$nextTick(()=>{
            const contentElement = vm.$refs.popover.$refs
            expect(contentElement).to.exist
            done()
            div.remove()
            vm.$destroy()
        })
    })

  })
})
