const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/column'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {//BDD 行为驱动测试
  it('存在.', () => {
      expect(Row).to.exist   
  })
  it('接受 gutter 属性',(done)=>{
    Vue.component('w-row',Row)
    Vue.component('w-col',Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <w-row gutter="20">
        <w-col span="12"></w-col>
        <w-col span="12"></w-col>
      </w-row>
    `
    const vm = new Vue({
      el:div
    })
    vm.$nextTick(()=>{
      const row = vm.$el.querySelector('.w-row')
      const cols=vm.$el.querySelectorAll('.w-col')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })
})
