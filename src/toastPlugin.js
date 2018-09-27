import Toast from './toast'
let currentToast = null
export default function (Vue) {
  Vue.prototype.$toast = function (message, propsData) {
    !!currentToast && currentToast.close()
    currentToast = createToast({
      Vue,
      message,
      propsData,
      onClose: () => {
        currentToast = null
      }
    })
  }
}

function createToast({
  Vue,
  message,
  propsData,
  onClose
}) {
  
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor({
    propsData
  })
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}
