# v-loading

## 使用

```javascript
// main.js

import { VLoading } from 'lordly-ui-vue3'

app.directive('loading', VLoading)
```

```vue
<template>
    <div v-loading="isLoading"></div>
</template>

<script setup>
import { ref } from 'vue'

const isLoading = ref(false)

setTimeout(() => isLoading.value = true, 3000)
</script>

<style scoped>
    div {
        width: 100px;
        height: 100px;
    }
</style>
```