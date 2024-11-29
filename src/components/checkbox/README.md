# LyCheckbox

## 属性

| 属性 | 类型 | 默认值 | 可选值 |
|--------------|-----------|---------|-------------------------------------------------|
| `modelValue` | `Boolean` | `false` | `true`、`false` |
| `size` | `String` | `'normal'` | `'mini'`、`'small'`、`'normal'`、`'large'`、`'huge'` |

## 事件

| 事件 | 类型 |
|---------------------|----------------------------|
| `update:modelValue` | `(value: Boolean) => void` |

## 插槽

| 插槽 | 说明 |
|-----------|---------------|
| `default` | 自定义默认内容 |

## 使用

```vue
<template>
  <LyCheckbox type="info" size="huge">Huge Button</LyCheckbox>
</template>

<script setup>
import { LyCheckbox } from 'lordly-ui'
</script>
```