# LyButton

## 属性

| 属性 | 类型 | 默认值 | 可选值 |
|--------|----------|-------------|--------------------------------------------------|
| `type` | `String` | `'default'` | `'primary'`、`'success'`、`'danger'`、`'warning'`、`'info'` |
| `size` | `String` | `'normal'` | `'mini'`、`'small'`、`'normal'`、`'large'`、`'huge'` |
| `block` | `Boolean` | `false` | `true`、`false` |
| `plain` | `Boolean` | `false` | `true`、`false` |
| `disabled` | `Boolean` | `false` | `true`、`false` |

## 插槽

| 插槽 | 说明 |
|-----------|---------------|
| `default` | 自定义默认内容 |

## 使用
```vue
<template>
  <LyButton type="primary" size="large">Primary Button</LyButton>
  <LyButton type="success" plain>Plain Success Button</LyButton>
  <LyButton type="danger" block>Block Danger Button</LyButton>
  <LyButton type="info" disabled>Disabled Info Button</LyButton>
</template>

<script setup>
import { LyButton } from 'lordly-ui'
</script>
```