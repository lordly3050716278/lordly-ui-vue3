# LyInput

## 属性

| 属性 | 类型 | 默认值 | 可选值 |
|--------------|-----------|---------|-------------------|
| `modelValue` | `String` | `''` | `-` |
| `placeholder` | `String` | `'input placeholder'` | `-` |
| `type` | `String` | `'text'` | `'text'`、`'password'` |

## 事件

| 事件 | 类型 |
|---------------------|---------------------------|
| `update:modelValue` | `(value: String) => void` |

## 插槽

| 插槽 | 说明 |
|----------|---------------------------------|
| `prefix` | 输入框前缀插槽，可用于添加前缀图标 |

## 使用

```vue
<template>
  <!-- 默认用法 -->
  <LyInput v-model="inputValue"></LyInput>

  <!-- 密码 -->
  <LyInput v-model="inputValue" type="password"></LyInput>

  <!-- 添加前缀图标 -->
  <LyInput v-model="inputValue" type="password">
    <template #prefix>
        <LyIcon>
            <svg>
                <!-- prefix svg code... -->
            </svg>
        </LyIcon>
    </template>
  </LyInput>
</template>

<script setup>
import { ref } from 'vue'
import { LyInput, LyIcon } from 'lordly-ui'

const inputValue = ref('')
</script>
```