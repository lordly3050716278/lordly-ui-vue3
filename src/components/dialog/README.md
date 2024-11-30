# LyDialog

## 属性

| 属性 | 类型 | 默认值 | 可选值 |
|--------------|-----------|---------|-----------------|
| `modelValue` | `Boolean` | `false` | `true`、`false` |

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
  <LyDialog v-model="visible"></LyDialog>
  
  <LyButton @click="click">open dialog</LyButton>
</template>

<script setup>
import { ref } from 'vue'
import { LyDialog, LyButton } from 'lordly-ui-vue3'

const visible = ref(false)

function click() {
  visible.value = true
}
</script>
```