# LyIcon

## 插槽

| 插槽 | 说明 |
|-----------|---------------|
| `default` | 图标的 svg 代码 |

## 使用
```vue
<template>
  <!-- 默认使用 -->
  <LyIcon>
    <svg>
        <!-- svg code... -->
    </svg>
  </LyIcon>

  <!-- 自定义图标大小颜色 -->
  <LyIcon style="font-size: 20px;color: #fff;">
    <svg>
        <!-- svg code... -->
    </svg>
  </LyIcon>
</template>

<script setup>
import { LyIcon } from 'lordly-ui'
</script>
```