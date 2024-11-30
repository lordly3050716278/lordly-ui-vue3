# LyForm

## 属性

| 属性 | 类型 | 默认值 | 可选值 |
|--------|----------|-----|-----|
| `prop` | `String` | `-` | `-` |
| `label` | `String` | `-` | `-` |

## 插槽

| 插槽 | 说明 |
|-----------|---------------|
| `default` | 自定义默认内容 |

## 使用

```vue
<template>
  <LyForm :form="form" :rules="rules">
    <LyFormItem prop="email" label="邮箱">
      <LyInput v-model="form.email" />
    </LyFormItem>
  </LyForm>
</template>

<script setup>
import { reactive } from 'vue'
import { LyForm, LyFormItem, LyInput } from 'lordly-ui-vue3'

const form = reactive({
  email: ''
})

const rules = reactive({
  email: {
    required: true,
    message: '请填写正确的邮箱地址',
    validator: val => isValidEmail(val)
  }
})
</script>
```