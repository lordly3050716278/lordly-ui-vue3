# LyDrawer

## 属性

| 属性 | 类型 | 默认值 | 可选值 |
|--------------|-----------|---------|-----------------|
| `modelValue` | `Boolean` | `false` | `true`、`false` |
| `direction` | `String` | `'rtl'` | `'ltr'`、`'rtl'`、`'ttb'`、`'btt'` |
| `size` | `String`、`Number` | `'30vw'` | `-` |

## 事件

| 事件 | 类型 |
|---------------------|---------------------------|
| `update:modelValue` | `(modelValue: Boolean) => void` |

## 插槽

| 插槽 | 说明 |
|-----------|---------------|
| `default` | 自定义默认内容 |

## 使用

```vue
<template>
  <LyDrawer v-model="visible"></LyDrawer>
  
  <LyButton @click="click">open drawer</LyButton>
</template>

<script setup>
import { ref } from 'vue'
import { LyDrawer, LyButton } from 'lordly-ui-vue3'

const visible = ref(false)

function click() {
  visible.value = true
}
</script>
```