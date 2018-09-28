# Will-ui

[![Build Status](https://travis-ci.org/lynchuh/Will.svg?branch=master)](https://travis-ci.org/lynchuh/Will)
[![NPM version][npm-image]][npm-url]
[![npm license][license-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/will-ui.svg?style=flat-square
[npm-url]: https://npmjs.org/package/will-ui
[download-url]: https://npmjs.org/package/will-ui
[license-image]: https://img.shields.io/npm/l/will-ui.svg

[点击查看文档](https://lynchuh.github.io/Will-ui/)

Will-ui是一个基于Vue 2.x的前端UI组件库，它提供了 button、input、tabs等常用组件，适合移动端和 PC 端使用。

## 支持环境
- Will-UI基于Vue2.x开发，因此支持到现代浏览器和IE 9 及以上
- Will-UI所有组件均使用flex布局，详情请看[Can I use](https://caniuse.com/#search=flex)

## 注意
- Will-UI 库所有组件盒模型均使用`box-sizing:border-box`。在使用本UI库时，建议保持一致，所有元素开启border-box盒模型：

    `*{box-sizing:border-box}`

## 安装使用
1. 安装will-ui(npm/yarn)

`npm i --save will-ui` or `yarn add will-ui`

2. 引入will-ui

````
//引入Button 组件
    import {Button} from 'will-ui'
    import 'will-ui/dist/index.css'

    export default{
        components:{
            'w-button':Button,
        }
    }
```


## 组件介绍

- button 按钮
- input 输入框
- layout 布局
- grid 网格系统
- toast 提示弹出框
- popover 气泡卡片
- tabs 标签页
- collapse 折叠面板
