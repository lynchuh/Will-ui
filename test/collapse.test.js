const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from '../src/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('collapse', () => { //BDD 行为驱动测试
  it('存在.', () => {
    expect(Collapse).to.be.ok //falsy值之外
  })
  describe('接受prop', () => {
    Vue.component('w-collapse', Collapse)
    Vue.component('w-collapse-item', CollapseItem)
    it('接受single', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
        <w-collapse single >
          <w-collapse-item title="标题一" :index="1">
            <div>
              内容一
            </div>
          </w-collapse-item>
          <w-collapse-item title="标题二" index=2>
              <div>
                内容二
              </div>
            </w-collapse-item>
            <w-collapse-item title="标题三" index=3>
                <div>
                  内容三
                </div>
              </w-collapse-item>
        </w-collapse>
        `
      const vm = new Vue({
        el: div
      })
      vm.$el.querySelector('[data-index="2"] .title-wrapper').click()
      vm.$nextTick(() => {
        expect(vm.$el.querySelector('[data-index="2"] .content-wrapper')).to.exist
        div.remove()
        vm.$destroy()
        done()
      })
    })
    it('接受selected', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
        <w-collapse single selected="1" >
          <w-collapse-item title="标题一" :index="1">
            <div>
              内容一
            </div>
          </w-collapse-item>
          <w-collapse-item title="标题二" index=2>
              <div>
                内容二
              </div>
            </w-collapse-item>
            <w-collapse-item title="标题三" index=3>
                <div>
                  内容三
                </div>
              </w-collapse-item>
        </w-collapse>
        `
      const vm = new Vue({
        el: div
      })
      vm.$nextTick(() => {
        expect(vm.$el.querySelector('[data-index="1"] .content-wrapper')).to.exist
        div.remove()
        vm.$destroy()
        done()
      })
    })
    it('接受selectedArray', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
        <w-collapse :selected-array="[1,2]" >
          <w-collapse-item title="标题一" :index="1">
            <div>
              内容一
            </div>
          </w-collapse-item>
          <w-collapse-item title="标题二" index=2>
              <div>
                内容二
              </div>
            </w-collapse-item>
            <w-collapse-item title="标题三" index=3>
                <div>
                  内容三
                </div>
              </w-collapse-item>
        </w-collapse>
        `
      const vm = new Vue({
        el: div
      })
      vm.$nextTick(() => {
        expect(vm.$el.querySelector('[data-index="3"] .content-wrapper')).to.not.exist
        div.remove()
        vm.$destroy()
        done()
      })
    })
  })
})