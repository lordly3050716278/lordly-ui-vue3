# LyMessage

## 使用

```javascript
// 通过 alertMessage 函数

import { alertMessage } from 'lordly-ui-vue3'

alertMessage('Hello, world')

alertMessage('Hello, world', 'success')

alertMessage('Hello, world', 'danger', 3000)
```

```javascript
// 通过 LyMessage 实例调用对应方法

import { LyMessage } from 'lordly-ui-vue3'

LyMessage.primary('Hello, world')

LyMessage.info('Hello, world')

LyMessage.error('Hello, world', 3000)
```