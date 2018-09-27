module.exports = {
  title: 'Will-UI',
  description: '一个基于Vue 2.x 的前端UI组件库',
  base:'/Will/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/lynchuh/Will' },
    ],
    sidebar: [
      '/',
      {
        title:'入门',
        children:['/install/','/get-started/']
      },
      
      {
        title:'组件',
        children:[
          '/component/button',
          '/component/input',
          '/component/layout',
          '/component/grid',
          '/component/toast',
          '/component/popover',
          '/component/collapse',
          '/component/tabs',
        ]
      }
    ]
  }
}
