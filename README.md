# lordly-ui-vue3
适用于vue3的UI库

## 安装

```shell
npm i lordly-ui-vue3
```

## 使用

```javascript
// 全局引用
// 全局引入的方式不会将 alertMessage 引入仍然需要按需单独引入或者自己配置全局

import LordlyUI from 'lordly-ui-vue3'
app.use(LordlyUI)
```

## 项目结构

```
lordly-ui-vue3/
├── src/                              # 源代码
|   ├── components/                   # 组件
|   |   ├── backdrop/                 # backdrop 组件
|   |   ├── button/                   # button 组件
|   |   ├── checkbox/                 # checkbox 组件
|   |   ├── dialog/                   # dialog 组件
|   |   ├── drawer/                   # drawer 组件
|   |   ├── form/                     # form 组件
|   |   ├── form-item/                # form-item 组件
|   |   ├── icon/                     # icon 组件
|   |   ├── input/                    # input 组件
|   |   ├── scrollbar/                # scrollbar
|   |   └── select/                   # select 组件
|   |   
|   ├── directives/                   # 指令
|   |   └── loading/                  # loading 指令
|   |   
|   ├── utils/                        # 工具
|   |   ├── click-ripple/             # 点击反馈
|   |   └── message/                  # message 提示消息
|   |   
|   └── index.js                      # 入口文件
|
├── package.json                      # 项目配置
└── README.md                         # 说明文档
```