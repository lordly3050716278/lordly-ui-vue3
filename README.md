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
|   |   ├── button/                   # button 组件
|   |   ├── checkbox/                 # checkbox 组件
|   |   
|   ├── directives/                   # 指令
|   |   └── loading/                  # loading 指令
|   |   
|   ├── styles/                       # 公共样式
|   |   ├── colors.css                # 颜色相关样式
|   |   ├── main.css                  # 样式入口
|   |   ├── scrollbar.css             # 滚动条样式
|   |   ├── sizes.css                 # 尺寸相关样式
|   |   └── time.css                  # 时间相关样式
|   |   
|   ├── utils/                        # 工具
|   |   ├── alert-message/            # alertMessage 提示消息
|   |   └── click-ripple/             # 点击反馈
|   |   
|   └── index.js                      # 入口文件
|
├── package.json                      # 项目配置
└── README.md                         # 说明文档
```