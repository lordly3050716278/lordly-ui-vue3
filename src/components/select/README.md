# LySelect

## 属性

| 属性 | 类型 | 默认值 | 可选值 |
|--------------|----------------------------|--------|------|
| `modelValue` | `String`、`Number`、`Array` | `null` | `-` |
| `placeholder` | `String` | `'select placeholder'` | `-` |
| `options` | `Array` | `[]` | `-` |
| `multiple` | `Boolean` | `false` | `true`、`false` |
| `remote` | `Boolean` | `false` | `true`、`false` |
| `remoteMethod` | `Function` | `null` | `-` |

## 事件

| 事件 | 类型 |
|---------------------|---------------------------|
| `update:modelValue` | `(value: String/Number/Array) => void` |

## 使用

```vue
<template>
  <!-- 默认用法 -->
  <LySelect v-model="selectValue" :options="options"></LySelect>

  <!-- 多选 -->
  <LySelect v-model="selectValue" :options="options" multiple></LySelect>

  <!-- 远程搜索 -->
  <LySelect v-model="selectValue" :options="options" multiple remote :remote-method="remoteFn"></LySelect>
</template>

<script setup>
import { ref } from 'vue'
import { LySelect } from 'lordly-ui'

const selectValue = ref(null)
const options = ref([])
for (let i = 0; i < 500; i++) {
  options.value.push({
    label: `item-${i}`,
    value: i
  })
}

function remoteFn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          label: `item-${Math.random() * 500}`,
          value: Math.random() * 500
        }
      ])
    }, 1000)
  })
}
</script>
```