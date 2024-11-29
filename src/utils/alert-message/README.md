# alert-message

## 使用

```javascript
// 通过 alertMessage 函数

import { alertMessage } from 'lordly-ui-vue3'

alertMessage('Hello, world')

alertMessage('Hello, world', 'success')

alertMessage('Hello, world', 'danger', 3000)
```

```javascript
// 通过 AlertMessage 实例调用对应方法

import { AlertMessage } from 'lordly-ui-vue3'

AlertMessage.primary('Hello, world')

AlertMessage.info('Hello, world')

AlertMessage.error('Hello, world', 3000)
```