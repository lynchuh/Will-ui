const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'



Vue.config.productionTip = false
Vue.config.devtools = false


describe('Tabs', () => { //BDD 行为驱动测试
  Vue.component('w-tabs', Tabs)
  Vue.component('w-tabs-head', TabsHead)
  Vue.component('w-tabs-body', TabsBody)
  Vue.component('w-tabs-item', TabsItem)
  Vue.component('w-tabs-pane', TabsPane)
  it('存在.', () => {
    expect(Tabs).to.exist
  })
  describe('接受props', () => {
    it('接受 selected 属性', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
      <w-tabs selected="finance">
         <w-tabs-head>
           <w-tabs-item label="woman"> 美女 </w-tabs-item>
           <w-tabs-item label="finance"> 财经 </w-tabs-item>
           <w-tabs-item label="sports"> 体育 </w-tabs-item>
         </w-tabs-head>
         <w-tabs-body>
           <w-tabs-pane name="woman"> 美女相关资讯 </w-tabs-pane>
           <w-tabs-pane name="finance"> 财经相关资讯 </w-tabs-pane>
           <w-tabs-pane name="sports"> 体育相关资讯 </w-tabs-pane>
         </w-tabs-body>
      </w-tabs>
      `
      const vm = new Vue({
          el:div
      })
      vm.$nextTick(() => {
        setTimeout(() => {
          let selected=vm.$el.querySelector('.w-tabs-item[data-label="finance"]')
          expect(selected.classList.contains('active')).to.be.true
          div.remove()
          vm.$destroy()
          done()
        });
      })
    })
    it('接受direction 属性',(done)=>{
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
      <w-tabs selected="finance" direction="vertical">
         <w-tabs-head>
           <w-tabs-item label="woman"> 美女 </w-tabs-item>
           <w-tabs-item label="finance"> 财经 </w-tabs-item>
           <w-tabs-item label="sports"> 体育 </w-tabs-item>
         </w-tabs-head>
         <w-tabs-body>
           <w-tabs-pane name="woman"> 美女相关资讯 </w-tabs-pane>
           <w-tabs-pane name="finance"> 财经相关资讯 </w-tabs-pane>
           <w-tabs-pane name="sports"> 体育相关资讯 </w-tabs-pane>
         </w-tabs-body>
      </w-tabs>
      `
      const vm = new Vue({
          el:div
      })
      vm.$nextTick(()=>{
        const tabHead = vm.$el.querySelector('.w-tabs-head')
        const tabs = vm.$el.querySelector('.w-tabs')
        expect(tabs.classList.contains('vertical')).to.be.true
        expect(tabHead.classList.contains('vertical')).to.be.true
        done()
        div.remove()
        vm.$destroy()
      })

    })
  })
})
