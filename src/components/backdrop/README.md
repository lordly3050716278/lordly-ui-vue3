# LyBackdrop

## 属性

| 属性 | 类型 | 默认值 | 可选值 |
|--------------|-----------|---------|-------------------|
| `visible` | `Boolean` | `false` | `true`、`false` |

## 事件

| 事件 | 类型 |
|---------------------|---------------------------|
| `click` | `(event: Event) => void` |

## 插槽

| 插槽 | 说明 |
|-----------|---------------|
| `default` | 自定义默认内容 |

## 使用

```vue
<template>
  <LyBackdrop :visible="visible" @click="visible = false"></LyBackdrop>
  
  <LyButton @click="click">open backdrop</LyButton>
</template>

<script setup>
import { ref } from 'vue'
import { LyBackdrop, LyButton } from 'lordly-ui-vue3'

const visible = ref(false)

function click() {
  visible.value = true
}
</script>
```