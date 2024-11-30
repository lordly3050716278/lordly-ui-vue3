# LyForm

## 属性

| 属性 | 类型 | 默认值 | 可选值 |
|--------|----------|-----|-----|
| `form` | `Object` | `-` | `-` |
| `rules` | `Object` | `-` | `-` |
| `labelWidth` | `String` | `'auto'` | `-` |
| `labelPosition` | `String` | `'left'` | `'left'`、`'auto'` |

### rules 结构
```javascript
rules: {
  required: Boolean,
  message: String,
  validator: Function(value): Boolean
}
```

## 插槽

| 插槽 | 说明 |
|-----------|---------------|
| `default` | 自定义默认内容 |

## 使用

```vue
<template>
  <LyForm :form="form" :rules="rules">
    <!-- form code... -->
  </LyForm>
</template>

<script setup>
import { reactive } from 'vue'
import { LyForm } from 'lordly-ui-vue3'

const form = reactive({
  // form code...
})

const rules = reactive({
  // rules code...
})
</script>
```